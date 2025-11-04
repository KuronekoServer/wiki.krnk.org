---
title: OpenJTalk API
description: 
published: true
date: 2025-03-13T07:39:31.798Z
tags: api, openjtalk
editor: markdown
dateCreated: 2025-03-13T07:35:28.258Z
---

# OpenJTalk API
## 개요
이 API는 OpenJTalk 기술을 사용한 음성 합성(텍스트-투-스피치) 서비스를 제공합니다.

### 엔드포인트
스피커 목록(GET):
```
https://openjtalk-api.krnk.org/speakers
```

음성 합성(POST):
```
https://openjtalk-api.krnk.org/synthesize?text=TEXT&type=SPEAKER&speed=0.7&pitch=0.7
```

서비스 페이지: https://openjtalk-api.krnk.org

> 10초간 100회 이상 요청 시 `429 Too Many Requests`가 반환됩니다.
{.is-danger}
