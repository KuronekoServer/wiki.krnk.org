---
title: "/subscription"
lastUpdated: 2026-04-14T00:00:00.000Z
---


# /subscription
## 概述
/subscription 用於查看付費方案的應用狀態或登錄訂閱代碼。
此命令僅限在伺服器內使用，面向伺服器管理員。

## 子命令列表
命令名稱 | 概述 | 補充說明
-- | -- | --
/subscription register | 登錄訂閱代碼。 | 會開啟代碼輸入表單。
/subscription unregister | 解除目前應用的代碼。 | 代碼登錄者或伺服器管理員可執行此命令。
/subscription info | 顯示目前方案及限制值。 | 尚未訂閱時，還會顯示訂閱頁面的訪問指引。

## /subscription register
爲伺服器登錄訂閱代碼。

```text
/subscription register
```

補充說明:
- 執行後會開啟代碼輸入表單。
- 伺服器已應用其他代碼時，無法登錄新代碼。

## /subscription unregister
解除目前應用的訂閱代碼。

```text
/subscription unregister
```

補充說明:
- 代碼登錄者或擁有伺服器管理權限的使用者可執行此命令。

## /subscription info
顯示目前方案、字元數上限和詞典上限等資訊。

```text
/subscription info
```

## 相關頁面
- [付費方案說明](/zh-hant/services/discordbot/tts-bot/payment/)
- [/server-settings](/zh-hant/services/discordbot/tts-bot/server-settings/)
