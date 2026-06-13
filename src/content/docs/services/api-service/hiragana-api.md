---
title: "ひらがな変換 API"
lastUpdated: 2025-03-13T08:01:43.429Z
---


# ひらがな変換 API
## 概要
`ローマ字`や`韓国語`、`中国語`を`ひらがな`または`カタカナ`に変換するAPIサービスです。

GETリクエストを送信することで、ローマ字や漢字をひらがなに変換します。

## API仕様
```
https://eng-jpn-api.krnk.org/query?text=文章
```

リクエスト例
```
https://eng-jpn-api.krnk.org/query?text=안녕하세요私はnihonngoを喋ります我会尽力而为
```
結果例
```
あんにょんはせよすはにほんごをでぃえりますうぉふいじんりえるうぇい
```

サービスページ: https://eng-jpn-api.krnk.org

:::danger
1秒間に50回以上リクエストすると「429 Too many Requests」が返されます。
APIのレートリミットの緩和をご希望の場合は、[お問い合わせ](https://discord.krnk.org)をお願いします。
:::
