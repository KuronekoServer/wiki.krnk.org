---
title: "語音設定命令"
lastUpdated: 2026-04-14T00:00:00.000Z
---


# 語音設定命令
## 概述
以下命令用於更改自己的專用說話人或朗讀參數。
伺服器啓用強制使用預設說話人或預設參數時，伺服器設定優先於個人設定。

## 命令列表
命令名稱 | 概述 | 補充說明
-- | -- | --
/setvoice | 更改說話人。 | 不傳入參數即可開啟選擇介面。
/setspeed | 更改朗讀速度。 | 0.5 至 4.0；省略參數時重設
/setpitch | 更改朗讀音高。 | BOT 設定允許的範圍；省略參數時重設
/setintonation | 更改語調。 | 0.0 至 2.0；省略參數時重設
/setvolume | 更改音量。 | 0.1 至 3.0；省略參數時重設

## 使用示例
```text
/setvoice 話者:四国めたん
/setspeed スピード:1.2
/setpitch ピッチ:1.1
/setintonation イントネーション:1.0
/setvolume 音量:0.8
```

## /setvoice
更改自己的說話人。

```text
/setvoice 話者:ずんだもん
/setvoice
```

補充說明:
- 可透過自動完成選擇說話人名稱。
- 省略參數時會顯示選擇菜單。

## /setspeed
更改朗讀速度。

```text
/setspeed スピード:1.0
/setspeed
```

補充說明:
- 可指定 0.5 至 4.0。
- 不傳入參數執行時，會恢復爲預設值。

## /setpitch
更改朗讀音高。

```text
/setpitch ピッチ:1.0
/setpitch
```

補充說明:
- 可設定的範圍取決於 BOT 的語音引擎設定。
- 不傳入參數執行時，會恢復爲預設值。

## /setintonation
更改朗讀語調。

```text
/setintonation イントネーション:1.0
/setintonation
```

補充說明:
- 可指定 0.0 至 2.0。
- 不傳入參數執行時，會恢復爲預設值。

## /setvolume
更改朗讀音量。

```text
/setvolume 音量:1.0
/setvolume
```

補充說明:
- 可指定 0.1 至 3.0。
- 不傳入參數執行時，會恢復爲預設值。

## 相關頁面
- [/user-settings](/zh-hant/services/discordbot/tts-bot/user-settings/)
- [/server-settings](/zh-hant/services/discordbot/tts-bot/server-settings/)
