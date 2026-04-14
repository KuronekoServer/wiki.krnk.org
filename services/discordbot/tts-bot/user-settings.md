---
title: /user-settings
description: 
published: true
date: 2026-04-14T00:00:00.000Z
tags: discordbot, tts, 読み上げbot, user-settings
editor: markdown
dateCreated: 2026-04-14T00:00:00.000Z
---

# /user-settings
## 概要
/user-settings は、個人の読み上げ設定をサーバー内でまとめて管理するためのグループコマンドです。
このグループはサーバー内専用です。

## サブコマンド一覧
コマンド名 | 概要 | 補足
-- | -- | --
/user-settings speed | 読み上げ速度を変更します。 | [/setspeed](voice-settings.md) と同じ範囲です。
/user-settings pitch | 読み上げピッチを変更します。 | [/setpitch](voice-settings.md) と同じ範囲です。
/user-settings intonation | イントネーションを変更します。 | [/setintonation](voice-settings.md) と同じ範囲です。
/user-settings volume | 音量を変更します。 | [/setvolume](voice-settings.md) と同じ範囲です。
/user-settings sync | 個人設定を他のKuronekoServer系BOTへ同期します。 | 確認ボタンが表示されます。
/user-settings reset | 個人設定を初期化します。 | 確認ボタンが表示されます。
/user-settings show | 現在の個人設定を表示します。 | 現在値を一覧で確認できます。

## 使用例
```text
/user-settings speed スピード:1.2
/user-settings pitch ピッチ:1.0
/user-settings intonation イントネーション:1.0
/user-settings volume 音量:0.9
/user-settings show
```

## /user-settings sync
現在の個人設定を、同一系列のほかのKuronekoServer系読み上げBOTへコピーします。

```text
/user-settings sync
```

補足:
- 同期先のBOTにある個人設定は上書きされます。
- 実行前に確認ボタンが表示されます。

## /user-settings reset
個人設定をデフォルトへ戻します。

```text
/user-settings reset
```

補足:
- 現在の設定は破棄されます。
- 実行前に確認ボタンが表示されます。

## /user-settings show
現在の話者、速度、ピッチ、イントネーション、音量などを表示します。

```text
/user-settings show
```

## 関連ページ
- [音声設定コマンド](voice-settings.md)