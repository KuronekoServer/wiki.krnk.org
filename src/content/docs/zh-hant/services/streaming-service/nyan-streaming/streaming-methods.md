---
title: "推流方式（接入）"
description: "RTMP、WebRTC (WHIP)、RTSP 和瀏覽器推流的方法，以及推流地址的查看方法"
lastUpdated: 2026-08-22T00:00:00.000Z
sidebar:
  order: 4
---

:::note
Nyan Streaming 免費伺服器 `free.nyst.live` 無須註冊控制台即可使用。Nyan Streaming 使用 [dash.nyst.live](https://dash.nyst.live/)，Nyan Streaming Japan 使用 [dash.jp.nyst.live](https://dash.jp.nyst.live/)。請確認適用於所用服務和合約的串流與觀看 URL。
:::


# 推流方式（接入）

可透過 **RTMP / WebRTC (WHIP) / RTSP 推送／瀏覽器推流**向 Nyan Streaming 發送影片。影片支援 **H.264**，音訊支援 **AAC / PCM（s16be）**（PCM（s16be）可透過 RTSP 使用，Opus 可透過 WebRTC 使用）。伺服器端不會重新編碼影片，因此使用不支援的編解碼器時無法顯示直播畫面。透過 RTSP 以外的方式觀看 PCM（s16be）直播時，音訊會轉換為 AAC。

## 查看推流地址和串流金鑰

用於推流的**伺服器地址**和**串流金鑰**可從[控制台](https://dash.nyst.live/)的串流金鑰頁面查看。選擇伺服器（節點）或區域後，會顯示對應的推流／觀看地址。

服務和連線位址請參閱[選擇服務與節點](../nodes/)。

:::caution
串流金鑰（推流機密值）被他人獲知後，可能被用於未經許可的推流。請勿與第三方分享。如發生洩漏，請從控制台重新生成金鑰。
:::

## RTMP（OBS 等）

支援從 OBS Studio 等常見直播軟體推流。

- **推流目標 URL**：`rtmp://<伺服器位址>/<組織 slug>/`（預設端口 **1935**）
- **串流金鑰**：在控制台中建立的串流金鑰／權杖
- **推薦設定**：影片 H.264，音訊 AAC

我們提供可簡便地為 OBS 設定低延遲的設定檔。請使用[低延遲 OBS 設定檔](/zh-hant/services/streaming-service/nyan-streaming/obs-profile/)。

## WebRTC（WHIP）

這是延遲最低的推流方式，可用於從瀏覽器或支援 WHIP 的編碼器推流。

- **推流目標**：控制台中顯示的 WHIP URL（HTTPS，預設端口 **8443**）
- **影片**：H.264 / **音訊**：Opus
- 需要 HTTPS 環境。

## 瀏覽器推流

可從控制台的“瀏覽器推流”直接使用攝影機或螢幕共享進行直播（基於 WebRTC）。無需準備直播軟體，操作方便。請使用 HTTPS 環境中的瀏覽器（Chrome / Edge / Firefox 等）。

## RTSP（推送）

可從監控攝影機或部分設備透過 RTSP 推送（ANNOUNCE → RECORD）直接推流。

- **推流目標 URL**：`rtsp://<伺服器位址>:554/<組織 slug>/...`（預設端口 **554**）
- **影片**：H.264 / **音訊**：AAC / PCM（s16be）

:::caution[PCM（s16be）推流與觀看]
只有 **RTSP 推送**支援 PCM（s16be）推流。透過 RTSP 可觀看 PCM（s16be）音訊，但透過 HLS / RTMP / WebRTC 等 **RTSP 以外的方式觀看時，音訊會轉換為 AAC**。
:::

:::caution[互聯網服務提供商的 RTSP 通信限制]
部分互聯網服務提供商（ISP）會限制端口 554 或 RTSP 通信，可能導致無法開始 RTSP 推流。在這種情況下，**原因是服務提供商的通信限制，並非 Nyan Streaming 故障**。請諮詢您的服務提供商或使用其他網路。無法使用 RTSP 時，可改用 AAC 音訊，透過 RTMP 或 WebRTC 推流。
:::

## 多軌推流（Enhanced Broadcasting）

使用 OBS 的 Enhanced Broadcasting（多軌）時，可將多個畫質的 **H.264** 軌道作為一路直播發送。伺服器將其分發為多畫質 HLS（ABR）。各畫質版本由推流端（OBS）的編碼器生成，伺服器端不進行重新編碼。

## 常見注意事項

- **沒有影片／沒有聲音**：請檢查編解碼器。影片通常使用 H.264，音訊通常使用 AAC。詳情請參閱[支援的編解碼器](/zh-hant/services/streaming-service/nyan-streaming/codecs/)。
- **直播突然斷開**：請確認是否達到連續直播時長或位元率上限。詳情請參閱[方案、限制與政策](/zh-hant/services/streaming-service/nyan-streaming/plans-and-limits/)。
