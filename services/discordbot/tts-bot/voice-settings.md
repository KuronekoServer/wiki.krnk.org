---
title: 音声設定コマンド
description: 
published: true
date: 2026-04-14T00:00:00.000Z
tags: discordbot, tts, 読み上げbot, speaker
editor: markdown
dateCreated: 2026-04-14T00:00:00.000Z
---

# 音声設定コマンド
## 概要
以下のコマンドは、自分専用の話者や読み上げパラメータを変更するためのコマンドです。
サーバー側で標準話者や標準パラメータの強制が有効になっている場合は、個人設定よりサーバー設定が優先されます。

## コマンド一覧
コマンド名 | 概要 | 補足
-- | -- | --
/setvoice | 話者を変更します。 | 引数なしで選択UIを開けます。
/setspeed | 読み上げ速度を変更します。 | 0.5から4.0、未指定でリセット
/setpitch | 読み上げピッチを変更します。 | BOT設定で許可された範囲、未指定でリセット
/setintonation | イントネーションを変更します。 | 0.0から2.0、未指定でリセット
/setvolume | 音量を変更します。 | 0.1から3.0、未指定でリセット

## 使用例
```text
/setvoice 話者:四国めたん
/setspeed スピード:1.2
/setpitch ピッチ:1.1
/setintonation イントネーション:1.0
/setvolume 音量:0.8
```

## /setvoice
自分の話者を変更します。

```text
/setvoice 話者:ずんだもん
/setvoice
```

補足:
- 話者名はオートコンプリートから選択できます。
- 引数を省略すると選択メニューが表示されます。

## /setspeed
読み上げ速度を変更します。

```text
/setspeed スピード:1.0
/setspeed
```

補足:
- 0.5から4.0の範囲で指定します。
- 引数なしで実行するとデフォルト値へ戻します。

## /setpitch
読み上げピッチを変更します。

```text
/setpitch ピッチ:1.0
/setpitch
```

補足:
- 設定可能な範囲はBOT側の音声エンジン設定に従います。
- 引数なしで実行するとデフォルト値へ戻します。

## /setintonation
読み上げの抑揚を変更します。

```text
/setintonation イントネーション:1.0
/setintonation
```

補足:
- 0.0から2.0の範囲で指定します。
- 引数なしで実行するとデフォルト値へ戻します。

## /setvolume
読み上げ音量を変更します。

```text
/setvolume 音量:1.0
/setvolume
```

補足:
- 0.1から3.0の範囲で指定します。
- 引数なしで実行するとデフォルト値へ戻します。

## 関連ページ
- [/user-settings](user-settings.md)
- [/server-settings](server-settings.md)