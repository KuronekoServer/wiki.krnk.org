---
title: 画像変換 API
description: 
published: true
date: 2025-03-13T08:01:07.398Z
tags: api, 画像変換
editor: markdown
dateCreated: 2025-03-13T07:36:51.698Z
---

# 画像変換 API
## 概要
このAPIは、画像を受け取り、様々な形式に変換して応答します。

単一の画像がアップロードされた場合は、変換されたWebP画像が直接応答されます。

複数の画像がアップロードされた場合は、変換された画像を含むZIPファイルが応答されます。

### ドキュメント

https://image-convert-api.krnk.org/docs

#### 注意事項

- ファイルサイズに応じて、処理に時間がかかる場合があります。
- ファイルの拡張子が画像形式に対応している必要があります。


> 1秒間に50回以上リクエストをすると「429 Too many Requests」が返されます。
APIのレートリミットの緩和を行いたい場合は[お問い合わせ](https://discord.krnk.org)をお願いします。
{.is-danger}