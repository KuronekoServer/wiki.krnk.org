---
title: 환율 API
description: 
published: true
date: 2025-03-13T07:40:35.383Z
tags: api, exchange-rate
editor: markdown
dateCreated: 2025-03-13T07:23:40.867Z
---

# 환율 API
## 개요
이 API는 1초마다 갱신되는 환율을 제공합니다.

### 엔드포인트
JSON:
```
https://exchange-rate-api.krnk.org/api/rate
```
Prometheus:
```
https://exchange-rate-api.krnk.org/api/prometheus
```

지원 값 예시:
- USD_JPY, EUR_JPY, GBP_JPY, AUD_JPY, NZD_JPY, CAD_JPY, CHF_JPY, TRY_JPY, ZAR_JPY, MXN_JPY

주의: 10초간 100회 이상 요청 시 429 Too Many Requests가 반환됩니다.
