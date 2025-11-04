---
title: Exchange Rate API
description: 
published: true
date: 2025-03-13T07:40:35.383Z
tags: api, exchange-rate
editor: markdown
dateCreated: 2025-03-13T07:23:40.867Z
---

# Exchange Rate API
## Overview
This API provides exchange rates updated once per second.

### Endpoints
JSON:
```
https://exchange-rate-api.krnk.org/api/rate
```
Prometheus:
```
https://exchange-rate-api.krnk.org/api/prometheus
```

Values include:
- USD_JPY
- EUR_JPY
- GBP_JPY
- AUD_JPY
- NZD_JPY
- CAD_JPY
- CHF_JPY
- TRY_JPY
- ZAR_JPY
- MXN_JPY

> If you make more than 100 requests in 10 seconds, you'll receive `429 Too Many Requests`.
{.is-danger}
