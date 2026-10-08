---
title: "Whois API"
lastUpdated: 2025-03-13T08:00:48.388Z
---


# Whois API
## 概述
此 API 用於獲取域名的 Whois 資訊。

### 錯誤回應

- **Status Code:** 500 Internal Server Error
  - 獲取 Whois 資料時發生錯誤

- **Status Code:** 400 Bad Request
  - 未指定域名參數

- **Status Code:** 403 Forbidden
  - 嘗試獲取受限 TLD 的 Whois 資訊<br/>
  適用 TLD: .edu .mil

### API 規範

此 API 提供以下端點。

- **GET /api/whois**
  - 獲取指定域名的 Whois 資訊。
  - 參數：`domain`（要查詢的域名）
  - 回應：文本格式的 Whois 資訊

示例： ```https://whois-api.krnk.org/api/whois?domain=google.com```

- **GET /api/whois/json**
  - 以 JSON 格式獲取指定域名的 Whois 資訊。
  - 參數：`domain`（要查詢的域名）
  - 回應：解析爲 JSON 格式的 Whois 資訊

示例： ```https://whois-api.krnk.org/api/whois/json?domain=google.com```

:::caution
注意事項
・部分 TLD 的 Whois 資訊查詢受到限制。
・已確認 JSON 查詢支援 .com 和 .net，但 .jp、.int 等域名目前無法正常查詢。
我們計劃逐步解決此問題，請耐心等待。
:::

:::danger
每秒發送 50 次或更多請求時，會返回「429 Too many Requests」。
如需提高 API 請求速率限制，請[聯繫我們](https://discord.krnk.org)。
:::
