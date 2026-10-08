---
title: "OpenJTalk API"
lastUpdated: 2025-03-13T07:39:31.798Z
---


# OpenJTalkAPI
## 概述
此 API 服務採用 OpenJTalk 技術。

獲取說話人資訊（GET 請求）
```
https://openjtalk-api.krnk.org/speakers
```

語音合成（POST 請求）
```
https://openjtalk-api.krnk.org/synthesize?text=読み上げる文字&type=話者&speed=0.7&pitch=0.7
```

服務頁面: https://openjtalk-api.krnk.org

:::danger
每秒發送 50 次或更多請求時，會返回「429 Too many Requests」。
如需提高 API 請求速率限制，請[聯繫我們](https://discord.krnk.org)。
:::
