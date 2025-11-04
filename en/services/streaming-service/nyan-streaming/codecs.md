---
title: Supported Codecs
description: List of supported codecs for streaming and playback
published: true
date: 2025-11-03T06:09:51.374Z
tags: vrchat, streaming, obs, nyanstreaming
editor: markdown
dateCreated: 2025-11-03T05:56:50.830Z
---

# Supported Codecs

Nyan Streaming accepts streams via RTSP/RTMP/WebRTC. For playback, we support RTSP/RTMP and HLS.
Supported codecs differ by protocol; please consult the sections below.

> Note: VRChat supports only the following codecs:
> - Video Codecs: H264
> - Audio Codecs: MPEG-4 Audio (AAC), pcm_s16le (LPCM)
{.is-warning}

## Node01・Node03・Node04 (Tokyo region)
### Video Codecs
RTSP: AV1, VP9, VP8, H265, H264, MPEG-4 Video (H263, Xvid), MPEG-1/2 Video, M-JPEG and any RTP-compatible
RTMP: AV1, VP9, H265, H264
WebRTC: AV1, VP9, VP8, H265, H264
HLS: AV1, VP9, H265, H264
### Audio Codecs
RTSP: Opus, MPEG-4 Audio (AAC), MPEG-1/2 Audio (MP3), AC-3, G726, G722, G711 (PCMA, PCMU), LPCM and any RTP-compatible codec
RTMP: Opus, MPEG-4 Audio (AAC), MPEG-1/2 Audio (MP3), AC-3, G711 (PCMA, PCMU), LPCM
WebRTC: Opus, G722, G711 (PCMA, PCMU)
HLS: Opus, MPEG-4 Audio (AAC)

## Node02 (Global region)
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
