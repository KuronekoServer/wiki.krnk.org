---
title: 対応コーデック一覧
description: 配信・視聴の際の対応コーデック一覧
published: true
date: 2025-11-03T05:56:50.830Z
tags: vrchat, streaming, obs, nyanstreaming
editor: markdown
dateCreated: 2025-11-03T05:56:50.830Z
---

# 対応コーデック一覧

Nyan Streamingではrtsp/rtmp/WebRTCでの配信を受け付けています。
また、視聴ではrtsp/rtmpに加えHLSに対応しています。
これらで各プロトコルに対しては対応コーデックが違いますので以下を参照しお好みでのカスタマイズをお願いいたします。

## Node01・Node03・Node04 (東京リージョン)
### Video Codecs
RTSP: AV1, VP9, VP8, H265, H264, MPEG-4 Video (H263, Xvid), MPEG-1/2 Video, M-JPEG and any RTP-compatible
RTMP: AV1, VP9, H265, H264
WebRTC: AV1, VP9, VP8, H265, H264
HLS: AV1, VP9, H265, H264
> ※VRChatではH264のみ映像が視聴できます。
{.is-danger}
### Audio Codecs
RTSP: Opus, MPEG-4 Audio (AAC), MPEG-1/2 Audio (MP3), AC-3, G726, G722, G711 (PCMA, PCMU), LPCM and any RTP-compatible codec
RTMP: Opus, MPEG-4 Audio (AAC), MPEG-1/2 Audio (MP3), AC-3, G711 (PCMA, PCMU), LPCM
WebRTC: Opus, G722, G711 (PCMA, PCMU)
HLS: Opus, MPEG-4 Audio (AAC)

## Node02 (グローバルリージョン)
### Video Codecs
RTSP: H265, H264, MPEG-4 Video (H263, Xvid), MPEG-1/2 Video
RTMP: H265, H264
WebRTC: H265, H264
HLS: H265, H264
> ※VRChatではH264のみ映像が視聴できます。
{.is-danger}
### Audio Codecs
RTSP: Opus, MPEG-4 Audio (AAC), MPEG-1/2 Audio (MP3), AC-3
RTMP: Opus, MPEG-4 Audio (AAC), MPEG-1/2 Audio (MP3), AC-3
WebRTC: Opus
HLS: Opus, MPEG-4 Audio (AAC)

