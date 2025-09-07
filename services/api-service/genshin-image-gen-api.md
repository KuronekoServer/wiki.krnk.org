---
title: 原神ビルドカード API
description: 
published: true
date: 2025-03-13T08:02:42.108Z
tags: api, 原神
editor: markdown
dateCreated: 2025-03-13T07:32:50.886Z
---

# 原神ビルドカード API
## 概要
Enka.NetworkのAPI情報を使用し、Artifacterのデザインを使用した画像生成APIとなっております。

GETリクエストでAPIにアクセスし、原神のユーザーの原神のキャラクター情報をjson形式で返し、原神のビルドカードを生成できるAPIとなっています。

---

> 本サービスはベータ版です。
リリースを行っておりませんので可用性を保証いたしません。
{.is-warning}


# API仕様
## キャラクターリスト取得
```
https://genshin-image-gen-api.krnk.org/api/genshindata/?uid=UID
```
当てはめる値 | 概要 |
-- | -- |
UID | 原神のUID | 

リクエスト例
```
https://genshin-image-gen-api.krnk.org/api/genshindata/?uid=830322314
```
結果例
```
{"旅人":62,"ナヒーダ":60,"ベネット":60,"香菱":50,"ディオナ":50,"バーバラ":58,"早柚":20,"アンバー":40}
```

---

## ビルドカード生成
```
https://genshin-image-gen-api.krnk.org/api/generation/?uid=UID&scoretype=スコア&charaName=キャラクター名
```
当てはめる値 | 概要 |
-- | -- |
UID | 原神のUID | 
ATTACK | 攻撃力
HP | 体力
CHARGE | 元素チャージ
ELEMENT | 元素熟知
DEFENCE | 防御力のスコア
CHARACTER | 日本語の原神のキャラクター名(例: 旅人)

リクエスト例
```
https://genshin-image-gen-api.krnk.org/api/generation/?uid=830322314&scoretype=ATTACK&charaName=ディオナ
```
結果例
![image](https://artifacter.krnk.org/img/image1.webp)

サービスページ: https://genshin-api.krnk.org

> 10秒間に100回以上リクエストをすると「429 Too many Requests」が返されます。
APIのレートリミットの緩和を行いたい場合は[お問い合わせ](https://discord.krnk.org)をお願いします。
※APIの制限は提供しているAPIサービスと制限は共有されています。
{.is-danger}