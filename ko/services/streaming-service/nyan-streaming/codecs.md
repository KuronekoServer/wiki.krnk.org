---
title: 지원 코덱 목록
description: 스트리밍 및 재생 시 지원되는 코덱 목록
published: true
date: 2025-11-03T06:09:51.374Z
tags: vrchat, streaming, obs, nyanstreaming
editor: markdown
dateCreated: 2025-11-03T05:56:50.830Z
---

# 지원 코덱 목록

Nyan Streaming은 RTSP/RTMP/WebRTC로의 송출을 받습니다. 재생 측면에서는 RTSP/RTMP에 더해 HLS를 지원합니다.
프로토콜별로 지원 코덱이 다르므로 아래를 참고해 설정을 조정하시기 바랍니다.

> ※ VRChat에서는 다음 코덱만 재생을 지원합니다.
> ・Video Codecs: H264
> ・Audio Codecs: MPEG-4 Audio (AAC), pcm_s16le (LPCM)
{.is-warning}

## Node01・Node03・Node04 (도쿄 리전)
### Video Codecs
RTSP: AV1, VP9, VP8, H265, H264, MPEG-4 Video (H263, Xvid), MPEG-1/2 Video, M-JPEG 및 RTP 호환 코덱
RTMP: AV1, VP9, H265, H264
WebRTC: AV1, VP9, VP8, H265, H264
HLS: AV1, VP9, H265, H264
### Audio Codecs
RTSP: Opus, MPEG-4 Audio (AAC), MPEG-1/2 Audio (MP3), AC-3, G726, G722, G711 (PCMA, PCMU), LPCM 및 RTP 호환 코덱
RTMP: Opus, MPEG-4 Audio (AAC), MPEG-1/2 Audio (MP3), AC-3, G711 (PCMA, PCMU), LPCM
WebRTC: Opus, G722, G711 (PCMA, PCMU)
HLS: Opus, MPEG-4 Audio (AAC)

## Node02 (글로벌 리전)
### Video Codecs
RTSP: H265, H264, MPEG-4 Video (H263, Xvid), MPEG-1/2 Video
RTMP: H265, H264
WebRTC: H265, H264
HLS: H265, H264
### Audio Codecs
RTSP: Opus, MPEG-4 Audio (AAC), MPEG-1/2 Audio (MP3), AC-3
RTMP: Opus, MPEG-4 Audio (AAC), MPEG-1/2 Audio (MP3), AC-3
WebRTC: Opus
HLS: Opus, MPEG-4 Audio (AAC)
