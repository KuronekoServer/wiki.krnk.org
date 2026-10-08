---
title: "/channel"
lastUpdated: 2026-04-14T00:00:00.000Z
---


# /channel
## 概述
/channel 是用于管理朗读文字频道、分类及每个语音频道自动绑定关系的命令组。

## 面向用户的子命令
命令名称 | 概述 | 补充说明
-- | -- | --
/channel connect-category | 将当前分类下的文字频道批量设为朗读对象。 | 执行命令的频道必须位于分类内，且执行者必须已加入语音频道。
/channel disconnect | 将当前频道从朗读对象中移除。 | 仅在 BOT 已连接时可用。
/channel disconnect-category | 批量取消当前分类下的朗读对象。 | 执行命令的频道必须位于分类内。
/channel list | 显示当前朗读频道的列表。 | 仅在 BOT 已连接时可用。

## /channel connect-category
将当前分类中的文字频道批量添加为朗读对象。

```text
/channel connect-category
```

补充说明:
- 执行者必须已连接语音频道。
- 如果 BOT 尚未连接，会先连接到执行者所在的语音频道，再开始朗读该分类。

## /channel disconnect
将当前频道从朗读对象中移除。

```text
/channel disconnect
```

## /channel disconnect-category
批量取消当前分类下已登记的朗读对象。

```text
/channel disconnect-category
```

## /channel list
显示当前朗读频道的列表。

```text
/channel list
```

## 管理员专用 /channel link
命令名称 | 概述 | 补充说明
-- | -- | --
/channel link add | 登记 BOT 加入语音频道时自动朗读的文字频道。 | 需要服务器管理权限。
/channel link remove | 解除已有的频道绑定。 | 省略文字频道时，会批量解除该语音频道的绑定。
/channel link list | 查看已登记的频道绑定。 | 指定语音频道时，只查看该语音频道的绑定。

### /channel link add
```text
/channel link add ボイスチャンネル:#雑談VC テキストチャンネル:#tts
```

### /channel link remove
```text
/channel link remove ボイスチャンネル:#雑談VC
/channel link remove ボイスチャンネル:#雑談VC テキストチャンネル:#tts
```

### /channel link list
```text
/channel link list
/channel link list ボイスチャンネル:#雑談VC
```

## 相关页面
- [连接命令](/zh-hans/services/discordbot/tts-bot/basic-commands/)
- [/server-settings](/zh-hans/services/discordbot/tts-bot/server-settings/)
