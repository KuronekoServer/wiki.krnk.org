---
title: "Image Conversion API"
lastUpdated: 2025-03-13T08:01:07.398Z
---


# Image Conversion API
## Overview
This API accepts images and converts them into various formats before responding.

If a single image is uploaded, the converted WebP image is returned directly.

If multiple images are uploaded, a ZIP file containing the converted images is returned.

### Documentation

https://image-convert-api.krnk.org/docs

#### Notes

- Processing may take some time depending on the file size.
- The file extension must be a supported image format.


:::danger
If you make more than 50 requests per second, you will receive "429 Too many Requests".
If you would like the API rate limit relaxed, please [contact us](https://discord.krnk.org).
:::
