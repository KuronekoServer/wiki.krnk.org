---
title: "視聴方法（再生）"
description: "HLS・RTSP・RTMP・WebRTC(WHEP) での視聴方法と視聴 URL の形式"
lastUpdated: 2026-06-26T00:00:00.000Z
sidebar:
  order: 4
---


# 視聴方法（再生）

配信は **HLS / RTSP / RTMP / WebRTC (WHEP)** で視聴できます。用途に応じて、低遅延を重視するなら **RTSP / WebRTC**、互換性を重視するなら **HLS** をお選びください。

## 視聴 URL の確認

視聴用の URL は [ダッシュボード](https://nyst.live/) のストリームキー詳細から確認できます。URL は「**組織スラッグ**」と「**視聴キー（view key）**」で構成され、サーバー（ノード）ごとに対応したアドレスが表示されます。

:::note
**視聴キー**は配信用のストリームキー（シークレット）とは別物です。視聴 URL を共有しても配信を乗っ取られることはありません。視聴キーを再生成すると、それまでの視聴 URL は無効になります。
:::

## HLS

ブラウザや各種プレイヤーで幅広く再生できる方式です。遅延は仕様上やや大きめ（数秒程度）です。

- **URL（TS / 標準）**: `https://<サーバーアドレス>/<組織スラッグ>/<視聴キー>/index.m3u8`
  - Safari / VLC などはそのまま再生できます。その他のブラウザで再生する場合は **hls.js** の利用を推奨します。
- **URL（fMP4）**: `https://<サーバーアドレス>/<組織スラッグ>/<視聴キー>/index.fmp4.m3u8`
  - fMP4 はブラウザの標準機能（MSE）で再生できます。

## RTSP（最低遅延・VRChat 推奨）

最も低遅延（約 1 秒）で視聴できます。VRChat や AV Pro 系の動画プレイヤーに推奨です。

- **URL**: `rtsp://<サーバーアドレス>/<組織スラッグ>/<視聴キー>`
- **TCP（RTSPT）**: ネットワーク環境により、TCP インターリーブ（RTSPT）での視聴も利用できます。
- **音声**: AAC が標準です。AV Pro / Windows Media Foundation など RTSP の AAC を再生できない環境向けに、**L16（PCM）** での視聴にも対応しています。
- プレイヤーごとの低遅延設定は [ビデオプレイヤーの設定/確認](/services/streaming-service/nyan-streaming/video-player-settings/) をご覧ください。

## RTMP

RTMP 再生に対応するプレイヤーで視聴できます（約 1〜2 秒）。

- **URL**: `rtmp://<サーバーアドレス>/<組織スラッグ>/<視聴キー>`

## WebRTC（WHEP）

ブラウザで最も低遅延（約 1 秒）に視聴できる方式です。ダッシュボードに表示される WHEP の URL（HTTPS・標準ポート 8443）からご利用ください。音声は **Opus** に対応します。

## 番組送出（チャンネル）の視聴

組織が「番組送出（チャンネル）」を使っている場合、**視聴キーを含まない組織の URL** で視聴すると、配信側がキーを切り替えても接続を維持したまま中身だけが差し替わります（ライブスイッチャー）。

- **URL（HLS の例）**: `https://<サーバーアドレス>/<組織スラッグ>/index.m3u8`

## 関連ページ

- [対応コーデック一覧](/services/streaming-service/nyan-streaming/codecs/)
- [ビデオプレイヤーの設定/確認](/services/streaming-service/nyan-streaming/video-player-settings/)