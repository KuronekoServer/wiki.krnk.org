---
title: "入門指南"
description: "從選擇節點和串流金鑰，到透過 OBS 推流並在瀏覽器及 VRChat 中檢查播放"
lastUpdated: 2026-08-22T00:00:00.000Z
sidebar:
  order: 2
---

# 入門指南

本頁依次說明如何在 Nyan Streaming 控制台中建立串流金鑰、從 OBS Studio 推流，以及實際檢查播放效果。

## 事先準備

- 可登入 [Nyan Streaming 控制台](https://nyst.live/)的帳戶
- OBS Studio 等支援使用 H.264 / AAC 進行 RTMP 推流的軟體
- 用於管理直播的組織（團隊）

登入後，請透過左上角的團隊切換選單選擇要操作的組織。方案上限、串流金鑰、觀看 URL 和錄製等均按組織管理。

## 1. 建立串流金鑰

1. 打開左側選單的**串流金鑰**。
2. 選擇**新建串流金鑰**。
3. 指定易於識別的名稱和方案。按需設定節點、區域、觀看金鑰和備註。
4. 打開已建立的金鑰，顯示**概覽**分頁。

:::note
**串流金鑰（機密值）**與觀看 URL 中的**觀看金鑰**不同。只向觀眾分享觀看 URL。
:::

## 2. 確認推流目標

### 如何選擇節點

:::note
使用 Free 方案時無需執行此步驟。
:::

建立串流金鑰時，請選擇符合直播內容的節點。

| 直播內容與條件 | 應選擇的節點 |
| --- | --- |
| 使用 JASRAC 或 NexTone 管理的音樂作品 | **Node01** |
| 普通直播、活動、面向世界各地的直播或需要錄製 | **Node02** |
| 以低位元率進行超過 24 小時的長時間直播 | **Node03** |

:::tip
如果沒有特殊條件，又不確定應該選哪個，請選擇 **Node02**。只有 Node02 支援錄製。
:::

音樂使用報告、錄製支援和直播時長等區別，請參閱[如何選擇節點](/zh-hant/services/streaming-service/nyan-streaming/nodes/)。

選擇節點後，從概覽分頁確認要使用的伺服器的以下兩項資訊。

| OBS 項目 | 從控制台複製的值 |
| --- | --- |
| 伺服器 | RTMP 推流（接入）URL |
| 串流金鑰 | 串流金鑰／機密值 |

:::caution
請像保護密碼一樣保護串流金鑰。不要發送給第三方，也不要讓其出現在直播畫面或螢幕截圖中。如發生洩漏，請從控制台重新生成。
:::

## 3. 設定 OBS Studio

打開 OBS Studio 的**設定 → 直播**，按以下方式設定。

| 項目 | 設定 |
| --- | --- |
| 服務 | 自訂 |
| 伺服器 | 控制台的 RTMP URL |
| 串流金鑰 | 控制台中的推流機密值 |
| 影片編碼器 | H.264（AVC） |
| 音訊編碼器 | AAC |
| 位元率控制 | 推薦 CBR |
| 影片位元率 | 初始建議 1,000～1,500 kbps，並保證組織合計不超過方案上限 |
| 關鍵影格間隔 | 推薦 1 秒 |

伺服器不會重新編碼影片。選擇不支援的影片或音訊編解碼器時，即使能夠開始推流，觀眾也可能無法播放。支援的音訊為 AAC 和 PCM（s16be）。**只有 RTSP 支援 PCM（s16be）推流，透過 RTSP 以外的方式觀看時，音訊會轉換為 AAC。**已設定好的設定檔可從[低延遲 OBS 設定檔](/zh-hant/services/streaming-service/nyan-streaming/obs-profile/)下載。

:::caution
輸入位元率上限按**組織內所有同時直播的流的合計**計算，而不是按單個直播計算。多路推流時，請確保合計不超過上限。
:::

## 4. 開始推流並檢查

1. 在 OBS Studio 中點擊**開始直播**。
2. 確認控制台中相應金鑰變為活躍狀態，並顯示輸入位元率。
3. 透過金鑰詳情中的**瀏覽器觀看**或 **HLS 觀看**檢查影片和音訊。
4. 在 VRChat 中使用時，將概覽分頁中的 RTSP / RTSPT URL 輸入支援 AVPro 的播放器。

優先考慮低延遲時適合使用 RTSP 或 WebRTC (WHEP)，優先考慮瀏覽器兼容性時適合使用 HLS。VRChat 各播放器的設定請參閱[影片播放器設定與檢查](/zh-hant/services/streaming-service/nyan-streaming/video-player-settings/)。

## 5. 結束直播

在 OBS Studio 中點擊**停止直播**，並確認控制台中的金鑰變為非活躍狀態。如果啟用了錄製，處理完成後可從**存檔**播放和下載。

## 僅使用瀏覽器推流

金鑰詳情中的**瀏覽器推流**可透過 WebRTC (WHIP) 直接發送攝影機、麥克風和螢幕共享內容。請使用 Edge / Chrome / Firefox 等支援 HTTPS 的瀏覽器，允許訪問相關設備後開始推流。

## 遇到問題時

無法開始推流、沒有影片或音訊，或直播中途切換到限制畫面時，請參閱[故障排除](/zh-hant/services/streaming-service/nyan-streaming/troubleshooting/)。

## 相關頁面

- [如何選擇節點](/zh-hant/services/streaming-service/nyan-streaming/nodes/)
- [推流方式（接入）](/zh-hant/services/streaming-service/nyan-streaming/streaming-methods/)
- [觀看方式（播放）](/zh-hant/services/streaming-service/nyan-streaming/viewing-methods/)
- [方案、限制與政策](/zh-hant/services/streaming-service/nyan-streaming/plans-and-limits/)
- [控制台使用指南](/zh-hant/services/streaming-service/nyan-streaming/dashboard/)
