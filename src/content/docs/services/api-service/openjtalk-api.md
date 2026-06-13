---
title: "OpenJTalk API"
lastUpdated: 2025-03-13T07:39:31.798Z
---


# OpenJTalkAPI
## 概要
本APIは、OpenJTalkの技術を利用したAPIサービスです。

話者情報取得(GETリクエスト)
```
https://openjtalk-api.krnk.org/speakers
```

音声合成(POSTリクエスト)
```
https://openjtalk-api.krnk.org/synthesize?text=読み上げる文字&type=話者&speed=0.7&pitch=0.7
```

サービスページ: https://openjtalk-api.krnk.org

:::danger
1秒間に50回以上リクエストすると「429 Too many Requests」が返されます。
APIのレートリミットの緩和をご希望の場合は、[お問い合わせ](https://discord.krnk.org)をお願いします。
:::
