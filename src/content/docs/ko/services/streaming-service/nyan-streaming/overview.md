---
title: "기능 개요 및 지원 프로토콜"
description: "Nyan Streaming의 지원 프로토콜·코덱·지연 시간·주요 기능 총정리"
lastUpdated: 2026-06-26T00:00:00.000Z
sidebar:
  order: 2
---


# 기능 개요 및 지원 프로토콜

Nyan Streaming은 **고화질 영상을 낮은 지연 시간(최단 약 1초)으로 송출하는 것**을 목표로 하는 영상 송출 서비스입니다. 자체 개발한 송출 서버에서 동작하며, 서버 측에서 **트랜스코딩(재인코딩)을 수행하지 않고**, 송출된 영상·음성을 그대로 시청자에게 전달합니다.

공식 사이트: https://nyst.live/

## 지원 프로토콜

### 송출(입력)

| 프로토콜 | 개요 | 주요 용도 |
| --- | --- | --- |
| **RTMP** | OBS 등 일반적인 송출 소프트웨어 지원 | OBS / XSplit 등에서의 송출 |
| **WebRTC (WHIP)** | 가장 낮은 지연 시간의 송출 방식 | 브라우저 송출·낮은 지연을 중시하는 송출 |
| **RTSP(푸시)** | RTSP의 ANNOUNCE/RECORD를 통한 입력 | 고급 송출 |
| **브라우저 송출** | 대시보드에서 카메라／화면을 직접 송출 | 간편한 브라우저 송출(WebRTC 기반) |

### 시청(재생)

| 프로토콜 | 개요 | 지연 시간 기준 |
| --- | --- | --- |
| **RTSP** | 가장 낮은 지연 시간. VRChat / AV Pro에 권장 | 약 1초 |
| **WebRTC (WHEP)** | 브라우저에서 가장 낮은 지연 시간으로 시청 | 약 1초 |
| **RTMP** | RTMP 재생을 지원하는 플레이어용 | 약 1~2초 |
| **HLS** | 브라우저·각종 플레이어에서 폭넓게 재생 가능(브라우저의 경우 hls.js 도입 권장) | 수 초 정도(사양상 다소 큼) |

:::note
최저 지연 시간을 노리는 경우 **RTSP** 또는 **WebRTC (WHEP)** 를, 호환성을 우선하는 경우 **HLS** 를 이용하십시오. HLS는 그 구조상 다른 방식보다 지연 시간이 커집니다.
:::

## 지원 코덱

영상은 **H.264**, 음성은 **AAC** 가 표준입니다. 음성은 **LPCM(RTMP·최고 음질)** 이나 **Opus(WebRTC)** 도 지원합니다. **AV1 / VP9 / VP8 / H.265 (HEVC)는 지원하지 않습니다.** 자세한 내용은 [지원 코덱 목록](/ko/services/streaming-service/nyan-streaming/codecs/)을 참조하십시오.

## 주요 기능

- **저지연 송출** — RTSP / RTMP / WebRTC에서는 약 1초의 낮은 지연 시간을 실현합니다(HLS는 사양상 다소 큼).
- **녹화(아카이브)** — 송출을 녹화하여 나중에 시청·다운로드할 수 있습니다(플랜·설정에 따라 이용 가능).
- **재송출(릴레이)** — 수신한 송출을 YouTube·Twitch 등 외부 RTMP 전송 대상으로 동시 전송할 수 있습니다.
- **방송 송출(채널 / 라이브 스위처)** — 조직의 URL에서 "지금 어떤 송출을 내보낼지"를 시청자의 연결을 유지한 채로 전환할 수 있습니다.
- **복수 노드／리전** — 여러 서버(노드)에서 송출·시청할 수 있으며, 지역에 맞는 송출에 대응합니다.
- **복수 노드 동시 송출** — 동일한 스트림 키를 여러 서버에서 동시에 송출할 수 있습니다.
- **음성 EQ** — 송출마다 서버 측에서 이퀄라이저를 적용할 수 있습니다.
- **멀티트랙 송출(Enhanced Broadcasting)** — OBS의 멀티트랙 H.264를 여러 화질의 HLS(ABR)로 송출할 수 있습니다.(운영진이 허가한 조직만)
- **대시보드 관리** — 스트림 키·시청 URL·녹화·API 키·IP 규칙·알림·팀(조직) 등을 웹에서 관리할 수 있습니다.
- **공개 API** — 서버 가동 상태·송출 상태·시청자 수를 가져올 수 있는 API를 제공합니다.

## 관련 페이지

- [송출 방법(입력)](/ko/services/streaming-service/nyan-streaming/streaming-methods/)
- [시청 방법(재생)](/ko/services/streaming-service/nyan-streaming/viewing-methods/)
- [지원 코덱 목록](/ko/services/streaming-service/nyan-streaming/codecs/)
- [플랜·제한·정책](/ko/services/streaming-service/nyan-streaming/plans-and-limits/)
- [대시보드 사용법](/ko/services/streaming-service/nyan-streaming/dashboard/)
- [공개 API](/ko/services/streaming-service/nyan-streaming/api/)
- [저지연 OBS 프로파일](/ko/services/streaming-service/nyan-streaming/obs-profile/)
- [비디오 플레이어 설정/확인](/ko/services/streaming-service/nyan-streaming/video-player-settings/)
