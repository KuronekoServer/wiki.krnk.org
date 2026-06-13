// @ts-check
/**
 * src/content/docs の i18n 状況を解析する。
 *  - ja(ルート) に対する en / ko の「欠落ページ」「余剰(ドリフト)ページ」
 *  - en / ko に残っている日本語(ひらがな/カタカナ) の量
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DOCS = path.join(ROOT, 'src', 'content', 'docs');

function walk(dir, base = '') {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = base ? `${base}/${e.name}` : e.name;
    if (e.isDirectory()) out.push(...walk(path.join(dir, e.name), rel));
    else if (e.name.endsWith('.md')) out.push(rel);
  }
  return out;
}

/** rel(docs内) -> { locale, page } page は index.md をフォルダ名へ正規化 */
function classify(rel) {
  let segs = rel.replace(/\.md$/, '').split('/');
  let locale = 'ja';
  if (segs[0] === 'en' || segs[0] === 'ko') {
    locale = segs[0];
    segs = segs.slice(1);
  }
  if (segs[segs.length - 1] === 'index') segs = segs.slice(0, -1);
  const page = segs.join('/') || '(home)';
  return { locale, page };
}

const all = walk(DOCS);
const pages = { ja: new Map(), en: new Map(), ko: new Map() };
for (const rel of all) {
  const { locale, page } = classify(rel);
  pages[locale].set(page, rel);
}

const HIRA_KATA = /[぀-ゟ゠-ヿ]/g;
function jpStats(rel) {
  const txt = fs.readFileSync(path.join(DOCS, rel), 'utf8');
  const body = txt.replace(/^---[\s\S]*?---/, '');
  const m = body.match(HIRA_KATA);
  return m ? m.length : 0;
}

for (const loc of ['en', 'ko']) {
  console.log(`\n========== ${loc.toUpperCase()} ==========`);
  const missing = [...pages.ja.keys()].filter((p) => !pages[loc].has(p)).sort();
  const extra = [...pages[loc].keys()].filter((p) => !pages.ja.has(p)).sort();
  console.log(`-- 欠落ページ (ja にあるが ${loc} に無い → 今は ja へフォールバック): ${missing.length}`);
  for (const p of missing) console.log(`   + ${p}`);
  console.log(`-- 余剰/ドリフトページ (${loc} にあるが ja に無い): ${extra.length}`);
  for (const p of extra) console.log(`   ! ${p}  (${pages[loc].get(p)})`);

  const withJa = [];
  for (const [p, rel] of pages[loc]) {
    const n = jpStats(rel);
    if (n > 0) withJa.push({ p, rel, n });
  }
  withJa.sort((a, b) => b.n - a.n);
  console.log(`-- 日本語(かな)が残っているファイル: ${withJa.length}`);
  for (const w of withJa) console.log(`   ${String(w.n).padStart(4)} かな  ${w.rel}`);
}
