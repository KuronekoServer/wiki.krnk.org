---
title: "Supported Codecs"
description: "Codecs available for streaming and viewing on Nyan Streaming (current server)"
lastUpdated: 2026-06-26T00:00:00.000Z
sidebar:
  order: 5
---


# Supported Codecs

Nyan Streaming runs on an in-house developed streaming server and is designed to **not perform transcoding (re-encoding) on the server side**. Because the video and audio sent from the broadcaster are delivered to viewers as-is, **you must stream using supported codecs**. If you stream with an unsupported codec, problems such as the video not displaying or the audio not being heard will occur.

## Basic Codecs (common to all nodes)

| Type | Supported Codec |
| --- | --- |
| Video | **H.264 (AVC)** |
| Audio | **AAC (MPEG-4 Audio)** |

The standard is **H.264** for video and **AAC** for audio. This combination is guaranteed to work over any route, whether streaming (RTMP / RTSP / WebRTC) or viewing (HLS / RTSP / RTMP / WebRTC).

:::caution
Video codecs such as **AV1 / VP9 / VP8 / H.265 (HEVC)** are not supported. In encoder settings such as OBS, always select **H.264**.
:::

## Additional Supported Audio Codecs

In addition to the basic codecs, the standard server also supports the following audio codecs.

- **LPCM (pcm_s16le / uncompressed, highest audio quality)** — Available for **streaming over RTMP** (OBS, etc.). A pre-configured OBS profile is distributed in the [Low-latency OBS profile](/en/services/streaming-service/nyan-streaming/obs-profile/).
- **Opus** — Available for **WebRTC (WHIP streaming / WHEP viewing)**.
- **RTSP viewing with L16 (PCM)** — For environments such as AV Pro / Windows Media Foundation that cannot properly play AAC over RTSP, you can receive the audio for RTSP viewing as L16 (PCM).

:::note
If you are unsure, choosing **H.264 + AAC** will reliably work with all streaming and viewing methods.
:::

## About Viewing in VRChat

:::caution
VRChat only supports playback of the following codecs.
- Video: **H.264**
- Audio: **AAC (MPEG-4 Audio)**, **LPCM (pcm_s16le)**
:::

For VRChat, we recommend viewing over **RTSP**, which has the lowest latency. For per-player settings, see [Configuring/Checking the Video Player](/en/services/streaming-service/nyan-streaming/video-player-settings/).
