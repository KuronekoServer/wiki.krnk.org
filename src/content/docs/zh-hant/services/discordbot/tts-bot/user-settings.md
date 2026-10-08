---
title: "/user-settings"
lastUpdated: 2026-04-14T00:00:00.000Z
---


# /user-settings
## 概述
/user-settings 是用於在伺服器內統一管理個人朗讀設定的命令組。
此命令組僅限在伺服器內使用。

## 子命令列表
命令名稱 | 概述 | 補充說明
-- | -- | --
/user-settings speed | 更改朗讀速度。 | 與 [/setspeed](/zh-hant/services/discordbot/tts-bot/voice-settings/) 的範圍相同。
/user-settings pitch | 更改朗讀音高。 | 與 [/setpitch](/zh-hant/services/discordbot/tts-bot/voice-settings/) 的範圍相同。
/user-settings intonation | 更改語調。 | 與 [/setintonation](/zh-hant/services/discordbot/tts-bot/voice-settings/) 的範圍相同。
/user-settings volume | 更改音量。 | 與 [/setvolume](/zh-hant/services/discordbot/tts-bot/voice-settings/) 的範圍相同。
/user-settings sync | 將個人設定同步到其他 KuronekoServer 系列 BOT。 | 會顯示確認按鈕。
/user-settings reset | 重設個人設定。 | 會顯示確認按鈕。
/user-settings show | 顯示目前個人設定。 | 可在列表中查看目前值。

## 使用示例
```text
/user-settings speed スピード:1.2
/user-settings pitch ピッチ:1.0
/user-settings intonation イントネーション:1.0
/user-settings volume 音量:0.9
/user-settings show
```

## /user-settings sync
將目前個人設定複製到同一系列的其他 KuronekoServer 語音朗讀 BOT。

```text
/user-settings sync
```

補充說明:
- 目標 BOT 的個人設定會被覆蓋。
- 執行前會顯示確認按鈕。

## /user-settings reset
將個人設定恢復爲預設值。

```text
/user-settings reset
```

補充說明:
- 目前設定將被丟棄。
- 執行前會顯示確認按鈕。

## /user-settings show
顯示目前說話人、速度、音高、語調和音量等設定。

```text
/user-settings show
```

## 相關頁面
- [語音設定命令](/zh-hant/services/discordbot/tts-bot/voice-settings/)
