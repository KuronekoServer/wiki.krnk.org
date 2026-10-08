---
title: "/server-settings"
lastUpdated: 2026-04-14T00:00:00.000Z
---


# /server-settings
## 概述
/server-settings 是用于管理服务器朗读设置的命令组。
仅限在服务器内使用，且需要服务器管理权限。

## 控制面板与查看设置
命令名称 | 概述 | 补充说明
-- | -- | --
/server-settings dashboard | 打开 Web 控制面板。 | 可通过按钮进入设置页面。
/server-settings show | 显示当前服务器设置。 | 会打开交互式设置界面。

## 默认语音设置
命令名称 | 概述 | 补充说明
-- | -- | --
/server-settings speaker | 设置服务器默认说话人。 | 不传入参数即可打开选择界面。
/server-settings speed | 设置服务器默认速度。 | 可指定 0.5 至 4.0；省略参数时重置。
/server-settings pitch | 设置服务器默认音高。 | 可在 BOT 设置允许的范围内指定；省略参数时重置。
/server-settings intonation | 设置服务器默认语调。 | 可指定 0.0 至 2.0；省略参数时重置。
/server-settings volume | 设置服务器默认音量。 | 可指定 0.1 至 5.0；省略参数时重置。
/server-settings force-guild-args | 强制使用服务器默认速度、音高、语调和音量。 | 优先于个人设置。
/server-settings force-guild-speaker | 强制使用服务器默认说话人。 | 优先于个人说话人设置。

## 说话人控制
命令名称 | 概述 | 补充说明
-- | -- | --
/server-settings disable-speaker add | 禁用特定说话人。 | 无法禁用默认说话人和服务器默认说话人。
/server-settings disable-speaker remove | 重新启用已禁用的说话人。 | 说话人名称支持自动补全。
/server-settings disable-speaker list | 显示已禁用的说话人列表。 | 仅显示列表。

## 朗读行为设置
命令名称 | 概述 | 补充说明
-- | -- | --
/server-settings read-username | 切换是否朗读用户名。 | true 为启用，false 为禁用。
/server-settings read-join-leave | 切换是否在用户加入或离开时朗读用户名。 | true 为启用，false 为禁用。
/server-settings exvoice | 切换是否使用 ExVoice。 | 会应用于服务器内的所有朗读。
/server-settings prefix | 设置服务器专用前缀。 | 在启用了自定义前缀功能的环境中可用。
/server-settings length-limit | 更改每条消息的最大朗读字符数。 | 指定值必须大于 30 个字符，且不超过套餐上限。
/server-settings read-emoji | 切换是否朗读表情符号。 | true 为启用，false 为禁用。
/server-settings read-sticker | 切换是否朗读贴纸。 | true 为启用，false 为禁用。

## 管理 ExVoice 与朗读用户
命令名称 | 概述 | 补充说明
-- | -- | --
/server-settings exclude-exvoice add | 添加不朗读的 ExVoice。 | 可通过自动补全选择候选项。
/server-settings exclude-exvoice remove | 取消 ExVoice 的排除设置。 | 可通过自动补全选择候选项。
/server-settings exclude-exvoice list | 显示已排除的 ExVoice 列表。 | 仅显示列表。
/server-settings read-bot add | 添加需要朗读消息的 BOT。 | 需要 Basic 或更高等级套餐。
/server-settings read-bot remove | 移除已设为朗读对象的 BOT。 | 仅可指定 BOT 用户。
/server-settings read-bot toggle | 启用或禁用所有 BOT 消息的朗读。 | 需要 Basic 或更高等级套餐。
/server-settings exclude-user add | 将特定用户从朗读对象中排除。 | 登记数量上限因套餐而异。
/server-settings exclude-user remove | 取消用户排除设置。 | 不适用于 BOT。
/server-settings exclude-user list | 显示已排除的用户列表。 | 仅显示列表。
/server-settings exclude-role add | 将拥有特定身份组的用户从朗读对象中排除。 | 登记数量上限因套餐而异。
/server-settings exclude-role remove | 取消身份组排除设置。 | 指定 @everyone 时，会取消所有身份组的排除设置。

## 自动连接与维护
命令名称 | 概述 | 补充说明
-- | -- | --
/server-settings autojoin add | 添加在成员加入指定语音频道时让 BOT 自动连接的设置。 | 省略文字频道时，使用语音频道内的聊天。
/server-settings autojoin remove | 取消自动连接设置。 | 省略文字频道时，会取消该语音频道的所有自动连接设置。
/server-settings autojoin list | 显示已登记的自动连接设置。 | 指定语音频道时，只查看该语音频道的设置。
/server-settings sync | 将当前服务器设置同步到其他 KuronekoServer 系列 BOT。 | 目标设置会被覆盖。
/server-settings reset | 重置服务器设置。 | 执行前会显示确认按钮。

## 使用示例
```text
/server-settings speaker 話者:ずんだもん
/server-settings force-guild-args 強制する:true
/server-settings read-username 読み上げる:true
/server-settings autojoin add ボイスチャンネル:#雑談VC テキストチャンネル:#tts
/server-settings exclude-user add ユーザー:@example
/server-settings length-limit 文字数:120
```

## 套餐相关补充说明
- `read-bot add` 和 `read-bot toggle` 可在 Basic 或更高等级套餐中使用。
- `length-limit` 的限制值，以及 `exclude-user add` 和 `exclude-role add` 的登记数量上限因套餐而异。
- 详情请参阅[付费套餐说明](/zh-hans/services/discordbot/tts-bot/payment/)。

## 相关页面
- [/subscription](/zh-hans/services/discordbot/tts-bot/subscription/)
- [付费套餐说明](/zh-hans/services/discordbot/tts-bot/payment/)
