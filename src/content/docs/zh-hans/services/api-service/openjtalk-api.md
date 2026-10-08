---
title: "OpenJTalk API"
lastUpdated: 2025-03-13T07:39:31.798Z
---


# OpenJTalkAPI
## 概述
此 API 服务采用 OpenJTalk 技术。

获取说话人信息（GET 请求）
```
https://openjtalk-api.krnk.org/speakers
```

语音合成（POST 请求）
```
https://openjtalk-api.krnk.org/synthesize?text=読み上げる文字&type=話者&speed=0.7&pitch=0.7
```

服务页面: https://openjtalk-api.krnk.org

:::danger
每秒发送 50 次或更多请求时，会返回「429 Too many Requests」。
如需提高 API 请求速率限制，请[联系我们](https://discord.krnk.org)。
:::
