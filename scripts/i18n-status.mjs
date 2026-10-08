// @ts-check
/**
 * src/content/docs の i18n 状況を解析する。
 *  - ja(ルート) に対する各言語の「欠落ページ」「余剰(ドリフト)ページ」
 *  - 各言語に残っている日本語(ひらがな/カタカナ) の量
 *  --check でページの欠落・余剰をエラーにする。かなは音声例などにも含まれるため報告のみ。
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DOCS = path.join(ROOT, "src", "content", "docs");
const LOCALES = ["en", "ko", "zh-hans", "zh-hant"];

/** @param {string} dir @param {string} [base] @returns {string[]} */
function walk(dir, base = "") {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = base ? `${base}/${e.name}` : e.name;
    if (e.isDirectory()) out.push(...walk(path.join(dir, e.name), rel));
    else if (e.name.endsWith(".md")) out.push(rel);
  }
  return out;
}

/** rel(docs内) -> { locale, page } page は index.md をフォルダ名へ正規化
 * @param {string} rel
 */
function classify(rel) {
  let segs = rel.replace(/\.md$/, "").split("/");
  let locale = "ja";
  if (LOCALES.includes(segs[0])) {
    locale = segs[0];
    segs = segs.slice(1);
  }
  if (segs[segs.length - 1] === "index") segs = segs.slice(0, -1);
  const page = segs.join("/") || "(home)";
  return { locale, page };
}

const all = walk(DOCS);
const pages = Object.fromEntries(
  ["ja", ...LOCALES].map((locale) => [locale, new Map()]),
);
for (const rel of all) {
  const { locale, page } = classify(rel);
  pages[locale].set(page, rel);
}

const HIRA_KATA = /[぀-ゟ゠-ヿ]/g;
/** @param {string} rel */
function jpStats(rel) {
  const txt = fs.readFileSync(path.join(DOCS, rel), "utf8");
  const body = txt.replace(/^---[\s\S]*?---/, "");
  const m = body.match(HIRA_KATA);
  return m ? m.length : 0;
}

for (const loc of LOCALES) {
  console.log(`\n========== ${loc.toUpperCase()} ==========`);
  const missing = [...pages.ja.keys()].filter((p) => !pages[loc].has(p)).sort();
  const extra = [...pages[loc].keys()].filter((p) => !pages.ja.has(p)).sort();
  console.log(
    `-- 欠落ページ (ja にあるが ${loc} に無い → 今は ja へフォールバック): ${missing.length}`,
  );
  for (const p of missing) console.log(`   + ${p}`);
  console.log(
    `-- 余剰/ドリフトページ (${loc} にあるが ja に無い): ${extra.length}`,
  );
  for (const p of extra) console.log(`   ! ${p}  (${pages[loc].get(p)})`);
  if (process.argv.includes("--check") && (missing.length || extra.length))
    process.exitCode = 1;

  const withJa = [];
  for (const [p, rel] of pages[loc]) {
    const n = jpStats(rel);
    if (n > 0) withJa.push({ p, rel, n });
  }
  withJa.sort((a, b) => b.n - a.n);
  console.log(`-- 日本語(かな)が残っているファイル: ${withJa.length}`);
  for (const w of withJa)
    console.log(`   ${String(w.n).padStart(4)} かな  ${w.rel}`);
}
