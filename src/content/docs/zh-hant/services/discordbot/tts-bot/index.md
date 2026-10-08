---
title: "語音朗讀 BOT"
lastUpdated: 2026-04-14T00:00:00.000Z
---


# 語音朗讀 BOT
## 關於語音朗讀 BOT
語音朗讀 BOT 使用語音合成朗讀文字頻道及語音頻道內聊天的內容。
可透過斜槓命令連線語音頻道、調整說話人和朗讀參數、登錄詞典，以及管理伺服器設定。

部分功能需要訂閱[付費方案](/zh-hant/services/discordbot/tts-bot/payment/)並擁有伺服器管理權限。

## 命令列表與使用指南
### 基本操作
命令名稱 | 概述 | 指南
-- | -- | --
[/join](/zh-hant/services/discordbot/tts-bot/basic-commands/) | 加入語音頻道。 | [連線命令](/zh-hant/services/discordbot/tts-bot/basic-commands/)
[/disconnect](/zh-hant/services/discordbot/tts-bot/basic-commands/) | 斷開語音頻道連線。 | [連線命令](/zh-hant/services/discordbot/tts-bot/basic-commands/)
[/skip](/zh-hant/services/discordbot/tts-bot/basic-commands/) | 跳過目前朗讀。 | [連線命令](/zh-hant/services/discordbot/tts-bot/basic-commands/)

### 個人設定
命令名稱 | 概述 | 指南
-- | -- | --
[/setvoice](/zh-hant/services/discordbot/tts-bot/voice-settings/) | 更改自己的說話人。 | [語音設定命令](/zh-hant/services/discordbot/tts-bot/voice-settings/)
[/setspeed](/zh-hant/services/discordbot/tts-bot/voice-settings/) | 更改自己的朗讀速度。 | [語音設定命令](/zh-hant/services/discordbot/tts-bot/voice-settings/)
[/setpitch](/zh-hant/services/discordbot/tts-bot/voice-settings/) | 更改自己的朗讀音高。 | [語音設定命令](/zh-hant/services/discordbot/tts-bot/voice-settings/)
[/setintonation](/zh-hant/services/discordbot/tts-bot/voice-settings/) | 更改自己的語調。 | [語音設定命令](/zh-hant/services/discordbot/tts-bot/voice-settings/)
[/setvolume](/zh-hant/services/discordbot/tts-bot/voice-settings/) | 更改自己的朗讀音量。 | [語音設定命令](/zh-hant/services/discordbot/tts-bot/voice-settings/)
[/user-settings speed](/zh-hant/services/discordbot/tts-bot/user-settings/) | 透過命令組更改個人設定。 | [/user-settings](/zh-hant/services/discordbot/tts-bot/user-settings/)
[/user-settings pitch](/zh-hant/services/discordbot/tts-bot/user-settings/) | 透過命令組更改個人設定。 | [/user-settings](/zh-hant/services/discordbot/tts-bot/user-settings/)
[/user-settings intonation](/zh-hant/services/discordbot/tts-bot/user-settings/) | 透過命令組更改個人設定。 | [/user-settings](/zh-hant/services/discordbot/tts-bot/user-settings/)
[/user-settings volume](/zh-hant/services/discordbot/tts-bot/user-settings/) | 透過命令組更改個人設定。 | [/user-settings](/zh-hant/services/discordbot/tts-bot/user-settings/)
[/user-settings sync](/zh-hant/services/discordbot/tts-bot/user-settings/) | 將個人設定同步到其他 KuronekoServer 系列 BOT。 | [/user-settings](/zh-hant/services/discordbot/tts-bot/user-settings/)
[/user-settings reset](/zh-hant/services/discordbot/tts-bot/user-settings/) | 重設個人設定。 | [/user-settings](/zh-hant/services/discordbot/tts-bot/user-settings/)
[/user-settings show](/zh-hant/services/discordbot/tts-bot/user-settings/) | 顯示目前個人設定。 | [/user-settings](/zh-hant/services/discordbot/tts-bot/user-settings/)

### 頻道與詞典
命令名稱 | 概述 | 指南
-- | -- | --
[/channel connect-category](/zh-hant/services/discordbot/tts-bot/channel/) | 將目前分類下的文字頻道批量設爲朗讀對象。 | [/channel](/zh-hant/services/discordbot/tts-bot/channel/)
[/channel disconnect](/zh-hant/services/discordbot/tts-bot/channel/) | 將目前頻道從朗讀對象中移除。 | [/channel](/zh-hant/services/discordbot/tts-bot/channel/)
[/channel disconnect-category](/zh-hant/services/discordbot/tts-bot/channel/) | 取消目前分類下的朗讀連線。 | [/channel](/zh-hant/services/discordbot/tts-bot/channel/)
[/channel list](/zh-hant/services/discordbot/tts-bot/channel/) | 顯示目前朗讀頻道的列表。 | [/channel](/zh-hant/services/discordbot/tts-bot/channel/)
[/channel link add](/zh-hant/services/discordbot/tts-bot/channel/) | 綁定 BOT 加入語音頻道時自動朗讀的文字頻道。 | [/channel](/zh-hant/services/discordbot/tts-bot/channel/)
[/channel link remove](/zh-hant/services/discordbot/tts-bot/channel/) | 解除頻道綁定。 | [/channel](/zh-hant/services/discordbot/tts-bot/channel/)
[/channel link list](/zh-hant/services/discordbot/tts-bot/channel/) | 查看已登錄的頻道綁定。 | [/channel](/zh-hant/services/discordbot/tts-bot/channel/)
[/dictionary help](/zh-hant/services/discordbot/tts-bot/dictionary/) | 顯示伺服器詞典命令列表。 | [/dictionary](/zh-hant/services/discordbot/tts-bot/dictionary/)
[/dictionary add](/zh-hant/services/discordbot/tts-bot/dictionary/) | 向伺服器共享詞典登錄詞語。 | [/dictionary](/zh-hant/services/discordbot/tts-bot/dictionary/)
[/dictionary remove](/zh-hant/services/discordbot/tts-bot/dictionary/) | 從伺服器共享詞典刪除詞語。 | [/dictionary](/zh-hant/services/discordbot/tts-bot/dictionary/)
[/dictionary export](/zh-hant/services/discordbot/tts-bot/dictionary/) | 導出伺服器共享詞典。 | [/dictionary](/zh-hant/services/discordbot/tts-bot/dictionary/)
[/dictionary import](/zh-hant/services/discordbot/tts-bot/dictionary/) | 導入伺服器共享詞典。 | [/dictionary](/zh-hant/services/discordbot/tts-bot/dictionary/)
[/dictionary list](/zh-hant/services/discordbot/tts-bot/dictionary/) | 顯示伺服器共享詞典列表。 | [/dictionary](/zh-hant/services/discordbot/tts-bot/dictionary/)
[/dictionary search](/zh-hant/services/discordbot/tts-bot/dictionary/) | 搜索伺服器共享詞典。 | [/dictionary](/zh-hant/services/discordbot/tts-bot/dictionary/)
[/dictionary reset](/zh-hant/services/discordbot/tts-bot/dictionary/) | 重設伺服器共享詞典。 | [/dictionary](/zh-hant/services/discordbot/tts-bot/dictionary/)
[/dictionary sync](/zh-hant/services/discordbot/tts-bot/dictionary/) | 將詞典同步到其他 KuronekoServer 系列 BOT。 | [/dictionary](/zh-hant/services/discordbot/tts-bot/dictionary/)
[/user-dictionary help](/zh-hant/services/discordbot/tts-bot/user-dictionary/) | 顯示個人詞典命令列表。 | [/user-dictionary](/zh-hant/services/discordbot/tts-bot/user-dictionary/)
[/user-dictionary add](/zh-hant/services/discordbot/tts-bot/user-dictionary/) | 向自己的專用詞典登錄詞語。 | [/user-dictionary](/zh-hant/services/discordbot/tts-bot/user-dictionary/)
[/user-dictionary remove](/zh-hant/services/discordbot/tts-bot/user-dictionary/) | 從自己的專用詞典刪除詞語。 | [/user-dictionary](/zh-hant/services/discordbot/tts-bot/user-dictionary/)
[/user-dictionary export](/zh-hant/services/discordbot/tts-bot/user-dictionary/) | 導出自己的專用詞典。 | [/user-dictionary](/zh-hant/services/discordbot/tts-bot/user-dictionary/)
[/user-dictionary import](/zh-hant/services/discordbot/tts-bot/user-dictionary/) | 導入自己的專用詞典。 | [/user-dictionary](/zh-hant/services/discordbot/tts-bot/user-dictionary/)
[/user-dictionary list](/zh-hant/services/discordbot/tts-bot/user-dictionary/) | 顯示自己的專用詞典列表。 | [/user-dictionary](/zh-hant/services/discordbot/tts-bot/user-dictionary/)
[/user-dictionary search](/zh-hant/services/discordbot/tts-bot/user-dictionary/) | 搜索自己的專用詞典。 | [/user-dictionary](/zh-hant/services/discordbot/tts-bot/user-dictionary/)
[/user-dictionary reset](/zh-hant/services/discordbot/tts-bot/user-dictionary/) | 重設自己的專用詞典。 | [/user-dictionary](/zh-hant/services/discordbot/tts-bot/user-dictionary/)

### 幫助與實用功能
命令名稱 | 概述 | 指南
-- | -- | --
[/help](/zh-hant/services/discordbot/tts-bot/utility/) | 顯示 BOT 說明和命令列表。 | [實用命令](/zh-hant/services/discordbot/tts-bot/utility/)
[/ping](/zh-hant/services/discordbot/tts-bot/utility/) | 檢查 BOT 的回應速度。 | [實用命令](/zh-hant/services/discordbot/tts-bot/utility/)
[/exvoice](/zh-hant/services/discordbot/tts-bot/utility/) | 顯示可用 ExVoice 列表的訪問指引。 | [實用命令](/zh-hant/services/discordbot/tts-bot/utility/)
[/invite](/zh-hant/services/discordbot/tts-bot/utility/) | 顯示邀請連結。 | [實用命令](/zh-hant/services/discordbot/tts-bot/utility/)

### 面向伺服器管理員
命令名稱 | 概述 | 指南
-- | -- | --
[/server-settings ...](/zh-hant/services/discordbot/tts-bot/server-settings/) | 管理伺服器預設說話人、詞典和朗讀行爲。 | [/server-settings](/zh-hant/services/discordbot/tts-bot/server-settings/)
[/subscription ...](/zh-hant/services/discordbot/tts-bot/subscription/) | 登錄付費方案代碼，或查看訂閱狀態。 | [/subscription](/zh-hant/services/discordbot/tts-bot/subscription/)

## 補充說明
面向內部運營的 `/admin` 和開發用的 `/debug` 不包含在普通使用者指南中。
