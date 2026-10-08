---
title: "语音朗读 BOT"
lastUpdated: 2026-04-14T00:00:00.000Z
---


# 语音朗读 BOT
## 关于语音朗读 BOT
语音朗读 BOT 使用语音合成朗读文字频道及语音频道内聊天的内容。
可通过斜杠命令连接语音频道、调整说话人和朗读参数、登记词典，以及管理服务器设置。

部分功能需要订阅[付费套餐](/zh-hans/services/discordbot/tts-bot/payment/)并拥有服务器管理权限。

## 命令列表与使用指南
### 基本操作
命令名称 | 概述 | 指南
-- | -- | --
[/join](/zh-hans/services/discordbot/tts-bot/basic-commands/) | 加入语音频道。 | [连接命令](/zh-hans/services/discordbot/tts-bot/basic-commands/)
[/disconnect](/zh-hans/services/discordbot/tts-bot/basic-commands/) | 断开语音频道连接。 | [连接命令](/zh-hans/services/discordbot/tts-bot/basic-commands/)
[/skip](/zh-hans/services/discordbot/tts-bot/basic-commands/) | 跳过当前朗读。 | [连接命令](/zh-hans/services/discordbot/tts-bot/basic-commands/)

### 个人设置
命令名称 | 概述 | 指南
-- | -- | --
[/setvoice](/zh-hans/services/discordbot/tts-bot/voice-settings/) | 更改自己的说话人。 | [语音设置命令](/zh-hans/services/discordbot/tts-bot/voice-settings/)
[/setspeed](/zh-hans/services/discordbot/tts-bot/voice-settings/) | 更改自己的朗读速度。 | [语音设置命令](/zh-hans/services/discordbot/tts-bot/voice-settings/)
[/setpitch](/zh-hans/services/discordbot/tts-bot/voice-settings/) | 更改自己的朗读音高。 | [语音设置命令](/zh-hans/services/discordbot/tts-bot/voice-settings/)
[/setintonation](/zh-hans/services/discordbot/tts-bot/voice-settings/) | 更改自己的语调。 | [语音设置命令](/zh-hans/services/discordbot/tts-bot/voice-settings/)
[/setvolume](/zh-hans/services/discordbot/tts-bot/voice-settings/) | 更改自己的朗读音量。 | [语音设置命令](/zh-hans/services/discordbot/tts-bot/voice-settings/)
[/user-settings speed](/zh-hans/services/discordbot/tts-bot/user-settings/) | 通过命令组更改个人设置。 | [/user-settings](/zh-hans/services/discordbot/tts-bot/user-settings/)
[/user-settings pitch](/zh-hans/services/discordbot/tts-bot/user-settings/) | 通过命令组更改个人设置。 | [/user-settings](/zh-hans/services/discordbot/tts-bot/user-settings/)
[/user-settings intonation](/zh-hans/services/discordbot/tts-bot/user-settings/) | 通过命令组更改个人设置。 | [/user-settings](/zh-hans/services/discordbot/tts-bot/user-settings/)
[/user-settings volume](/zh-hans/services/discordbot/tts-bot/user-settings/) | 通过命令组更改个人设置。 | [/user-settings](/zh-hans/services/discordbot/tts-bot/user-settings/)
[/user-settings sync](/zh-hans/services/discordbot/tts-bot/user-settings/) | 将个人设置同步到其他 KuronekoServer 系列 BOT。 | [/user-settings](/zh-hans/services/discordbot/tts-bot/user-settings/)
[/user-settings reset](/zh-hans/services/discordbot/tts-bot/user-settings/) | 重置个人设置。 | [/user-settings](/zh-hans/services/discordbot/tts-bot/user-settings/)
[/user-settings show](/zh-hans/services/discordbot/tts-bot/user-settings/) | 显示当前个人设置。 | [/user-settings](/zh-hans/services/discordbot/tts-bot/user-settings/)

### 频道与词典
命令名称 | 概述 | 指南
-- | -- | --
[/channel connect-category](/zh-hans/services/discordbot/tts-bot/channel/) | 将当前分类下的文字频道批量设为朗读对象。 | [/channel](/zh-hans/services/discordbot/tts-bot/channel/)
[/channel disconnect](/zh-hans/services/discordbot/tts-bot/channel/) | 将当前频道从朗读对象中移除。 | [/channel](/zh-hans/services/discordbot/tts-bot/channel/)
[/channel disconnect-category](/zh-hans/services/discordbot/tts-bot/channel/) | 取消当前分类下的朗读连接。 | [/channel](/zh-hans/services/discordbot/tts-bot/channel/)
[/channel list](/zh-hans/services/discordbot/tts-bot/channel/) | 显示当前朗读频道的列表。 | [/channel](/zh-hans/services/discordbot/tts-bot/channel/)
[/channel link add](/zh-hans/services/discordbot/tts-bot/channel/) | 绑定 BOT 加入语音频道时自动朗读的文字频道。 | [/channel](/zh-hans/services/discordbot/tts-bot/channel/)
[/channel link remove](/zh-hans/services/discordbot/tts-bot/channel/) | 解除频道绑定。 | [/channel](/zh-hans/services/discordbot/tts-bot/channel/)
[/channel link list](/zh-hans/services/discordbot/tts-bot/channel/) | 查看已登记的频道绑定。 | [/channel](/zh-hans/services/discordbot/tts-bot/channel/)
[/dictionary help](/zh-hans/services/discordbot/tts-bot/dictionary/) | 显示服务器词典命令列表。 | [/dictionary](/zh-hans/services/discordbot/tts-bot/dictionary/)
[/dictionary add](/zh-hans/services/discordbot/tts-bot/dictionary/) | 向服务器共享词典登记词语。 | [/dictionary](/zh-hans/services/discordbot/tts-bot/dictionary/)
[/dictionary remove](/zh-hans/services/discordbot/tts-bot/dictionary/) | 从服务器共享词典删除词语。 | [/dictionary](/zh-hans/services/discordbot/tts-bot/dictionary/)
[/dictionary export](/zh-hans/services/discordbot/tts-bot/dictionary/) | 导出服务器共享词典。 | [/dictionary](/zh-hans/services/discordbot/tts-bot/dictionary/)
[/dictionary import](/zh-hans/services/discordbot/tts-bot/dictionary/) | 导入服务器共享词典。 | [/dictionary](/zh-hans/services/discordbot/tts-bot/dictionary/)
[/dictionary list](/zh-hans/services/discordbot/tts-bot/dictionary/) | 显示服务器共享词典列表。 | [/dictionary](/zh-hans/services/discordbot/tts-bot/dictionary/)
[/dictionary search](/zh-hans/services/discordbot/tts-bot/dictionary/) | 搜索服务器共享词典。 | [/dictionary](/zh-hans/services/discordbot/tts-bot/dictionary/)
[/dictionary reset](/zh-hans/services/discordbot/tts-bot/dictionary/) | 重置服务器共享词典。 | [/dictionary](/zh-hans/services/discordbot/tts-bot/dictionary/)
[/dictionary sync](/zh-hans/services/discordbot/tts-bot/dictionary/) | 将词典同步到其他 KuronekoServer 系列 BOT。 | [/dictionary](/zh-hans/services/discordbot/tts-bot/dictionary/)
[/user-dictionary help](/zh-hans/services/discordbot/tts-bot/user-dictionary/) | 显示个人词典命令列表。 | [/user-dictionary](/zh-hans/services/discordbot/tts-bot/user-dictionary/)
[/user-dictionary add](/zh-hans/services/discordbot/tts-bot/user-dictionary/) | 向自己的专用词典登记词语。 | [/user-dictionary](/zh-hans/services/discordbot/tts-bot/user-dictionary/)
[/user-dictionary remove](/zh-hans/services/discordbot/tts-bot/user-dictionary/) | 从自己的专用词典删除词语。 | [/user-dictionary](/zh-hans/services/discordbot/tts-bot/user-dictionary/)
[/user-dictionary export](/zh-hans/services/discordbot/tts-bot/user-dictionary/) | 导出自己的专用词典。 | [/user-dictionary](/zh-hans/services/discordbot/tts-bot/user-dictionary/)
[/user-dictionary import](/zh-hans/services/discordbot/tts-bot/user-dictionary/) | 导入自己的专用词典。 | [/user-dictionary](/zh-hans/services/discordbot/tts-bot/user-dictionary/)
[/user-dictionary list](/zh-hans/services/discordbot/tts-bot/user-dictionary/) | 显示自己的专用词典列表。 | [/user-dictionary](/zh-hans/services/discordbot/tts-bot/user-dictionary/)
[/user-dictionary search](/zh-hans/services/discordbot/tts-bot/user-dictionary/) | 搜索自己的专用词典。 | [/user-dictionary](/zh-hans/services/discordbot/tts-bot/user-dictionary/)
[/user-dictionary reset](/zh-hans/services/discordbot/tts-bot/user-dictionary/) | 重置自己的专用词典。 | [/user-dictionary](/zh-hans/services/discordbot/tts-bot/user-dictionary/)

### 帮助与实用功能
命令名称 | 概述 | 指南
-- | -- | --
[/help](/zh-hans/services/discordbot/tts-bot/utility/) | 显示 BOT 说明和命令列表。 | [实用命令](/zh-hans/services/discordbot/tts-bot/utility/)
[/ping](/zh-hans/services/discordbot/tts-bot/utility/) | 检查 BOT 的响应速度。 | [实用命令](/zh-hans/services/discordbot/tts-bot/utility/)
[/exvoice](/zh-hans/services/discordbot/tts-bot/utility/) | 显示可用 ExVoice 列表的访问指引。 | [实用命令](/zh-hans/services/discordbot/tts-bot/utility/)
[/invite](/zh-hans/services/discordbot/tts-bot/utility/) | 显示邀请链接。 | [实用命令](/zh-hans/services/discordbot/tts-bot/utility/)

### 面向服务器管理员
命令名称 | 概述 | 指南
-- | -- | --
[/server-settings ...](/zh-hans/services/discordbot/tts-bot/server-settings/) | 管理服务器默认说话人、词典和朗读行为。 | [/server-settings](/zh-hans/services/discordbot/tts-bot/server-settings/)
[/subscription ...](/zh-hans/services/discordbot/tts-bot/subscription/) | 登记付费套餐代码，或查看订阅状态。 | [/subscription](/zh-hans/services/discordbot/tts-bot/subscription/)

## 补充说明
面向内部运营的 `/admin` 和开发用的 `/debug` 不包含在普通用户指南中。
