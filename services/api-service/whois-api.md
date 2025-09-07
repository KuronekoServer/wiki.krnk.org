---
title: Whois API
description: 
published: true
date: 2025-03-13T08:00:48.388Z
tags: api, whois
editor: markdown
dateCreated: 2025-03-13T07:41:33.836Z
---

# Whois API
## 概要
このAPIは、ドメインのWhois情報を取得するためのAPIです。

### エラーレスポンス

- **Status Code:** 500 Internal Server Error
  - Whoisデータの取得中にエラーが発生した場合

- **Status Code:** 400 Bad Request
  - ドメインパラメータが指定されていない場合

- **Status Code:** 403 Forbidden
  - 制限されたTLDのWhois情報を取得しようとした場合<br/>
  対象TDL: .edu .mil

### API仕様

このAPIは、以下のエンドポイントを提供します:

- **GET /api/whois**
  - 指定したドメインのWhois情報を取得します。
  - パラメータ: `domain` (取得したいドメイン名)
  - レスポンス: テキスト形式のWhois情報

例: ```https://whois-api.krnk.org/api/whois?domain=google.com```

- **GET /api/whois/json**
  - 指定したドメインのWhois情報をJSON形式で取得します。
  - パラメータ: `domain` (取得したいドメイン名)
  - レスポンス: JSON形式のパースされたWhois情報

例: ```https://whois-api.krnk.org/api/whois/json?domain=google.com```

> 注意事項
・ 一部のTLDについてはWhois情報の取得が制限されています。
・ json版での取得は基本的に.comや.netでの場合は動作を確認しておりますが、.jpや.intなどは動作しないことを確認しています。
この問題は順次対応予定のためしばらくお待ちくださいませ。
{.is-warning}

> 10秒間に100回以上リクエストをすると「429 Too many Requests」が返されます。
APIのレートリミットの緩和を行いたい場合は[お問い合わせ](https://discord.krnk.org)をお願いします。
※APIの制限は提供しているAPIサービスと制限は共有されています。
{.is-danger}