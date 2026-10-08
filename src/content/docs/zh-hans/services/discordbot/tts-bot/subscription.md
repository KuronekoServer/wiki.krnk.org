---
title: "/subscription"
lastUpdated: 2026-04-14T00:00:00.000Z
---


# /subscription
## 概述
/subscription 用于查看付费套餐的应用状态或登记订阅代码。
此命令仅限在服务器内使用，面向服务器管理员。

## 子命令列表
命令名称 | 概述 | 补充说明
-- | -- | --
/subscription register | 登记订阅代码。 | 会打开代码输入表单。
/subscription unregister | 解除当前应用的代码。 | 代码登记者或服务器管理员可执行此命令。
/subscription info | 显示当前套餐及限制值。 | 尚未订阅时，还会显示订阅页面的访问指引。

## /subscription register
为服务器登记订阅代码。

```text
/subscription register
```

补充说明:
- 执行后会打开代码输入表单。
- 服务器已应用其他代码时，无法登记新代码。

## /subscription unregister
解除当前应用的订阅代码。

```text
/subscription unregister
```

补充说明:
- 代码登记者或拥有服务器管理权限的用户可执行此命令。

## /subscription info
显示当前套餐、字符数上限和词典上限等信息。

```text
/subscription info
```

## 相关页面
- [付费套餐说明](/zh-hans/services/discordbot/tts-bot/payment/)
- [/server-settings](/zh-hans/services/discordbot/tts-bot/server-settings/)
