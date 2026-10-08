---
title: "故障排除"
description: "推流與觀看問題，以及位元率、24 小時和違反條款所導致限制的處理方法"
lastUpdated: 2026-08-22T00:00:00.000Z
sidebar:
  order: 9
---

# 故障排除

首先打開控制台的串流金鑰列表和金鑰詳情，檢查金鑰狀態、輸入位元率、當前選擇的節點／區域以及限制提示。

## 根據症狀檢查

| 症狀 | 首先檢查的內容 |
| --- | --- |
| 無法開始推流 | RTMP URL 和推流機密值、節點運行狀態、金鑰的限制提示 |
| 沒有影片 | 影片編解碼器是否為 H.264 (AVC) |
| 沒有音訊 | 音訊編解碼器是否為 AAC 或 PCM（s16be）。PCM 推流僅支援 RTSP，透過 RTSP 以外的方式觀看時音訊為 AAC |
| 無法開始 RTSP 推流 | 服務提供商是否限制端口 554 或 RTSP 通信 |
| 無法在瀏覽器播放 HLS | URL 是否為 `.m3u8`，Safari 以外的瀏覽器是否使用支援 hls.js 的播放器 |
| 無法在 VRChat 播放 | 是否使用支援 AVPro 的播放器、RTSP / RTSPT URL，以及是否啟用 Stream Mode / Low Latency |
| 僅在 VRChat Public 中無法播放 | [世界允許的域名](/zh-hant/services/streaming-service/nyan-streaming/vrchat-world-domains/)和 `Allow Untrusted URLs` |
| 延遲較大 | 是否可以改用 RTSP 或 WebRTC (WHEP) 而不是 HLS |
| 直播中途斷開 | 位元率、連續直播 24 小時、違反條款的限制提示或通知 |

## 僅 RTSP 推流無法開始

部分互聯網服務提供商（ISP）限制端口 554 或 RTSP 通信。在同一網路中能透過 RTMP 或 WebRTC 推流，卻只有 RTSP 無法連線時，**原因是服務提供商的通信限制，並非 Nyan Streaming 故障**。

請諮詢您訂閱的服務提供商是否支援 RTSP 通信，或嘗試其他網路。無法使用 RTSP 時，請改用 AAC 音訊，透過 RTMP 或 WebRTC 推流。

## 出現限制畫面

當直播因位元率、連續直播 24 小時或違反服務條款而停止時，會向觀眾顯示與限制原因對應的警告畫面，替代正常直播內容。控制台的金鑰列表會顯示原因；可自動解除的限制也會顯示預計解除時間。

:::note
警告畫面、郵件、Webhook 和應用內通知的語言由組織的**設定 → 常規 → 預設語言**決定。選擇日語時以日語顯示，其他語言則以英語顯示。
:::

### 連續直播超過 24 小時

在啟用了 24 小時限制的節點上，同一個 publish 會話連續達到 24 小時時適用。會停止相關直播，並將**組織的全部串流金鑰封鎖 1 天**。重新連線後，連續時長會按新會話重新計算。**Node03 不受此限制。**

![連續直播超過 24 小時的限制畫面（日語）](https://cdn.krnk.org/kuronekoserver/nyst/warning/24h-jp.png)

**處理方法**

1. 在控制台查看預計解除時間。
2. 解除前無法恢復推流。
3. 解除後，以新會話開始推流。
4. 以低位元率連續直播超過 24 小時時請使用 Node03。其他條件下需要長時間運行時，請提前[聯繫我們](https://krnk.org/contact/)。

### 超過輸入位元率上限

組織內所有同時直播的流的輸入位元率合計持續超過方案上限 **10 分鐘以上**時適用。會從最新開始的直播起依次停止，直到合計降至上限以內，被停止的金鑰在 **1 小時**內無法再次推流。

![超過輸入位元率上限的限制畫面（日語）](https://cdn.krnk.org/kuronekoserver/nyst/warning/bitrate-jp.png)

**處理方法**

1. 合計所有同時推流編碼器的影片與音訊位元率。
2. 降低每個直播的位元率，或結束不需要的同時直播，讓組織合計保持在上限以內。
3. 在控制台查看被停止金鑰的預計解除時間。
4. 解除後重新連線。如需更高上限，請更改方案或申請額外位元率。

### 其他違反服務條款的行為

管理員確認存在違反服務條款的行為時，會停止或封鎖相關組織或使用者的直播。此限制沒有自動解除時間。

![違反服務條款的限制畫面（日語）](https://cdn.krnk.org/kuronekoserver/nyst/warning/tos-jp.png?t=1787304185303)

**處理方法**

1. 查看 [Nyan Streaming 服務條款](https://krnk.org/terms/nyan-streaming)及通知中提到的條款。
2. 停止或修改相應直播內容。
3. 如需申請解除審覈，請[聯繫我們](https://krnk.org/contact/)。

## 其他上限

### 同時觀看人數

整個組織的同時觀看人數達到方案上限時，會拒絕新觀眾的連線。已在觀看的連線會繼續。請騰出名額，或更改方案／觀眾附加項。

### 儲存容量

組織達到儲存上限時，錄製會自動停止。直播本身會繼續，停止前的錄製內容會上傳。請刪除不需要的存檔或媒體，或者增加容量。

### 地區限制

僅限日本國內的節點／方案不允許從目標地區以外觀看。請檢查串流金鑰的方案、當前所選節點和區域。

## 聯繫時請提供的資訊

- 組織名稱和串流金鑰的**顯示名稱**（請勿發送推流機密值）
- 問題發生時間和時區
- 使用的節點／區域及協議（RTMP / RTSP / HLS / WebRTC）
- 控制台顯示的錯誤或限制原因
- 如附上 OBS 統計或日誌，請先移除推流機密值和個人資訊

## 相關頁面

- [如何選擇節點](/zh-hant/services/streaming-service/nyan-streaming/nodes/)
- [入門指南](/zh-hant/services/streaming-service/nyan-streaming/getting-started/)
- [支援的編解碼器](/zh-hant/services/streaming-service/nyan-streaming/codecs/)
- [方案、限制與政策](/zh-hant/services/streaming-service/nyan-streaming/plans-and-limits/)
- [控制台使用指南](/zh-hant/services/streaming-service/nyan-streaming/dashboard/)
