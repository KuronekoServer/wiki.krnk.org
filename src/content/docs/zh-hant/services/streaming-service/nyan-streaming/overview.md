---
title: "功能概述與支援的協議"
description: "Nyan Streaming 支援的協議、編解碼器、延遲與主要功能概覽"
lastUpdated: 2026-08-22T00:00:00.000Z
sidebar:
  order: 3
---

:::note
**Nyan Streaming Japan 不支援直播錄製和檔案上傳功能。** 本頁關於錄製和媒體的說明適用於支援這些功能的 Nyan Streaming 服務。
:::


# 功能概述與支援的協議

Nyan Streaming 是一項影片直播服務，目標是**以低延遲（最低約 1 秒）傳輸高畫質影片**。服務運行於自主開發的直播伺服器上，影片**不在伺服器端進行轉碼（重新編碼）**，而是直接傳送給觀眾。僅當透過 RTSP 輸入的 PCM（s16be）音訊以 RTSP 以外的方式觀看時，纔會將音訊轉換為 AAC。

官方網站：https://nyst.live/

## 支援的協議

### 推流（接入）

| 協議 | 概述 | 主要用途 |
| --- | --- | --- |
| **RTMP** | 支援 OBS 等常見直播軟體 | 從 OBS / XSplit 等軟體推流 |
| **WebRTC (WHIP)** | 延遲最低的推流方式 | 瀏覽器推流、重視低延遲的直播 |
| **RTSP（推送）** | 透過 RTSP 的 ANNOUNCE/RECORD 接入 | 高級推流 |
| **瀏覽器推流** | 從控制台直接直播攝影機／螢幕 | 簡便的瀏覽器直播（基於 WebRTC） |

### 觀看（播放）

| 協議 | 概述 | 延遲參考 |
| --- | --- | --- |
| **RTSP** | 延遲最低，推薦用於 VRChat / AV Pro | 約 1 秒 |
| **WebRTC (WHEP)** | 在瀏覽器中以最低延遲觀看 | 約 1 秒 |
| **RTMP** | 適用於支援 RTMP 播放的播放器 | 約 1～2 秒 |
| **HLS** | 可在瀏覽器及多種播放器中播放（瀏覽器中推薦使用 hls.js） | 數秒左右（協議特性導致延遲稍大） |

:::note
如需最低延遲，請使用 **RTSP** 或 **WebRTC (WHEP)**；如優先考慮兼容性，請使用 **HLS**。由於其工作機制，HLS 的延遲比其他方式更大。
:::

## 支援的編解碼器

影片支援 **H.264**，音訊支援 **AAC** 和 **PCM（s16be，RTSP）**。WebRTC 也可以使用 Opus。透過 RTSP 以外的方式觀看 PCM（s16be）直播時，音訊會轉換為 AAC。**不支援 AV1 / VP9 / VP8 / H.265 (HEVC)。** 詳情請參閱[支援的編解碼器](/zh-hant/services/streaming-service/nyan-streaming/codecs/)。

## 主要功能

- **低延遲直播** — RTSP / RTMP / WebRTC 可實現約 1 秒的低延遲（HLS 因協議特性延遲稍大）。
- **錄製（存檔）** — 可錄製直播，稍後觀看或下載（是否可用取決於方案和設定）。
- **轉推（中繼）** — 可將收到的直播同時轉發至 YouTube、Twitch 等外部 RTMP 目標。
- **節目播出（頻道／直播切換器）** — 可在保持觀眾連線的情況下，切換透過組織 URL 播出的直播。
- **多個節點／區域** — 可從多個伺服器（節點）推流和觀看，支援按地區分發。
- **多節點同時推流** — 可使用同一個串流金鑰，在多個伺服器上同時推流。
- **音訊 EQ 與混響** — 可在伺服器端為每個直播分別應用均衡器和混響。
- **多軌推流（Enhanced Broadcasting）** — 可將 OBS 的多軌 H.264 作為多畫質 HLS（ABR）分發。（僅限運營方允許的組織）
- **控制台管理** — 可透過網頁管理串流金鑰、觀看 URL、錄製、API 金鑰、IP 規則、通知和團隊（組織）等。
- **公開 API** — 提供可獲取伺服器運行狀態、直播狀態和觀眾人數的 API。

## 相關頁面

- [如何選擇節點](/zh-hant/services/streaming-service/nyan-streaming/nodes/)
- [推流方式（接入）](/zh-hant/services/streaming-service/nyan-streaming/streaming-methods/)
- [觀看方式（播放）](/zh-hant/services/streaming-service/nyan-streaming/viewing-methods/)
- [支援的編解碼器](/zh-hant/services/streaming-service/nyan-streaming/codecs/)
- [方案、限制與政策](/zh-hant/services/streaming-service/nyan-streaming/plans-and-limits/)
- [控制台使用指南](/zh-hant/services/streaming-service/nyan-streaming/dashboard/)
- [公開 API](/zh-hant/services/streaming-service/nyan-streaming/api/)
- [低延遲 OBS 設定檔](/zh-hant/services/streaming-service/nyan-streaming/obs-profile/)
- [影片播放器設定與檢查](/zh-hant/services/streaming-service/nyan-streaming/video-player-settings/)
