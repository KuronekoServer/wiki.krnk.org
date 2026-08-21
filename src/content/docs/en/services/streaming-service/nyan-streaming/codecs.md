---
title: "Supported Codecs"
description: "Codecs available for streaming and viewing on Nyan Streaming (current server)"
lastUpdated: 2026-08-22T00:00:00.000Z
sidebar:
  order: 6
---

# Supported Codecs

Nyan Streaming runs on an in-house developed streaming server and does **not transcode (re-encode) video on the server side**. AAC is the standard audio format. The only audio conversion is that LPCM received over RTSP is converted to AAC when viewers use a non-RTSP playback method. **You must stream using supported codecs**; unsupported codecs can result in missing video or audio.

## Basic Codecs (common to all nodes)

| Type  | Supported Codec        |
| ----- | ---------------------- |
| Video | **H.264 (AVC)**        |
| Audio | **AAC (MPEG-4 Audio)** |

The standard is **H.264** for video and **AAC** for audio. This combination is guaranteed to work over any route, whether streaming (RTMP / RTSP / WebRTC) or viewing (HLS / RTSP / RTMP / WebRTC).

:::caution
Video codecs such as **AV1 / VP9 / VP8 / H.265 (HEVC)** are not supported. In encoder settings such as OBS, always select **H.264**.
:::

## Additional Supported Audio Codecs

In addition to the basic codecs, the standard server also supports the following audio codecs.

- **LPCM (pcm_s16le / uncompressed, highest audio quality)** — LPCM ingest is available **only through RTSP push**. RTSP playback can deliver LPCM / L16 (PCM), while **non-RTSP playback methods such as HLS, RTMP, and WebRTC deliver the audio as AAC**.
- **Opus** — Available for **WebRTC (WHIP streaming / WHEP viewing)**.
- **RTSP viewing with L16 (PCM)** — For environments such as AV Pro / Windows Media Foundation that cannot properly play AAC over RTSP, you can receive the audio for RTSP viewing as L16 (PCM).

## About Viewing in VRChat

:::caution
VRChat only supports playback of the following codecs.

- Video: **H.264**
- Audio: **AAC (MPEG-4 Audio)**, **LPCM (pcm_s16le, RTSP playback only)**
  :::

For VRChat, we recommend viewing over **RTSP**, which has the lowest latency. For per-player settings, see [Configuring/Checking the Video Player](/en/services/streaming-service/nyan-streaming/video-player-settings/).
