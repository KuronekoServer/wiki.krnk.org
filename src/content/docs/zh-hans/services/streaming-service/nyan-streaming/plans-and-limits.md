---
title: "套餐、限制与政策"
description: "套餐的基本规则、推流与观看限制以及使用政策概述"
lastUpdated: 2026-08-22T00:00:00.000Z
sidebar:
  order: 7
---

:::note
**Nyan Streaming Japan 不支持直播录制和文件上传功能。** 本页面关于录制和媒体的说明适用于支持这些功能的 Nyan Streaming 服务。
:::


# 套餐、限制与政策

## 套餐

Nyan Streaming 的套餐按**组织（团队）**订阅。不同套餐主要影响以下项目的上限。

- **推流密钥数量**（可同时持有的推流密钥数）
- **同时观看人数**（整个组织的合计）
- **输入码率**（整个组织的合计上限）
- **存储容量**（录制和上传媒体的存储容量）
- **可用功能与服务器（节点）**

套餐和附加项因服务而异。请查看 [Nyan Streaming](https://nyst.live/) 或 [Nyan Streaming Japan](https://jp.nyst.live/) 的价格说明及对应控制台的套餐页面。

:::note
各套餐的具体数值和价格可能变更。最新内容请查看官方网站 https://nyst.live/ 及控制台的套餐页面。如需企业使用，请提前联系我们。
:::

## 推流与观看的主要限制

### 连续直播时长上限（24 小时）

在启用了 24 小时限制的节点上，一个 publish 会话连续达到 **24 小时**时，该直播会自动断开，且**组织的全部推流密钥会被封锁 1 天**。重新连接后，连续时长会按新会话重新计算。

录制和直播时长等条件取决于服务、套餐和合同。请查看控制台或咨询运营方。

### 支持录制的节点

录制可用性取决于服务、套餐和合同。使用前请查看控制台或咨询运营方。

### 超过码率上限

整个组织的输入码率合计持续超过套餐上限 **10 分钟以上**时，会从最新开始的直播起依次断开，直到合计降至上限以内。被断开的推流密钥在 **1 小时**内无法再次推流。如需提高上限，可从控制台**申请增加码率**（需要管理员批准）。

### 可观看地区

根据套餐或服务器（节点）设置，**可观看地区可能仅限日本国内**。是否支持全球直播取决于套餐，详情请查看套餐页面或联系我们。

### 编解码器限制

服务器端不会重新编码视频，因此必须使用 **H.264（视频）／AAC 或 PCM（s16be）（音频）**等受支持的编解码器推流。通过 RTSP 推送 PCM（s16be）音频，并以 RTSP 以外的方式观看时，音频会转换为 AAC。详情请参阅[支持的编解码器](/zh-hans/services/streaming-service/nyan-streaming/codecs/)。

## 受限期间向观众显示的画面

直播受限时，会向观众显示与限制原因对应的警告画面，替代正常直播内容。可自动解除的限制会在控制台显示预计解除时间。

:::note
组织的默认语言为日语时使用日语版本，其他语言则使用英语版本。可在控制台的**设置 → 常规 → 默认语言**中更改语言。
:::

### 直播超过 24 小时

![连续直播超过 24 小时的限制画面](https://cdn.krnk.org/kuronekoserver/nyst/warning/24h-jp.png)

### 超过码率上限

![超过输入码率上限的限制画面](https://cdn.krnk.org/kuronekoserver/nyst/warning/bitrate-jp.png)

### 其他违反服务条款的行为

![违反服务条款的限制画面](https://cdn.krnk.org/kuronekoserver/nyst/warning/tos-jp.png?t=1787304185303)

各类限制的解除步骤请参阅[故障排除](/zh-hans/services/streaming-service/nyan-streaming/troubleshooting/)。

## 使用政策

### 服务条款

管理员确认存在违反 [Nyan Streaming 服务条款](https://krnk.org/terms/nyan-streaming)的行为时，会停止或封锁相关组织或用户的直播。此类封锁不会自动解除。如需申请解除审核，请[联系我们](https://krnk.org/contact/)。如发现违反条款的行为，请立即向 **abuse@krnk.org** 举报。

### 音乐使用申请

在直播中使用 JASRAC / NexTone 管理的音乐作品等时，请通过控制台的**音乐使用申请**表单提交申请。

## 控制台中的操作

- 创建、重新生成和删除推流密钥，查看观看 URL
- 在可用时管理和下载录制存档
- 设置转推（外部 RTMP 目标）
- 切换节目播出（频道）
- 创建 API 密钥（使用公开 API）
- 设置推流来源 IP 访问规则
- 设置通知（应用内通知 / Webhook / 邮件）
- 管理团队（组织）、成员和账单

各项操作的详细步骤请参阅[控制台使用指南](/zh-hans/services/streaming-service/nyan-streaming/dashboard/)。

## 相关页面

- [如何选择节点](/zh-hans/services/streaming-service/nyan-streaming/nodes/)
- [入门指南](/zh-hans/services/streaming-service/nyan-streaming/getting-started/)
- [功能概述与支持的协议](/zh-hans/services/streaming-service/nyan-streaming/overview/)
- [推流方式（接入）](/zh-hans/services/streaming-service/nyan-streaming/streaming-methods/)
- [观看方式（播放）](/zh-hans/services/streaming-service/nyan-streaming/viewing-methods/)
- [控制台使用指南](/zh-hans/services/streaming-service/nyan-streaming/dashboard/)
- [故障排除](/zh-hans/services/streaming-service/nyan-streaming/troubleshooting/)
- [公开 API](/zh-hans/services/streaming-service/nyan-streaming/api/)
