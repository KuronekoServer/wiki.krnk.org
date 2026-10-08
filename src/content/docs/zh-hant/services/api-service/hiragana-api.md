---
title: "平假名轉換 API"
lastUpdated: 2025-03-13T08:01:43.429Z
---


# 平假名轉換 API
## 概述
此 API 服務可將`羅馬字`、`韓語`或`中文`轉換爲`平假名`或`片假名`。

發送 GET 請求即可將羅馬字或漢字轉換爲平假名。

## API 規範
```
https://eng-jpn-api.krnk.org/query?text=文章
```

請求示例
```
https://eng-jpn-api.krnk.org/query?text=안녕하세요私はnihonngoを喋ります我会尽力而为
```
結果示例
```
あんにょんはせよすはにほんごをでぃえりますうぉふいじんりえるうぇい
```

服務頁面: https://eng-jpn-api.krnk.org

:::danger
每秒發送 50 次或更多請求時，會返回「429 Too many Requests」。
如需提高 API 請求速率限制，請[聯繫我們](https://discord.krnk.org)。
:::
