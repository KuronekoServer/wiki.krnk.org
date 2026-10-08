---
title: "/server-settings"
lastUpdated: 2026-04-14T00:00:00.000Z
---


# /server-settings
## 概述
/server-settings 是用於管理伺服器朗讀設定的命令組。
僅限在伺服器內使用，且需要伺服器管理權限。

## 控制台與查看設定
命令名稱 | 概述 | 補充說明
-- | -- | --
/server-settings dashboard | 開啟 Web 控制台。 | 可透過按鈕進入設定頁面。
/server-settings show | 顯示目前伺服器設定。 | 會開啟交互式設定介面。

## 預設語音設定
命令名稱 | 概述 | 補充說明
-- | -- | --
/server-settings speaker | 設定伺服器預設說話人。 | 不傳入參數即可開啟選擇介面。
/server-settings speed | 設定伺服器預設速度。 | 可指定 0.5 至 4.0；省略參數時重設。
/server-settings pitch | 設定伺服器預設音高。 | 可在 BOT 設定允許的範圍內指定；省略參數時重設。
/server-settings intonation | 設定伺服器預設語調。 | 可指定 0.0 至 2.0；省略參數時重設。
/server-settings volume | 設定伺服器預設音量。 | 可指定 0.1 至 5.0；省略參數時重設。
/server-settings force-guild-args | 強制使用伺服器預設速度、音高、語調和音量。 | 優先於個人設定。
/server-settings force-guild-speaker | 強制使用伺服器預設說話人。 | 優先於個人說話人設定。

## 說話人控制
命令名稱 | 概述 | 補充說明
-- | -- | --
/server-settings disable-speaker add | 禁用特定說話人。 | 無法禁用預設說話人和伺服器預設說話人。
/server-settings disable-speaker remove | 重新啓用已禁用的說話人。 | 說話人名稱支援自動完成。
/server-settings disable-speaker list | 顯示已禁用的說話人列表。 | 僅顯示列表。

## 朗讀行爲設定
命令名稱 | 概述 | 補充說明
-- | -- | --
/server-settings read-username | 切換是否朗讀使用者名。 | true 爲啓用，false 爲禁用。
/server-settings read-join-leave | 切換是否在使用者加入或離開時朗讀使用者名。 | true 爲啓用，false 爲禁用。
/server-settings exvoice | 切換是否使用 ExVoice。 | 會應用於伺服器內的所有朗讀。
/server-settings prefix | 設定伺服器專用前綴。 | 在啓用了自訂前綴功能的環境中可用。
/server-settings length-limit | 更改每條訊息的最大朗讀字元數。 | 指定值必須大於 30 個字元，且不超過方案上限。
/server-settings read-emoji | 切換是否朗讀表情符號。 | true 爲啓用，false 爲禁用。
/server-settings read-sticker | 切換是否朗讀貼紙。 | true 爲啓用，false 爲禁用。

## 管理 ExVoice 與朗讀使用者
命令名稱 | 概述 | 補充說明
-- | -- | --
/server-settings exclude-exvoice add | 新增不朗讀的 ExVoice。 | 可透過自動完成選擇候選項。
/server-settings exclude-exvoice remove | 取消 ExVoice 的排除設定。 | 可透過自動完成選擇候選項。
/server-settings exclude-exvoice list | 顯示已排除的 ExVoice 列表。 | 僅顯示列表。
/server-settings read-bot add | 新增需要朗讀訊息的 BOT。 | 需要 Basic 或更高等級方案。
/server-settings read-bot remove | 移除已設爲朗讀對象的 BOT。 | 僅可指定 BOT 使用者。
/server-settings read-bot toggle | 啓用或禁用所有 BOT 訊息的朗讀。 | 需要 Basic 或更高等級方案。
/server-settings exclude-user add | 將特定使用者從朗讀對象中排除。 | 登錄數量上限因方案而異。
/server-settings exclude-user remove | 取消使用者排除設定。 | 不適用於 BOT。
/server-settings exclude-user list | 顯示已排除的使用者列表。 | 僅顯示列表。
/server-settings exclude-role add | 將擁有特定身分組的使用者從朗讀對象中排除。 | 登錄數量上限因方案而異。
/server-settings exclude-role remove | 取消身分組排除設定。 | 指定 @everyone 時，會取消所有身分組的排除設定。

## 自動連線與維護
命令名稱 | 概述 | 補充說明
-- | -- | --
/server-settings autojoin add | 新增在成員加入指定語音頻道時讓 BOT 自動連線的設定。 | 省略文字頻道時，使用語音頻道內的聊天。
/server-settings autojoin remove | 取消自動連線設定。 | 省略文字頻道時，會取消該語音頻道的所有自動連線設定。
/server-settings autojoin list | 顯示已登錄的自動連線設定。 | 指定語音頻道時，只查看該語音頻道的設定。
/server-settings sync | 將目前伺服器設定同步到其他 KuronekoServer 系列 BOT。 | 目標設定會被覆蓋。
/server-settings reset | 重設伺服器設定。 | 執行前會顯示確認按鈕。

## 使用示例
```text
/server-settings speaker 話者:ずんだもん
/server-settings force-guild-args 強制する:true
/server-settings read-username 読み上げる:true
/server-settings autojoin add ボイスチャンネル:#雑談VC テキストチャンネル:#tts
/server-settings exclude-user add ユーザー:@example
/server-settings length-limit 文字数:120
```

## 方案相關補充說明
- `read-bot add` 和 `read-bot toggle` 可在 Basic 或更高等級方案中使用。
- `length-limit` 的限制值，以及 `exclude-user add` 和 `exclude-role add` 的登錄數量上限因方案而異。
- 詳情請參閱[付費方案說明](/zh-hant/services/discordbot/tts-bot/payment/)。

## 相關頁面
- [/subscription](/zh-hant/services/discordbot/tts-bot/subscription/)
- [付費方案說明](/zh-hant/services/discordbot/tts-bot/payment/)
