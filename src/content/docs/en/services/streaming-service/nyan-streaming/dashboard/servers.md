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

