---
title: "/dictionary"
lastUpdated: 2026-04-14T00:00:00.000Z
---


# /dictionary
## 概述
/dictionary 用於管理整個伺服器共享的詞典。
用於將特定詞語替換爲你希望的讀音。

## 子命令列表
命令名稱 | 概述 | 補充說明
-- | -- | --
/dictionary help | 顯示詞典命令列表。 | 查看伺服器內可用的詞典操作。
/dictionary add | 向詞典登錄詞語。 | 正則表達式功能適用於較高等級方案。
/dictionary remove | 從詞典刪除詞語。 | 詞語名稱支援自動完成。
/dictionary export | 導出詞典。 | 支援 csv、json 和 colon 格式。
/dictionary import | 導入詞典。 | 建議重新導入不超過 1MB 的 JSON 檔案。
/dictionary list | 顯示詞典列表。 | 可翻頁查看。
/dictionary search | 搜索詞典。 | 按部分匹配搜索。
/dictionary reset | 重設詞典。 | 會顯示確認按鈕。
/dictionary sync | 將詞典同步到其他 KuronekoServer 系列 BOT。 | 會覆蓋目標詞典。

## 使用示例
```text
/dictionary add 単語:krnk 読み:クロネコ 正規表現:false
/dictionary remove 単語:krnk
/dictionary export format:json
/dictionary search 検索する文字列:クロネコ
```

## /dictionary add
登錄詞語和讀音。

```text
/dictionary add 単語:こんにちは 読み:こんにちわ 正規表現:false
```

補充說明:
- 登錄數量以及詞語、讀音的字元數上限因方案而異。
- 使用正則表達式登錄詞語需要 Advance 或更高等級方案。
- 登錄相同詞語時會覆蓋原內容。

## /dictionary remove
刪除已登錄的詞語。

```text
/dictionary remove 単語:こんにちは
```

## /dictionary export
將詞典導出爲檔案。

```text
/dictionary export format:csv
/dictionary export format:json
/dictionary export format:colon
```

## /dictionary import
導入詞典檔案。

```text
/dictionary import file:dictionary.json
```

補充說明:
- 無法導入超過 1MB 的檔案。
- 建議重新導入透過 `/dictionary export format:json` 導出的 JSON 檔案。

## /dictionary list
列出已登錄的詞典內容。

```text
/dictionary list
```

## /dictionary search
搜索已登錄的詞典內容。

```text
/dictionary search 検索する文字列:こんにちは
```

## /dictionary reset
重設伺服器詞典。

```text
/dictionary reset
```

## /dictionary sync
將目前伺服器詞典同步到其他 KuronekoServer 系列語音朗讀 BOT。

```text
/dictionary sync
```

補充說明:
- 目標詞典會被覆蓋。
- 執行前會顯示確認按鈕。

## 相關頁面
- [/user-dictionary](/zh-hant/services/discordbot/tts-bot/user-dictionary/)
- [付費方案說明](/zh-hant/services/discordbot/tts-bot/payment/)
