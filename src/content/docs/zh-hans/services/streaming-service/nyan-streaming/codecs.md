---
title: "支持的编解码器"
description: "Nyan Streaming（现行服务器）推流与观看可用的编解码器"
lastUpdated: 2026-08-22T00:00:00.000Z
sidebar:
  order: 6
---

# 支持的编解码器

Nyan Streaming 运行于自主开发的直播服务器上，视频设计为**不在服务器端转码（重新编码）**。音频标准为 AAC；仅当通过 RTSP 输入的 PCM（s16be）以 RTSP 以外的方式观看时，才转换为 AAC。**必须使用受支持的编解码器推流**。使用不支持的编解码器会导致看不到视频、听不到音频等问题。

## 基本编解码器

| 类型 | 支持的编解码器 |
| --- | --- |
| 视频 | **H.264 (AVC)** |
| 音频 | **AAC (MPEG-4 Audio)**、**PCM（s16be）** |

视频标准为 **H.264**，音频标准为 **AAC**。无论推流（RTMP / RTSP / WebRTC）还是观看（HLS / RTSP / RTMP / WebRTC），采用此组合即可正常工作。

:::caution
不支持 **AV1 / VP9 / VP8 / H.265 (HEVC)** 等视频编解码器。请务必在 OBS 等软件的编码器设置中选择 **H.264**。
:::

## 额外支持的音频编解码器

除基本编解码器外，还支持以下音频。

- **PCM（s16be／无压缩，最高音质）** — 只有 **RTSP 推送**支持 PCM（s16be）推流。通过 RTSP 可观看 PCM（s16be）音频，但通过 HLS / RTMP / WebRTC 等 **RTSP 以外的方式观看时，音频会转换为 AAC**。
- **Opus** — 可通过 **WebRTC（WHIP 推流／WHEP 观看）**使用。
- **通过 RTSP 观看 PCM（s16be）** — 在 AV Pro / Windows Media Foundation 等无法顺利播放 RTSP AAC 的环境中，可以通过 RTSP 接收 PCM（s16be）音频。

## 在 VRChat 中观看

:::caution
VRChat 仅支持播放以下编解码器。

- 视频：**H.264**
- 音频：**AAC（MPEG-4 Audio）**、**PCM（s16be，仅限 RTSP 观看）**
  :::

对于 VRChat，推荐使用延迟最低的 **RTSP** 观看。各播放器设置请参阅[视频播放器设置与检查](/zh-hans/services/streaming-service/nyan-streaming/video-player-settings/)。
