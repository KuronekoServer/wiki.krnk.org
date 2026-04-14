---
title: /user-settings
description: 
published: true
date: 2026-04-14T00:00:00.000Z
tags: discordbot, tts, user-settings
editor: markdown
dateCreated: 2026-04-14T00:00:00.000Z
---

# /user-settings
## 개요
/user-settings 는 서버 안에서 개인 읽기 설정을 묶어서 관리하는 그룹 명령어입니다.
이 그룹은 서버 전용입니다.

## 하위 명령어
명령어 | 설명 | 참고
-- | -- | --
/user-settings speed | 읽기 속도를 변경합니다. | [/setspeed](voice-settings.md) 와 같은 범위입니다.
/user-settings pitch | 읽기 피치를 변경합니다. | [/setpitch](voice-settings.md) 와 같은 범위입니다.
/user-settings intonation | 억양을 변경합니다. | [/setintonation](voice-settings.md) 와 같은 범위입니다.
/user-settings volume | 볼륨을 변경합니다. | [/setvolume](voice-settings.md) 와 같은 범위입니다.
/user-settings sync | 다른 KuronekoServer 계열 BOT과 설정을 동기화합니다. | 확인 버튼이 표시됩니다.
/user-settings reset | 개인 설정을 초기화합니다. | 확인 버튼이 표시됩니다.
/user-settings show | 현재 개인 설정을 표시합니다. | 현재 값을 확인할 수 있습니다.

## 사용 예시
```text
/user-settings speed 속도:1.2
/user-settings pitch 피치:1.0
/user-settings intonation 억양:1.0
/user-settings volume 볼륨:0.9
/user-settings show
```

## /user-settings sync
현재 개인 설정을 같은 계열의 다른 KuronekoServer 읽어주기 BOT에 복사합니다.

```text
/user-settings sync
```

참고:
- 동기화 대상 BOT의 설정은 덮어써집니다.
- 실행 전에 확인 버튼이 표시됩니다.

## /user-settings reset
개인 설정을 기본값으로 되돌립니다.

```text
/user-settings reset
```

참고:
- 현재 설정은 삭제됩니다.
- 실행 전에 확인 버튼이 표시됩니다.

## /user-settings show
현재 화자, 속도, 피치, 억양, 볼륨 등의 설정을 표시합니다.

```text
/user-settings show
```

## 관련 페이지
- [음성 설정 명령어](voice-settings.md)