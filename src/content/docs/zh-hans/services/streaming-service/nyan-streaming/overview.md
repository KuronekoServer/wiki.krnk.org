---
title: "功能概述与支持的协议"
description: "Nyan Streaming 支持的协议、编解码器、延迟与主要功能概览"
lastUpdated: 2026-08-22T00:00:00.000Z
sidebar:
  order: 3
---

:::note
**Nyan Streaming Japan 不支持直播录制和文件上传功能。** 本页面关于录制和媒体的说明适用于支持这些功能的 Nyan Streaming 服务。
:::


# 功能概述与支持的协议

Nyan Streaming 是一项视频直播服务，目标是**以低延迟（最低约 1 秒）传输高画质视频**。服务运行于自主开发的直播服务器上，视频**不在服务器端进行转码（重新编码）**，而是直接传送给观众。仅当通过 RTSP 输入的 PCM（s16be）音频以 RTSP 以外的方式观看时，才会将音频转换为 AAC。

官方网站：https://nyst.live/

## 支持的协议

### 推流（接入）

| 协议 | 概述 | 主要用途 |
| --- | --- | --- |
| **RTMP** | 支持 OBS 等常见直播软件 | 从 OBS / XSplit 等软件推流 |
| **WebRTC (WHIP)** | 延迟最低的推流方式 | 浏览器推流、重视低延迟的直播 |
| **RTSP（推送）** | 通过 RTSP 的 ANNOUNCE/RECORD 接入 | 高级推流 |
| **浏览器推流** | 从控制台直接直播摄像头／屏幕 | 简便的浏览器直播（基于 WebRTC） |

### 观看（播放）

| 协议 | 概述 | 延迟参考 |
| --- | --- | --- |
| **RTSP** | 延迟最低，推荐用于 VRChat / AV Pro | 约 1 秒 |
| **WebRTC (WHEP)** | 在浏览器中以最低延迟观看 | 约 1 秒 |
| **RTMP** | 适用于支持 RTMP 播放的播放器 | 约 1～2 秒 |
| **HLS** | 可在浏览器及多种播放器中播放（浏览器中推荐使用 hls.js） | 数秒左右（协议特性导致延迟稍大） |

:::note
如需最低延迟，请使用 **RTSP** 或 **WebRTC (WHEP)**；如优先考虑兼容性，请使用 **HLS**。由于其工作机制，HLS 的延迟比其他方式更大。
:::

## 支持的编解码器

视频支持 **H.264**，音频支持 **AAC** 和 **PCM（s16be，RTSP）**。WebRTC 也可以使用 Opus。通过 RTSP 以外的方式观看 PCM（s16be）直播时，音频会转换为 AAC。**不支持 AV1 / VP9 / VP8 / H.265 (HEVC)。** 详情请参阅[支持的编解码器](/zh-hans/services/streaming-service/nyan-streaming/codecs/)。

## 主要功能

- **低延迟直播** — RTSP / RTMP / WebRTC 可实现约 1 秒的低延迟（HLS 因协议特性延迟稍大）。
- **录制（存档）** — 可录制直播，稍后观看或下载（是否可用取决于套餐和设置）。
- **转推（中继）** — 可将收到的直播同时转发至 YouTube、Twitch 等外部 RTMP 目标。
- **节目播出（频道／直播切换器）** — 可在保持观众连接的情况下，切换通过组织 URL 播出的直播。
- **多个节点／区域** — 可从多个服务器（节点）推流和观看，支持按地区分发。
- **多节点同时推流** — 可使用同一个推流密钥，在多个服务器上同时推流。
- **音频 EQ 与混响** — 可在服务器端为每个直播分别应用均衡器和混响。
- **多轨推流（Enhanced Broadcasting）** — 可将 OBS 的多轨 H.264 作为多画质 HLS（ABR）分发。（仅限运营方允许的组织）
- **控制台管理** — 可通过网页管理推流密钥、观看 URL、录制、API 密钥、IP 规则、通知和团队（组织）等。
- **公开 API** — 提供可获取服务器运行状态、直播状态和观众人数的 API。

## 相关页面

- [如何选择节点](/zh-hans/services/streaming-service/nyan-streaming/nodes/)
- [推流方式（接入）](/zh-hans/services/streaming-service/nyan-streaming/streaming-methods/)
- [观看方式（播放）](/zh-hans/services/streaming-service/nyan-streaming/viewing-methods/)
- [支持的编解码器](/zh-hans/services/streaming-service/nyan-streaming/codecs/)
- [套餐、限制与政策](/zh-hans/services/streaming-service/nyan-streaming/plans-and-limits/)
- [控制台使用指南](/zh-hans/services/streaming-service/nyan-streaming/dashboard/)
- [公开 API](/zh-hans/services/streaming-service/nyan-streaming/api/)
- [低延迟 OBS 配置文件](/zh-hans/services/streaming-service/nyan-streaming/obs-profile/)
- [视频播放器设置与检查](/zh-hans/services/streaming-service/nyan-streaming/video-player-settings/)
