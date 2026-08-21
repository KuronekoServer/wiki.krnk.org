---
title: "Supported Codecs"
description: "Codecs available for streaming and viewing on Nyan Streaming (current server)"
lastUpdated: 2026-08-22T00:00:00.000Z
sidebar:
  order: 6
---

# Supported Codecs

Nyan Streaming runs on an in-house developed streaming server and does **not transcode (re-encode) video on the server side**. The supported audio formats are AAC and PCM (s16be). PCM (s16be) received over RTSP is converted to AAC when viewers use a non-RTSP playback method. **You must stream using supported codecs**; unsupported codecs can result in missing video or audio.

## Basic Codecs

| Type  | Supported Codecs                         |
| ----- | ---------------------------------------- |
| Video | **H.264 (AVC)**                          |
| Audio | **AAC (MPEG-4 Audio)**, **PCM (s16be)** |

The standard is **H.264** for video and **AAC** for audio. This combination is guaranteed to work over any route, whether streaming (RTMP / RTSP / WebRTC) or viewing (HLS / RTSP / RTMP / WebRTC).

:::caution
Video codecs such as **AV1 / VP9 / VP8 / H.265 (HEVC)** are not supported. In encoder settings such as OBS, always select **H.264**.
:::

## Additional Supported Audio Codecs

The following audio formats are supported in addition to the basic codecs.

- **PCM (s16be / uncompressed, highest audio quality)** — PCM (s16be) ingest is available **only through RTSP push**. RTSP playback can deliver PCM (s16be), while **non-RTSP playback methods such as HLS, RTMP, and WebRTC deliver the audio as AAC**.
- **Opus** — Available for **WebRTC (WHIP streaming / WHEP viewing)**.
- **RTSP playback with PCM (s16be)** — Environments such as AV Pro / Windows Media Foundation that cannot properly play AAC over RTSP can receive RTSP audio as PCM (s16be).

## About Viewing in VRChat

:::caution
VRChat only supports playback of the following codecs.

- Video: **H.264**
- Audio: **AAC (MPEG-4 Audio)**, **PCM (s16be, RTSP playback only)**
  :::

For VRChat, we recommend viewing over **RTSP**, which has the lowest latency. For per-player settings, see [Configuring/Checking the Video Player](/en/services/streaming-service/nyan-streaming/video-player-settings/).
