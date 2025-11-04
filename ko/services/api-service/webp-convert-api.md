---
title: WebP 변환 API
description: 
published: true
date: 2025-03-13T08:01:07.398Z
tags: api, 이미지 변환
editor: markdown
dateCreated: 2025-03-13T07:36:51.698Z
---

# WebP 변환 API
## 개요
이 API는 이미지를 받아 WebP 형식으로 변환하여 응답합니다.

단일 이미지를 업로드하면 변환된 WebP 이미지가 직접 반환됩니다. 다수 이미지를 업로드하면 변환된 이미지를 포함한 ZIP 파일이 반환됩니다.

### 엔드포인트
- **POST /api/convert**

### 요청
- **Method:** POST
- **Content-Type:** multipart/form-data

폼 데이터:
- **Key:** images
- **Value:** 이미지 파일(단일 또는 다중)

### 응답
- Content-Type:
    - 단일 이미지: image/webp
    - 다중 이미지: application/zip

### 오류
- 400 Bad Request — 이미지가 업로드되지 않음
- 500 Internal Server Error — 서버 내부 오류 또는 지원하지 않는 이미지 형식

### 예시
```bash
# 단일 이미지 변환
curl -X POST -F "images=@/path/to/image.jpg" https://webp-convert-api.krnk.org/api/convert > converted_image.webp

# 다중 이미지 변환
curl -X POST -F "images=@/path/to/image1.jpg" -F "images=@/path/to/image2.jpg" https://webp-convert-api.krnk.org/api/convert > converted_images.zip
```

> 10초간 100회 이상 요청 시 `429 Too Many Requests`가 반환됩니다.
{.is-danger}
