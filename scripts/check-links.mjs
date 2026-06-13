// @ts-check
/**
 * src/content/docs 内の内部リンク(/... 形式)が実在ルートを指しているか検証する。
 * Starlight の i18n フォールバック(未翻訳ページは ja の内容で生成される)も考慮する。
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

function classify(rel) {
  let segs = rel.replace(/\.md$/, '').split('/');
  let locale = 'ja';
  if (segs[0] === 'en' || segs[0] === 'ko') {
    locale = segs[0];
    segs = segs.slice(1);
  }
  if (segs[segs.length - 1] === 'index') segs = segs.slice(0, -1);
  return { locale, page: segs.join('/') }; // home は ''
}

const all = walk(DOCS);
const pageSet = { ja: new Set(), en: new Set(), ko: new Set() };
for (const rel of all) {
  const { locale, page } = classify(rel);
  pageSet[locale].add(page);
}

/** ルート文字列が有効か (loc 内に存在 or ja にあってフォールバック) */
function routeValid(loc, page) {
  if (loc === 'ja') return pageSet.ja.has(page);
  return pageSet[loc].has(page) || pageSet.ja.has(page);
}

const broken = [];
let total = 0;
for (const rel of all) {
  const txt = fs.readFileSync(path.join(DOCS, rel), 'utf8');
  const re = /\[[^\]]*\]\((\/[^)\s]*)\)/g;
  let m;
  while ((m = re.exec(txt))) {
    let href = m[1];
    href = href.split('#')[0];
    if (href === '') continue;
    total++;
    const segs = href.replace(/^\/+|\/+$/g, '').split('/').filter(Boolean);
    let loc = 'ja';
    let pageSegs = segs;
    if (segs[0] === 'en' || segs[0] === 'ko') {
      loc = segs[0];
      pageSegs = segs.slice(1);
    }
    const pagePath = pageSegs.join('/');
    if (!routeValid(loc, pagePath)) {
      broken.push({ from: rel, href: m[1] });
    }
  }
}

console.log(`内部リンク総数(絶対パス): ${total}`);
console.log(`リンク切れ: ${broken.length}`);
for (const b of broken) console.log(`  ✗ [${b.from}] -> ${b.href}`);
process.exit(broken.length ? 1 : 0);
