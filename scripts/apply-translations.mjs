// @ts-check
/**
 * 翻訳(.translated)を本体へ昇格する。
 *  - scripts/.translate-approved.json に列挙された(検証OKの)相対パス(docs内)のみ昇格
 *  - 非承認の .translated は破棄
 *  - 軽いガード: frontmatter に title があること
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DOCS = path.join(ROOT, 'src', 'content', 'docs');
const APPROVED_FILE = path.join(ROOT, 'scripts', '.translate-approved.json');

const approved = new Set(
  fs.existsSync(APPROVED_FILE) ? JSON.parse(fs.readFileSync(APPROVED_FILE, 'utf8')) : []
);

function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else if (e.name.endsWith('.translated')) out.push(p);
  }
  return out;
}
const relOf = (abs) => path.relative(DOCS, abs).replace(/\\/g, '/');

const stats = { promoted: [], rejected: [], guardFail: [] };

for (const tAbs of walk(DOCS)) {
  const targetAbs = tAbs.replace(/\.translated$/, '');
  const rel = relOf(targetAbs);
  const content = fs.readFileSync(tAbs, 'utf8');

  const discard = (reason, bucket) => {
    fs.rmSync(tAbs, { force: true });
    bucket.push(`${rel}${reason ? '  (' + reason + ')' : ''}`);
  };

  if (!approved.has(rel)) {
    discard('検証で非承認', stats.rejected);
    continue;
  }
  if (!/^---\r?\n[\s\S]*?title:\s*\S[\s\S]*?\r?\n---/.test(content)) {
    discard('frontmatter/title 不正', stats.guardFail);
    continue;
  }

  fs.mkdirSync(path.dirname(targetAbs), { recursive: true });
  fs.writeFileSync(targetAbs, content, 'utf8');
  fs.rmSync(tAbs, { force: true });
  stats.promoted.push(rel);
}

console.log(`✅ 昇格(本体へ反映): ${stats.promoted.length}`);
for (const r of stats.promoted) console.log(`   ✓ ${r}`);
if (stats.guardFail.length) {
  console.log(`\n⚠ ガード不通過で破棄: ${stats.guardFail.length}`);
  for (const r of stats.guardFail) console.log(`   ✗ ${r}`);
}
if (stats.rejected.length) {
  console.log(`\nℹ 非承認で破棄: ${stats.rejected.length}`);
  for (const r of stats.rejected) console.log(`   - ${r}`);
}
