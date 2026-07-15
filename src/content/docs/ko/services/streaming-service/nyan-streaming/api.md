---
title: "공개 API"
description: "Nyan Streaming의 공개 API(서버 가동 상태·송출 상태·시청자 수 조회) 사양과 사용법"
lastUpdated: 2026-07-16T00:00:00.000Z
sidebar:
  order: 8
---


# 공개 API

Nyan Streaming은 **서버의 가동 상태**나 **조직의 송출 상태·시청자 수**를 조회할 수 있는 읽기 전용 공개 API를 제공합니다. 자작 사이트에 라이브 표시, 시청자 수의 외부 집계, 모니터링 도구와의 연동 등에 이용하실 수 있습니다.

- **베이스 URL**: `https://api.nyst.live/api/v1`
- 응답은 모두 JSON입니다.
- 현재 공개 API는 **읽기 전용**입니다(송출 상태·시청자 수 조회).

## 인증

`/status`·`/viewers`는 **API 키**가 필요합니다. 대시보드의 [설정 › API 키](https://nyst.live/settings/api-keys)에서 발급하고, `Authorization` 헤더에 Bearer 토큰으로 전송합니다.

```
Authorization: Bearer <YOUR_API_KEY>
```

- API 키는 `nyst_live_`로 시작하는 문자열입니다.
- 발급 시에만 키가 표시됩니다. **그 자리에서 복사**해 주세요(다시 표시되지 않습니다).
- 키에는 선택 사항으로 **유효 기간**을 설정할 수 있습니다. 불필요해진 키는 대시보드에서 **실효**할 수 있습니다.
- `/health`와 `/openapi.json`은 **인증이 불필요**합니다.

:::caution
API 키는 기밀 정보입니다. 공개 리포지토리나 클라이언트 사이드 코드에 직접 삽입하지 마세요. 유출된 경우에는 대시보드에서 실효하고 새 키를 발급해 주세요.
:::

## 레이트 제한

`/status`·`/viewers`는 **조직 전체에서 1시간당 기본 100요청**까지입니다(관리자가 완화 가능).

- 각 응답에 `X-RateLimit-Limit` / `X-RateLimit-Remaining` / `X-RateLimit-Reset` 헤더가 붙어 잔량을 확인할 수 있습니다.
- 상한을 초과하면 `429`(`Retry-After` 헤더 포함)를 반환합니다.
- `/health`는 레이트 제한의 대상 외입니다.

## OpenAPI 사양

기계 판독이 가능한 **OpenAPI 3.1** 사양을 배포하고 있습니다. Swagger / Postman 등에 읽어들일 수 있습니다.

```
https://api.nyst.live/api/v1/openapi.json
```

## 응답 형식

성공 시:

```json
{
  "success": true,
  "data": { ... },
  "request_id": "req_…"
}
```

실패 시:

```json
{
  "success": false,
  "error": { "code": "…", "message": "…" },
  "request_id": "req_…"
}
```

## 엔드포인트

### GET /health — 서버 가동 상태(인증 불필요)

모든 송출 노드의 온라인 상태를 반환합니다.

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

### GET /status — 조직의 모든 스트림 시청자 수(API 키 필요)

API 키가 속한 조직의 모든 스트림 키와 현재 시청자 수를 반환합니다.

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

### GET /viewers/&#123;streamkey&#125; — 지정 스트림의 시청자 수(API 키 필요)

지정한 스트림(`stream_id` 또는 stream key의 id)의 시청자 수를 **노드별 내역과 함께** 반환합니다.

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

## 주요 에러

| HTTP | code | 내용 |
| --- | --- | --- |
| 401 | `UNAUTHORIZED` | API 키가 지정되지 않음 |
| 401 | `API_KEY_INVALID` | API 키가 무효 또는 실효됨 |
| 401 | `API_KEY_EXPIRED` | API 키의 유효 기간 만료 |
| 404 | `NOT_FOUND` | 지정한 스트림이 조직 내에서 발견되지 않음 |
| 429 | `RATE_LIMIT_EXCEEDED` | 레이트 상한 초과(`Retry-After` 참조) |

## 관련 페이지

- [대시보드 사용법](/ko/services/streaming-service/nyan-streaming/dashboard/)
- [기능 개요·지원 프로토콜](/ko/services/streaming-service/nyan-streaming/overview/)
