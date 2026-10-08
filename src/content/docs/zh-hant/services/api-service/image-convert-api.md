---
title: "圖片轉換 API"
lastUpdated: 2025-03-13T08:01:07.398Z
---


# 圖片轉換 API
## 概述
此 API 接收圖片，將其轉換爲多種格式後返回。

上傳單張圖片時，會直接返回轉換後的 WebP 圖片。

上傳多張圖片時，會返回包含轉換後圖片的 ZIP 檔案。

### 文檔

https://image-convert-api.krnk.org/docs

#### 注意事項

- 處理時間可能隨檔案大小而增加。
- 檔案副檔名必須與支援的圖片格式相符。


:::danger
每秒發送 50 次或更多請求時，會返回「429 Too many Requests」。
如需提高 API 請求速率限制，請[聯繫我們](https://discord.krnk.org)。
:::
