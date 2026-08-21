---
title: "지원 코덱 목록"
description: "Nyan Streaming(현행 서버)의 송출·시청에서 이용할 수 있는 코덱"
lastUpdated: 2026-08-22T00:00:00.000Z
sidebar:
  order: 6
---

# 지원 코덱 목록

Nyan Streaming은 자체 개발한 송출 서버에서 동작하며 영상은 **서버 측에서 트랜스코딩(재인코딩)하지 않는** 구조입니다. 지원하는 음성 형식은 AAC와 PCM(s16be)입니다. RTSP로 입력된 PCM(s16be)을 RTSP 이외의 방식으로 시청할 때만 AAC로 변환합니다. **지원 코덱으로 송출해야 하며**, 지원하지 않는 코덱을 사용하면 영상이나 음성이 나오지 않을 수 있습니다.

## 기본 코덱

| 종류 | 지원 코덱                               |
| ---- | --------------------------------------- |
| 영상 | **H.264 (AVC)**                         |
| 음성 | **AAC (MPEG-4 Audio)**, **PCM(s16be)** |

영상은 **H.264**, 음성은 **AAC**가 표준입니다. 송출(RTMP / RTSP / WebRTC)·시청(HLS / RTSP / RTMP / WebRTC) 어느 경로에서든 이 조합이라면 확실하게 동작합니다.

:::caution
**AV1 / VP9 / VP8 / H.265 (HEVC)** 등의 영상 코덱은 지원하지 않습니다. OBS 등의 인코더 설정에서는 반드시 **H.264**를 선택해 주세요.
:::

## 추가로 지원하는 음성 코덱

기본 코덱에 더해 다음 음성 형식도 지원합니다.

- **PCM(s16be / 무압축·최고 음질)** — PCM(s16be) 송출은 **RTSP 푸시에서만** 이용할 수 있습니다. RTSP에서는 PCM(s16be)으로 시청할 수 있지만, HLS / RTMP / WebRTC 등 **RTSP 이외의 방식으로 시청하면 음성은 AAC로 제공됩니다**.
- **Opus** — **WebRTC(WHIP 송출 / WHEP 시청)** 에서 이용할 수 있습니다.
- **PCM(s16be) RTSP 시청** — AV Pro / Windows Media Foundation 등 RTSP의 AAC를 제대로 재생하지 못하는 환경에서는 RTSP 음성을 PCM(s16be)으로 받을 수 있습니다.

## VRChat에서의 시청에 대해

:::caution
VRChat에서는 다음 코덱만 재생을 지원합니다.

- 영상: **H.264**
- 음성: **AAC(MPEG-4 Audio)**, **PCM(s16be, RTSP 시청 시에만)**
  :::

VRChat에는 가장 저지연인 **RTSP** 시청을 권장합니다. 플레이어별 설정은 [비디오 플레이어 설정/확인](/ko/services/streaming-service/nyan-streaming/video-player-settings/)을 참조해 주세요.
