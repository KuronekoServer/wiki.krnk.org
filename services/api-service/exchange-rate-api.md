---
title: 為替レート API
description: 
published: true
date: 2025-03-13T07:40:35.383Z
tags: api, 為替レート
editor: markdown
dateCreated: 2025-03-13T07:23:40.867Z
---

# 為替レート API
## 概要
このAPIは、1秒間に1回更新される為替レートAPIです。

## API仕様

API仕様
json形式出力
```
https://exchange-rate-api.krnk.org/api/rate
```
prometheus形式出力
```
https://exchange-rate-api.krnk.org/api/prometheus
```

値 | 概要 |
-- | -- |
USD_JPY | 米ドル/日本円
EUR_JPY | ユーロ/日本円
GBP_JPY | 英ポンド/日本円
AUD_JPY | 豪ドル/日本円
NZD_JPY | NZドル/日本円
CAD_JPY | カナダドル/日本円
CHF_JPY | スイスフラン/日本円
TRY_JPY | トルコリラ/日本円
ZAR_JPY | 南アフリカランド/日本円
MXN_JPY | メキシコペソ/日本円

> 10秒間に100回以上リクエストをすると「429 Too many Requests」が返されます。
APIのレートリミットの緩和を行いたい場合は[お問い合わせ](https://discord.krnk.org)をお願いします。
※APIの制限は提供しているAPIサービスと制限は共有されています。
{.is-danger}