---
title: "対応コーデック一覧"
description: "Nyan Streaming（現行サーバー）の配信・視聴で利用できるコーデック"
lastUpdated: 2026-08-22T00:00:00.000Z
sidebar:
  order: 6
---

# 対応コーデック一覧

Nyan Streaming は自社開発の配信サーバーで動作しており、映像は**サーバー側でトランスコード（再エンコード）を行わない**設計です。音声は AAC を標準とし、RTSP で入力された PCM（s16be）を RTSP 以外の方式で視聴する場合のみ AAC に変換します。**対応コーデックで配信していただくことが必須**であり、非対応のコーデックでは映像・音声が表示されない・聞こえないなどの問題が発生します。

## 基本コーデック

| 種別 | 対応コーデック                            |
| ---- | ----------------------------------------- |
| 映像 | **H.264 (AVC)**                           |
| 音声 | **AAC (MPEG-4 Audio)**、**PCM（s16be）** |

映像は **H.264**、音声は **AAC** が標準です。配信（RTMP / RTSP / WebRTC）・視聴（HLS / RTSP / RTMP / WebRTC）のいずれの経路でも、この組み合わせであれば確実に動作します。

:::caution
**AV1 / VP9 / VP8 / H.265 (HEVC)** などの映像コーデックには対応していません。OBS 等のエンコーダ設定では、必ず **H.264** を選択してください。
:::

## 追加で対応している音声コーデック

基本コーデックに加えて、以下の音声にも対応しています。

- **PCM（s16be / 非圧縮・最高音質）** — PCM（s16be）で配信できるのは **RTSP プッシュのみ**です。RTSP では PCM（s16be）で視聴できますが、HLS / RTMP / WebRTC など **RTSP 以外の方式で視聴する場合、音声は AAC になります**。
- **Opus** — **WebRTC（WHIP 配信 / WHEP 視聴）** で利用できます。
- **PCM（s16be）での RTSP 視聴** — AV Pro / Windows Media Foundation など、RTSP の AAC をうまく再生できない環境では、RTSP 視聴の音声を PCM（s16be）で受け取れます。

## VRChat での視聴について

:::caution
VRChat では、以下のコーデックのみ再生に対応しています。

- 映像: **H.264**
- 音声: **AAC（MPEG-4 Audio）**、**PCM（s16be・RTSP 視聴時のみ）**
  :::

VRChat 向けには、最も低遅延な **RTSP** での視聴を推奨します。プレイヤーごとの設定は [ビデオプレイヤーの設定/確認](/services/streaming-service/nyan-streaming/video-player-settings/) をご参照ください。
