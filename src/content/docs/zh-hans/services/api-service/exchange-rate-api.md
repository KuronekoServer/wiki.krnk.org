---
title: "汇率 API"
lastUpdated: 2025-03-13T07:40:35.383Z
---


# 汇率 API
## 概述
此汇率 API 每秒更新一次。

## API 规范

API 规范
JSON 格式输出
```
https://exchange-rate-api.krnk.org/api/rate
```
Prometheus 格式输出
```
https://exchange-rate-api.krnk.org/api/prometheus
```

值 | 概述 |
-- | -- |
USD_JPY | 美元／日元
EUR_JPY | 欧元／日元
GBP_JPY | 英镑／日元
AUD_JPY | 澳元／日元
NZD_JPY | 新西兰元／日元
CAD_JPY | 加元／日元
CHF_JPY | 瑞士法郎／日元
TRY_JPY | 土耳其里拉／日元
ZAR_JPY | 南非兰特／日元
MXN_JPY | 墨西哥比索／日元

:::danger
在 10 秒内发送 100 次或更多请求时，会返回「429 Too many Requests」。
如需提高 API 请求速率限制，请[联系我们](https://discord.krnk.org)。
※此 API 与我们提供的其他 API 服务共享请求限制。
:::
