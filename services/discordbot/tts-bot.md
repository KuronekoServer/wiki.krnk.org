---
title: 読み上げBOT
description: 
published: true
date: 2026-04-14T00:00:00.000Z
tags: discordbot, tts, 読み上げbot, voicevox, voiceroid, a.i.voice
editor: markdown
dateCreated: 2025-04-14T06:46:56.102Z
---

# 読み上げBOT
## 読み上げBOTについて
読み上げBOTはテキストチャンネルやVC内チャットの内容を音声合成で読み上げるBOTです。
ボイスチャンネルへの接続、話者や読み上げパラメータの調整、辞書登録、サーバー単位の管理をスラッシュコマンドから行えます。

一部の機能は、[有料プラン](tts-bot/payment.md)の契約とサーバー管理権限が必要です。

## コマンド一覧及びガイドページ
### 基本操作
コマンド名 | 概要 | ガイド
-- | -- | --
[/join](tts-bot/basic-commands.md) | ボイスチャンネルに参加します。 | [接続コマンド](tts-bot/basic-commands.md)
[/disconnect](tts-bot/basic-commands.md) | ボイスチャンネルから切断します。 | [接続コマンド](tts-bot/basic-commands.md)
[/skip](tts-bot/basic-commands.md) | 現在の読み上げをスキップします。 | [接続コマンド](tts-bot/basic-commands.md)

### 個人設定
コマンド名 | 概要 | ガイド
-- | -- | --
[/setvoice](tts-bot/voice-settings.md) | 自分の話者を変更します。 | [音声設定コマンド](tts-bot/voice-settings.md)
[/setspeed](tts-bot/voice-settings.md) | 自分の読み上げ速度を変更します。 | [音声設定コマンド](tts-bot/voice-settings.md)
[/setpitch](tts-bot/voice-settings.md) | 自分の読み上げピッチを変更します。 | [音声設定コマンド](tts-bot/voice-settings.md)
[/setintonation](tts-bot/voice-settings.md) | 自分のイントネーションを変更します。 | [音声設定コマンド](tts-bot/voice-settings.md)
[/setvolume](tts-bot/voice-settings.md) | 自分の読み上げ音量を変更します。 | [音声設定コマンド](tts-bot/voice-settings.md)
[/user-settings speed](tts-bot/user-settings.md) | 個人設定をグループ形式で変更します。 | [/user-settings](tts-bot/user-settings.md)
[/user-settings pitch](tts-bot/user-settings.md) | 個人設定をグループ形式で変更します。 | [/user-settings](tts-bot/user-settings.md)
[/user-settings intonation](tts-bot/user-settings.md) | 個人設定をグループ形式で変更します。 | [/user-settings](tts-bot/user-settings.md)
[/user-settings volume](tts-bot/user-settings.md) | 個人設定をグループ形式で変更します。 | [/user-settings](tts-bot/user-settings.md)
[/user-settings sync](tts-bot/user-settings.md) | 他のKuronekoServer系BOTへ個人設定を同期します。 | [/user-settings](tts-bot/user-settings.md)
[/user-settings reset](tts-bot/user-settings.md) | 個人設定を初期化します。 | [/user-settings](tts-bot/user-settings.md)
[/user-settings show](tts-bot/user-settings.md) | 現在の個人設定を表示します。 | [/user-settings](tts-bot/user-settings.md)

### チャンネルと辞書
コマンド名 | 概要 | ガイド
-- | -- | --
[/channel connect-category](tts-bot/channel.md) | 現在のカテゴリ配下のテキストチャンネルをまとめて読み上げ対象にします。 | [/channel](tts-bot/channel.md)
[/channel disconnect](tts-bot/channel.md) | 現在のチャンネルを読み上げ対象から外します。 | [/channel](tts-bot/channel.md)
[/channel disconnect-category](tts-bot/channel.md) | 現在のカテゴリ配下の読み上げ接続を解除します。 | [/channel](tts-bot/channel.md)
[/channel list](tts-bot/channel.md) | 現在読み上げ対象になっているチャンネル一覧を表示します。 | [/channel](tts-bot/channel.md)
[/channel link add](tts-bot/channel.md) | BOTがVCへ参加したときに自動で読むテキストチャンネルを紐付けます。 | [/channel](tts-bot/channel.md)
[/channel link remove](tts-bot/channel.md) | チャンネル紐付けを解除します。 | [/channel](tts-bot/channel.md)
[/channel link list](tts-bot/channel.md) | 登録済みのチャンネル紐付けを確認します。 | [/channel](tts-bot/channel.md)
[/dictionary help](tts-bot/dictionary.md) | サーバー辞書コマンドの一覧を表示します。 | [/dictionary](tts-bot/dictionary.md)
[/dictionary add](tts-bot/dictionary.md) | サーバー共有の辞書に単語を登録します。 | [/dictionary](tts-bot/dictionary.md)
[/dictionary remove](tts-bot/dictionary.md) | サーバー共有の辞書から単語を削除します。 | [/dictionary](tts-bot/dictionary.md)
[/dictionary export](tts-bot/dictionary.md) | サーバー共有の辞書を出力します。 | [/dictionary](tts-bot/dictionary.md)
[/dictionary import](tts-bot/dictionary.md) | サーバー共有の辞書を取り込みます。 | [/dictionary](tts-bot/dictionary.md)
[/dictionary list](tts-bot/dictionary.md) | サーバー共有の辞書一覧を表示します。 | [/dictionary](tts-bot/dictionary.md)
[/dictionary search](tts-bot/dictionary.md) | サーバー共有の辞書を検索します。 | [/dictionary](tts-bot/dictionary.md)
[/dictionary reset](tts-bot/dictionary.md) | サーバー共有の辞書を初期化します。 | [/dictionary](tts-bot/dictionary.md)
[/dictionary sync](tts-bot/dictionary.md) | 他のKuronekoServer系BOTへ辞書を同期します。 | [/dictionary](tts-bot/dictionary.md)
[/user-dictionary help](tts-bot/user-dictionary.md) | 個人辞書コマンドの一覧を表示します。 | [/user-dictionary](tts-bot/user-dictionary.md)
[/user-dictionary add](tts-bot/user-dictionary.md) | 自分専用の辞書に単語を登録します。 | [/user-dictionary](tts-bot/user-dictionary.md)
[/user-dictionary remove](tts-bot/user-dictionary.md) | 自分専用の辞書から単語を削除します。 | [/user-dictionary](tts-bot/user-dictionary.md)
[/user-dictionary export](tts-bot/user-dictionary.md) | 自分専用の辞書を出力します。 | [/user-dictionary](tts-bot/user-dictionary.md)
[/user-dictionary import](tts-bot/user-dictionary.md) | 自分専用の辞書を取り込みます。 | [/user-dictionary](tts-bot/user-dictionary.md)
[/user-dictionary list](tts-bot/user-dictionary.md) | 自分専用の辞書一覧を表示します。 | [/user-dictionary](tts-bot/user-dictionary.md)
[/user-dictionary search](tts-bot/user-dictionary.md) | 自分専用の辞書を検索します。 | [/user-dictionary](tts-bot/user-dictionary.md)
[/user-dictionary reset](tts-bot/user-dictionary.md) | 自分専用の辞書を初期化します。 | [/user-dictionary](tts-bot/user-dictionary.md)

### 案内とユーティリティ
コマンド名 | 概要 | ガイド
-- | -- | --
[/help](tts-bot/utility.md) | BOTの説明とコマンド一覧を表示します。 | [ユーティリティコマンド](tts-bot/utility.md)
[/ping](tts-bot/utility.md) | BOTの応答速度を確認します。 | [ユーティリティコマンド](tts-bot/utility.md)
[/exvoice](tts-bot/utility.md) | 利用可能なExVoice一覧への案内を表示します。 | [ユーティリティコマンド](tts-bot/utility.md)
[/invite](tts-bot/utility.md) | 招待リンクを表示します。 | [ユーティリティコマンド](tts-bot/utility.md)

### サーバー管理者向け
コマンド名 | 概要 | ガイド
-- | -- | --
[/server-settings ...](tts-bot/server-settings.md) | サーバー標準の話者や辞書、読み上げ挙動を管理します。 | [/server-settings](tts-bot/server-settings.md)
[/subscription ...](tts-bot/subscription.md) | 有料プランのコード登録や契約状況の確認を行います。 | [/subscription](tts-bot/subscription.md)

## 補足
内部運用向けの`/admin`と開発用の`/debug`は一般向けガイドから除外しています。
