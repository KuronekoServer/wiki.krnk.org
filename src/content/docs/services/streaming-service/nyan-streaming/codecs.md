---
title: "対応コーデック一覧"
description: "Nyan Streaming（現行サーバー）の配信・視聴で利用できるコーデック"
lastUpdated: 2026-06-26T00:00:00.000Z
sidebar:
  order: 5
---


# 対応コーデック一覧

Nyan Streaming は自社開発の配信サーバーで動作しており、**サーバー側でのトランスコード（再エンコード）を行わない**設計です。配信側から送られた映像・音声をそのまま視聴者へ届けるため、**対応コーデックで配信していただくことが必須**となります。非対応のコーデックで配信した場合、映像・音声が表示されない・聞こえないなどの問題が発生します。

## 基本コーデック（全ノード共通）

| 種別 | 対応コーデック |
| --- | --- |
| 映像 | **H.264 (AVC)** |
| 音声 | **AAC (MPEG-4 Audio)** |

映像は **H.264**、音声は **AAC** が標準です。配信（RTMP / RTSP / WebRTC）・視聴（HLS / RTSP / RTMP / WebRTC）のいずれの経路でも、この組み合わせであれば確実に動作します。

:::caution
**AV1 / VP9 / VP8 / H.265 (HEVC)** などの映像コーデックには対応していません。OBS 等のエンコーダ設定では、必ず **H.264** を選択してください。
:::

## 追加で対応している音声コーデック

標準のサーバーでは、基本コーデックに加えて以下の音声にも対応しています。

- **LPCM（pcm_s16le / 非圧縮・最高音質）** — **RTMP での配信**（OBS など）で利用できます。設定済みの OBS プロファイルを [低遅延 OBS プロファイル](/services/streaming-service/nyan-streaming/obs-profile/) で配布しています。
- **Opus** — **WebRTC（WHIP 配信 / WHEP 視聴）** で利用できます。
- **L16（PCM）での RTSP 視聴** — AV Pro / Windows Media Foundation など、RTSP の AAC をうまく再生できない環境向けに、RTSP 視聴の音声を L16（PCM）で受け取れます。

:::note
迷った場合は **H.264 + AAC** を選んでおけば、すべての配信・視聴方法で確実に動作します。
:::

## VRChat での視聴について

:::caution
VRChat では、以下のコーデックのみ再生に対応しています。
- 映像: **H.264**
- 音声: **AAC（MPEG-4 Audio）**, **LPCM（pcm_s16le）**
:::

VRChat 向けには、最も低遅延な **RTSP** での視聴を推奨します。プレイヤーごとの設定は [ビデオプレイヤーの設定/確認](/services/streaming-service/nyan-streaming/video-player-settings/) をご参照ください。
