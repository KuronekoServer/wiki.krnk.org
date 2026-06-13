---
title: "음성 설정 명령어"
lastUpdated: 2026-04-14T00:00:00.000Z
---


# 음성 설정 명령어
## 개요
아래 명령어는 개인 화자와 읽기 파라미터를 변경할 때 사용하는 명령어입니다.
서버에서 기본 화자나 서버 기본 파라미터 강제가 켜져 있으면 개인 설정보다 서버 설정이 우선됩니다.

## 명령어 목록
명령어 | 설명 | 참고
-- | -- | --
/setvoice | 화자를 변경합니다. | 인수를 생략하면 선택 UI가 열립니다.
/setspeed | 읽기 속도를 변경합니다. | 0.5부터 4.0, 생략 시 초기화
/setpitch | 읽기 피치를 변경합니다. | BOT 설정 범위 사용, 생략 시 초기화
/setintonation | 억양을 변경합니다. | 0.0부터 2.0, 생략 시 초기화
/setvolume | 볼륨을 변경합니다. | 0.1부터 3.0, 생략 시 초기화

## 사용 예시
```text
/setvoice 화자:시코쿠 메탄
/setspeed 속도:1.2
/setpitch 피치:1.1
/setintonation 억양:1.0
/setvolume 볼륨:0.8
```

## /setvoice
내 화자를 변경합니다.

```text
/setvoice 화자:즌다몬
/setvoice
```

참고:
- 화자명은 자동완성으로 선택할 수 있습니다.
- 인수를 생략하면 선택 메뉴가 표시됩니다.

## /setspeed
읽기 속도를 변경합니다.

```text
/setspeed 속도:1.0
/setspeed
```

참고:
- 유효 범위는 0.5부터 4.0입니다.
- 인수 없이 실행하면 기본값으로 되돌립니다.

## /setpitch
읽기 피치를 변경합니다.

```text
/setpitch 피치:1.0
/setpitch
```

참고:
- 설정 가능한 범위는 BOT의 음성 엔진 설정을 따릅니다.
- 인수 없이 실행하면 기본값으로 되돌립니다.

## /setintonation
억양을 변경합니다.

```text
/setintonation 억양:1.0
/setintonation
```

참고:
- 유효 범위는 0.0부터 2.0입니다.
- 인수 없이 실행하면 기본값으로 되돌립니다.

## /setvolume
읽기 볼륨을 변경합니다.

```text
/setvolume 볼륨:1.0
/setvolume
```

참고:
- 유효 범위는 0.1부터 3.0입니다.
- 인수 없이 실행하면 기본값으로 되돌립니다.

## 관련 페이지
- [/user-settings](/ko/services/discordbot/tts-bot/user-settings/)
- [/server-settings](/ko/services/discordbot/tts-bot/server-settings/)
