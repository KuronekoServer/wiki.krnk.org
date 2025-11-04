---
title: 원신 빌드 카드 API
description: 
published: true
date: 2025-03-13T08:02:42.108Z
tags: api, genshin
editor: markdown
dateCreated: 2025-03-13T07:32:50.886Z
---

# 원신 빌드 카드 API
## 개요
이 API는 Enka.Network의 데이터를 사용하고 Artifacter의 디자인을 활용해 빌드 카드 이미지를 생성합니다.

현재 베타 서비스로 가용성이 보장되지 않을 수 있습니다.

### 캐릭터 목록 조회
```
https://genshin-image-gen-api.krnk.org/api/genshindata/?uid=UID
```

### 빌드 카드 생성
```
https://genshin-image-gen-api.krnk.org/api/generation/?uid=UID&scoretype=SCORE&charaName=CHARACTER
```

서비스 페이지: https://genshin-api.krnk.org

주의: 10초간 100회 이상 요청 시 429 Too Many Requests가 반환됩니다.
