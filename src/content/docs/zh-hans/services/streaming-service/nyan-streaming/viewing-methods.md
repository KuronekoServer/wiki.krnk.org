---
title: "观看方式（播放）"
description: "通过 HLS、RTSP、RTMP 和 WebRTC (WHEP) 观看的方法及观看 URL 格式"
lastUpdated: 2026-06-26T00:00:00.000Z
sidebar:
  order: 5
---

:::note
Nyan Streaming 免费服务器 `free.nyst.live` 无需注册控制台即可使用。Nyan Streaming 使用 [dash.nyst.live](https://dash.nyst.live/)，Nyan Streaming Japan 使用 [dash.jp.nyst.live](https://dash.jp.nyst.live/)。请确认适用于所用服务和合同的推流与观看 URL。
:::


# 观看方式（播放）

可通过 **HLS / RTSP / RTMP / WebRTC (WHEP)** 观看直播。请根据用途选择：重视低延迟时使用 **RTSP / WebRTC**，重视兼容性时使用 **HLS**。

## 查看观看 URL

观看 URL 可从[控制台](https://dash.nyst.live/)的推流密钥详情中查看。URL 由“**组织 slug**”和“**观看密钥（view key）**”构成，每个服务器（节点）都有对应的地址。

:::note
**观看密钥**与推流密钥（机密值）不同。分享观看 URL 不会导致推流被他人接管。重新生成观看密钥后，之前的观看 URL 将失效。
:::

## HLS

这是可在浏览器和多种播放器中广泛播放的方式。由于协议特性，延迟稍大（数秒左右）。

- **URL（TS／标准）**：`https://<服务器地址>/<组织 slug>/<观看密钥>/index.m3u8`
  - Safari / VLC 等可直接播放。其他浏览器中推荐使用 **hls.js**。
- **URL（fMP4）**：`https://<服务器地址>/<组织 slug>/<观看密钥>/index.fmp4.m3u8`
  - fMP4 可通过浏览器标准功能（MSE）播放。

## RTSP（最低延迟，推荐用于 VRChat）

可用最低延迟（约 1 秒）观看。推荐用于 VRChat 或 AV Pro 系列视频播放器。

- **URL**：`rtsp://<服务器地址>/<组织 slug>/<观看密钥>`
- **TCP（RTSPT）**：根据网络环境，也可以使用 TCP 交错传输（RTSPT）观看。
- **音频**：支持 **AAC** 和 **PCM（s16be）**。在 AV Pro / Windows Media Foundation 等无法播放 RTSP AAC 的环境中，可用 PCM（s16be）观看。
- 各播放器的低延迟设置请参阅[视频播放器设置与检查](/zh-hans/services/streaming-service/nyan-streaming/video-player-settings/)。

## RTMP

可通过支持 RTMP 播放的播放器观看（约 1～2 秒）。

- **URL**：`rtmp://<服务器地址>/<组织 slug>/<观看密钥>`

## WebRTC（WHEP）

这是浏览器中延迟最低（约 1 秒）的观看方式。请使用控制台显示的 WHEP URL（HTTPS，默认端口 8443）。音频支持 **Opus**。

## 观看节目播出（频道）

组织使用“节目播出（频道）”时，通过**不含观看密钥的组织 URL**观看，即使推流方切换密钥，也会保持连接，仅替换内容（直播切换器）。

- **URL（HLS 示例）**：`https://<服务器地址>/<组织 slug>/index.m3u8`

## 相关页面

- [如何选择节点](/zh-hans/services/streaming-service/nyan-streaming/nodes/)
- [支持的编解码器](/zh-hans/services/streaming-service/nyan-streaming/codecs/)
- [视频播放器设置与检查](/zh-hans/services/streaming-service/nyan-streaming/video-player-settings/)
