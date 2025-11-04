---
title: WebP Conversion API
description: 
published: true
date: 2025-03-13T08:01:07.398Z
tags: api, image-conversion
editor: markdown
dateCreated: 2025-03-13T07:36:51.698Z
---

# WebP Conversion API
## Overview
This API accepts images and converts them to WebP format.

If a single image is uploaded, the converted WebP is returned directly.
If multiple images are uploaded, a ZIP file containing converted images is returned.

### Endpoint
- **POST /api/convert**

### Request
- **Method:** POST
- **Content-Type:** multipart/form-data

Form data:
- **Key:** images
- **Value:** image file(s)

### Response
- Content-Type:
    - Single image: image/webp
    - Multiple images: application/zip

### Errors
- 400 Bad Request — No images uploaded.
- 500 Internal Server Error — Server-side error or unsupported image.

### Examples
```bash
# Convert single image
curl -X POST -F "images=@/path/to/image.jpg" https://webp-convert-api.krnk.org/api/convert > converted_image.webp

# Convert multiple images
curl -X POST -F "images=@/path/to/image1.jpg" -F "images=@/path/to/image2.jpg" https://webp-convert-api.krnk.org/api/convert > converted_images.zip
```

> If you make more than 100 requests in 10 seconds, you'll receive 429 Too Many Requests.
{.is-danger}
