---
title: "匯率 API"
lastUpdated: 2025-03-13T07:40:35.383Z
---


# 匯率 API
## 概述
此匯率 API 每秒更新一次。

## API 規範

API 規範
JSON 格式輸出
```
https://exchange-rate-api.krnk.org/api/rate
```
Prometheus 格式輸出
```
https://exchange-rate-api.krnk.org/api/prometheus
```

值 | 概述 |
-- | -- |
USD_JPY | 美元／日元
EUR_JPY | 歐元／日元
GBP_JPY | 英鎊／日元
AUD_JPY | 澳元／日元
NZD_JPY | 新西蘭元／日元
CAD_JPY | 加元／日元
CHF_JPY | 瑞士法郎／日元
TRY_JPY | 土耳其里拉／日元
ZAR_JPY | 南非蘭特／日元
MXN_JPY | 墨西哥比索／日元

:::danger
在 10 秒內發送 100 次或更多請求時，會返回「429 Too many Requests」。
如需提高 API 請求速率限制，請[聯繫我們](https://discord.krnk.org)。
※此 API 與我們提供的其他 API 服務共享請求限制。
:::
