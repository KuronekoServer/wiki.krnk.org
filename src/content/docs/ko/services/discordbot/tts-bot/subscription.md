---
title: "/subscription"
lastUpdated: 2026-04-14T00:00:00.000Z
---


# /subscription
## 개요
/subscription 은 현재 유료 플랜 상태를 확인하고, 구독 코드를 등록하거나 해제할 때 사용하는 명령어입니다.
서버 전용 그룹 명령어이며, 서버 관리자용입니다.

## 하위 명령어
명령어 | 설명 | 참고
-- | -- | --
/subscription register | 구독 코드를 등록합니다. | 코드 입력 폼이 열립니다.
/subscription unregister | 현재 적용된 코드를 해제합니다. | 등록자 또는 서버 관리자 권한이 있는 사용자가 실행할 수 있습니다.
/subscription info | 현재 플랜과 제한값을 표시합니다. | 유효한 플랜이 없으면 가입 페이지도 함께 표시됩니다.

## /subscription register
서버에 구독 코드를 등록합니다.

```text
/subscription register
```

참고:
- 실행하면 코드 입력 폼이 열립니다.
- 이미 다른 코드가 적용된 서버에는 새 코드를 등록할 수 없습니다.

## /subscription unregister
현재 적용된 구독 코드를 해제합니다.

```text
/subscription unregister
```

참고:
- 코드를 등록한 사용자 또는 서버 관리 권한이 있는 사용자가 실행할 수 있습니다.

## /subscription info
현재 플랜, 글자 수 제한, 사전 제한 등 관련 정보를 표시합니다.

```text
/subscription info
```

## 관련 페이지
- [유료 플랜](/ko/services/discordbot/tts-bot/payment/)
- [/server-settings](/ko/services/discordbot/tts-bot/server-settings/)
