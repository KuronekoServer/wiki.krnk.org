---
title: "Artifacterビルドカード生成 API"
lastUpdated: 2025-03-13T08:02:42.108Z
---


# Artifacterビルドカード生成 API
## 概要
Enka.NetworkのAPI情報を使用し、Artifacterのデザインで画像を生成するAPIです。

GETリクエストでアクセスすることで、さまざまなビルドカードの画像を生成できます。


# API仕様

https://artifacter-imagegen-api.krnk.org/docs

サービスページ: https://artifacter-imagegen-api.krnk.org

:::danger
1秒間に10回以上リクエストを送信すると「429 Too many Requests」が返されます。
APIのレートリミットの緩和をご希望の場合は[お問い合わせ](https://discord.krnk.org)ください。
:::
