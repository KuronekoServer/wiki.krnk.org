---
title: "平假名转换 API"
lastUpdated: 2025-03-13T08:01:43.429Z
---


# 平假名转换 API
## 概述
此 API 服务可将`罗马字`、`韩语`或`中文`转换为`平假名`或`片假名`。

发送 GET 请求即可将罗马字或汉字转换为平假名。

## API 规范
```
https://eng-jpn-api.krnk.org/query?text=文章
```

请求示例
```
https://eng-jpn-api.krnk.org/query?text=안녕하세요私はnihonngoを喋ります我会尽力而为
```
结果示例
```
あんにょんはせよすはにほんごをでぃえりますうぉふいじんりえるうぇい
```

服务页面: https://eng-jpn-api.krnk.org

:::danger
每秒发送 50 次或更多请求时，会返回「429 Too many Requests」。
如需提高 API 请求速率限制，请[联系我们](https://discord.krnk.org)。
:::
