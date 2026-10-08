---
title: "低延遲 OBS 設定檔"
lastUpdated: 2026-08-22T00:00:00.000Z
sidebar:
  order: 11
---

# OBS 低延遲設定檔

## 概述

本設定檔在 **れもん果汁**和**きょう**兩位的指導下製作。
基於 https://lemonkaju.booth.pm/items/7497730 的設定檔進行了修改和再分發。
以下說明適用於 Windows，敬請知悉。

## 安裝準備

請事先安裝以下軟體。
🔷OBS：https://obsproject.com/download
🔷iTunes：https://www.apple.com/itunes/download/win64

## 設定檔

> 實際使用時，請從 Nyan Streaming 的工具中確認自己的地址後再推流。

### CoreAudio AAC

- Nvidia：[下載 CoreAudio AAC Nvidia 設定檔](https://cdn.krnk.org/kuronekoserver/wiki/nyst/obs-profile/nyst_nvidia_coreaudio_aac.zip)
- Radeon：[下載 CoreAudio AAC Radeon 設定檔](https://cdn.krnk.org/kuronekoserver/wiki/nyst/obs-profile/nyst_radeon_coreaudio_aac.zip)

### PCM（s16be，最高音質）

:::caution
只有 **RTSP** 支援透過 PCM（s16be）推流和觀看。透過 HLS / RTMP / WebRTC 等 RTSP 以外的方式觀看時，音訊會轉換為 AAC。
:::

- Nvidia：[下載 PCM（s16be）Nvidia 設定檔](https://cdn.krnk.org/kuronekoserver/wiki/nyst/obs-profile/nyst_nvidia_lpcm.zip)
- Radeon：[下載 PCM（s16be）Radeon 設定檔](https://cdn.krnk.org/kuronekoserver/wiki/nyst/obs-profile/nyst_radeon_lpcm.zip)

### WebRTC

- Nvidia：[下載 WebRTC Nvidia 設定檔](https://cdn.krnk.org/kuronekoserver/wiki/nyst/obs-profile/nyst_nvidia_webrtc.zip)
- Radeon：[下載 WebRTC Radeon 設定檔](https://cdn.krnk.org/kuronekoserver/wiki/nyst/obs-profile/nyst_radeon_webrtc.zip)

## 在 OBS 中匯入設定檔

下載上述設定檔並**解壓後**，在 OBS 的設定檔選單中選擇匯入，再選擇解壓後的檔案。
匯入後，設定檔應會顯示在列表中。

![匯入設定檔](https://cdn.krnk.org/kuronekoserver/wiki/nyst/obs-profile/import.webp)
