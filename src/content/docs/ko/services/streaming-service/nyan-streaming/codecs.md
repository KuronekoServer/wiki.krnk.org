---
title: "지원 코덱 목록"
description: "Nyan Streaming(현행 서버)의 송출·시청에서 이용할 수 있는 코덱"
lastUpdated: 2026-06-26T00:00:00.000Z
sidebar:
  order: 5
---


# 지원 코덱 목록

Nyan Streaming은 자체 개발한 송출 서버에서 동작하며, **서버 측에서 트랜스코딩(재인코딩)을 수행하지 않는** 설계입니다. 송출 측에서 보낸 영상·음성을 그대로 시청자에게 전달하기 때문에, **지원 코덱으로 송출하는 것이 필수**입니다. 지원하지 않는 코덱으로 송출한 경우, 영상·음성이 표시되지 않거나 들리지 않는 등의 문제가 발생합니다.

## 기본 코덱(전 노드 공통)

| 종류 | 지원 코덱 |
| --- | --- |
| 영상 | **H.264 (AVC)** |
| 음성 | **AAC (MPEG-4 Audio)** |

영상은 **H.264**, 음성은 **AAC**가 표준입니다. 송출(RTMP / RTSP / WebRTC)·시청(HLS / RTSP / RTMP / WebRTC) 어느 경로에서든 이 조합이라면 확실하게 동작합니다.

:::caution
**AV1 / VP9 / VP8 / H.265 (HEVC)** 등의 영상 코덱은 지원하지 않습니다. OBS 등의 인코더 설정에서는 반드시 **H.264**를 선택해 주세요.
:::

## 추가로 지원하는 음성 코덱

표준 서버에서는 기본 코덱에 더해 다음 음성도 지원합니다.

- **LPCM(pcm_s16le / 무압축·최고 음질)** — **RTMP 송출**(OBS 등)에서 이용할 수 있습니다. 설정이 완료된 OBS 프로필을 [저지연 OBS 프로필](/ko/services/streaming-service/nyan-streaming/obs-profile/)에서 배포하고 있습니다.
- **Opus** — **WebRTC(WHIP 송출 / WHEP 시청)** 에서 이용할 수 있습니다.
- **L16(PCM) 으로의 RTSP 시청** — AV Pro / Windows Media Foundation 등 RTSP의 AAC를 제대로 재생하지 못하는 환경을 위해, RTSP 시청 음성을 L16(PCM)으로 받을 수 있습니다.

:::note
망설여진다면 **H.264 + AAC** 를 선택해 두면 모든 송출·시청 방법에서 확실하게 동작합니다.
:::

## VRChat에서의 시청에 대해

:::caution
VRChat에서는 다음 코덱만 재생을 지원합니다.
- 영상: **H.264**
- 음성: **AAC(MPEG-4 Audio)**, **LPCM(pcm_s16le)**
:::

VRChat에는 가장 저지연인 **RTSP** 시청을 권장합니다. 플레이어별 설정은 [비디오 플레이어 설정/확인](/ko/services/streaming-service/nyan-streaming/video-player-settings/)을 참조해 주세요.
