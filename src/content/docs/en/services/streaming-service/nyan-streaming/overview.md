---
title: "Feature Overview & Supported Protocols"
description: "An overview of Nyan Streaming's supported protocols, codecs, latency, and main features"
lastUpdated: 2026-06-26T00:00:00.000Z
sidebar:
  order: 2
---


# Feature Overview & Supported Protocols

Nyan Streaming is a video delivery service designed with the goal of **delivering high-quality video with low latency (as low as about 1 second)**. It runs on our in-house developed delivery server, and **performs no transcoding (re-encoding)** on the server side, delivering the streamed video and audio to viewers exactly as they are.

Official site: https://nyst.live/

## Supported Protocols

### Streaming (Ingest)

| Protocol | Overview | Main Use |
| --- | --- | --- |
| **RTMP** | Compatible with common streaming software such as OBS | Streaming from OBS / XSplit, etc. |
| **WebRTC (WHIP)** | The lowest-latency streaming method | Browser streaming / streaming that prioritizes low latency |
| **RTSP (Push)** | Ingest via RTSP ANNOUNCE/RECORD | Advanced streaming |
| **Browser Streaming** | Stream directly from your camera/screen via the dashboard | Easy browser streaming (WebRTC-based) |

### Viewing (Playback)

| Protocol | Overview | Latency Guide |
| --- | --- | --- |
| **RTSP** | The lowest latency. Recommended for VRChat / AV Pro | About 1 second |
| **WebRTC (WHEP)** | The lowest-latency viewing in a browser | About 1 second |
| **RTMP** | For players that support RTMP playback | About 1–2 seconds |
| **HLS** | Widely playable in browsers and various players (for browsers, using hls.js is recommended) | A few seconds (somewhat larger by design) |

:::note
If you are aiming for the lowest latency, use **RTSP** or **WebRTC (WHEP)**; if you prioritize compatibility, use **HLS**. Due to how it works, HLS has higher latency than the other methods.
:::

## Supported Codecs

The standard is **H.264** for video and **AAC** for audio. Audio also supports **LPCM (RTMP, highest quality)** and **Opus (WebRTC)**. **AV1 / VP9 / VP8 / H.265 (HEVC) are not supported.** For details, see the [Supported Codecs List](/en/services/streaming-service/nyan-streaming/codecs/).

## Main Features

- **Low-latency streaming** — RTSP / RTMP / WebRTC achieve low latency of about 1 second (HLS is somewhat larger by design).
- **Recording (Archive)** — Record streams to watch or download later (available depending on your plan and settings).
- **Restreaming (Relay)** — Simultaneously forward received streams to external RTMP destinations such as YouTube and Twitch.
- **Program output (Channel / Live Switcher)** — Switch which stream is currently playing on your organization's URL while keeping viewers connected.
- **Multiple nodes / regions** — Stream and view from multiple servers (nodes), supporting region-based delivery.
- **Simultaneous multi-node streaming** — Stream the same stream key from multiple servers at the same time.
- **Audio EQ** — Apply an equalizer on the server side for each stream.
- **Multitrack streaming (Enhanced Broadcasting)** — Deliver OBS multitrack H.264 as multi-quality HLS (ABR). (Only for organizations approved by the operator.)
- **Dashboard management** — Manage stream keys, viewing URLs, recordings, API keys, IP rules, notifications, teams (organizations), and more from the web.
- **Public API** — Provides an API to retrieve server status, streaming status, and viewer counts.

## Related Pages

- [Streaming Methods (Ingest)](/en/services/streaming-service/nyan-streaming/streaming-methods/)
- [Viewing Methods (Playback)](/en/services/streaming-service/nyan-streaming/viewing-methods/)
- [Supported Codecs List](/en/services/streaming-service/nyan-streaming/codecs/)
- [Plans, Limits & Policies](/en/services/streaming-service/nyan-streaming/plans-and-limits/)
- [Low-latency OBS Profile](/en/services/streaming-service/nyan-streaming/obs-profile/)
- [Video Player Settings / Verification](/en/services/streaming-service/nyan-streaming/video-player-settings/)
