---
title: "/user-settings"
lastUpdated: 2026-04-14T00:00:00.000Z
---


# /user-settings
## 概述
/user-settings 是用于在服务器内统一管理个人朗读设置的命令组。
此命令组仅限在服务器内使用。

## 子命令列表
命令名称 | 概述 | 补充说明
-- | -- | --
/user-settings speed | 更改朗读速度。 | 与 [/setspeed](/zh-hans/services/discordbot/tts-bot/voice-settings/) 的范围相同。
/user-settings pitch | 更改朗读音高。 | 与 [/setpitch](/zh-hans/services/discordbot/tts-bot/voice-settings/) 的范围相同。
/user-settings intonation | 更改语调。 | 与 [/setintonation](/zh-hans/services/discordbot/tts-bot/voice-settings/) 的范围相同。
/user-settings volume | 更改音量。 | 与 [/setvolume](/zh-hans/services/discordbot/tts-bot/voice-settings/) 的范围相同。
/user-settings sync | 将个人设置同步到其他 KuronekoServer 系列 BOT。 | 会显示确认按钮。
/user-settings reset | 重置个人设置。 | 会显示确认按钮。
/user-settings show | 显示当前个人设置。 | 可在列表中查看当前值。

## 使用示例
```text
/user-settings speed スピード:1.2
/user-settings pitch ピッチ:1.0
/user-settings intonation イントネーション:1.0
/user-settings volume 音量:0.9
/user-settings show
```

## /user-settings sync
将当前个人设置复制到同一系列的其他 KuronekoServer 语音朗读 BOT。

```text
/user-settings sync
```

补充说明:
- 目标 BOT 的个人设置会被覆盖。
- 执行前会显示确认按钮。

## /user-settings reset
将个人设置恢复为默认值。

```text
/user-settings reset
```

补充说明:
- 当前设置将被丢弃。
- 执行前会显示确认按钮。

## /user-settings show
显示当前说话人、速度、音高、语调和音量等设置。

```text
/user-settings show
```

## 相关页面
- [语音设置命令](/zh-hans/services/discordbot/tts-bot/voice-settings/)
