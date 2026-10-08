---
title: "公開 API"
description: "Nyan Streaming 公開 API（獲取伺服器運行狀態、直播狀態和觀眾人數）的規範與使用方法"
lastUpdated: 2026-07-16T00:00:00.000Z
sidebar:
  order: 10
---

# 公開 API

Nyan Streaming 提供唯讀公開 API，可獲取**伺服器運行狀態**以及**組織的直播狀態和觀眾人數**。可用於在自建網站顯示直播、在外部統計觀眾人數，以及與監控工具整合。

- **基礎 URL**：`https://api.nyst.live/api/v1`
- 所有回應均為 JSON。
- 目前的公開 API 為**唯讀**（獲取直播狀態和觀眾人數）。

## 身份驗證

`/status` 和 `/viewers` 需要 **API 金鑰**。請在控制台的[設定 › API 金鑰](https://nyst.live/settings/api-keys)中建立，並透過 `Authorization` 請求標頭作為 Bearer 權杖發送。

```
Authorization: Bearer <YOUR_API_KEY>
```

- API 金鑰是以 `nyst_live_` 開頭的字串。
- 金鑰僅在建立時顯示，請**立即複製**（不會再次顯示）。
- 可為金鑰設定可選的**有效期**。不再需要的金鑰可從控制台**撤銷**。
- `/health` 和 `/openapi.json` **無需身份驗證**。

:::caution
API 金鑰屬於機密資訊。請勿直接嵌入公開儲存庫或用戶端程式碼。發生洩漏時，請從控制台撤銷並建立新金鑰。
:::

## 速率限制

`/status` 和 `/viewers` 預設限制為**整個組織每小時 100 次請求**（管理員可放寬限制）。

- 每個回應均包含 `X-RateLimit-Limit` / `X-RateLimit-Remaining` / `X-RateLimit-Reset` 回應標頭，可查看剩餘額度。
- 超過上限時返回 `429`（含 `Retry-After` 回應標頭）。
- `/health` 不受速率限制。

## OpenAPI 規範

提供機器可讀的 **OpenAPI 3.1** 規範，可匯入 Swagger / Postman 等工具。

```
https://api.nyst.live/api/v1/openapi.json
```

## 回應格式

成功時：

```json
{
  "success": true,
  "data": { ... },
  "request_id": "req_…"
}
```

失敗時：

```json
{
  "success": false,
  "error": { "code": "…", "message": "…" },
  "request_id": "req_…"
}
```

## 端點

### GET /health — 伺服器運行狀態（無需身份驗證）

返回所有直播節點的在線狀態。

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

### GET /status — 組織全部流的觀眾人數（需要 API 金鑰）

返回 API 金鑰所屬組織的所有串流金鑰及當前觀眾人數。

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

### GET /viewers/&#123;streamkey&#125; — 指定流的觀眾人數（需要 API 金鑰）

返回指定流（`stream_id` 或 stream key 的 id）的觀眾人數，並附上**各節點的明細**。

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

## 常見錯誤

| HTTP | code | 含義 |
| --- | --- | --- |
| 401 | `UNAUTHORIZED` | 未指定 API 金鑰 |
| 401 | `API_KEY_INVALID` | API 金鑰無效或已撤銷 |
| 401 | `API_KEY_EXPIRED` | API 金鑰已過期 |
| 404 | `NOT_FOUND` | 組織內找不到指定流 |
| 429 | `RATE_LIMIT_EXCEEDED` | 超過速率限制（參閱 `Retry-After`） |

## 相關頁面

- [控制台使用指南](/zh-hant/services/streaming-service/nyan-streaming/dashboard/)
- [功能概述與支援的協議](/zh-hant/services/streaming-service/nyan-streaming/overview/)
