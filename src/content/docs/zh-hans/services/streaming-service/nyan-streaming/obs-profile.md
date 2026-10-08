---
title: "低延迟 OBS 配置文件"
lastUpdated: 2026-08-22T00:00:00.000Z
sidebar:
  order: 11
---

# OBS 低延迟配置文件

## 概述

本配置文件在 **れもん果汁**和**きょう**两位的指导下制作。
基于 https://lemonkaju.booth.pm/items/7497730 的配置文件进行了修改和再分发。
以下说明适用于 Windows，敬请知悉。

## 安装准备

请事先安装以下软件。
🔷OBS：https://obsproject.com/download
🔷iTunes：https://www.apple.com/itunes/download/win64

## 配置文件

> 实际使用时，请从 Nyan Streaming 的工具中确认自己的地址后再推流。

### CoreAudio AAC

- Nvidia：[下载 CoreAudio AAC Nvidia 配置文件](https://cdn.krnk.org/kuronekoserver/wiki/nyst/obs-profile/nyst_nvidia_coreaudio_aac.zip)
- Radeon：[下载 CoreAudio AAC Radeon 配置文件](https://cdn.krnk.org/kuronekoserver/wiki/nyst/obs-profile/nyst_radeon_coreaudio_aac.zip)

### PCM（s16be，最高音质）

:::caution
只有 **RTSP** 支持通过 PCM（s16be）推流和观看。通过 HLS / RTMP / WebRTC 等 RTSP 以外的方式观看时，音频会转换为 AAC。
:::

- Nvidia：[下载 PCM（s16be）Nvidia 配置文件](https://cdn.krnk.org/kuronekoserver/wiki/nyst/obs-profile/nyst_nvidia_lpcm.zip)
- Radeon：[下载 PCM（s16be）Radeon 配置文件](https://cdn.krnk.org/kuronekoserver/wiki/nyst/obs-profile/nyst_radeon_lpcm.zip)

### WebRTC

- Nvidia：[下载 WebRTC Nvidia 配置文件](https://cdn.krnk.org/kuronekoserver/wiki/nyst/obs-profile/nyst_nvidia_webrtc.zip)
- Radeon：[下载 WebRTC Radeon 配置文件](https://cdn.krnk.org/kuronekoserver/wiki/nyst/obs-profile/nyst_radeon_webrtc.zip)

## 在 OBS 中导入配置文件

下载上述配置文件并**解压后**，在 OBS 的配置文件菜单中选择导入，再选择解压后的文件。
导入后，配置文件应会显示在列表中。

![导入配置文件](https://cdn.krnk.org/kuronekoserver/wiki/nyst/obs-profile/import.webp)
