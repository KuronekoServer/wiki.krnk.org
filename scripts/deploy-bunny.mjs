// @ts-check
/**
 * dist/ を Bunny Storage へ同期し、Pull Zone のキャッシュをパージするデプロイスクリプト。
 *
 * 必要な環境変数:
 *   BUNNY_STORAGE_ZONE      (必須) Storage Zone 名
 *   BUNNY_STORAGE_PASSWORD  (必須) Storage Zone のパスワード (Read/Write)
 *   BUNNY_STORAGE_HOST      (任意) 例: storage.bunnycdn.com(既定), sg.storage.bunnycdn.com など
 *   BUNNY_PULLZONE_ID       (任意) 指定するとデプロイ後にキャッシュをパージ
 *   BUNNY_API_KEY           (任意) アカウント API キー (パージ用)
 *
 * 使い方: node scripts/deploy-bunny.mjs [--dry-run]
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const DRY = process.argv.includes('--dry-run');

const HOST = process.env.BUNNY_STORAGE_HOST || 'storage.bunnycdn.com';
const ZONE = req('BUNNY_STORAGE_ZONE');
const PASS = req('BUNNY_STORAGE_PASSWORD');
const PULLZONE = process.env.BUNNY_PULLZONE_ID;
const API_KEY = process.env.BUNNY_API_KEY;
const BASE = `https://${HOST}/${ZONE}/`;

function req(name) {
  const v = process.env[name];
  if (!v && !DRY) {
    console.error(`✗ 環境変数 ${name} が未設定です`);
    process.exit(1);
  }
  return v || '';
}

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
  '.pf_meta': 'application/octet-stream',
  '.pagefind': 'application/octet-stream',
};
const mime = (p) => MIME[path.extname(p).toLowerCase()] || 'application/octet-stream';

/** dist/ を再帰走査して {abs, rel(posix)} を返す */
async function walk(dir, baseRel = '') {
  const out = [];
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const abs = path.join(dir, e.name);
    const rel = baseRel ? `${baseRel}/${e.name}` : e.name;
    if (e.isDirectory()) out.push(...(await walk(abs, rel)));
    else if (e.isFile()) out.push({ abs, rel });
  }
  return out;
}

/** Bunny Storage を再帰リスト (相対パスの配列) */
async function listRemote(prefix = '') {
  const res = await fetch(BASE + prefix, { headers: { AccessKey: PASS, Accept: 'application/json' } });
  if (res.status === 404) return [];
  if (!res.ok) throw new Error(`LIST ${prefix} -> ${res.status} ${res.statusText}`);
  const items = await res.json();
  const files = [];
  for (const it of items) {
    const p = prefix + it.ObjectName;
    if (it.IsDirectory) files.push(...(await listRemote(p + '/')));
    else files.push(p);
  }
  return files;
}

async function upload(file) {
  const body = await fs.readFile(file.abs);
  const res = await fetch(BASE + file.rel, {
    method: 'PUT',
    headers: { AccessKey: PASS, 'Content-Type': mime(file.rel) },
    body,
  });
  if (!res.ok) throw new Error(`PUT ${file.rel} -> ${res.status} ${res.statusText}`);
}

async function remove(rel) {
  const res = await fetch(BASE + rel, { method: 'DELETE', headers: { AccessKey: PASS } });
  if (!res.ok && res.status !== 404) throw new Error(`DELETE ${rel} -> ${res.status} ${res.statusText}`);
}

/** 並列実行プール */
async function pool(items, size, fn) {
  let i = 0;
  let done = 0;
  const total = items.length;
  const workers = Array.from({ length: Math.min(size, total) }, async () => {
    while (i < total) {
      const idx = i++;
      await fn(items[idx]);
      done++;
      if (done % 25 === 0 || done === total) process.stdout.write(`\r  ...${done}/${total}`);
    }
  });
  await Promise.all(workers);
  if (total) process.stdout.write('\n');
}

async function purge() {
  if (!PULLZONE || !API_KEY) {
    console.log('ℹ BUNNY_PULLZONE_ID / BUNNY_API_KEY 未設定のためキャッシュパージはスキップ');
    return;
  }
  const res = await fetch(`https://api.bunny.net/pullzone/${PULLZONE}/purgeCache`, {
    method: 'POST',
    headers: { AccessKey: API_KEY },
  });
  if (!res.ok) throw new Error(`PURGE -> ${res.status} ${res.statusText}`);
  console.log('🧹 Pull Zone のキャッシュをパージしました');
}

async function main() {
  try {
    await fs.access(path.join(DIST, 'index.html'));
  } catch {
    console.error('✗ dist/ が見つかりません。先に `npm run build` を実行してください。');
    process.exit(1);
  }

  const local = await walk(DIST);
  console.log(`📦 ローカル: ${local.length} ファイル`);

  if (DRY) {
    console.log('— dry-run のため実際の通信は行いません —');
    for (const f of local.slice(0, 10)) console.log(`  PUT ${f.rel} (${mime(f.rel)})`);
    if (local.length > 10) console.log(`  ... 他 ${local.length - 10} 件`);
    return;
  }

  console.log('🔎 リモート一覧を取得中...');
  const remote = await listRemote();
  const localSet = new Set(local.map((f) => f.rel));
  const stale = remote.filter((r) => !localSet.has(r));

  console.log(`⬆ アップロード (${local.length} 件)`);
  await pool(local, 12, upload);

  if (stale.length) {
    console.log(`🗑 不要ファイル削除 (${stale.length} 件)`);
    await pool(stale, 12, remove);
  }

  await purge();
  console.log('✅ デプロイ完了');
}

main().catch((err) => {
  console.error('\n✗ デプロイ失敗:', err.message);
  process.exit(1);
});
