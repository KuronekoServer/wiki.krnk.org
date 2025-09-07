---
title: ひらがな変換 API
description: 
published: true
date: 2025-03-13T08:01:43.429Z
tags: api, ひらがな変換
editor: markdown
dateCreated: 2025-03-13T07:34:07.860Z
---

# ひらがな変換 API
## 概要
`ローマ字`を`ひらがな`or`カタカナ`に変換するAPIサービスです。

GETリクエストでAPIにリクエストでリクエストしローマ字、漢字を平仮名に変換するAPIとなっています。
<br></br>また、韓国語のハングルにも対応しております。

## API仕様
```
https://eng-jpn-api.krnk.org/query?text=文章
```

リクエスト例
```
https://eng-jpn-api.krnk.org/query?text=안녕하세요私はnihonngoを喋ります
```
結果例
```
あっにぇおんぐはせよわたしはにほんごをしゃべります
```

サービスページ: https://eng-jpn-api.krnk.org

> 10秒間に100回以上リクエストをすると「429 Too many Requests」が返されます。
APIのレートリミットの緩和を行いたい場合は[お問い合わせ](https://discord.krnk.org)をお願いします。
※APIの制限は提供しているAPIサービスと制限は共有されています。
{.is-danger}