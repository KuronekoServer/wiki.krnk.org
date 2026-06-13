# デプロイ手順 (Bunny Storage + Bunny CDN)

このサイトは Astro Starlight で静的ビルドし、**Bunny Storage** にアップロードして
**Bunny CDN (Pull Zone)** 経由で `wiki.krnk.org` として公開します。
`master` ブランチへの push で GitHub Actions が自動デプロイします。

```
GitHub (master push)
  └─ GitHub Actions: npm ci → npm run build → npm run deploy
       └─ Bunny Storage Zone  ←(mirror)→  Bunny Pull Zone  →  wiki.krnk.org
```

---

## 1. Bunny 側の初期設定（最初の1回だけ）

### 1-1. Storage Zone を作成
1. Bunny ダッシュボード → **Storage** → **Add Storage Zone**
2. 任意のゾーン名（例: `krnk-wiki`）を入力。Main Storage Region は利用者に近い場所
   （日本向けなら **Singapore (SG)** など）を選択。
3. 作成後、**FTP & API Access** ページで **Password**（Read/Write キー）を控える。
   → これが `BUNNY_STORAGE_PASSWORD`、ゾーン名が `BUNNY_STORAGE_ZONE`。

### 1-2. Pull Zone を作成して Storage に接続
1. **CDN** → **Add Pull Zone**
2. **Origin Type** に **Storage Zone** を選び、1-1 のゾーンを指定。
3. 作成後の `xxxx.b-cdn.net` が CDN の配信ホスト。Pull Zone の **ID** を控える
   → `BUNNY_PULLZONE_ID`（デプロイ後のキャッシュパージに使用）。

### 1-3. ディレクトリ index / 404 の挙動
- Storage 連携の Pull Zone は `/foo/` のような **末尾スラッシュのパスに対して
  自動的に `/foo/index.html` を返します**。本サイトは `trailingSlash: 'always'` で
  ビルドしており、内部リンク・サイトマップもすべて末尾スラッシュなので追加設定は不要です。
- 404 ページ: ビルド成果物に `404.html` が含まれます。Storage Zone の
  **Error handling** で任意に設定できます。
  ⚠ 本サイトは **複数ページの静的サイト**なので、SPA 用の
  「Rewrite 404 to 200 → /index.html」は**有効にしないでください**
  （存在しないパスすべてがトップページになってしまいます）。
- （任意）末尾スラッシュ無しのURL（`/foo`）にも対応したい場合は、Pull Zone の
  **Edge Rules** で `/foo` → `/foo/` への 301 リダイレクトを追加します。

### 1-4. 独自ドメイン + SSL
1. Pull Zone → **Hostnames** → **Add Hostname** に `wiki.krnk.org` を追加。
2. DNS に `wiki.krnk.org` → `xxxx.b-cdn.net` の **CNAME** を作成。
3. **Free SSL (Let's Encrypt)** を有効化。
4. **Force SSL**（HTTP→HTTPS リダイレクト）を有効化推奨。

---

## 2. GitHub Secrets の登録

リポジトリ → **Settings** → **Secrets and variables** → **Actions** に以下を登録します。

| Secret 名 | 必須 | 内容 |
| --- | --- | --- |
| `BUNNY_STORAGE_ZONE` | ✅ | Storage Zone 名（例: `krnk-wiki`） |
| `BUNNY_STORAGE_PASSWORD` | ✅ | Storage Zone の Read/Write パスワード |
| `BUNNY_STORAGE_HOST` | 任意 | ストレージ地域のホスト名（下表参照、既定 `storage.bunnycdn.com`） |
| `BUNNY_PULLZONE_ID` | 任意 | キャッシュパージ対象の Pull Zone ID |
| `BUNNY_API_KEY` | 任意 | アカウント API キー（パージ用、ダッシュボードの Account → API Key） |

### Storage 地域別ホスト名（`BUNNY_STORAGE_HOST`）
| 地域 | ホスト名 |
| --- | --- |
| Falkenstein (DE, 既定) | `storage.bunnycdn.com` |
| Singapore (SG) | `sg.storage.bunnycdn.com` |
| New York (NY) | `ny.storage.bunnycdn.com` |
| Los Angeles (LA) | `la.storage.bunnycdn.com` |
| Stockholm (SE) | `se.storage.bunnycdn.com` |
| London (UK) | `uk.storage.bunnycdn.com` |
| Sydney (SYD) | `syd.storage.bunnycdn.com` |
| São Paulo (BR) | `br.storage.bunnycdn.com` |

> Storage Zone の Main Region に合わせて設定してください（不一致だと 401 になります）。

---

## 3. デプロイの流れ

### 自動（推奨）
`master` に push すると [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
が `npm ci → npm run build → npm run deploy` を実行します。

### 手動
ローカルから直接デプロイする場合:

```bash
# 環境変数を設定（PowerShell の例）
$env:BUNNY_STORAGE_ZONE="krnk-wiki"
$env:BUNNY_STORAGE_PASSWORD="xxxxxxxx"
$env:BUNNY_STORAGE_HOST="sg.storage.bunnycdn.com"   # 任意
$env:BUNNY_PULLZONE_ID="123456"                      # 任意
$env:BUNNY_API_KEY="xxxxxxxx"                         # 任意

npm run build
npm run deploy            # dist/ を同期（不要ファイル削除 + キャッシュパージ）
node scripts/deploy-bunny.mjs --dry-run   # アップロード内容の確認のみ
```

`scripts/deploy-bunny.mjs` は dist/ をアップロードし、Storage 上に残る不要ファイル
（リネーム・削除されたページ）を削除してから、Pull Zone のキャッシュをパージします。
