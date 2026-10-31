---
title: "故障排除"
description: "推流与观看问题，以及码率、24 小时和违反条款所导致限制的处理方法"
lastUpdated: 2026-08-22T00:00:00.000Z
sidebar:
  order: 9
---

:::note
**Nyan Streaming Japan 不支持直播录制和文件上传功能。** 本页面关于录制和媒体的说明适用于支持这些功能的 Nyan Streaming 服务。
:::


# 故障排除

首先打开控制台的推流密钥列表和密钥详情，检查密钥状态、输入码率、当前选择的节点／区域以及限制提示。

## 根据症状检查

| 症状 | 首先检查的内容 |
| --- | --- |
| 无法开始推流 | RTMP URL 和推流机密值、节点运行状态、密钥的限制提示 |
| 没有视频 | 视频编解码器是否为 H.264 (AVC) |
| 没有音频 | 音频编解码器是否为 AAC 或 PCM（s16be）。PCM 推流仅支持 RTSP，通过 RTSP 以外的方式观看时音频为 AAC |
| 无法开始 RTSP 推流 | 服务提供商是否限制端口 554 或 RTSP 通信 |
| 无法在浏览器播放 HLS | URL 是否为 `.m3u8`，Safari 以外的浏览器是否使用支持 hls.js 的播放器 |
| 无法在 VRChat 播放 | 是否使用支持 AVPro 的播放器、RTSP / RTSPT URL，以及是否启用 Stream Mode / Low Latency |
| 仅在 VRChat Public 中无法播放 | [世界允许的域名](/zh-hans/services/streaming-service/nyan-streaming/vrchat-world-domains/)和 `Allow Untrusted URLs` |
| 延迟较大 | 是否可以改用 RTSP 或 WebRTC (WHEP) 而不是 HLS |
| 直播中途断开 | 码率、连续直播 24 小时、违反条款的限制提示或通知 |

## 仅 RTSP 推流无法开始

部分互联网服务提供商（ISP）限制端口 554 或 RTSP 通信。在同一网络中能通过 RTMP 或 WebRTC 推流，却只有 RTSP 无法连接时，**原因是服务提供商的通信限制，并非 Nyan Streaming 故障**。

请咨询您订阅的服务提供商是否支持 RTSP 通信，或尝试其他网络。无法使用 RTSP 时，请改用 AAC 音频，通过 RTMP 或 WebRTC 推流。

## 出现限制画面

当直播因码率、连续直播 24 小时或违反服务条款而停止时，会向观众显示与限制原因对应的警告画面，替代正常直播内容。控制台的密钥列表会显示原因；可自动解除的限制也会显示预计解除时间。

:::note
警告画面、邮件、Webhook 和应用内通知的语言由组织的**设置 → 常规 → 默认语言**决定。选择日语时以日语显示，其他语言则以英语显示。
:::

### 连续直播超过 24 小时

在启用了 24 小时限制的节点上，同一个 publish 会话连续达到 24 小时时适用。会停止相关直播，并将**组织的全部推流密钥封锁 1 天**。重新连接后，连续时长会按新会话重新计算。

![连续直播超过 24 小时的限制画面（日语）](https://cdn.krnk.org/kuronekoserver/nyst/warning/24h-jp.png)

**处理方法**

1. 在控制台查看预计解除时间。
2. 解除前无法恢复推流。
3. 解除后，以新会话开始推流。
4. 长时间直播的条件请在服务控制台确认或[联系我们](https://krnk.org/contact/)。

### 超过输入码率上限

组织内所有同时直播的流的输入码率合计持续超过套餐上限 **10 分钟以上**时适用。会从最新开始的直播起依次停止，直到合计降至上限以内，被停止的密钥在 **1 小时**内无法再次推流。

![超过输入码率上限的限制画面（日语）](https://cdn.krnk.org/kuronekoserver/nyst/warning/bitrate-jp.png)

**处理方法**

1. 合计所有同时推流编码器的视频与音频码率。
2. 降低每个直播的码率，或结束不需要的同时直播，让组织合计保持在上限以内。
3. 在控制台查看被停止密钥的预计解除时间。
4. 解除后重新连接。如需更高上限，请更改套餐或申请额外码率。

### 其他违反服务条款的行为

管理员确认存在违反服务条款的行为时，会停止或封锁相关组织或用户的直播。此限制没有自动解除时间。

![违反服务条款的限制画面（日语）](https://cdn.krnk.org/kuronekoserver/nyst/warning/tos-jp.png?t=1787304185303)

**处理方法**

1. 查看 [Nyan Streaming 服务条款](https://krnk.org/terms/nyan-streaming)及通知中提到的条款。
2. 停止或修改相应直播内容。
3. 如需申请解除审核，请[联系我们](https://krnk.org/contact/)。

## 其他上限

### 同时观看人数

整个组织的同时观看人数达到套餐上限时，会拒绝新观众的连接。已在观看的连接会继续。请腾出名额，或更改套餐／观众附加项。

### 存储容量

组织达到存储上限时，录制会自动停止。直播本身会继续，停止前的录制内容会上传。请删除不需要的存档或媒体，或者增加容量。

### 地区限制

仅限日本国内的节点／套餐不允许从目标地区以外观看。请检查推流密钥的套餐、当前所选节点和区域。

## 联系时请提供的信息

- 组织名称和推流密钥的**显示名称**（请勿发送推流机密值）
- 问题发生时间和时区
- 使用的节点／区域及协议（RTMP / RTSP / HLS / WebRTC）
- 控制台显示的错误或限制原因
- 如附上 OBS 统计或日志，请先移除推流机密值和个人信息

## 相关页面

- [如何选择节点](/zh-hans/services/streaming-service/nyan-streaming/nodes/)
- [入门指南](/zh-hans/services/streaming-service/nyan-streaming/getting-started/)
- [支持的编解码器](/zh-hans/services/streaming-service/nyan-streaming/codecs/)
- [套餐、限制与政策](/zh-hans/services/streaming-service/nyan-streaming/plans-and-limits/)
- [控制台使用指南](/zh-hans/services/streaming-service/nyan-streaming/dashboard/)
