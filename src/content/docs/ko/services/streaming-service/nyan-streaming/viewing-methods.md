---
title: "시청 방법(재생)"
description: "HLS·RTSP·RTMP·WebRTC(WHEP)에서의 시청 방법과 시청 URL 형식"
lastUpdated: 2026-06-26T00:00:00.000Z
sidebar:
  order: 4
---


# 시청 방법(재생)

방송은 **HLS / RTSP / RTMP / WebRTC (WHEP)** 로 시청할 수 있습니다. 용도에 따라 저지연을 중시한다면 **RTSP / WebRTC**, 호환성을 중시한다면 **HLS** 를 선택하세요.

## 시청 URL 확인

시청용 URL은 [대시보드](https://nyst.live/)의 스트림 키 상세에서 확인할 수 있습니다. URL은 "**조직 슬러그**"와 "**시청 키(view key)**"로 구성되며, 서버(노드)별로 대응하는 주소가 표시됩니다.

:::note
**시청 키**는 방송용 스트림 키(시크릿)와는 별개입니다. 시청 URL을 공유해도 방송을 탈취당하지 않습니다. 시청 키를 재생성하면 그때까지의 시청 URL은 무효가 됩니다.
:::

## HLS

브라우저나 각종 플레이어에서 폭넓게 재생할 수 있는 방식입니다. 지연은 사양상 다소 큰 편(수 초 정도)입니다.

- **URL（TS / 표준）**: `https://<서버-주소>/<조직-슬러그>/<시청-키>/index.m3u8`
  - Safari / VLC 등은 그대로 재생할 수 있습니다. 그 외의 브라우저에서 재생하는 경우에는 **hls.js** 사용을 권장합니다.
- **URL（fMP4）**: `https://<서버-주소>/<조직-슬러그>/<시청-키>/index.fmp4.m3u8`
  - fMP4는 브라우저의 표준 기능(MSE)으로 재생할 수 있습니다.

## RTSP（최저 지연·VRChat 권장）

가장 낮은 지연(약 1초)으로 시청할 수 있습니다. VRChat이나 AV Pro 계열의 동영상 플레이어에 권장합니다.

- **URL**: `rtsp://<서버-주소>/<조직-슬러그>/<시청-키>`
- **TCP（RTSPT）**: 네트워크 환경에 따라 TCP 인터리브(RTSPT)로의 시청도 이용할 수 있습니다.
- **음성**: AAC가 표준입니다. AV Pro / Windows Media Foundation 등 RTSP의 AAC를 재생할 수 없는 환경을 위해 **L16(PCM)** 으로의 시청에도 대응하고 있습니다.
- 플레이어별 저지연 설정은 [비디오 플레이어 설정/확인](/ko/services/streaming-service/nyan-streaming/video-player-settings/)을 참고하세요.

## RTMP

RTMP 재생에 대응하는 플레이어로 시청할 수 있습니다(약 1~2초).

- **URL**: `rtmp://<서버-주소>/<조직-슬러그>/<시청-키>`

## WebRTC（WHEP）

브라우저에서 가장 낮은 지연(약 1초)으로 시청할 수 있는 방식입니다. 대시보드에 표시되는 WHEP의 URL(HTTPS·표준 포트 8443)에서 이용하세요. 음성은 **Opus** 에 대응합니다.

## 프로그램 송출(채널)의 시청

조직이 "프로그램 송출(채널)"을 사용하는 경우, **시청 키를 포함하지 않는 조직의 URL** 로 시청하면, 방송 측이 키를 전환해도 접속을 유지한 채 내용만 교체됩니다(라이브 스위처).

- **URL（HLS 예시）**: `https://<서버-주소>/<조직-슬러그>/index.m3u8`

## 관련 페이지

- [지원 코덱 목록](/ko/services/streaming-service/nyan-streaming/codecs/)
- [비디오 플레이어 설정/확인](/ko/services/streaming-service/nyan-streaming/video-player-settings/)