---
title: "/user-dictionary"
lastUpdated: 2026-04-14T00:00:00.000Z
---


# /user-dictionary
## 概述
/user-dictionary 用于管理自己的专用词典。
与服务器共享词典不同，此词典仅应用于自己的朗读内容。

## 子命令列表
命令名称 | 概述 | 补充说明
-- | -- | --
/user-dictionary help | 显示个人词典命令列表。 | 回复仅对你可见。
/user-dictionary add | 向个人词典登记词语。 | 最多可登记 100 项。
/user-dictionary remove | 从个人词典删除词语。 | 词语名称支持自动补全。
/user-dictionary export | 导出个人词典。 | 支持 csv、json 和 colon 格式。
/user-dictionary import | 导入个人词典。 | 建议重新导入不超过 1MB 的 JSON 文件。
/user-dictionary list | 显示个人词典列表。 | 回复仅对你可见。
/user-dictionary search | 搜索个人词典。 | 回复仅对你可见。
/user-dictionary reset | 重置个人词典。 | 会显示确认按钮。

## 使用示例
```text
/user-dictionary add 単語:w 読み:わら 正規表現:false
/user-dictionary export format:json
/user-dictionary search 検索する文字列:わら
```

## /user-dictionary add
向自己的专用词典登记词语和读音。

```text
/user-dictionary add 単語:w 読み:わら 正規表現:false
```

补充说明:
- 最多可登记 100 项。
- 登记相同词语时会覆盖原内容。
- 也可使用正则表达式。

## /user-dictionary remove
从自己的专用词典删除词语。

```text
/user-dictionary remove 単語:w
```

## /user-dictionary export
将个人词典导出为文件。

```text
/user-dictionary export format:csv
/user-dictionary export format:json
```

## /user-dictionary import
从文件导入个人词典。

```text
/user-dictionary import file:dictionary.json
```

补充说明:
- 无法导入超过 1MB 的文件。
- 建议重新导入通过 `/user-dictionary export format:json` 导出的 JSON 文件。

## /user-dictionary list
显示自己的专用词典列表。

```text
/user-dictionary list
```

## /user-dictionary search
搜索自己的专用词典。

```text
/user-dictionary search 検索する文字列:わら
```

## /user-dictionary reset
重置个人词典。

```text
/user-dictionary reset
```

补充说明:
- 回复仅对你可见。
- 执行前会显示确认按钮。

## 相关页面
- [/dictionary](/zh-hans/services/discordbot/tts-bot/dictionary/)
