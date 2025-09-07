---
title: Webp変換 API
description: 
published: true
date: 2025-03-13T08:01:07.398Z
tags: api, 画像変換
editor: markdown
dateCreated: 2025-03-13T07:36:51.698Z
---

# Webp変換 API
## 概要
このAPIは、画像を受け取り、それらをWebP形式に変換して応答します。

単一の画像がアップロードされた場合は、変換されたWebP画像が直接応答されます。

複数の画像がアップロードされた場合は、変換された画像を含むZIPファイルが応答されます。

#### エンドポイント

- **POST /api/convert**

#### リクエスト

- **Method:** POST
- **Content-Type:** multipart/form-data

##### フォームデータ

- **Key:** images
- **Value:** 画像ファイル（単一または複数）

#### レスポンス

- **Content-Type:** 
    - 単一の画像の場合: image/webp
    - 複数の画像の場合: application/zip

##### 単一の画像の場合

- 変換されたWebP画像がレスポンスボディに含まれます。

##### 複数の画像の場合

- 変換された画像が含まれるZIPファイルがレスポンスボディに含まれます。

#### エラーレスポンス

- **Status Code:** 400 Bad Request
    - No images uploaded. (画像がアップロードされていない場合)
- **Status Code:** 500 Internal Server Error
    - サーバー内部でエラーが発生した場合、画像が対応しない場合

#### 使用例

```bash
# 単一の画像を変換する場合
curl -X POST -F "images=@/path/to/image.jpg" https://webp-convert-api.krnk.org/api/convert > converted_image.webp

# 複数の画像を変換する場合
curl -X POST -F "images=@/path/to/image1.jpg" -F "images=@/path/to/image2.jpg" https://webp-convert-api.krnk.org/api/convert > converted_images.zip
```

#### 注意事項

- ファイルサイズに応じて、処理に時間がかかる場合があります。
- ファイルの拡張子が画像形式に対応している必要があります。

サービスページ: https://webp-convert-api.krnk.org/

> 10秒間に100回以上リクエストをすると「429 Too many Requests」が返されます。
APIのレートリミットの緩和を行いたい場合は[お問い合わせ](https://discord.krnk.org)をお願いします。
※APIの制限は提供しているAPIサービスと制限は共有されています。
{.is-danger}