---
title: "/dictionary"
lastUpdated: 2026-04-14T00:00:00.000Z
---


# /dictionary
## 概述
/dictionary 用于管理整个服务器共享的词典。
用于将特定词语替换为你希望的读音。

## 子命令列表
命令名称 | 概述 | 补充说明
-- | -- | --
/dictionary help | 显示词典命令列表。 | 查看服务器内可用的词典操作。
/dictionary add | 向词典登记词语。 | 正则表达式功能适用于较高等级套餐。
/dictionary remove | 从词典删除词语。 | 词语名称支持自动补全。
/dictionary export | 导出词典。 | 支持 csv、json 和 colon 格式。
/dictionary import | 导入词典。 | 建议重新导入不超过 1MB 的 JSON 文件。
/dictionary list | 显示词典列表。 | 可翻页查看。
/dictionary search | 搜索词典。 | 按部分匹配搜索。
/dictionary reset | 重置词典。 | 会显示确认按钮。
/dictionary sync | 将词典同步到其他 KuronekoServer 系列 BOT。 | 会覆盖目标词典。

## 使用示例
```text
/dictionary add 単語:krnk 読み:クロネコ 正規表現:false
/dictionary remove 単語:krnk
/dictionary export format:json
/dictionary search 検索する文字列:クロネコ
```

## /dictionary add
登记词语和读音。

```text
/dictionary add 単語:こんにちは 読み:こんにちわ 正規表現:false
```

补充说明:
- 登记数量以及词语、读音的字符数上限因套餐而异。
- 使用正则表达式登记词语需要 Advance 或更高等级套餐。
- 登记相同词语时会覆盖原内容。

## /dictionary remove
删除已登记的词语。

```text
/dictionary remove 単語:こんにちは
```

## /dictionary export
将词典导出为文件。

```text
/dictionary export format:csv
/dictionary export format:json
/dictionary export format:colon
```

## /dictionary import
导入词典文件。

```text
/dictionary import file:dictionary.json
```

补充说明:
- 无法导入超过 1MB 的文件。
- 建议重新导入通过 `/dictionary export format:json` 导出的 JSON 文件。

## /dictionary list
列出已登记的词典内容。

```text
/dictionary list
```

## /dictionary search
搜索已登记的词典内容。

```text
/dictionary search 検索する文字列:こんにちは
```

## /dictionary reset
重置服务器词典。

```text
/dictionary reset
```

## /dictionary sync
将当前服务器词典同步到其他 KuronekoServer 系列语音朗读 BOT。

```text
/dictionary sync
```

补充说明:
- 目标词典会被覆盖。
- 执行前会显示确认按钮。

## 相关页面
- [/user-dictionary](/zh-hans/services/discordbot/tts-bot/user-dictionary/)
- [付费套餐说明](/zh-hans/services/discordbot/tts-bot/payment/)
