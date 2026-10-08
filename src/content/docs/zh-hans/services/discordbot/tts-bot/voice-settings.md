---
title: "语音设置命令"
lastUpdated: 2026-04-14T00:00:00.000Z
---


# 语音设置命令
## 概述
以下命令用于更改自己的专用说话人或朗读参数。
服务器启用强制使用默认说话人或默认参数时，服务器设置优先于个人设置。

## 命令列表
命令名称 | 概述 | 补充说明
-- | -- | --
/setvoice | 更改说话人。 | 不传入参数即可打开选择界面。
/setspeed | 更改朗读速度。 | 0.5 至 4.0；省略参数时重置
/setpitch | 更改朗读音高。 | BOT 设置允许的范围；省略参数时重置
/setintonation | 更改语调。 | 0.0 至 2.0；省略参数时重置
/setvolume | 更改音量。 | 0.1 至 3.0；省略参数时重置

## 使用示例
```text
/setvoice 話者:四国めたん
/setspeed スピード:1.2
/setpitch ピッチ:1.1
/setintonation イントネーション:1.0
/setvolume 音量:0.8
```

## /setvoice
更改自己的说话人。

```text
/setvoice 話者:ずんだもん
/setvoice
```

补充说明:
- 可通过自动补全选择说话人名称。
- 省略参数时会显示选择菜单。

## /setspeed
更改朗读速度。

```text
/setspeed スピード:1.0
/setspeed
```

补充说明:
- 可指定 0.5 至 4.0。
- 不传入参数执行时，会恢复为默认值。

## /setpitch
更改朗读音高。

```text
/setpitch ピッチ:1.0
/setpitch
```

补充说明:
- 可设置的范围取决于 BOT 的语音引擎设置。
- 不传入参数执行时，会恢复为默认值。

## /setintonation
更改朗读语调。

```text
/setintonation イントネーション:1.0
/setintonation
```

补充说明:
- 可指定 0.0 至 2.0。
- 不传入参数执行时，会恢复为默认值。

## /setvolume
更改朗读音量。

```text
/setvolume 音量:1.0
/setvolume
```

补充说明:
- 可指定 0.1 至 3.0。
- 不传入参数执行时，会恢复为默认值。

## 相关页面
- [/user-settings](/zh-hans/services/discordbot/tts-bot/user-settings/)
- [/server-settings](/zh-hans/services/discordbot/tts-bot/server-settings/)
