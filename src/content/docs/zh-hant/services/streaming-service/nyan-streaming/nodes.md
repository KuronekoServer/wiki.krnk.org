---
title: "如何選擇節點"
description: "Node01、Node02、Node03 在用途、錄製支援、音樂使用報告和直播時長方面的區別"
lastUpdated: 2026-08-22T00:00:00.000Z
sidebar:
  order: 3
---

# 如何選擇節點

在 Nyan Streaming 中，建立串流金鑰時需要選擇推流目標節點。各節點的適用地區、錄製支援和直播時長等不同，請選擇符合直播內容的節點。

## 先按用途選擇

| 直播內容與條件 | 應選擇的節點 |
| --- | --- |
| 使用 JASRAC 或 NexTone 管理的音樂作品 | **Node01** |
| 普通直播、活動、面向世界各地的直播或需要錄製 | **Node02** |
| 以低位元率進行超過 24 小時的長時間直播 | **Node03** |

:::tip
如果沒有特殊條件，又不確定應該選哪個，請選擇 **Node02**。
:::

## Node01：使用受管理音樂作品的直播

Node01 適用於使用 JASRAC 或 NexTone 管理音樂作品的直播。推流和觀看均僅限日本國內。

使用 Node01 時，請透過控制台的[音樂使用申請](/zh-hant/services/streaming-service/nyan-streaming/dashboard/music-reports/)，在**使用音樂作品當月的最後一天之前**報告所用音樂。未按期報告或報告內容不完整時，會受到處罰或被收取額外使用費。

:::caution[無法使用錄製功能]
根據與 JASRAC 及 NexTone 簽訂的授權協議，無法向使用者提供 Node01 的錄製資料。
:::

## Node02：普通直播與全球直播

Node02 是使用世界各地直播伺服器、向多個國家和地區穩定傳輸的標準節點。除普通直播和活動直播外，也適用於需要錄製的直播。

:::note[唯一支援錄製的節點]
**只有 Node02** 可以使用錄製功能。錄製是否可用、儲存容量和保留期限取決於方案。詳情請參閱[存檔](/zh-hant/services/streaming-service/nyan-streaming/dashboard/archives/)。
:::

## Node03：低位元率長時間直播

Node03 用於以低位元率進行長時間、長期連續直播。不受連續直播 24 小時的限制，因此可以用於超過 24 小時的直播。

:::note
Node03 仍受各方案的位元率上限、儲存上限、服務條款等直播時長以外的條件約束。
:::

:::caution[無法使用錄製功能]
Node03 面向長時間直播，為避免錄製擠佔伺服器儲存容量，不支援錄製。
:::

## 比較錄製支援

| 節點 | 錄製 | 原因與條件 |
| --- | --- | --- |
| **Node01** | 不可用 | 根據與 JASRAC、NexTone 的授權協議，無法提供錄製資料 |
| **Node02** | 可用 | 在方案提供的錄製支援、儲存容量和保留期限範圍內使用 |
| **Node03** | 不可用 | 避免長時間直播佔用過多伺服器儲存容量 |

## 在控制台中選擇

1. 打開控制台的**串流金鑰**。
2. 選擇**新建串流金鑰**，指定符合用途的節點和區域。
3. 打開已建立金鑰的**概覽**分頁，將所選推流目標的 URL 設定到 OBS 等軟體中。

:::note
僅在控制台中顯示或選擇節點，並不會固定連線目標。實際連線目標由輸入直播軟體的 URL 決定。
:::

## 相關頁面

- [入門指南](/zh-hant/services/streaming-service/nyan-streaming/getting-started/)
- [串流金鑰](/zh-hant/services/streaming-service/nyan-streaming/dashboard/stream-keys/)
- [音樂使用申請](/zh-hant/services/streaming-service/nyan-streaming/dashboard/music-reports/)
- [方案、限制與政策](/zh-hant/services/streaming-service/nyan-streaming/plans-and-limits/)
- [伺服器運行狀態](/zh-hant/services/streaming-service/nyan-streaming/dashboard/servers/)
