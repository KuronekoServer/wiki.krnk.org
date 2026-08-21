---
title: "Plans, Limits, and Policies"
description: "An overview of how plans work, the limits on streaming and viewing, and usage policies"
lastUpdated: 2026-08-21T00:00:00.000Z
sidebar:
  order: 7
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

If one publish session runs continuously for **24 hours** on a node where the duration limit is enabled, the stream is disconnected and **every stream key in the organization is blocked for one day**. Reconnecting starts a new continuous-session timer.

**Node03 is exempt from this 24-hour limit.** Select Node03 for low-bitrate continuous streams that must run beyond 24 hours. Contact the operators in advance if your long-running stream does not fit the intended use of Node03.

### Recording-Compatible Node

**Recording is available only on Node02.** Under the licensing agreements with JASRAC and NexTone, recording data from Node01 cannot be made available to users. Node03 does not support recording because it is intended for long-running streams and recording could consume excessive server storage.

Even when using Node02, recording must be included in your plan and the organization must have available storage. See [Archives](../dashboard/archives/) for instructions.

### Exceeding the Bitrate Limit

If the organization's combined input bitrate remains above the plan limit for **more than 10 minutes**, the newest streams are disconnected until the total falls within the limit. Affected stream keys cannot publish again for **one hour**. To raise the limit, submit a **request for additional bitrate** from the dashboard (subject to administrator approval).

### Available Viewing Regions

Depending on the plan and server (node) settings, **viewing may be limited to within Japan**. Whether global streaming is available varies by plan, so please check the plan screen or contact us for details.

### Codec Restrictions

Because the server does not re-encode, you must stream using supported codecs such as **H.264 (video) / AAC (audio)**. For details, see the [List of Supported Codecs](/en/services/streaming-service/nyan-streaming/codecs/).

## Screens Shown to Viewers During a Restriction

When publishing is restricted, viewers see a reason-specific warning screen in place of the normal stream. Automatic restrictions show their scheduled lift time in the dashboard.

:::note
The Japanese asset is used when the organization's default language is Japanese. Every other language uses the English asset. Change this under **Settings → General → Default language** in the dashboard.
:::

### More Than 24 Hours of Continuous Streaming

![Restriction screen for more than 24 hours of continuous streaming](https://cdn.krnk.org/kuronekoserver/nyst/warning/24h-en.png)

### Bitrate Limit Exceeded

![Restriction screen for exceeding the input bitrate limit](https://cdn.krnk.org/kuronekoserver/nyst/warning/bitrate-en.png)

### Other Terms-of-Service Violations

![Restriction screen for a terms-of-service violation](https://cdn.krnk.org/kuronekoserver/nyst/warning/tos-en.png)

See [Troubleshooting](/en/services/streaming-service/nyan-streaming/troubleshooting/) for the recovery steps for each restriction.

## Usage Policies

### Terms of Service

When an administrator confirms a violation of the [Nyan Streaming Terms of Service](https://krnk.org/terms/nyan-streaming), publishing by the affected organization or user is stopped and blocked. This block does not lift automatically. [Contact us](https://krnk.org/contact/) to request a review. If you find a violation, report it immediately to **abuse@krnk.org**.

### Applying to Use Music

If you use music managed by JASRAC / NexTone or similar in your stream, please apply through the **music usage application** form in the dashboard.

## What You Can Do in the Dashboard

- Create, regenerate, and delete stream keys, and check viewing URLs
- Manage and download archives recorded on Node02
- Configure restreaming (external RTMP destinations)
- Switch program output (channels)
- Issue API keys (for using the public API)
- Configure publish-source IP access rules
- Configure notifications (in-app notifications / Webhook / email)
- Manage teams (organizations), members, and billing

For detailed steps on each operation, see [Using the Dashboard](/en/services/streaming-service/nyan-streaming/dashboard/).

## Related Pages

- [Getting Started](/en/services/streaming-service/nyan-streaming/getting-started/)
- [Feature Overview and Supported Protocols](/en/services/streaming-service/nyan-streaming/overview/)
- [Streaming Methods (Ingest)](/en/services/streaming-service/nyan-streaming/streaming-methods/)
- [Viewing Methods (Playback)](/en/services/streaming-service/nyan-streaming/viewing-methods/)
- [Using the Dashboard](/en/services/streaming-service/nyan-streaming/dashboard/)
- [Troubleshooting](/en/services/streaming-service/nyan-streaming/troubleshooting/)
- [Public API](/en/services/streaming-service/nyan-streaming/api/)
