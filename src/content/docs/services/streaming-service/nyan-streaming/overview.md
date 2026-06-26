---
title: "機能概要・対応プロトコル"
description: "Nyan Streaming の対応プロトコル・コーデック・遅延・主な機能の総覧"
lastUpdated: 2026-06-26T00:00:00.000Z
sidebar:
  order: 2
---


# 機能概要・対応プロトコル

Nyan Streaming は、**高画質な映像を低遅延（最短で約 1 秒）で配信すること**を目標とした映像配信サービスです。自社開発の配信サーバーで動作しており、サーバー側での**トランスコード（再エンコード）は行わず**、配信された映像・音声をそのまま視聴者へ届けます。

公式サイト: https://nyst.live/

## 対応プロトコル

### 配信（取り込み）

| プロトコル | 概要 | 主な用途 |
| --- | --- | --- |
| **RTMP** | OBS など一般的な配信ソフトに対応 | OBS / XSplit などからの配信 |
| **WebRTC (WHIP)** | 最も低遅延な配信方式 | ブラウザ配信・低遅延を重視する配信 |
| **RTSP（プッシュ）** | RTSP の ANNOUNCE/RECORD による取り込み | 高度な配信 |
| **ブラウザ配信** | ダッシュボードからカメラ／画面を直接配信 | 手軽なブラウザ配信（WebRTC ベース） |

### 視聴（再生）

| プロトコル | 概要 | 遅延の目安 |
| --- | --- | --- |
| **RTSP** | 最も低遅延。VRChat / AV Pro 向けに推奨 | 約 1 秒 |
| **WebRTC (WHEP)** | ブラウザで最も低遅延に視聴 | 約 1 秒 |
| **RTMP** | RTMP 再生に対応するプレイヤー向け | 約 1〜2 秒 |
| **HLS** | ブラウザ・各種プレイヤーで幅広く再生可能(ブラウザの場合hls.js導入を推奨) | 数秒程度（仕様上やや大きめ） |

:::note
最低遅延を狙う場合は **RTSP** または **WebRTC (WHEP)** を、互換性を優先する場合は **HLS** をご利用ください。HLS はその仕組み上、他方式より遅延が大きくなります。
:::

## 対応コーデック

映像は **H.264**、音声は **AAC** が標準です。音声は **LPCM（RTMP・最高音質）** や **Opus（WebRTC）** にも対応しています。**AV1 / VP9 / VP8 / H.265 (HEVC) には対応していません。** 詳細は [対応コーデック一覧](/services/streaming-service/nyan-streaming/codecs/) をご覧ください。

## 主な機能

- **低遅延配信** — RTSP / RTMP / WebRTC では約 1 秒の低遅延を実現します（HLS は仕様上やや大きめ）。
- **録画（アーカイブ）** — 配信を録画して後から視聴・ダウンロードできます（プラン・設定により利用可）。
- **再配信（リレー）** — 受け取った配信を YouTube・Twitch など外部の RTMP 送信先へ同時転送できます。
- **番組送出（チャンネル / ライブスイッチャー）** — 組織の URL で「今どの配信を流すか」を、視聴者の接続を維持したまま切り替えられます。
- **複数ノード／リージョン** — 複数のサーバー（ノード）から配信・視聴でき、地域に応じた配信に対応します。
- **複数ノード同時配信** — 同じストリームキーを複数のサーバーから同時配信できます。
- **音声 EQ** — 配信ごとにサーバー側でイコライザを適用できます。
- **マルチトラック配信（Enhanced Broadcasting）** — OBS のマルチトラック H.264 を、複数画質の HLS（ABR）として配信できます。(運営が許可した組織のみ)
- **ダッシュボード管理** — ストリームキー・視聴 URL・録画・API キー・IP ルール・通知・チーム（組織）などを Web から管理できます。
- **公開 API** — サーバー稼働状況・配信状況・視聴者数を取得できる API を提供します。

## 関連ページ

- [配信方法（取り込み）](/services/streaming-service/nyan-streaming/streaming-methods/)
- [視聴方法（再生）](/services/streaming-service/nyan-streaming/viewing-methods/)
- [対応コーデック一覧](/services/streaming-service/nyan-streaming/codecs/)
- [プラン・制限・ポリシー](/services/streaming-service/nyan-streaming/plans-and-limits/)
- [低遅延 OBS プロファイル](/services/streaming-service/nyan-streaming/obs-profile/)
- [ビデオプレイヤーの設定/確認](/services/streaming-service/nyan-streaming/video-player-settings/)
