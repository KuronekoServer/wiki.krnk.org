---
title: "/user-dictionary"
lastUpdated: 2026-04-14T00:00:00.000Z
---


# /user-dictionary
## 概述
/user-dictionary 用於管理自己的專用詞典。
與伺服器共享詞典不同，此詞典僅應用於自己的朗讀內容。

## 子命令列表
命令名稱 | 概述 | 補充說明
-- | -- | --
/user-dictionary help | 顯示個人詞典命令列表。 | 回覆僅對你可見。
/user-dictionary add | 向個人詞典登錄詞語。 | 最多可登錄 100 項。
/user-dictionary remove | 從個人詞典刪除詞語。 | 詞語名稱支援自動完成。
/user-dictionary export | 導出個人詞典。 | 支援 csv、json 和 colon 格式。
/user-dictionary import | 導入個人詞典。 | 建議重新導入不超過 1MB 的 JSON 檔案。
/user-dictionary list | 顯示個人詞典列表。 | 回覆僅對你可見。
/user-dictionary search | 搜索個人詞典。 | 回覆僅對你可見。
/user-dictionary reset | 重設個人詞典。 | 會顯示確認按鈕。

## 使用示例
```text
/user-dictionary add 単語:w 読み:わら 正規表現:false
/user-dictionary export format:json
/user-dictionary search 検索する文字列:わら
```

## /user-dictionary add
向自己的專用詞典登錄詞語和讀音。

```text
/user-dictionary add 単語:w 読み:わら 正規表現:false
```

補充說明:
- 最多可登錄 100 項。
- 登錄相同詞語時會覆蓋原內容。
- 也可使用正則表達式。

## /user-dictionary remove
從自己的專用詞典刪除詞語。

```text
/user-dictionary remove 単語:w
```

## /user-dictionary export
將個人詞典導出爲檔案。

```text
/user-dictionary export format:csv
/user-dictionary export format:json
```

## /user-dictionary import
從檔案導入個人詞典。

```text
/user-dictionary import file:dictionary.json
```

補充說明:
- 無法導入超過 1MB 的檔案。
- 建議重新導入透過 `/user-dictionary export format:json` 導出的 JSON 檔案。

## /user-dictionary list
顯示自己的專用詞典列表。

```text
/user-dictionary list
```

## /user-dictionary search
搜索自己的專用詞典。

```text
/user-dictionary search 検索する文字列:わら
```

## /user-dictionary reset
重設個人詞典。

```text
/user-dictionary reset
```

補充說明:
- 回覆僅對你可見。
- 執行前會顯示確認按鈕。

## 相關頁面
- [/dictionary](/zh-hant/services/discordbot/tts-bot/dictionary/)
