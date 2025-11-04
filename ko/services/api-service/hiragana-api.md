---
title: 히라가나 변환 API
description: 
published: true
date: 2025-03-13T08:01:43.429Z
tags: api, 히라가나 변환
editor: markdown
dateCreated: 2025-03-13T07:34:07.860Z
---

# 히라가나 변환 API
## 개요
이 API는 로마자(로마지)를 히라가나 또는 가타카나로 변환합니다. 또한 한국어(한글)도 대응 가능합니다.

### API
```
https://eng-jpn-api.krnk.org/query?text=문장
```

예시:
```
https://eng-jpn-api.krnk.org/query?text=안녕하세요私はnihonngoを喋ります
```

결과 예시:
```
あっにぇおんぐはせよわたしはにほんごをしゃべります
```

서비스 페이지: https://eng-jpn-api.krnk.org

주의: 10초간 100회 이상 요청 시 429 Too Many Requests가 반환됩니다.
