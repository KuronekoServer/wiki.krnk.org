# wiki.krnk.org

KuronekoServer の公式ドキュメント [wiki.krnk.org](https://wiki.krnk.org) のソースです。
[Astro Starlight](https://starlight.astro.build/) で静的サイトを生成し、[BunnyCDN](https://bunny.net?ref=hhdqsy3idp)を通じて配信しています。
文章の訂正・追記・翻訳などは Pull Request をお願いいたします 🙏

---

## コンテンツの構成

記事はすべて **Markdown (`.md`)** で管理しています。

```
src/content/docs/
├─ index.md                  … 日本語 (既定言語・URL は接頭辞なし)
├─ what-is-kuronekoserver.md
├─ services/ …
├─ en/                       … English  (/en/...)
└─ ko/                       … 한국어   (/ko/...)
```

- 既定言語は **日本語**で、`src/content/docs/` 直下がそのまま日本語ページになります。
- `en/` `ko/` に同じ相対パスでファイルを置くと、その言語版になります。
- **未翻訳のページは自動的に日本語へフォールバック**します（ページが無くてもリンク切れになりません）。

### ページの追加・編集
1. 対象言語のフォルダに `.md` を追加（例: `src/content/docs/services/foo.md`）。
2. 先頭の frontmatter に最低限 `title` を書きます。

```markdown
---
title: ページタイトル
description: 任意の説明 (省略可)
---

本文…
```

### 記法メモ（Wiki.js からの変更点）
| 用途 | Wiki.js | Starlight (本リポジトリ) |
| --- | --- | --- |
| 情報 | `> ...` + `{.is-info}` | `:::note` … `:::` |
| 成功 | `{.is-success}` | `:::tip` |
| 注意 | `{.is-warning}` | `:::caution` |
| 警告 | `{.is-danger}` | `:::danger` |
| 図   | ` ```mermaid ` | ` ```mermaid `（そのまま利用可） |

内部リンクはロケール接頭辞つきの絶対パス・末尾スラッシュで書きます
（例: `/services/discordbot/tts-bot/payment/`、英語版は `/en/...`）。

---

## ローカル開発

```bash
npm install
npm run dev       # http://localhost:4321 で確認
npm run build     # dist/ に静的ビルド
npm run preview   # ビルド結果をプレビュー
```

---

## デプロイ

`master` への push で GitHub Actions が自動ビルド & デプロイします。
Bunny 側の初期設定や必要な Secrets は **[DEPLOY.md](DEPLOY.md)** を参照してください。
