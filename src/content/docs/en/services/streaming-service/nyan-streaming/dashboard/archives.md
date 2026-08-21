---
title: "Archives"
description: "Search, play, share, download, rename, and delete cloud recordings"
lastUpdated: 2026-08-21T00:00:00.000Z
sidebar:
  order: 2
---

**Archives** lists past broadcasts recorded from your stream keys for the current organization.

![Nyan Streaming Archives page](/images/nyan-streaming/dashboard/archives.png)

## Recording-compatible node

:::caution
**Recording is available only on Node02.** Node01 and Node03 cannot be used for recording.

- **Node01:** Under the licensing agreements with JASRAC and NexTone, recording data from this node cannot be made available to users.
- **Node03:** This node is intended for long-running streams, so recording is disabled to prevent its server storage from being consumed by long recordings.

Select Node02 whenever a recording is required. Even on Node02, recording must also be included in your plan.
:::

## Create a recording

1. Open the target key from **Stream Keys**.
2. Enable automatic recording on its **Recordings** tab.
3. Start streaming.
4. After the stream ends and processing finishes, the recording appears in Archives.

Recording availability, pooled organization storage, and retention depend on the plan. See [Plans, Limits, and Policies](../../plans-and-limits/) and [Choosing a node](../servers/#choosing-a-node).

## Summary cards

| Item                 | Meaning                                          |
| -------------------- | ------------------------------------------------ |
| **Total archives**   | Number of recorded sessions                      |
| **Total duration**   | Combined duration of all recordings              |
| **Total viewers**    | Accumulated average-viewer count across sessions |
| **Average duration** | Average recording duration per session           |

Filter by **All / Last 7 days / Last 30 days / Last 90 days**, or search by title.

## Recording actions

The row menu can open a recording in a new tab, download it, copy its direct link, rename it, or delete it. Select multiple rows for bulk download or deletion. **Export all** exports the complete list.

Renaming changes the display name and downloaded filename, but it does not change the direct URL.

:::caution
Deleted recordings cannot be restored. Download anything you need and verify the title and start time before deleting it.
:::

## If a recording is missing

- Confirm that recording was enabled on the stream key before publishing.
- Confirm that the stream was published to Node02. Streams on Node01 and Node03 are not recorded.
- Immediately after a stream ends, wait while its status is **Processing** or **Pending**.
- Check pooled storage on [Media](../media/) for a full quota.
- Confirm that the correct team is selected in the top-left team switcher.

## Related pages

- [Stream Keys](../stream-keys/)
- [Media](../media/)
- [Plans, Limits, and Policies](../../plans-and-limits/)
