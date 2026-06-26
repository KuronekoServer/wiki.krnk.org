---
title: "Viewing (Playback) Methods"
description: "How to watch via HLS, RTSP, RTMP, and WebRTC (WHEP), and the format of viewing URLs"
lastUpdated: 2026-06-26T00:00:00.000Z
sidebar:
  order: 4
---


# Viewing (Playback) Methods

Streams can be viewed via **HLS / RTSP / RTMP / WebRTC (WHEP)**. Choose the method that fits your needs: **RTSP / WebRTC** when low latency matters, or **HLS** when compatibility matters.

## Checking the Viewing URL

You can find the viewing URL in the stream key details on the [dashboard](https://nyst.live/). The URL is composed of an "**organization slug**" and a "**view key**", and the corresponding address is shown for each server (node).

:::note
The **view key** is different from the stream key (secret) used for broadcasting. Sharing a viewing URL will not let anyone hijack your stream. If you regenerate the view key, any previously issued viewing URLs become invalid.
:::

## HLS

This method can be played back widely across browsers and various players. By design, the latency is somewhat higher (on the order of a few seconds).

- **URL (TS / standard)**: `https://<server-address>/<org-slug>/<view-key>/index.m3u8`
  - Safari, VLC, and similar players can play it directly. For other browsers, we recommend using **hls.js**.
- **URL (fMP4)**: `https://<server-address>/<org-slug>/<view-key>/index.fmp4.m3u8`
  - fMP4 can be played back using the browser's native capabilities (MSE).

## RTSP (Lowest Latency / Recommended for VRChat)

This offers the lowest latency (about 1 second). It is recommended for VRChat and AV Pro-based video players.

- **URL**: `rtsp://<server-address>/<org-slug>/<view-key>`
- **TCP (RTSPT)**: Depending on your network environment, viewing over TCP interleaving (RTSPT) is also available.
- **Audio**: AAC is the standard. For environments that cannot play AAC over RTSP, such as AV Pro / Windows Media Foundation, viewing via **L16 (PCM)** is also supported.
- For low-latency settings on a per-player basis, see [Video Player Settings / Verification](/en/services/streaming-service/nyan-streaming/video-player-settings/).

## RTMP

This can be viewed with players that support RTMP playback (about 1 to 2 seconds).

- **URL**: `rtmp://<server-address>/<org-slug>/<view-key>`

## WebRTC (WHEP)

This is the lowest-latency method (about 1 second) for viewing in a browser. Use the WHEP URL (HTTPS, standard port 8443) shown on the dashboard. Audio supports **Opus**.

## Viewing Program Broadcasts (Channels)

If your organization uses "program broadcasting (channels)", viewing via the **organization URL that does not contain a view key** keeps the connection alive while only the content is swapped out, even when the broadcaster switches keys (live switcher).

- **URL (HLS example)**: `https://<server-address>/<org-slug>/index.m3u8`

## Related Pages

- [List of Supported Codecs](/en/services/streaming-service/nyan-streaming/codecs/)
- [Video Player Settings / Verification](/en/services/streaming-service/nyan-streaming/video-player-settings/)