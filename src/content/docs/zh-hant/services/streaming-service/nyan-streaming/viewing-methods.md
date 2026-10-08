---
title: "觀看方式（播放）"
description: "透過 HLS、RTSP、RTMP 和 WebRTC (WHEP) 觀看的方法及觀看 URL 格式"
lastUpdated: 2026-06-26T00:00:00.000Z
sidebar:
  order: 5
---

# 觀看方式（播放）

可透過 **HLS / RTSP / RTMP / WebRTC (WHEP)** 觀看直播。請根據用途選擇：重視低延遲時使用 **RTSP / WebRTC**，重視兼容性時使用 **HLS**。

## 查看觀看 URL

觀看 URL 可從[控制台](https://nyst.live/)的串流金鑰詳情中查看。URL 由“**組織 slug**”和“**觀看金鑰（view key）**”構成，每個伺服器（節點）都有對應的地址。

:::note
**觀看金鑰**與串流金鑰（機密值）不同。分享觀看 URL 不會導致推流被他人接管。重新生成觀看金鑰後，之前的觀看 URL 將失效。
:::

## HLS

這是可在瀏覽器和多種播放器中廣泛播放的方式。由於協議特性，延遲稍大（數秒左右）。

- **URL（TS／標準）**：`https://<伺服器位址>/<組織 slug>/<觀看金鑰>/index.m3u8`
  - Safari / VLC 等可直接播放。其他瀏覽器中推薦使用 **hls.js**。
- **URL（fMP4）**：`https://<伺服器位址>/<組織 slug>/<觀看金鑰>/index.fmp4.m3u8`
  - fMP4 可透過瀏覽器標準功能（MSE）播放。

## RTSP（最低延遲，推薦用於 VRChat）

可用最低延遲（約 1 秒）觀看。推薦用於 VRChat 或 AV Pro 系列影片播放器。

- **URL**：`rtsp://<伺服器位址>/<組織 slug>/<觀看金鑰>`
- **TCP（RTSPT）**：根據網路環境，也可以使用 TCP 交錯傳輸（RTSPT）觀看。
- **音訊**：支援 **AAC** 和 **PCM（s16be）**。在 AV Pro / Windows Media Foundation 等無法播放 RTSP AAC 的環境中，可用 PCM（s16be）觀看。
- 各播放器的低延遲設定請參閱[影片播放器設定與檢查](/zh-hant/services/streaming-service/nyan-streaming/video-player-settings/)。

## RTMP

可透過支援 RTMP 播放的播放器觀看（約 1～2 秒）。

- **URL**：`rtmp://<伺服器位址>/<組織 slug>/<觀看金鑰>`

## WebRTC（WHEP）

這是瀏覽器中延遲最低（約 1 秒）的觀看方式。請使用控制台顯示的 WHEP URL（HTTPS，預設端口 8443）。音訊支援 **Opus**。

## 觀看節目播出（頻道）

組織使用“節目播出（頻道）”時，透過**不含觀看金鑰的組織 URL**觀看，即使推流方切換金鑰，也會保持連線，僅替換內容（直播切換器）。

- **URL（HLS 示例）**：`https://<伺服器位址>/<組織 slug>/index.m3u8`

## 相關頁面

- [如何選擇節點](/zh-hant/services/streaming-service/nyan-streaming/nodes/)
- [支援的編解碼器](/zh-hant/services/streaming-service/nyan-streaming/codecs/)
- [影片播放器設定與檢查](/zh-hant/services/streaming-service/nyan-streaming/video-player-settings/)
