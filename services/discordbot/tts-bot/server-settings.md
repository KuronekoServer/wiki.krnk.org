---
title: /server-settings
description: 
published: true
date: 2026-04-14T00:00:00.000Z
tags: discordbot, tts, 読み上げbot, server-settings
editor: markdown
dateCreated: 2026-04-14T00:00:00.000Z
---

# /server-settings
## 概要
/server-settings はサーバー単位の読み上げ設定を管理するためのグループコマンドです。
サーバー内専用で、サーバー管理権限が必要です。

## ダッシュボードと確認
コマンド名 | 概要 | 補足
-- | -- | --
/server-settings dashboard | Webダッシュボードを開きます。 | ボタンから設定画面へ移動できます。
/server-settings show | 現在のサーバー設定を表示します。 | インタラクティブな設定ビューが開きます。

## 標準音声の設定
コマンド名 | 概要 | 補足
-- | -- | --
/server-settings speaker | サーバー標準の話者を設定します。 | 引数なしで選択UIを開けます。
/server-settings speed | サーバー標準のスピードを設定します。 | 0.5から4.0、未指定でリセット
/server-settings pitch | サーバー標準のピッチを設定します。 | BOT設定の許容範囲、未指定でリセット
/server-settings intonation | サーバー標準のイントネーションを設定します。 | 0.0から2.0、未指定でリセット
/server-settings volume | サーバー標準の音量を設定します。 | 0.1から5.0、未指定でリセット
/server-settings force-guild-args | サーバー標準の速度、ピッチ、イントネーション、音量を強制します。 | 個人設定より優先されます。
/server-settings force-guild-speaker | サーバー標準の話者を強制します。 | 個人話者設定より優先されます。

## 話者制御
コマンド名 | 概要 | 補足
-- | -- | --
/server-settings disable-speaker add | 特定の話者を無効化します。 | デフォルト話者とサーバー標準話者は無効化できません。
/server-settings disable-speaker remove | 無効化した話者を再び有効化します。 | 話者名はオートコンプリート対応です。
/server-settings disable-speaker list | 無効化中の話者一覧を表示します。 | 一覧表示のみです。

## 読み上げ挙動の設定
コマンド名 | 概要 | 補足
-- | -- | --
/server-settings read-username | ユーザー名を読み上げるか切り替えます。 | true で有効、false で無効です。
/server-settings read-join-leave | 入退出時にユーザー名を読み上げるか切り替えます。 | true で有効、false で無効です。
/server-settings exvoice | ExVoiceを使うか切り替えます。 | サーバー内の読み上げ全体へ反映されます。
/server-settings prefix | サーバー専用のプリフィックスを設定します。 | カスタムプリフィックス機能が有効な環境で使えます。
/server-settings length-limit | 1メッセージあたりの最大読み上げ文字数を変更します。 | 30文字超かつ、プラン上限以内で指定します。
/server-settings read-emoji | 絵文字を読み上げるか切り替えます。 | true で有効、false で無効です。
/server-settings read-sticker | スタンプを読み上げるか切り替えます。 | true で有効、false で無効です。

## ExVoiceと対象ユーザーの管理
コマンド名 | 概要 | 補足
-- | -- | --
/server-settings exclude-exvoice add | 読み上げないExVoiceを追加します。 | 候補はオートコンプリートから選べます。
/server-settings exclude-exvoice remove | 除外したExVoiceを解除します。 | 候補はオートコンプリートから選べます。
/server-settings exclude-exvoice list | 除外中のExVoice一覧を表示します。 | 一覧表示のみです。
/server-settings read-bot add | 読み上げ対象にするBotを追加します。 | Basicプラン以上が必要です。
/server-settings read-bot remove | 読み上げ対象にしたBotを外します。 | Botユーザーだけ指定できます。
/server-settings read-bot toggle | Botメッセージ全体の読み上げを有効・無効化します。 | Basicプラン以上が必要です。
/server-settings exclude-user add | 特定ユーザーを読み上げ対象から除外します。 | 登録件数上限はプランで変わります。
/server-settings exclude-user remove | ユーザー除外を解除します。 | Botは対象外です。
/server-settings exclude-user list | 除外中のユーザー一覧を表示します。 | 一覧表示のみです。
/server-settings exclude-role add | 特定ロールを持つユーザーを読み上げ対象から除外します。 | 登録件数上限はプランで変わります。
/server-settings exclude-role remove | ロール除外を解除します。 | @everyone を指定すると全ロール解除になります。

## 自動接続と保守
コマンド名 | 概要 | 補足
-- | -- | --
/server-settings autojoin add | 指定VCへメンバーが参加したとき、BOTが自動接続する設定を追加します。 | テキストチャンネル省略時はVC内チャットを対象にします。
/server-settings autojoin remove | 自動接続設定を解除します。 | テキストチャンネル省略時はVC単位で解除します。
/server-settings autojoin list | 登録済みの自動接続設定を表示します。 | VCを指定するとそのVCだけ確認できます。
/server-settings sync | 現在のサーバー設定を他のKuronekoServer系BOTへ同期します。 | 同期先の設定は上書きされます。
/server-settings reset | サーバー設定を初期化します。 | 実行前に確認ボタンが表示されます。

## 使用例
```text
/server-settings speaker 話者:ずんだもん
/server-settings force-guild-args 強制する:true
/server-settings read-username 読み上げる:true
/server-settings autojoin add ボイスチャンネル:#雑談VC テキストチャンネル:#tts
/server-settings exclude-user add ユーザー:@example
/server-settings length-limit 文字数:120
```

## 料金に関わる補足
- `read-bot add` と `read-bot toggle` は Basicプラン以上で利用できます。
- `length-limit` の上限値、`exclude-user add` と `exclude-role add` の登録数上限はプランによって変わります。
- 詳細は [有料プランについて](payment.md) を参照してください。

## 関連ページ
- [/subscription](subscription.md)
- [有料プランについて](payment.md)