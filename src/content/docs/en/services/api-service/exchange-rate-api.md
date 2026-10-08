---
title: "Exchange Rate API"
lastUpdated: 2025-03-13T07:40:35.383Z
---

# Exchange Rate API
## Overview
This API provides exchange rates updated once per second.

## API Specification
JSON output:
```
https://exchange-rate-api.krnk.org/api/rate
```
Prometheus output:
```
https://exchange-rate-api.krnk.org/api/prometheus
```

| Value | Description |
|---|---|
| USD_JPY | US dollar / Japanese yen |
| EUR_JPY | Euro / Japanese yen |
| GBP_JPY | British pound / Japanese yen |
| AUD_JPY | Australian dollar / Japanese yen |
| NZD_JPY | New Zealand dollar / Japanese yen |
| CAD_JPY | Canadian dollar / Japanese yen |
| CHF_JPY | Swiss franc / Japanese yen |
| TRY_JPY | Turkish lira / Japanese yen |
| ZAR_JPY | South African rand / Japanese yen |
| MXN_JPY | Mexican peso / Japanese yen |

:::danger
If you make 100 or more requests in 10 seconds, you will receive `429 Too Many Requests`.
If you would like the API rate limit relaxed, please [contact us](https://discord.krnk.org).
This limit is shared with our other API services.
:::
