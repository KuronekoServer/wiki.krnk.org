---
title: "読み上げBOT"
lastUpdated: 2026-04-14T00:00:00.000Z
---


# 読み上げBOT
## 読み上げBOTについて
読み上げBOTはテキストチャンネルやVC内チャットの内容を音声合成で読み上げるBOTです。
ボイスチャンネルへの接続、話者や読み上げパラメータの調整、辞書登録、サーバー単位の管理をスラッシュコマンドから行えます。

一部の機能は、[有料プラン](/services/discordbot/tts-bot/payment/)の契約とサーバー管理権限が必要です。

## コマンド一覧及びガイドページ
### 基本操作
コマンド名 | 概要 | ガイド
-- | -- | --
[/join](/services/discordbot/tts-bot/basic-commands/) | ボイスチャンネルに参加します。 | [接続コマンド](/services/discordbot/tts-bot/basic-commands/)
[/disconnect](/services/discordbot/tts-bot/basic-commands/) | ボイスチャンネルから切断します。 | [接続コマンド](/services/discordbot/tts-bot/basic-commands/)
[/skip](/services/discordbot/tts-bot/basic-commands/) | 現在の読み上げをスキップします。 | [接続コマンド](/services/discordbot/tts-bot/basic-commands/)

### 個人設定
コマンド名 | 概要 | ガイド
-- | -- | --
[/setvoice](/services/discordbot/tts-bot/voice-settings/) | 自分の話者を変更します。 | [音声設定コマンド](/services/discordbot/tts-bot/voice-settings/)
[/setspeed](/services/discordbot/tts-bot/voice-settings/) | 自分の読み上げ速度を変更します。 | [音声設定コマンド](/services/discordbot/tts-bot/voice-settings/)
[/setpitch](/services/discordbot/tts-bot/voice-settings/) | 自分の読み上げピッチを変更します。 | [音声設定コマンド](/services/discordbot/tts-bot/voice-settings/)
[/setintonation](/services/discordbot/tts-bot/voice-settings/) | 自分のイントネーションを変更します。 | [音声設定コマンド](/services/discordbot/tts-bot/voice-settings/)
[/setvolume](/services/discordbot/tts-bot/voice-settings/) | 自分の読み上げ音量を変更します。 | [音声設定コマンド](/services/discordbot/tts-bot/voice-settings/)
[/user-settings speed](/services/discordbot/tts-bot/user-settings/) | 個人設定をグループ形式で変更します。 | [/user-settings](/services/discordbot/tts-bot/user-settings/)
[/user-settings pitch](/services/discordbot/tts-bot/user-settings/) | 個人設定をグループ形式で変更します。 | [/user-settings](/services/discordbot/tts-bot/user-settings/)
[/user-settings intonation](/services/discordbot/tts-bot/user-settings/) | 個人設定をグループ形式で変更します。 | [/user-settings](/services/discordbot/tts-bot/user-settings/)
[/user-settings volume](/services/discordbot/tts-bot/user-settings/) | 個人設定をグループ形式で変更します。 | [/user-settings](/services/discordbot/tts-bot/user-settings/)
[/user-settings sync](/services/discordbot/tts-bot/user-settings/) | 他のKuronekoServer系BOTへ個人設定を同期します。 | [/user-settings](/services/discordbot/tts-bot/user-settings/)
[/user-settings reset](/services/discordbot/tts-bot/user-settings/) | 個人設定を初期化します。 | [/user-settings](/services/discordbot/tts-bot/user-settings/)
[/user-settings show](/services/discordbot/tts-bot/user-settings/) | 現在の個人設定を表示します。 | [/user-settings](/services/discordbot/tts-bot/user-settings/)

### チャンネルと辞書
コマンド名 | 概要 | ガイド
-- | -- | --
[/channel connect-category](/services/discordbot/tts-bot/channel/) | 現在のカテゴリ配下のテキストチャンネルをまとめて読み上げ対象にします。 | [/channel](/services/discordbot/tts-bot/channel/)
[/channel disconnect](/services/discordbot/tts-bot/channel/) | 現在のチャンネルを読み上げ対象から外します。 | [/channel](/services/discordbot/tts-bot/channel/)
[/channel disconnect-category](/services/discordbot/tts-bot/channel/) | 現在のカテゴリ配下の読み上げ接続を解除します。 | [/channel](/services/discordbot/tts-bot/channel/)
[/channel list](/services/discordbot/tts-bot/channel/) | 現在読み上げ対象になっているチャンネル一覧を表示します。 | [/channel](/services/discordbot/tts-bot/channel/)
[/channel link add](/services/discordbot/tts-bot/channel/) | BOTがVCへ参加したときに自動で読むテキストチャンネルを紐付けます。 | [/channel](/services/discordbot/tts-bot/channel/)
[/channel link remove](/services/discordbot/tts-bot/channel/) | チャンネル紐付けを解除します。 | [/channel](/services/discordbot/tts-bot/channel/)
[/channel link list](/services/discordbot/tts-bot/channel/) | 登録済みのチャンネル紐付けを確認します。 | [/channel](/services/discordbot/tts-bot/channel/)
[/dictionary help](/services/discordbot/tts-bot/dictionary/) | サーバー辞書コマンドの一覧を表示します。 | [/dictionary](/services/discordbot/tts-bot/dictionary/)
[/dictionary add](/services/discordbot/tts-bot/dictionary/) | サーバー共有の辞書に単語を登録します。 | [/dictionary](/services/discordbot/tts-bot/dictionary/)
[/dictionary remove](/services/discordbot/tts-bot/dictionary/) | サーバー共有の辞書から単語を削除します。 | [/dictionary](/services/discordbot/tts-bot/dictionary/)
[/dictionary export](/services/discordbot/tts-bot/dictionary/) | サーバー共有の辞書を出力します。 | [/dictionary](/services/discordbot/tts-bot/dictionary/)
[/dictionary import](/services/discordbot/tts-bot/dictionary/) | サーバー共有の辞書を取り込みます。 | [/dictionary](/services/discordbot/tts-bot/dictionary/)
[/dictionary list](/services/discordbot/tts-bot/dictionary/) | サーバー共有の辞書一覧を表示します。 | [/dictionary](/services/discordbot/tts-bot/dictionary/)
[/dictionary search](/services/discordbot/tts-bot/dictionary/) | サーバー共有の辞書を検索します。 | [/dictionary](/services/discordbot/tts-bot/dictionary/)
[/dictionary reset](/services/discordbot/tts-bot/dictionary/) | サーバー共有の辞書を初期化します。 | [/dictionary](/services/discordbot/tts-bot/dictionary/)
[/dictionary sync](/services/discordbot/tts-bot/dictionary/) | 他のKuronekoServer系BOTへ辞書を同期します。 | [/dictionary](/services/discordbot/tts-bot/dictionary/)
[/user-dictionary help](/services/discordbot/tts-bot/user-dictionary/) | 個人辞書コマンドの一覧を表示します。 | [/user-dictionary](/services/discordbot/tts-bot/user-dictionary/)
[/user-dictionary add](/services/discordbot/tts-bot/user-dictionary/) | 自分専用の辞書に単語を登録します。 | [/user-dictionary](/services/discordbot/tts-bot/user-dictionary/)
[/user-dictionary remove](/services/discordbot/tts-bot/user-dictionary/) | 自分専用の辞書から単語を削除します。 | [/user-dictionary](/services/discordbot/tts-bot/user-dictionary/)
[/user-dictionary export](/services/discordbot/tts-bot/user-dictionary/) | 自分専用の辞書を出力します。 | [/user-dictionary](/services/discordbot/tts-bot/user-dictionary/)
[/user-dictionary import](/services/discordbot/tts-bot/user-dictionary/) | 自分専用の辞書を取り込みます。 | [/user-dictionary](/services/discordbot/tts-bot/user-dictionary/)
[/user-dictionary list](/services/discordbot/tts-bot/user-dictionary/) | 自分専用の辞書一覧を表示します。 | [/user-dictionary](/services/discordbot/tts-bot/user-dictionary/)
[/user-dictionary search](/services/discordbot/tts-bot/user-dictionary/) | 自分専用の辞書を検索します。 | [/user-dictionary](/services/discordbot/tts-bot/user-dictionary/)
[/user-dictionary reset](/services/discordbot/tts-bot/user-dictionary/) | 自分専用の辞書を初期化します。 | [/user-dictionary](/services/discordbot/tts-bot/user-dictionary/)

### 案内とユーティリティ
コマンド名 | 概要 | ガイド
-- | -- | --
[/help](/services/discordbot/tts-bot/utility/) | BOTの説明とコマンド一覧を表示します。 | [ユーティリティコマンド](/services/discordbot/tts-bot/utility/)
[/ping](/services/discordbot/tts-bot/utility/) | BOTの応答速度を確認します。 | [ユーティリティコマンド](/services/discordbot/tts-bot/utility/)
[/exvoice](/services/discordbot/tts-bot/utility/) | 利用可能なExVoice一覧への案内を表示します。 | [ユーティリティコマンド](/services/discordbot/tts-bot/utility/)
[/invite](/services/discordbot/tts-bot/utility/) | 招待リンクを表示します。 | [ユーティリティコマンド](/services/discordbot/tts-bot/utility/)

### サーバー管理者向け
コマンド名 | 概要 | ガイド
-- | -- | --
[/server-settings ...](/services/discordbot/tts-bot/server-settings/) | サーバー標準の話者や辞書、読み上げ挙動を管理します。 | [/server-settings](/services/discordbot/tts-bot/server-settings/)
[/subscription ...](/services/discordbot/tts-bot/subscription/) | 有料プランのコード登録や契約状況の確認を行います。 | [/subscription](/services/discordbot/tts-bot/subscription/)

## 補足
内部運用向けの`/admin`と開発用の`/debug`は一般向けガイドから除外しています。
