---
title: "히라가나 변환 API"
lastUpdated: 2025-03-13T08:01:43.429Z
---


# 히라가나 변환 API
## 개요
이 API는 로마자, 한국어, 중국어를 히라가나 또는 가타카나로 변환합니다.
GET 요청을 보내면 로마자나 한자를 히라가나로 변환합니다.

### API
```
https://eng-jpn-api.krnk.org/query?text=TEXT
```

예시:
```
https://eng-jpn-api.krnk.org/query?text=안녕하세요私はnihonngoを喋ります我会尽力而为
```

결과 예시:
```
あんにょんはせよすはにほんごをでぃえりますうぉふいじんりえるうぇい
```

서비스 페이지: https://eng-jpn-api.krnk.org

:::danger
1초에 50회 이상 요청하면 `429 Too Many Requests`가 반환됩니다.
API 요청 제한 완화를 원하시면 [문의](https://discord.krnk.org)해 주세요.
:::
