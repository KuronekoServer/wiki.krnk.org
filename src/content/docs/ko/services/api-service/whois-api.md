---
title: "Whois API"
lastUpdated: 2025-03-13T08:00:48.388Z
---

# Whois API
## 개요
이 API는 도메인의 Whois 정보를 조회합니다.

### 오류 응답
- **500 Internal Server Error**: Whois 데이터를 가져오는 중 오류가 발생했습니다.
- **400 Bad Request**: `domain` 파라미터가 지정되지 않았습니다.
- **403 Forbidden**: 제한된 TLD인 `.edu` 또는 `.mil`의 Whois 정보를 요청했습니다.

### API 사양
- **GET /api/whois**
  - 지정한 도메인의 Whois 정보를 가져옵니다.
  - 파라미터: `domain` (조회할 도메인 이름).
  - 응답: 텍스트 형식의 Whois 정보.

예시:
```
https://whois-api.krnk.org/api/whois?domain=google.com
```

- **GET /api/whois/json**
  - 지정한 도메인의 Whois 정보를 JSON 형식으로 가져옵니다.
  - 파라미터: `domain` (조회할 도메인 이름).
  - 응답: JSON 형식으로 파싱된 Whois 정보.

예시:
```
https://whois-api.krnk.org/api/whois/json?domain=google.com
```

:::caution
일부 TLD는 Whois 정보 조회가 제한됩니다.
JSON 엔드포인트는 `.com`과 `.net`에서 동작을 확인했지만, `.jp`와 `.int` 등에서는 동작하지 않는 것으로 확인되었습니다.
이 문제는 순차적으로 대응할 예정입니다.
:::

:::danger
1초에 50회 이상 요청하면 `429 Too Many Requests`가 반환됩니다.
API 요청 제한 완화를 원하시면 [문의](https://discord.krnk.org)해 주세요.
:::
