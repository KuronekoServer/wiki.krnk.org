---
title: "推流方式（接入）"
description: "RTMP、WebRTC (WHIP)、RTSP 和浏览器推流的方法，以及推流地址的查看方法"
lastUpdated: 2026-08-22T00:00:00.000Z
sidebar:
  order: 4
---

:::note
Nyan Streaming 免费服务器 `free.nyst.live` 无需注册控制台即可使用。Nyan Streaming 使用 [dash.nyst.live](https://dash.nyst.live/)，Nyan Streaming Japan 使用 [dash.jp.nyst.live](https://dash.jp.nyst.live/)。请确认适用于所用服务和合同的推流与观看 URL。
:::


# 推流方式（接入）

可通过 **RTMP / WebRTC (WHIP) / RTSP 推送／浏览器推流**向 Nyan Streaming 发送视频。视频支持 **H.264**，音频支持 **AAC / PCM（s16be）**（PCM（s16be）可通过 RTSP 使用，Opus 可通过 WebRTC 使用）。服务器端不会重新编码视频，因此使用不支持的编解码器时无法显示直播画面。通过 RTSP 以外的方式观看 PCM（s16be）直播时，音频会转换为 AAC。

## 查看推流地址和推流密钥

用于推流的**服务器地址**和**推流密钥**可从[控制台](https://dash.nyst.live/)的推流密钥页面查看。选择服务器（节点）或区域后，会显示对应的推流／观看地址。

服务和连接地址请参阅[选择服务和节点](../nodes/)。

:::caution
推流密钥（推流机密值）被他人获知后，可能被用于未经许可的推流。请勿与第三方分享。如发生泄露，请从控制台重新生成密钥。
:::

## RTMP（OBS 等）

支持从 OBS Studio 等常见直播软件推流。

- **推流目标 URL**：`rtmp://<服务器地址>/<组织 slug>/`（默认端口 **1935**）
- **推流密钥**：在控制台中创建的推流密钥／令牌
- **推荐设置**：视频 H.264，音频 AAC

我们提供可简便地为 OBS 设置低延迟的配置文件。请使用[低延迟 OBS 配置文件](/zh-hans/services/streaming-service/nyan-streaming/obs-profile/)。

## WebRTC（WHIP）

这是延迟最低的推流方式，可用于从浏览器或支持 WHIP 的编码器推流。

- **推流目标**：控制台中显示的 WHIP URL（HTTPS，默认端口 **8443**）
- **视频**：H.264 / **音频**：Opus
- 需要 HTTPS 环境。

## 浏览器推流

可从控制台的“浏览器推流”直接使用摄像头或屏幕共享进行直播（基于 WebRTC）。无需准备直播软件，操作方便。请使用 HTTPS 环境中的浏览器（Chrome / Edge / Firefox 等）。

## RTSP（推送）

可从监控摄像头或部分设备通过 RTSP 推送（ANNOUNCE → RECORD）直接推流。

- **推流目标 URL**：`rtsp://<服务器地址>:554/<组织 slug>/...`（默认端口 **554**）
- **视频**：H.264 / **音频**：AAC / PCM（s16be）

:::caution[PCM（s16be）推流与观看]
只有 **RTSP 推送**支持 PCM（s16be）推流。通过 RTSP 可观看 PCM（s16be）音频，但通过 HLS / RTMP / WebRTC 等 **RTSP 以外的方式观看时，音频会转换为 AAC**。
:::

:::caution[互联网服务提供商的 RTSP 通信限制]
部分互联网服务提供商（ISP）会限制端口 554 或 RTSP 通信，可能导致无法开始 RTSP 推流。在这种情况下，**原因是服务提供商的通信限制，并非 Nyan Streaming 故障**。请咨询您的服务提供商或使用其他网络。无法使用 RTSP 时，可改用 AAC 音频，通过 RTMP 或 WebRTC 推流。
:::

## 多轨推流（Enhanced Broadcasting）

使用 OBS 的 Enhanced Broadcasting（多轨）时，可将多个画质的 **H.264** 轨道作为一路直播发送。服务器将其分发为多画质 HLS（ABR）。各画质版本由推流端（OBS）的编码器生成，服务器端不进行重新编码。

## 常见注意事项

- **没有视频／没有声音**：请检查编解码器。视频通常使用 H.264，音频通常使用 AAC。详情请参阅[支持的编解码器](/zh-hans/services/streaming-service/nyan-streaming/codecs/)。
- **直播突然断开**：请确认是否达到连续直播时长或码率上限。详情请参阅[套餐、限制与政策](/zh-hans/services/streaming-service/nyan-streaming/plans-and-limits/)。
