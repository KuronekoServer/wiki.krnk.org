---
title: "Server Status"
description: "Check streaming-node availability by region"
lastUpdated: 2026-08-21T00:00:00.000Z
sidebar:
  order: 6
---

**Server Status** reports each region and streaming node from live heartbeat data.

![Nyan Streaming Server Status page](/images/nyan-streaming/dashboard/servers.png)

## Reading the page

The summary shows online nodes, total registered nodes, the number of regions, and the last update time. Region cards identify each node as **Online** or **Offline**. Regions configured to hide hostnames show only their node totals.

Use **Refresh** to retrieve the current state. A dedicated message appears when the status API is unavailable or no servers are registered.

## Choosing a node

Select a node according to the content and expected duration of the stream.

| Node       | Primary use                         | Characteristics and requirements                                                                                                                                         |
| ---------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Node01** | JASRAC/NexTone-managed music        | A Japan-only node for streams that use managed music. Report every work from the dashboard **by the end of the month in which it was used**. Recording is unavailable.      |
| **Node02** | General and worldwide distribution  | The default node for reliable delivery across a wide range of countries and regions through servers deployed worldwide. Use Node02 for ordinary, event, and recorded streams. |
| **Node03** | Low-bitrate, long-running streams   | Designed for long-term continuous operation at a low bitrate. It is exempt from the 24-hour continuous-stream limit and can run beyond 24 hours. Recording is unavailable.    |

:::caution
Missing or inaccurate Node01 music reports may result in an account penalty or additional charge. See [Music Reports](../music-reports/) for the reporting procedure.
:::

:::note
Node03 remains subject to plan bitrate limits, storage limits, the Terms of Service, and every restriction other than the 24-hour duration limit.
:::

:::caution[Recording]
Node02 is the only recording-compatible node. Under the licensing agreements with JASRAC and NexTone, recording data from Node01 cannot be made available to users. Node03 does not support recording because it is intended for long-running streams and recording could consume excessive server storage. See [Archives](../archives/) for details.
:::

## Before publishing or during an incident

1. Confirm that the intended region is online.
2. If it is offline, reload and check [KuronekoServer Status](https://status.krnk.org/).
3. When another region is available, enter that region's publish URL in OBS or the publisher.
4. After publishing starts, confirm ingest traffic in [Analytics](../analytics/).

:::note
Viewing or selecting a node in the dashboard does not pin your connection. The URL entered in the publishing application determines the actual destination.
:::

## Related pages

- [Streaming Methods](../../streaming-methods/)
- [Analytics](../analytics/)
- [Troubleshooting](../../troubleshooting/)
