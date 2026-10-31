---
title: "方案、限制與政策"
description: "方案的基本規則、推流與觀看限制以及使用政策概述"
lastUpdated: 2026-08-22T00:00:00.000Z
sidebar:
  order: 7
---

:::note
**Nyan Streaming Japan 不支援直播錄製和檔案上傳功能。** 本頁關於錄製和媒體的說明適用於支援這些功能的 Nyan Streaming 服務。
:::


# 方案、限制與政策

## 方案

Nyan Streaming 的方案按**組織（團隊）**訂閱。不同方案主要影響以下項目的上限。

- **串流金鑰數量**（可同時持有的串流金鑰數）
- **同時觀看人數**（整個組織的合計）
- **輸入位元率**（整個組織的合計上限）
- **儲存容量**（錄製和上傳媒體的儲存容量）
- **可用功能與伺服器（節點）**

方案和附加項目因服務而異。請查看 [Nyan Streaming](https://nyst.live/) 或 [Nyan Streaming Japan](https://jp.nyst.live/) 的價格說明及對應控制台的方案頁面。

:::note
各方案的具體數值和價格可能變更。最新內容請查看官方網站 https://nyst.live/ 及控制台的方案頁面。如需企業使用，請提前聯繫我們。
:::

## 推流與觀看的主要限制

### 連續直播時長上限（24 小時）

在啟用了 24 小時限制的節點上，一個 publish 會話連續達到 **24 小時**時，該直播會自動斷開，且**組織的全部串流金鑰會被封鎖 1 天**。重新連線後，連續時長會按新會話重新計算。

錄製和直播時長等條件取決於服務、方案和合約。請查看控制台或詢問營運方。

### 支援錄製的節點

錄製可用性取決於服務、方案和合約。使用前請查看控制台或詢問營運方。

### 超過位元率上限

整個組織的輸入位元率合計持續超過方案上限 **10 分鐘以上**時，會從最新開始的直播起依次斷開，直到合計降至上限以內。被斷開的串流金鑰在 **1 小時**內無法再次推流。如需提高上限，可從控制台**申請增加位元率**（需要管理員批准）。

### 可觀看地區

根據方案或伺服器（節點）設定，**可觀看地區可能僅限日本國內**。是否支援全球直播取決於方案，詳情請查看方案頁面或聯繫我們。

### 編解碼器限制

伺服器端不會重新編碼影片，因此必須使用 **H.264（影片）／AAC 或 PCM（s16be）（音訊）**等受支援的編解碼器推流。透過 RTSP 推送 PCM（s16be）音訊，並以 RTSP 以外的方式觀看時，音訊會轉換為 AAC。詳情請參閱[支援的編解碼器](/zh-hant/services/streaming-service/nyan-streaming/codecs/)。

## 受限期間向觀眾顯示的畫面

直播受限時，會向觀眾顯示與限制原因對應的警告畫面，替代正常直播內容。可自動解除的限制會在控制台顯示預計解除時間。

:::note
組織的預設語言為日語時使用日語版本，其他語言則使用英語版本。可在控制台的**設定 → 常規 → 預設語言**中更改語言。
:::

### 直播超過 24 小時

![連續直播超過 24 小時的限制畫面](https://cdn.krnk.org/kuronekoserver/nyst/warning/24h-jp.png)

### 超過位元率上限

![超過輸入位元率上限的限制畫面](https://cdn.krnk.org/kuronekoserver/nyst/warning/bitrate-jp.png)

### 其他違反服務條款的行為

![違反服務條款的限制畫面](https://cdn.krnk.org/kuronekoserver/nyst/warning/tos-jp.png?t=1787304185303)

各類限制的解除步驟請參閱[故障排除](/zh-hant/services/streaming-service/nyan-streaming/troubleshooting/)。

## 使用政策

### 服務條款

管理員確認存在違反 [Nyan Streaming 服務條款](https://krnk.org/terms/nyan-streaming)的行為時，會停止或封鎖相關組織或使用者的直播。此類封鎖不會自動解除。如需申請解除審覈，請[聯繫我們](https://krnk.org/contact/)。如發現違反條款的行為，請立即向 **abuse@krnk.org** 舉報。

### 音樂使用申請

在直播中使用 JASRAC / NexTone 管理的音樂作品等時，請透過控制台的**音樂使用申請**表單提交申請。

## 控制台中的操作

- 建立、重新生成和刪除串流金鑰，查看觀看 URL
- 在可用時管理和下載錄製封存
- 設定轉推（外部 RTMP 目標）
- 切換節目播出（頻道）
- 建立 API 金鑰（使用公開 API）
- 設定推流來源 IP 訪問規則
- 設定通知（應用內通知 / Webhook / 郵件）
- 管理團隊（組織）、成員和帳單

各項操作的詳細步驟請參閱[控制台使用指南](/zh-hant/services/streaming-service/nyan-streaming/dashboard/)。

## 相關頁面

- [如何選擇節點](/zh-hant/services/streaming-service/nyan-streaming/nodes/)
- [入門指南](/zh-hant/services/streaming-service/nyan-streaming/getting-started/)
- [功能概述與支援的協議](/zh-hant/services/streaming-service/nyan-streaming/overview/)
- [推流方式（接入）](/zh-hant/services/streaming-service/nyan-streaming/streaming-methods/)
- [觀看方式（播放）](/zh-hant/services/streaming-service/nyan-streaming/viewing-methods/)
- [控制台使用指南](/zh-hant/services/streaming-service/nyan-streaming/dashboard/)
- [故障排除](/zh-hant/services/streaming-service/nyan-streaming/troubleshooting/)
- [公開 API](/zh-hant/services/streaming-service/nyan-streaming/api/)
