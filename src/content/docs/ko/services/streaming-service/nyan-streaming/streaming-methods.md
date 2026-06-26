---
title: "송출 방법(인제스트)"
description: "RTMP·WebRTC(WHIP)·RTSP·브라우저 송출 방법과 송출 주소 확인 방법"
lastUpdated: 2026-06-26T00:00:00.000Z
sidebar:
  order: 3
---


# 송출 방법(인제스트)

Nyan Streaming 으로는 **RTMP / WebRTC (WHIP) / RTSP 푸시 / 브라우저 송출** 로 영상을 보낼 수 있습니다. 영상은 **H.264** 가 표준이며, 음성은 **AAC** 가 기본입니다(**RTMP 에서는 LPCM**, **WebRTC 에서는 Opus** 도 지원). 서버는 재인코딩을 하지 않으므로, 미지원 코덱에서는 송출이 표시되지 않습니다.

## 송출 주소와 스트림 키 확인

송출에 사용하는 **서버 주소**와 **스트림 키**는 [대시보드](https://nyst.live/) 의 스트림 키 화면에서 확인할 수 있습니다. 서버(노드)나 리전을 선택하면, 각각에 대응하는 송출/시청 주소가 표시됩니다.

:::caution
스트림 키(송출용 시크릿)는 타인에게 알려지면 무단으로 송출될 우려가 있습니다. 제3자와 공유하지 마세요. 만약 유출된 경우에는 대시보드에서 키를 재생성하세요.
:::

## RTMP(OBS 등)

일반적인 송출 소프트웨어(OBS Studio 등)로부터의 송출을 지원합니다.

- **송출 대상 URL**: `rtmp://<server-address>/<org-slug>/`（표준 포트 **1935**）
- **스트림 키**: 대시보드에서 발급한 송출용 키/토큰
- **권장 설정**: 영상 H.264, 음성 AAC

OBS 를 간편하게 저지연 설정으로 만들 수 있는 프로필을 배포하고 있습니다. [저지연 OBS 프로필](/ko/services/streaming-service/nyan-streaming/obs-profile/) 을 이용하세요.

## WebRTC(WHIP)

가장 저지연인 송출 방식입니다. 브라우저로부터의 송출이나 WHIP 지원 인코더로부터의 송출에 이용할 수 있습니다.

- **송출 대상**: 대시보드에 표시되는 WHIP 의 URL（HTTPS·표준 포트 **8443**）
- **영상**: H.264 / **음성**: Opus
- HTTPS 환경이 필요합니다.

## 브라우저 송출

대시보드의 「브라우저 송출」에서 카메라나 화면 공유를 사용하여 그대로 송출할 수 있습니다(WebRTC 기반). 송출 소프트웨어를 준비할 필요가 없어 간편합니다. HTTPS 환경의 브라우저(Chrome / Edge / Firefox 등)에서 이용하세요.

## RTSP(푸시)

감시 카메라나 일부 장비로부터 RTSP 의 푸시 송출(ANNOUNCE → RECORD)로 직접 송출할 수 있습니다.

- **송출 대상 URL**: `rtsp://<server-address>:554/<org-slug>/...`（표준 포트 **554**）
- **영상**: H.264 / **음성**: AAC

## 멀티트랙 송출(Enhanced Broadcasting)

OBS 의 Enhanced Broadcasting(멀티트랙)을 사용하면, 여러 화질의 **H.264** 트랙을 한 개의 송출로 보낼 수 있습니다. 서버는 이를 여러 화질의 HLS(ABR)로 송출합니다. 화질 변형은 송출 측(OBS)의 인코더에서 생성되며, 서버 측에서의 재인코딩은 하지 않습니다.

## 자주 있는 주의점

- **영상이 표시되지 않음/소리가 나오지 않음**: 코덱을 확인하세요. 영상은 H.264, 음성은 AAC 가 기본입니다. 자세한 내용은 [지원 코덱 목록](/ko/services/streaming-service/nyan-streaming/codecs/).
- **송출이 갑자기 끊김**: 연속 송출 시간이나 비트레이트의 상한에 도달하지 않았는지 확인하세요. 자세한 내용은 [요금제·제한·정책](/ko/services/streaming-service/nyan-streaming/plans-and-limits/).
