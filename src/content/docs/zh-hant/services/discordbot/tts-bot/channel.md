---
title: "/channel"
lastUpdated: 2026-04-14T00:00:00.000Z
---


# /channel
## 概述
/channel 是用於管理朗讀文字頻道、分類及每個語音頻道自動綁定關係的命令組。

## 面向使用者的子命令
命令名稱 | 概述 | 補充說明
-- | -- | --
/channel connect-category | 將目前分類下的文字頻道批量設爲朗讀對象。 | 執行命令的頻道必須位於分類內，且執行者必須已加入語音頻道。
/channel disconnect | 將目前頻道從朗讀對象中移除。 | 僅在 BOT 已連線時可用。
/channel disconnect-category | 批量取消目前分類下的朗讀對象。 | 執行命令的頻道必須位於分類內。
/channel list | 顯示目前朗讀頻道的列表。 | 僅在 BOT 已連線時可用。

## /channel connect-category
將目前分類中的文字頻道批量新增爲朗讀對象。

```text
/channel connect-category
```

補充說明:
- 執行者必須已連線語音頻道。
- 如果 BOT 尚未連線，會先連線到執行者所在的語音頻道，再開始朗讀該分類。

## /channel disconnect
將目前頻道從朗讀對象中移除。

```text
/channel disconnect
```

## /channel disconnect-category
批量取消目前分類下已登錄的朗讀對象。

```text
/channel disconnect-category
```

## /channel list
顯示目前朗讀頻道的列表。

```text
/channel list
```

## 管理員專用 /channel link
命令名稱 | 概述 | 補充說明
-- | -- | --
/channel link add | 登錄 BOT 加入語音頻道時自動朗讀的文字頻道。 | 需要伺服器管理權限。
/channel link remove | 解除已有的頻道綁定。 | 省略文字頻道時，會批量解除該語音頻道的綁定。
/channel link list | 查看已登錄的頻道綁定。 | 指定語音頻道時，只查看該語音頻道的綁定。

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

## 相關頁面
- [連線命令](/zh-hant/services/discordbot/tts-bot/basic-commands/)
- [/server-settings](/zh-hant/services/discordbot/tts-bot/server-settings/)
