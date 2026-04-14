---
title: /subscription
description: 
published: true
date: 2026-04-14T00:00:00.000Z
tags: discordbot, tts, 読み上げbot, subscription
editor: markdown
dateCreated: 2026-04-14T00:00:00.000Z
---

# /subscription
## 概要
/subscription は、有料プランの適用状況を確認したり、サブスクリプションコードを登録したりするためのコマンドです。
サーバー内専用で、サーバー管理者向けのコマンドです。

## サブコマンド一覧
コマンド名 | 概要 | 補足
-- | -- | --
/subscription register | サブスクリプションコードを登録します。 | コード入力用のフォームが開きます。
/subscription unregister | 現在適用されているコードを解除します。 | 登録者またはサーバー管理者が実行できます。
/subscription info | 現在のプランと上限値を表示します。 | 未加入時は加入ページへの案内も表示されます。

## /subscription register
サーバーへサブスクリプションコードを登録します。

```text
/subscription register
```

補足:
- 実行するとコード入力フォームが開きます。
- すでに別のコードが適用されているサーバーでは登録できません。

## /subscription unregister
現在適用されているサブスクリプションコードを解除します。

```text
/subscription unregister
```

補足:
- コード登録者、またはサーバー管理権限を持つユーザーが実行できます。

## /subscription info
現在のプラン、文字数上限、辞書上限などを表示します。

```text
/subscription info
```

## 関連ページ
- [有料プランについて](payment.md)
- [/server-settings](server-settings.md)