---
title: "图像转换 API"
lastUpdated: 2025-03-13T08:01:07.398Z
---


# 图像转换 API
## 概述
此 API 接收图像，将其转换为多种格式后返回。

上传单张图像时，会直接返回转换后的 WebP 图像。

上传多张图像时，会返回包含转换后图像的 ZIP 文件。

### 文档

https://image-convert-api.krnk.org/docs

#### 注意事项

- 处理时间可能随文件大小而增加。
- 文件扩展名必须与支持的图像格式相符。


:::danger
每秒发送 50 次或更多请求时，会返回「429 Too many Requests」。
如需提高 API 请求速率限制，请[联系我们](https://discord.krnk.org)。
:::
