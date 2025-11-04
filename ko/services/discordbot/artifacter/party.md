---
title: /party
description: 
published: true
date: 2025-03-13T07:29:17.279Z
tags: discordbot, genshin, artifacter
editor: markdown
dateCreated: 2025-03-13T06:59:09.871Z
---

# /party
## 개요
원신 파티 빌드 카드를 생성합니다.

## 사용법
```
/party <option>
```

옵션 | 설명 | 필수 여부
--- | --- | --
uid / user | 다른 사용자의 데이터를 표시합니다. | 아니요
score | 점수 계산 방식을 변경합니다. | 아니요

score 옵션 값 예시:
- 공격력 기준
- HP 기준
- 방어력 기준
- 원소 충전 효율 기준
- 원소 숙련(원소 마스터리) 기준

## 동작 흐름
```mermaid
graph LR
    A{/party}
    A -->|uid / user 지정 시| B[지정한 사용자의 데이터 표시]
    A -->|미지정 시| C{자신의 데이터 표시}
    C -->|uid 미등록| D[uid 등록 폼 표시]
    C -->|uid 등록됨| E[데이터 표시]
```

## 미리보기
![image](https://artifacter.krnk.org/img/image2.webp "샘플")
