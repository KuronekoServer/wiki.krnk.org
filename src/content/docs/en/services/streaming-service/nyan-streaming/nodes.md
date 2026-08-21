---
title: "Choosing a Node"
description: "Compare Node01, Node02, and Node03 by use case, recording support, music reporting, and stream duration"
lastUpdated: 2026-08-22T00:00:00.000Z
sidebar:
  order: 3
---

# Choosing a Node

When creating a stream key, Nyan Streaming asks you to select a destination node. Each node has different coverage, recording support, and duration rules, so choose the one that matches your stream.

## Choose by use case

| Content or requirement | Node |
| --- | --- |
| Use music managed by JASRAC or NexTone | **Node01** |
| Ordinary streams, events, worldwide delivery, or recording | **Node02** |
| Low-bitrate streams that need to run for more than 24 hours | **Node03** |

:::tip
If you have no special requirements and are unsure which one to use, select **Node02**.
:::

## Node01: Streams using managed music

Node01 is intended for streams that use music managed by JASRAC or NexTone. Publishing and playback are both limited to Japan.

When you use Node01, report every work through [Music Reports](/en/services/streaming-service/nyan-streaming/dashboard/music-reports/) in the dashboard **by the last day of the month in which it was used**. Missing the deadline or submitting an incomplete report may result in an account penalty or additional charge.

:::caution[Recording is unavailable]
Under our licensing agreements with JASRAC and NexTone, recording data from Node01 cannot be made available to users.
:::

## Node02: General and worldwide delivery

Node02 is the standard node for stable delivery to a wide range of countries and regions through streaming servers deployed worldwide. It is suitable for ordinary streams, events, and streams that need recording.

:::note[The only node that supports recording]
Recording is available **only on Node02**. Availability, storage capacity, and retention depend on your plan. See [Archives](/en/services/streaming-service/nyan-streaming/dashboard/archives/) for details.
:::

## Node03: Low-bitrate, long-running streams

Node03 is designed for long-running or long-term continuous operation at a low bitrate. It is exempt from the 24-hour continuous-stream limit and may be used for streams lasting more than 24 hours.

:::note
Plan bitrate limits, storage limits, the Terms of Service, and every restriction other than the 24-hour duration limit still apply on Node03.
:::

:::caution[Recording is unavailable]
Node03 does not support recording because long-running recordings could consume excessive server storage.
:::

## Recording support comparison

| Node | Recording | Reason or condition |
| --- | --- | --- |
| **Node01** | Unavailable | Recordings cannot be provided under the JASRAC and NexTone licensing agreements |
| **Node02** | Available | Subject to the recording support, storage allowance, and retention period of your plan |
| **Node03** | Unavailable | Prevents long-running recordings from consuming excessive server storage |

## Select a node in the dashboard

1. Open **Stream Keys** in the dashboard.
2. Select **New Stream Key**, then choose the node and region that match your use case.
3. Open the new key's **Overview** tab and enter the selected ingest URL in OBS or another publisher.

:::note
Viewing or selecting a node in the dashboard does not by itself pin your connection. The URL entered in the publishing application determines the actual destination.
:::

## Related pages

- [Getting Started](/en/services/streaming-service/nyan-streaming/getting-started/)
- [Stream Keys](/en/services/streaming-service/nyan-streaming/dashboard/stream-keys/)
- [Music Reports](/en/services/streaming-service/nyan-streaming/dashboard/music-reports/)
- [Plans, Limits, and Policies](/en/services/streaming-service/nyan-streaming/plans-and-limits/)
- [Server Status](/en/services/streaming-service/nyan-streaming/dashboard/servers/)
