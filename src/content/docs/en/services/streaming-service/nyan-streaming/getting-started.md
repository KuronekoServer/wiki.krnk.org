---
title: "Getting Started"
description: "Choose a node and stream key, publish from OBS, and verify playback in a browser or VRChat"
lastUpdated: 2026-08-22T00:00:00.000Z
sidebar:
  order: 2
---

# Getting Started

This guide walks through creating a stream key in the Nyan Streaming dashboard, publishing from OBS Studio, and checking the result in a browser or VRChat.

## Before You Begin

- An account that can sign in to the [Nyan Streaming dashboard](https://nyst.live/)
- OBS Studio or another application that can publish H.264 / AAC over RTMP
- An organization (team) that will own the stream

After signing in, select the organization you want to use from the team switcher in the upper-left corner. Plan limits, stream keys, viewing URLs, and recordings are managed per organization.

## 1. Create a Stream Key

1. Open **Stream Keys** in the left navigation.
2. Select **New Stream Key**.
3. Choose a clear name and plan. You can also select a node and region and optionally set a view key and notes.
4. Open the new key and select the **Overview** tab.

:::note
The **publish secret** and the **view key** contained in playback URLs are different values. Share only a viewing URL with viewers.
:::

## 2. Find the Ingest Details

### Choose a node

Select a node that matches your stream when creating the stream key.

| Content or requirement | Node |
| --- | --- |
| Use music managed by JASRAC or NexTone | **Node01** |
| Ordinary streams, events, worldwide delivery, or recording | **Node02** |
| Low-bitrate streams that need to run for more than 24 hours | **Node03** |

:::tip
If you have no special requirements and are unsure which one to use, select **Node02**. Node02 is also the only node that supports recording.
:::

See [Choosing a Node](/en/services/streaming-service/nyan-streaming/nodes/) for music reporting, recording support, duration limits, and other differences.

After choosing a node, copy these two values from the Overview tab for the server you want to use.

| OBS field  | Value from the dashboard    |
| ---------- | --------------------------- |
| Server     | RTMP ingest URL             |
| Stream Key | Publish stream key / secret |

:::caution
Treat the publish stream key like a password. Do not send it to viewers or expose it on stream or in screenshots. Regenerate the key in the dashboard if it is disclosed.
:::

## 3. Configure OBS Studio

Open **Settings → Stream** in OBS Studio and use these settings.

| Field             | Setting                                                                             |
| ----------------- | ----------------------------------------------------------------------------------- |
| Service           | Custom                                                                              |
| Server            | RTMP URL from the dashboard                                                         |
| Stream Key        | Publish secret from the dashboard                                                   |
| Video encoder     | H.264 (AVC)                                                                         |
| Audio encoder     | AAC                                                                                 |
| Rate control      | CBR recommended                                                                     |
| Video bitrate     | Start around 1,000–1,500 kbps and keep the organization total within the plan limit |
| Keyframe interval | 1 second recommended                                                                |

The server does not re-encode video. A stream using unsupported video or audio codecs may connect but fail to play correctly. AAC is the standard audio format. **LPCM ingest is available only over RTSP; non-RTSP playback of an LPCM stream delivers the audio as AAC.** Ready-made configurations are available in the [Low-Latency OBS Profile](/en/services/streaming-service/nyan-streaming/obs-profile/).

:::caution
The input bitrate limit applies to the **combined total of every simultaneous stream in the organization**, not separately to each stream.
:::

## 4. Start and Verify the Stream

1. Select **Start Streaming** in OBS Studio.
2. Confirm that the key becomes active and shows an input bitrate in the dashboard.
3. Use **Browser Playback** or **HLS Playback** in the key details to check video and audio.
4. For VRChat, copy an RTSP / RTSPT URL from the Overview tab into an AVPro-compatible player.

Choose RTSP or WebRTC (WHEP) when low latency matters, or HLS when browser compatibility matters most. See [Video Player Settings and Verification](/en/services/streaming-service/nyan-streaming/video-player-settings/) for VRChat player-specific guidance.

## 5. End the Stream

Select **Stop Streaming** in OBS Studio and confirm that the key becomes inactive in the dashboard. If recording was enabled, the completed recording becomes available under **Archives** after processing.

## Stream Directly from a Browser

The **Browser Publishing** tab in the stream-key details can send a camera, microphone, or shared screen directly over WebRTC (WHIP). Use an HTTPS-capable browser such as Edge, Chrome, or Firefox, allow access to the required device, and then start publishing.

## If Something Goes Wrong

If the stream does not start, has missing video or audio, or changes to a restriction screen, see [Troubleshooting](/en/services/streaming-service/nyan-streaming/troubleshooting/).

## Related Pages

- [Choosing a Node](/en/services/streaming-service/nyan-streaming/nodes/)
- [Streaming Methods (Ingest)](/en/services/streaming-service/nyan-streaming/streaming-methods/)
- [Viewing Methods (Playback)](/en/services/streaming-service/nyan-streaming/viewing-methods/)
- [Plans, Limits, and Policies](/en/services/streaming-service/nyan-streaming/plans-and-limits/)
- [Using the Dashboard](/en/services/streaming-service/nyan-streaming/dashboard/)
