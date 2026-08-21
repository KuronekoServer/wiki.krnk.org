---
title: "요금제·제한·정책"
description: "요금제의 개념, 송출·시청 관련 제한, 이용 정책 개요"
lastUpdated: 2026-08-21T00:00:00.000Z
sidebar:
  order: 7
---

# 요금제·제한·정책

## 요금제

Nyan Streaming은 **조직(팀) 단위**로 요금제를 계약합니다. 요금제에 따라 대체로 다음 항목의 상한이 달라집니다.

- **스트림 키 수**(동시에 보유할 수 있는 송출 키의 수)
- **동시 시청자 수**(조직 전체 합계)
- **입력 비트레이트**(조직 전체 합계 상한)
- **스토리지 용량**(녹화·업로드한 미디어의 저장 용량)
- **이용 가능한 기능·서버(노드)**

요금제는 **무료 / Standard / Pro / Enterprise**가 마련되어 있습니다. Pro 이상에서는 추가 비트레이트·시청자·스토리지·스트림 키 등의 **애드온**도 이용할 수 있습니다(추가 비트레이트 이용에는 관리자의 승인이 필요합니다).

:::note
각 요금제의 구체적인 수치·요금은 변경될 수 있습니다. 최신 내용은 공식 사이트 https://nyst.live/ 및 대시보드의 요금제 화면을 확인해 주세요. 법인 이용을 원하시는 경우에는 사전에 저희 조직으로 문의해 주시기 바랍니다.
:::

## 송출·시청 관련 주요 제한

### 연속 송출 시간 상한(24시간)

24시간 제한이 활성화된 노드에서 하나의 publish 세션이 **24시간** 연속으로 실행되면 해당 송출이 자동으로 끊기고 **조직의 모든 스트림 키가 하루 동안 차단**됩니다. 다시 연결하면 연속 시간은 새 세션으로 계산됩니다.

**Node03은 이 24시간 제한의 대상이 아닙니다.** 낮은 비트레이트로 24시간을 넘는 연속 송출이 필요하면 Node03을 선택하세요. Node03의 용도에 맞지 않는 조건으로 장시간 운영해야 하는 경우에는 사전에 운영진에게 문의해 주세요.

### 녹화를 지원하는 노드

**녹화 기능은 Node02에서만 이용할 수 있습니다.** Node01은 JASRAC・NexTone과의 이용 허락 계약상 녹화 데이터를 사용자에게 제공할 수 없습니다. Node03은 장시간 송출용이므로 녹화로 인한 서버 저장 공간 압박을 방지하기 위해 녹화를 지원하지 않습니다.

Node02를 사용하더라도 계약한 요금제에서 녹화 기능을 제공하고 조직 스토리지에 여유 공간이 있어야 합니다. 조작 방법은 [아카이브](../dashboard/archives/)를 확인하세요.

### 비트레이트 상한 초과

조직 전체의 입력 비트레이트 합계가 요금제 상한을 **10분 이상** 계속 초과하면 합계가 상한 이하가 될 때까지 최근에 시작된 송출부터 중지됩니다. 중지 대상 스트림 키는 **1시간 동안** 다시 송출할 수 없습니다. 상한을 올리려면 대시보드에서 **비트레이트 추가 신청**을 할 수 있습니다(관리자 승인제).

### 시청 가능 지역

요금제나 서버(노드)의 설정에 따라서는 **시청 가능 지역이 일본 국내로 한정되는** 경우가 있습니다. 글로벌 송출 가능 여부는 요금제에 따라 다르므로, 자세한 내용은 요금제 화면·문의를 통해 확인해 주세요.

### 코덱 제한

서버는 재인코딩을 하지 않으므로 **H.264(영상) / AAC(음성)** 등 지원 코덱으로의 송출이 필요합니다. 자세한 내용은 [지원 코덱 목록](/ko/services/streaming-service/nyan-streaming/codecs/)을 참고해 주세요.

## 제한 중 시청자에게 표시되는 화면

송출이 제한되면 정상 송출 대신 사유별 경고 화면이 시청자에게 표시됩니다. 자동 제한은 대시보드에 해제 예정 시각이 표시됩니다.

:::note
조직의 기본 언어가 일본어이면 일본어 이미지가, 그 밖의 언어이면 영어 이미지가 사용됩니다. 현재 한국어 전용 이미지는 제공되지 않습니다. 언어는 대시보드의 **설정 → 일반 → 기본 언어**에서 변경할 수 있습니다.
:::

### 24시간 이상 연속 송출

![24시간 이상 연속 송출 제한 화면(영어)](https://cdn.krnk.org/kuronekoserver/nyst/warning/24h-en.png)

### 비트레이트 상한 초과

![입력 비트레이트 상한 초과 제한 화면(영어)](https://cdn.krnk.org/kuronekoserver/nyst/warning/bitrate-en.png)

### 기타 이용약관 위반

![이용약관 위반 제한 화면(영어)](https://cdn.krnk.org/kuronekoserver/nyst/warning/tos-en.png)

각 제한의 해결 절차는 [문제 해결](/ko/services/streaming-service/nyan-streaming/troubleshooting/)을 확인하세요.

## 이용 정책

### 이용약관

관리자가 [Nyan Streaming 이용약관](https://krnk.org/terms/nyan-streaming) 위반을 확인하면 대상 조직 또는 사용자의 송출을 중지하고 차단합니다. 이 차단은 자동으로 해제되지 않습니다. 검토 또는 해제는 [문의](https://krnk.org/contact/)해 주세요. 약관 위반을 발견한 경우 즉시 **abuse@krnk.org**로 신고해 주세요.

### 악곡 이용 신청

JASRAC / NexTone 관리 악곡 등을 송출에서 이용하는 경우에는 대시보드의 **악곡 이용 신청** 폼에서 신청을 진행해 주세요.

## 대시보드에서 할 수 있는 것

- 스트림 키의 생성·재생성·삭제, 시청 URL 확인
- Node02에서 녹화한 아카이브의 관리・다운로드
- 재송출(외부 RTMP 전송 대상) 설정
- 프로그램 송출(채널) 전환
- API 키 발급(공개 API 이용)
- IP 접근 규칙 설정
- 알림(앱 내 알림 / Webhook / 메일) 설정
- 팀(조직)·멤버·청구 관리

각 조작의 자세한 절차는 [대시보드 사용법](/ko/services/streaming-service/nyan-streaming/dashboard/)을 참조하세요.

## 관련 페이지

- [노드 선택 가이드](/ko/services/streaming-service/nyan-streaming/nodes/)
- [시작 가이드](/ko/services/streaming-service/nyan-streaming/getting-started/)
- [기능 개요·지원 프로토콜](/ko/services/streaming-service/nyan-streaming/overview/)
- [송출 방법(인제스트)](/ko/services/streaming-service/nyan-streaming/streaming-methods/)
- [시청 방법(재생)](/ko/services/streaming-service/nyan-streaming/viewing-methods/)
- [대시보드 사용법](/ko/services/streaming-service/nyan-streaming/dashboard/)
- [문제 해결](/ko/services/streaming-service/nyan-streaming/troubleshooting/)
- [공개 API](/ko/services/streaming-service/nyan-streaming/api/)
