---
title: 低遅延OBSプロファイル
description: 
published: true
date: 2025-11-03T07:52:12.717Z
tags: streaming, obs, nyanstreaming, s
editor: markdown
dateCreated: 2025-11-03T07:52:12.717Z
---

# OBS低遅延プロファイル

## 概要
本プロファイルは**れもん果汁 様**のBOOTHにて配布されております。
https://lemonkaju.booth.pm/items/7497730 のプロファイルを元に、改変・再配布しております。
以下の説明はWindowsでの場合での対応となります。ご了承くださいませ。

## セットアップ
事前にインストールするソフトウェア
🔷OBS: https://obsproject.com/download
🔷iTunes: https://www.apple.com/itunes/download/win64

## プロファイル
### CoreAudio ACC
-  Nvidia: https://kuronekoserver/wiki/nyst/obs-profile/nyst_nvidia_coreaudio_aac.zip
- Radeon: https://kuronekoserver/wiki/nyst/obs-profile/nyst_radeon_coreaudio_aac.zip
> 全Nodeでの動作を確認いたしました。
### LPCM
- Nvidia: https://kuronekoserver/wiki/nyst/obs-profile/nyst_nvidia_lpcm.zip
- Radeon: https://kuronekoserver/wiki/nyst/obs-profile/nyst_radeon_lpcm.zip
> Node01、Node03、Node04、協賛Nodeでの動作を確認いたしました。

## OBSでのプロファイルインポート
上記のプロファイルをダウンロードして、**解凍を行った後**にOBSのプロファイルから、インポートを選択し、解凍したファイルを選択する。
するとプロファイル一覧に表示されるはずです。

![import](https://cdn.krnk.org/kuronekoserver/wiki/nyst/obs-profile/import.webp)