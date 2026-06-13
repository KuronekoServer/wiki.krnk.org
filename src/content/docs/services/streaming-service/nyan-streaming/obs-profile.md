---
title: "低遅延OBSプロファイル"
lastUpdated: 2026-05-10T16:00:58.776Z
---


# OBS低遅延プロファイル

## 概要
本プロファイルは **れもん果汁 様** のBOOTHにて配布されております。
https://lemonkaju.booth.pm/items/7497730 のプロファイルを元に、改変・再配布しております。
以下の説明はWindowsでの場合の対応となります。あらかじめご了承くださいませ。

## セットアップ
事前にインストールするソフトウェアは以下のとおりです。
🔷OBS: https://obsproject.com/download
🔷iTunes: https://www.apple.com/itunes/download/win64

## プロファイル
> デフォルトでは、Node02のアドレスが入っております。
> 実際に使用する場合は、各自NyanStreamingのツールよりアドレスを確認し、配信をお願いいたします。

### CoreAudio AAC
- Nvidia: https://cdn.krnk.org/kuronekoserver/wiki/nyst/obs-profile/nyst_nvidia_coreaudio_aac.zip
- Radeon: https://cdn.krnk.org/kuronekoserver/wiki/nyst/obs-profile/nyst_radeon_coreaudio_aac.zip
> 全Nodeでの動作を確認いたしました。

### LPCM (最高音質)
- Nvidia: https://cdn.krnk.org/kuronekoserver/wiki/nyst/obs-profile/nyst_nvidia_lpcm.zip
- Radeon: https://cdn.krnk.org/kuronekoserver/wiki/nyst/obs-profile/nyst_radeon_lpcm.zip
> Node01、Node03、Node04、協賛Nodeでの動作を確認いたしました。

## OBSでのプロファイルインポート
上記のプロファイルをダウンロードし、**解凍を行った後** にOBSのプロファイルからインポートを選択し、解凍したファイルを選択します。
すると、プロファイル一覧に表示されるはずです。

![import](https://cdn.krnk.org/kuronekoserver/wiki/nyst/obs-profile/import.webp)
