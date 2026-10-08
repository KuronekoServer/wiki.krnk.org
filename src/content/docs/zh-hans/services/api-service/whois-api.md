---
title: "Whois API"
lastUpdated: 2025-03-13T08:00:48.388Z
---


# Whois API
## 概述
此 API 用于获取域名的 Whois 信息。

### 错误响应

- **Status Code:** 500 Internal Server Error
  - 获取 Whois 数据时发生错误

- **Status Code:** 400 Bad Request
  - 未指定域名参数

- **Status Code:** 403 Forbidden
  - 尝试获取受限 TLD 的 Whois 信息<br/>
  适用 TLD: .edu .mil

### API 规范

此 API 提供以下端点。

- **GET /api/whois**
  - 获取指定域名的 Whois 信息。
  - 参数：`domain`（要查询的域名）
  - 响应：文本格式的 Whois 信息

示例： ```https://whois-api.krnk.org/api/whois?domain=google.com```

- **GET /api/whois/json**
  - 以 JSON 格式获取指定域名的 Whois 信息。
  - 参数：`domain`（要查询的域名）
  - 响应：解析为 JSON 格式的 Whois 信息

示例： ```https://whois-api.krnk.org/api/whois/json?domain=google.com```

:::caution
注意事项
・部分 TLD 的 Whois 信息查询受到限制。
・已确认 JSON 查询支持 .com 和 .net，但 .jp、.int 等域名目前无法正常查询。
我们计划逐步解决此问题，请耐心等待。
:::

:::danger
每秒发送 50 次或更多请求时，会返回「429 Too many Requests」。
如需提高 API 请求速率限制，请[联系我们](https://discord.krnk.org)。
:::
