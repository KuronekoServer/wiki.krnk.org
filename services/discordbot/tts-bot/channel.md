---
title: /channel
description: 
published: true
date: 2026-04-14T00:00:00.000Z
tags: discordbot, tts, 読み上げbot, channel
editor: markdown
dateCreated: 2026-04-14T00:00:00.000Z
---

# /channel
## 概要
/channel は、読み上げ対象のテキストチャンネルやカテゴリ、VCごとの自動紐付けを管理するためのグループコマンドです。

## ユーザー向けサブコマンド
コマンド名 | 概要 | 補足
-- | -- | --
/channel connect-category | 現在のカテゴリ配下にあるテキストチャンネルをまとめて読み上げ対象にします。 | 実行チャンネルがカテゴリ内にあり、実行者がVCへ参加している必要があります。
/channel disconnect | 現在のチャンネルを読み上げ対象から外します。 | BOT接続中のみ利用できます。
/channel disconnect-category | 現在のカテゴリ配下にある読み上げ対象をまとめて解除します。 | 実行チャンネルがカテゴリ内にある必要があります。
/channel list | 現在読み上げ対象になっているチャンネル一覧を表示します。 | BOT接続中のみ利用できます。

## /channel connect-category
現在のカテゴリにあるテキストチャンネルを、まとめて読み上げ対象へ追加します。

```text
/channel connect-category
```

補足:
- 実行者がVCへ接続している必要があります。
- BOTが未接続なら、実行者が参加しているVCへ接続してからカテゴリの読み上げを開始します。

## /channel disconnect
現在のチャンネルを読み上げ対象から外します。

```text
/channel disconnect
```

## /channel disconnect-category
現在のカテゴリ配下に登録されている読み上げ対象をまとめて解除します。

```text
/channel disconnect-category
```

## /channel list
現在読み上げ中のチャンネル一覧を表示します。

```text
/channel list
```

## 管理者向け /channel link
コマンド名 | 概要 | 補足
-- | -- | --
/channel link add | BOTがVCへ参加したときに自動で読み上げるテキストチャンネルを登録します。 | サーバー管理権限が必要です。
/channel link remove | 既存のチャンネル紐付けを解除します。 | テキストチャンネル省略時はVCの紐付けをまとめて解除します。
/channel link list | 登録済みのチャンネル紐付けを確認します。 | VCを指定するとそのVCだけ確認できます。

### /channel link add
```text
/channel link add ボイスチャンネル:#雑談VC テキストチャンネル:#tts
```

### /channel link remove
```text
/channel link remove ボイスチャンネル:#雑談VC
/channel link remove ボイスチャンネル:#雑談VC テキストチャンネル:#tts
```

### /channel link list
```text
/channel link list
/channel link list ボイスチャンネル:#雑談VC
```

## 関連ページ
- [接続コマンド](basic-commands.md)
- [/server-settings](server-settings.md)