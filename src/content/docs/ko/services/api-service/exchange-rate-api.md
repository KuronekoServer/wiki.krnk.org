---
title: "환율 API"
lastUpdated: 2025-03-13T07:40:35.383Z
---

# 환율 API
## 개요
이 API는 1초마다 갱신되는 환율을 제공합니다.

## API 사양
JSON 형식 출력:
```
https://exchange-rate-api.krnk.org/api/rate
```
Prometheus 형식 출력:
```
https://exchange-rate-api.krnk.org/api/prometheus
```

| 값 | 설명 |
|---|---|
| USD_JPY | 미국 달러 / 일본 엔 |
| EUR_JPY | 유로 / 일본 엔 |
| GBP_JPY | 영국 파운드 / 일본 엔 |
| AUD_JPY | 호주 달러 / 일본 엔 |
| NZD_JPY | 뉴질랜드 달러 / 일본 엔 |
| CAD_JPY | 캐나다 달러 / 일본 엔 |
| CHF_JPY | 스위스 프랑 / 일본 엔 |
| TRY_JPY | 튀르키예 리라 / 일본 엔 |
| ZAR_JPY | 남아프리카 공화국 랜드 / 일본 엔 |
| MXN_JPY | 멕시코 페소 / 일본 엔 |

:::danger
10초 동안 100회 이상 요청하면 `429 Too Many Requests`가 반환됩니다.
API 요청 제한 완화를 원하시면 [문의](https://discord.krnk.org)해 주세요.
이 제한은 제공 중인 다른 API 서비스와 공유됩니다.
:::
