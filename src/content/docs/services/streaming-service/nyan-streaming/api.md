---
title: "公開 API"
description: "Nyan Streaming の公開 API（サーバー稼働状況・配信状況・視聴者数の取得）の仕様と使い方"
lastUpdated: 2026-07-16T00:00:00.000Z
sidebar:
  order: 8
---


# 公開 API

Nyan Streaming は、**サーバーの稼働状況**や**組織の配信状況・視聴者数**を取得できる読み取り専用の公開 API を提供しています。自作サイトへのライブ表示、視聴者数の外部集計、監視ツールとの連携などにご利用いただけます。

- **ベース URL**: `https://api.nyst.live/api/v1`
- レスポンスはすべて JSON です。
- 現在の公開 API は**読み取り専用**です（配信状態・視聴者数の取得）。

## 認証

`/status`・`/viewers` は **API キー**が必要です。ダッシュボードの [設定 › API キー](https://nyst.live/settings/api-keys) で発行し、`Authorization` ヘッダーに Bearer トークンとして送ります。

```
Authorization: Bearer <YOUR_API_KEY>
```

- API キーは `nyst_live_` から始まる文字列です。
- 発行時のみキーが表示されます。**その場でコピー**してください（再表示されません）。
- キーには任意で**有効期限**を設定できます。不要になったキーはダッシュボードから**失効**できます。
- `/health` と `/openapi.json` は**認証不要**です。

:::caution
API キーは機密情報です。公開リポジトリやクライアントサイドのコードに直接埋め込まないでください。漏れた場合はダッシュボードから失効し、新しいキーを発行してください。
:::

## レート制限

`/status`・`/viewers` は、**組織全体で 1 時間あたり既定 100 リクエスト**までです（管理者が緩和可能）。

- 各レスポンスに `X-RateLimit-Limit` / `X-RateLimit-Remaining` / `X-RateLimit-Reset` ヘッダーが付き、残量を確認できます。
- 上限を超えると `429`（`Retry-After` ヘッダー付き）を返します。
- `/health` はレート制限の対象外です。

## OpenAPI 仕様

機械可読な **OpenAPI 3.1** 仕様を配布しています。Swagger / Postman などに読み込めます。

```
https://api.nyst.live/api/v1/openapi.json
```

## レスポンス形式

成功時:

```json
{
  "success": true,
  "data": { ... },
  "request_id": "req_…"
}
```

失敗時:

```json
{
  "success": false,
  "error": { "code": "…", "message": "…" },
  "request_id": "req_…"
}
```

## エンドポイント

### GET /health — サーバー稼働状況（認証不要）

全配信ノードのオンライン状況を返します。

```bash
curl https://api.nyst.live/api/v1/health
```

```json
{
  "success": true,
  "data": {
    "all_servers_online": true,
    "online_servers": 1,
    "offline_servers": 0,
    "total_servers": 1,
    "servers": [
      {
        "id": "node-1",
        "label": "tokyo-1",
        "region": "ap-northeast-1",
        "status": "active",
        "online": true
      }
    ]
  }
}
```

### GET /status — 組織の全ストリーム視聴者数（要 API キー）

API キーが属する組織の、全ストリームキーと現在の視聴者数を返します。

```bash
curl https://api.nyst.live/api/v1/status \
  -H "Authorization: Bearer $NYST_API_KEY"
```

```json
{
  "success": true,
  "data": {
    "organization_id": "org_…",
    "total_streams": 2,
    "total_viewers": 134,
    "streams": [
      {
        "stream_key_id": "…",
        "stream_id": "…",
        "name": "Main",
        "status": "active",
        "viewer_count": 120
      }
    ]
  }
}
```

### GET /viewers/&#123;streamkey&#125; — 指定ストリームの視聴者数（要 API キー）

指定したストリーム（`stream_id` または stream key の id）の視聴者数を、**ノード別の内訳付き**で返します。

```bash
curl https://api.nyst.live/api/v1/viewers/STREAM_ID \
  -H "Authorization: Bearer $NYST_API_KEY"
```

```json
{
  "success": true,
  "data": {
    "organization_id": "org_…",
    "stream": {
      "stream_key_id": "…",
      "stream_id": "…",
      "name": "Main",
      "status": "active"
    },
    "viewer_count": 120,
    "node_viewers": [
      {
        "node_id": "node-1",
        "label": "tokyo-1",
        "region": "ap-northeast-1",
        "viewer_count": 120
      }
    ],
    "total_node_viewers": 120
  }
}
```

## 主なエラー

| HTTP | code | 内容 |
| --- | --- | --- |
| 401 | `UNAUTHORIZED` | API キーが指定されていない |
| 401 | `API_KEY_INVALID` | API キーが無効または失効している |
| 401 | `API_KEY_EXPIRED` | API キーの有効期限切れ |
| 404 | `NOT_FOUND` | 指定したストリームが組織内に見つからない |
| 429 | `RATE_LIMIT_EXCEEDED` | レート上限の超過（`Retry-After` を参照） |

## 関連ページ

- [ダッシュボードの使い方](/services/streaming-service/nyan-streaming/dashboard/)
- [機能概要・対応プロトコル](/services/streaming-service/nyan-streaming/overview/)
