---
title: "Public API"
description: "The specification and usage of Nyan Streaming's public API (retrieving server status, streaming status, and viewer counts)"
lastUpdated: 2026-07-16T00:00:00.000Z
sidebar:
  order: 8
---


# Public API

Nyan Streaming provides a read-only public API for retrieving **server status** and an **organization's streaming status and viewer counts**. You can use it for live displays on your own site, external aggregation of viewer counts, integration with monitoring tools, and more.

- **Base URL**: `https://api.nyst.live/api/v1`
- All responses are JSON.
- The current public API is **read-only** (retrieving streaming status and viewer counts).

## Authentication

`/status` and `/viewers` require an **API key**. Issue one from [Settings › API Keys](https://nyst.live/settings/api-keys) in the dashboard, and send it as a Bearer token in the `Authorization` header.

```
Authorization: Bearer <YOUR_API_KEY>
```

- API keys are strings that begin with `nyst_live_`.
- The key is only shown when it is issued. **Copy it on the spot** (it will not be shown again).
- You can optionally set an **expiration** on a key. You can **revoke** keys you no longer need from the dashboard.
- `/health` and `/openapi.json` do **not require authentication**.

:::caution
API keys are confidential. Do not embed them directly in public repositories or client-side code. If one leaks, revoke it from the dashboard and issue a new key.
:::

## Rate Limits

`/status` and `/viewers` are limited to **a default of 100 requests per hour across the entire organization** (administrators can raise this).

- Each response includes `X-RateLimit-Limit` / `X-RateLimit-Remaining` / `X-RateLimit-Reset` headers so you can check the remaining allowance.
- Exceeding the limit returns `429` (with a `Retry-After` header).
- `/health` is not subject to rate limiting.

## OpenAPI Specification

We distribute a machine-readable **OpenAPI 3.1** specification. You can load it into Swagger, Postman, and similar tools.

```
https://api.nyst.live/api/v1/openapi.json
```

## Response Format

On success:

```json
{
  "success": true,
  "data": { ... },
  "request_id": "req_…"
}
```

On failure:

```json
{
  "success": false,
  "error": { "code": "…", "message": "…" },
  "request_id": "req_…"
}
```

## Endpoints

### GET /health — Server Status (No Authentication Required)

Returns the online status of all delivery nodes.

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

### GET /status — Viewer Counts Across All of an Organization's Streams (API Key Required)

Returns all stream keys and their current viewer counts for the organization the API key belongs to.

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

### GET /viewers/&#123;streamkey&#125; — Viewer Count for a Specific Stream (API Key Required)

Returns the viewer count for the specified stream (`stream_id` or the stream key id), **with a per-node breakdown**.

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

## Main Errors

| HTTP | code | Meaning |
| --- | --- | --- |
| 401 | `UNAUTHORIZED` | No API key was provided |
| 401 | `API_KEY_INVALID` | The API key is invalid or has been revoked |
| 401 | `API_KEY_EXPIRED` | The API key has expired |
| 404 | `NOT_FOUND` | The specified stream was not found in the organization |
| 429 | `RATE_LIMIT_EXCEEDED` | The rate limit was exceeded (see `Retry-After`) |

## Related Pages

- [Using the Dashboard](/en/services/streaming-service/nyan-streaming/dashboard/)
- [Feature Overview & Supported Protocols](/en/services/streaming-service/nyan-streaming/overview/)
