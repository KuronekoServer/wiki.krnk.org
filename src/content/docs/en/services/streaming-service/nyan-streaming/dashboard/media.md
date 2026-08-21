---
title: "Media"
description: "Upload, play, rename, and delete CDN media and inspect organization storage"
lastUpdated: 2026-08-21T00:00:00.000Z
sidebar:
  order: 3
---

**Media** uploads videos, images, and other files for delivery through the CDN. Recordings and manual uploads share the same organization storage pool.

![Nyan Streaming Media page](/images/nyan-streaming/dashboard/media.png)

## Organization storage

The top card shows usage and quota, remaining capacity, utilization, and separate recording/media totals. Unlimited plans show current usage without a quota.

New recordings or uploads can fail when storage is full. Download anything you need, then remove unused files or change the plan.

## Upload a file

1. Click the upload area or drag and drop a file onto it.
2. Wait for progress to reach 100% and the status to become **Ready**.
3. Verify its name, type, size, and status in the list.

The per-file limit is **1 GB**. A video may not be playable while it is processing. If it becomes **Failed**, check its size and your connection before trying again.

## Actions after upload

- Play uploaded video from the action button.
- Rename only the base name; the extension is retained.
- Names may contain letters, numbers, hyphens (`-`), and underscores (`_`). Spaces, non-ASCII text, and other symbols are not allowed.
- Delete files that are no longer needed.

:::caution
Renaming media changes its URL and invalidates the previous URL. Update every website, announcement, or player that uses the old link.
:::

:::caution
Deletion cannot be undone. Make sure the URL is no longer in use before deleting a file.
:::

## Related pages

- [Archives](../archives/)
- [Plans, Limits, and Policies](../../plans-and-limits/)
- [Video Player Settings](../../video-player-settings/)

