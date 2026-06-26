---
title: "저지연 OBS 프로파일"
lastUpdated: 2026-05-10T16:00:58.776Z
---


# OBS 저지연 프로파일

## 개요
본 프로파일은 **레몬과즙(れもん果汁) 님**과 **쿄(きょう) 님**의 가르침을 바탕으로 제작되었습니다.
https://lemonkaju.booth.pm/items/7497730 의 프로파일을 기반으로 개조 및 재배포하고 있습니다.
아래 설명은 Windows에서의 경우에 대한 안내입니다. 미리 양해 부탁드립니다.

## 셋업
사전에 설치할 소프트웨어는 다음과 같습니다.
🔷OBS: https://obsproject.com/download
🔷iTunes: https://www.apple.com/itunes/download/win64

## 프로파일
> 기본값으로는 Node02의 주소가 들어 있습니다.
> 실제로 사용할 경우에는 각자 NyanStreaming 도구에서 주소를 확인한 후 방송을 진행해 주세요.

### CoreAudio AAC
- Nvidia: https://cdn.krnk.org/kuronekoserver/wiki/nyst/obs-profile/nyst_nvidia_coreaudio_aac.zip
- Radeon: https://cdn.krnk.org/kuronekoserver/wiki/nyst/obs-profile/nyst_radeon_coreaudio_aac.zip
> 모든 Node에서 동작을 확인하였습니다.

### LPCM (최고 음질)
- Nvidia: https://cdn.krnk.org/kuronekoserver/wiki/nyst/obs-profile/nyst_nvidia_lpcm.zip
- Radeon: https://cdn.krnk.org/kuronekoserver/wiki/nyst/obs-profile/nyst_radeon_lpcm.zip
> Node01, Node03, Node04, 협찬 Node에서 동작을 확인하였습니다.

## OBS에서 프로파일 가져오기
위 프로파일을 다운로드하고 **압축을 해제한 후** OBS의 프로파일에서 가져오기를 선택하여 압축을 해제한 파일을 선택합니다.
그러면 프로파일 목록에 표시될 것입니다.

![import](https://cdn.krnk.org/kuronekoserver/wiki/nyst/obs-profile/import.webp)
