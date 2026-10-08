---
title: "支援的編解碼器"
description: "Nyan Streaming（現行伺服器）推流與觀看可用的編解碼器"
lastUpdated: 2026-08-22T00:00:00.000Z
sidebar:
  order: 6
---

# 支援的編解碼器

Nyan Streaming 運行於自主開發的直播伺服器上，影片設計為**不在伺服器端轉碼（重新編碼）**。音訊標準為 AAC；僅當透過 RTSP 輸入的 PCM（s16be）以 RTSP 以外的方式觀看時，才轉換為 AAC。**必須使用受支援的編解碼器推流**。使用不支援的編解碼器會導致看不到影片、聽不到音訊等問題。

## 基本編解碼器

| 類型 | 支援的編解碼器 |
| --- | --- |
| 影片 | **H.264 (AVC)** |
| 音訊 | **AAC (MPEG-4 Audio)**、**PCM（s16be）** |

影片標準為 **H.264**，音訊標準為 **AAC**。無論推流（RTMP / RTSP / WebRTC）還是觀看（HLS / RTSP / RTMP / WebRTC），採用此組合即可正常工作。

:::caution
不支援 **AV1 / VP9 / VP8 / H.265 (HEVC)** 等影片編解碼器。請務必在 OBS 等軟體的編碼器設定中選擇 **H.264**。
:::

## 額外支援的音訊編解碼器

除基本編解碼器外，還支援以下音訊。

- **PCM（s16be／無壓縮，最高音質）** — 只有 **RTSP 推送**支援 PCM（s16be）推流。透過 RTSP 可觀看 PCM（s16be）音訊，但透過 HLS / RTMP / WebRTC 等 **RTSP 以外的方式觀看時，音訊會轉換為 AAC**。
- **Opus** — 可透過 **WebRTC（WHIP 推流／WHEP 觀看）**使用。
- **透過 RTSP 觀看 PCM（s16be）** — 在 AV Pro / Windows Media Foundation 等無法順利播放 RTSP AAC 的環境中，可以透過 RTSP 接收 PCM（s16be）音訊。

## 在 VRChat 中觀看

:::caution
VRChat 僅支援播放以下編解碼器。

- 影片：**H.264**
- 音訊：**AAC（MPEG-4 Audio）**、**PCM（s16be，僅限 RTSP 觀看）**
  :::

對於 VRChat，推薦使用延遲最低的 **RTSP** 觀看。各播放器設定請參閱[影片播放器設定與檢查](/zh-hant/services/streaming-service/nyan-streaming/video-player-settings/)。
