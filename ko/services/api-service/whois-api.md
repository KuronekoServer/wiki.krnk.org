---
title: Whois API
description: 
published: true
date: 2025-03-13T08:00:48.388Z
tags: api, whois
editor: markdown
dateCreated: 2025-03-13T07:41:33.836Z
---

# Whois API
## 개요
이 API는 도메인의 Whois 정보를 조회합니다.

### 엔드포인트
- **GET /api/whois** — 지정한 도메인의 원시 Whois 텍스트를 반환합니다. 파라미터: `domain`
- **GET /api/whois/json** — 지정한 도메인의 Whois 정보를 JSON으로 반환합니다. 파라미터: `domain`

예시:
```
https://whois-api.krnk.org/api/whois?domain=google.com
```

### 오류 응답
- 500 Internal Server Error: Whois 데이터 조회 중 오류 발생
- 400 Bad Request: `domain` 파라미터가 지정되지 않음
- 403 Forbidden: 제한된 TLD의 Whois 정보 조회 시 (.edu, .mil 등)

참고: 일부 TLD는 제한되어 있어 조회가 불가능할 수 있습니다. JSON 엔드포인트는 .com/.net에 대해 안정적으로 동작하나, .jp나 .int 등은 동작하지 않을 수 있습니다. 이는 순차적으로 개선 예정입니다.

주의: 10초간 100회 이상 요청 시 429 Too Many Requests가 반환됩니다.
