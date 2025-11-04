---
title: 저지연 OBS 프로파일
description: 
published: true
date: 2025-11-03T07:55:37.224Z
tags: streaming, obs, nyanstreaming
editor: markdown
dateCreated: 2025-11-03T07:52:12.717Z
---

# OBS 저지연 프로파일

## 개요
이 프로파일은 BOOTH에서 "れもん果汁"님이 배포한 것을 기반으로 수정·재배포된 것입니다.
아래 설명은 Windows 환경을 기준으로 합니다.

## 설치 전 요구 소프트웨어
🔷OBS: https://obsproject.com/download
🔷iTunes: https://www.apple.com/itunes/download/win64

## 프로파일
> 기본값에는 Node02 주소가 포함되어 있습니다. 실제 사용 시 NyanStreaming 도구에서 주소를 확인해 주세요.
{.is-info}

### CoreAudio AAC
- Nvidia: https://kuronekoserver/wiki/nyst/obs-profile/nyst_nvidia_coreaudio_aac.zip
- Radeon: https://kuronekoserver/wiki/nyst/obs-profile/nyst_radeon_coreaudio_aac.zip
> 모든 노드에서 동작을 확인했습니다.
{.is-success}

### LPCM (최고 음질)
- Nvidia: https://kuronekoserver/wiki/nyst/obs-profile/nyst_nvidia_lpcm.zip
- Radeon: https://kuronekoserver/wiki/nyst/obs-profile/nyst_radeon_lpcm.zip
> Node01, Node03, Node04 및 협찬 노드에서 동작을 확인했습니다.
{.is-success}

## OBS에서 프로파일 가져오기
위 프로파일을 다운로드 후 압축을 풀고 OBS에서 Profiles → Import 를 선택하여 압축 해제한 폴더를 선택하세요. 프로파일 목록에 표시됩니다.

![import](https://cdn.krnk.org/kuronekoserver/wiki/nyst/obs-profile/import.webp)
