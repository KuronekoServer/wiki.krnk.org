---
title: "Plans, Limits, and Policies"
description: "An overview of how plans work, the limits on streaming and viewing, and usage policies"
lastUpdated: 2026-06-26T00:00:00.000Z
sidebar:
  order: 6
---


# Plans, Limits, and Policies

## Plans

Nyan Streaming plans are contracted on a **per-organization (team) basis**. Depending on the plan, the upper limits for roughly the following items change.

- **Number of stream keys** (the number of stream keys you can hold simultaneously)
- **Number of concurrent viewers** (total across the entire organization)
- **Input bitrate** (total upper limit across the entire organization)
- **Storage capacity** (storage capacity for recorded and uploaded media)
- **Available features and servers (nodes)**

The available plans are **Free / Standard / Pro / Enterprise**. On Pro and above, you can also use **add-ons** for additional bitrate, viewers, storage, stream keys, and more (using additional bitrate requires administrator approval).

:::note
The specific figures and pricing for each plan are subject to change. For the latest information, please check the official site at https://nyst.live/ and the plan screen in the dashboard. If you wish to use the service for business purposes, please contact our organization in advance.
:::

## Main Limits on Streaming and Viewing

### Maximum Continuous Streaming Time (24 Hours)

If a single stream continues for **24 hours** without interruption, that stream is automatically disconnected and the organization is blocked for a certain period of time. If you plan to run a long stream, please contact the operators in advance.

### Exceeding the Bitrate Limit

If the total input bitrate across the entire organization exceeds the plan's upper limit, the stream is disconnected and blocked for a certain period of time. If the limit is exceeded during a stream, a warning screen may be displayed to viewers. If you want to raise the limit, you can submit a **request to add bitrate** from the dashboard (subject to administrator approval).

### Available Viewing Regions

Depending on the plan and server (node) settings, **viewing may be limited to within Japan**. Whether global streaming is available varies by plan, so please check the plan screen or contact us for details.

### Codec Restrictions

Because the server does not re-encode, you must stream using supported codecs such as **H.264 (video) / AAC (audio)**. For details, see the [List of Supported Codecs](/en/services/streaming-service/nyan-streaming/codecs/).

## Usage Policies

### Terms of Service

If a stream that violates the Terms of Service is identified on the streaming service, measures such as blocking the stream may be taken. If you find a violation of the terms, please report it immediately to **abuse@krnk.org**.

### Applying to Use Music

If you use music managed by JASRAC / NexTone or similar in your stream, please apply through the **music usage application** form in the dashboard.

## What You Can Do in the Dashboard

- Create, regenerate, and delete stream keys, and check viewing URLs
- Manage and download recordings (archives)
- Configure restreaming (external RTMP destinations)
- Switch program output (channels)
- Issue API keys (for using the public API)
- Configure IP access rules
- Configure notifications (in-app notifications / Webhook / email)
- Manage teams (organizations), members, and billing

## Related Pages

- [Feature Overview and Supported Protocols](/en/services/streaming-service/nyan-streaming/overview/)
- [Streaming Methods (Ingest)](/en/services/streaming-service/nyan-streaming/streaming-methods/)
- [Viewing Methods (Playback)](/en/services/streaming-service/nyan-streaming/viewing-methods/)
