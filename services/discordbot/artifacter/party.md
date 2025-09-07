---
title: /party
description: 
published: true
date: 2025-03-13T07:29:17.279Z
tags: discordbot, 原神, artifacter
editor: markdown
dateCreated: 2025-03-13T06:59:09.871Z
---

# /party
## 概要
原神のパーティービルドカードを生成します。

## 使用方法
```
/party <option>
```

オプション名 | 概要 | 必要かどうか
--- | --- | --
uid / user | 他のユーザーのデータを表示する。 | いいえ
score | スコアの計算式を変更する。 | いいえ

scoreオプションの値
scoreオプションには以下のいずれかが入力可能です
- 攻撃力換算
- HP換算
- 防御力換算
- 元素チャージ効率換算
- 元素熟知換算


## 動作
```mermaid
graph LR
    A{/party}
    A -->|uid / user を指定した場合| B[指定したユーザーのデータを表示]
    A -->|指定していない場合| C{あなたのデータを表示}
    C -->|uidを登録していない場合| D[uid登録フォームを表示]
    C -->|uidが登録されている場合| E[データを表示]
```

## 生成後画像プレビュー
![image](https://artifacter.krnk.org/img/image2.webp "通常サンプル")