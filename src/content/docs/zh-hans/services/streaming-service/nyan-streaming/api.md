---
title: "公开 API"
description: "Nyan Streaming 公开 API（获取服务器运行状态、直播状态和观众人数）的规范与使用方法"
lastUpdated: 2026-07-16T00:00:00.000Z
sidebar:
  order: 10
---

# 公开 API

Nyan Streaming 提供只读公开 API，可获取**服务器运行状态**以及**组织的直播状态和观众人数**。可用于在自建网站显示直播、在外部统计观众人数，以及与监控工具集成。

- **基础 URL**：`https://api.nyst.live/api/v1`
- 所有响应均为 JSON。
- 目前的公开 API 为**只读**（获取直播状态和观众人数）。

## 身份验证

`/status` 和 `/viewers` 需要 **API 密钥**。请在控制台的[设置 › API 密钥](https://nyst.live/settings/api-keys)中创建，并通过 `Authorization` 请求头作为 Bearer 令牌发送。

```
Authorization: Bearer <YOUR_API_KEY>
```

- API 密钥是以 `nyst_live_` 开头的字符串。
- 密钥仅在创建时显示，请**立即复制**（不会再次显示）。
- 可为密钥设置可选的**有效期**。不再需要的密钥可从控制台**撤销**。
- `/health` 和 `/openapi.json` **无需身份验证**。

:::caution
API 密钥属于机密信息。请勿直接嵌入公开仓库或客户端代码。发生泄露时，请从控制台撤销并创建新密钥。
:::

## 速率限制

`/status` 和 `/viewers` 默认限制为**整个组织每小时 100 次请求**（管理员可放宽限制）。

- 每个响应均包含 `X-RateLimit-Limit` / `X-RateLimit-Remaining` / `X-RateLimit-Reset` 响应头，可查看剩余额度。
- 超过上限时返回 `429`（含 `Retry-After` 响应头）。
- `/health` 不受速率限制。

## OpenAPI 规范

提供机器可读的 **OpenAPI 3.1** 规范，可导入 Swagger / Postman 等工具。

```
https://api.nyst.live/api/v1/openapi.json
```

## 响应格式

成功时：

```json
{
  "success": true,
  "data": { ... },
  "request_id": "req_…"
}
```

失败时：

```json
{
  "success": false,
  "error": { "code": "…", "message": "…" },
  "request_id": "req_…"
}
```

## 端点

### GET /health — 服务器运行状态（无需身份验证）

返回所有直播节点的在线状态。

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

### GET /status — 组织全部流的观众人数（需要 API 密钥）

返回 API 密钥所属组织的所有推流密钥及当前观众人数。

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

### GET /viewers/&#123;streamkey&#125; — 指定流的观众人数（需要 API 密钥）

返回指定流（`stream_id` 或 stream key 的 id）的观众人数，并附上**各节点的明细**。

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

## 常见错误

| HTTP | code | 含义 |
| --- | --- | --- |
| 401 | `UNAUTHORIZED` | 未指定 API 密钥 |
| 401 | `API_KEY_INVALID` | API 密钥无效或已撤销 |
| 401 | `API_KEY_EXPIRED` | API 密钥已过期 |
| 404 | `NOT_FOUND` | 组织内找不到指定流 |
| 429 | `RATE_LIMIT_EXCEEDED` | 超过速率限制（参阅 `Retry-After`） |

## 相关页面

- [控制台使用指南](/zh-hans/services/streaming-service/nyan-streaming/dashboard/)
- [功能概述与支持的协议](/zh-hans/services/streaming-service/nyan-streaming/overview/)
