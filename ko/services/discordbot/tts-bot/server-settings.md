---
title: /server-settings
description: 
published: true
date: 2026-04-14T00:00:00.000Z
tags: discordbot, tts, server-settings
editor: markdown
dateCreated: 2026-04-14T00:00:00.000Z
---

# /server-settings
## 개요
/server-settings 는 서버 단위의 읽기 설정을 관리하는 그룹 명령어입니다.
서버 전용이며, 서버 관리 권한이 필요합니다.

## 대시보드 및 확인
명령어 | 설명 | 참고
-- | -- | --
/server-settings dashboard | 웹 대시보드를 엽니다. | 버튼으로 설정 화면에 이동할 수 있습니다.
/server-settings show | 현재 서버 설정을 표시합니다. | 인터랙티브한 설정 화면이 열립니다.

## 기본 음성 설정
명령어 | 설명 | 참고
-- | -- | --
/server-settings speaker | 서버 기본 화자를 설정합니다. | 인수를 생략하면 선택 UI가 열립니다.
/server-settings speed | 서버 기본 속도를 설정합니다. | 0.5부터 4.0, 생략 시 초기화
/server-settings pitch | 서버 기본 피치를 설정합니다. | BOT 설정 범위 사용, 생략 시 초기화
/server-settings intonation | 서버 기본 억양을 설정합니다. | 0.0부터 2.0, 생략 시 초기화
/server-settings volume | 서버 기본 볼륨을 설정합니다. | 0.1부터 5.0, 생략 시 초기화
/server-settings force-guild-args | 서버 기본 속도, 피치, 억양, 볼륨을 강제합니다. | 개인 설정보다 우선됩니다.
/server-settings force-guild-speaker | 서버 기본 화자를 강제합니다. | 개인 화자 설정보다 우선됩니다.

## 화자 제어
명령어 | 설명 | 참고
-- | -- | --
/server-settings disable-speaker add | 특정 화자를 비활성화합니다. | 엔진 기본 화자와 서버 기본 화자는 비활성화할 수 없습니다.
/server-settings disable-speaker remove | 비활성화한 화자를 다시 활성화합니다. | 화자명은 자동완성을 지원합니다.
/server-settings disable-speaker list | 비활성화된 화자 목록을 표시합니다. | 보기 전용입니다.

## 읽기 동작 설정
명령어 | 설명 | 참고
-- | -- | --
/server-settings read-username | 사용자명 읽기를 켜거나 끕니다. | true 는 켬, false 는 끔입니다.
/server-settings read-join-leave | 입장 및 퇴장 시 사용자명 읽기를 켜거나 끕니다. | true 는 켬, false 는 끔입니다.
/server-settings exvoice | ExVoice 사용을 켜거나 끕니다. | 서버 전체에 적용됩니다.
/server-settings prefix | 서버 전용 프리픽스를 설정합니다. | 커스텀 프리픽스 기능이 활성화된 환경에서만 사용 가능합니다.
/server-settings length-limit | 읽을 수 있는 최대 글자 수를 변경합니다. | 30자 초과이면서 플랜 상한 이내여야 합니다.
/server-settings read-emoji | 이모지 읽기를 켜거나 끕니다. | true 는 켬, false 는 끔입니다.
/server-settings read-sticker | 스티커 읽기를 켜거나 끕니다. | true 는 켬, false 는 끔입니다.

## ExVoice 및 대상 관리
명령어 | 설명 | 참고
-- | -- | --
/server-settings exclude-exvoice add | 읽지 않을 ExVoice 를 추가합니다. | 자동완성에서 선택할 수 있습니다.
/server-settings exclude-exvoice remove | 제외한 ExVoice 를 해제합니다. | 자동완성에서 선택할 수 있습니다.
/server-settings exclude-exvoice list | 제외 중인 ExVoice 목록을 표시합니다. | 보기 전용입니다.
/server-settings read-bot add | 읽기 대상 BOT을 추가합니다. | Basic 플랜 이상이 필요합니다.
/server-settings read-bot remove | 읽기 대상 BOT을 제거합니다. | BOT 사용자만 지정할 수 있습니다.
/server-settings read-bot toggle | BOT 메시지 읽기를 켜거나 끕니다. | Basic 플랜 이상이 필요합니다.
/server-settings exclude-user add | 특정 사용자를 읽기 대상에서 제외합니다. | 등록 가능한 수는 플랜에 따라 다릅니다.
/server-settings exclude-user remove | 사용자 제외를 해제합니다. | BOT은 여기서 대상이 아닙니다.
/server-settings exclude-user list | 제외 중인 사용자 목록을 표시합니다. | 보기 전용입니다.
/server-settings exclude-role add | 특정 역할을 가진 사용자를 읽기 대상에서 제외합니다. | 등록 가능한 수는 플랜에 따라 다릅니다.
/server-settings exclude-role remove | 역할 제외를 해제합니다. | @everyone 을 지정하면 모든 역할 제외가 해제됩니다.

## 자동 접속 및 유지보수
명령어 | 설명 | 참고
-- | -- | --
/server-settings autojoin add | 사용자가 특정 VC에 참가했을 때 BOT이 자동 접속하도록 설정합니다. | 텍스트 채널을 생략하면 VC 내 채팅을 사용합니다.
/server-settings autojoin remove | 자동 접속 설정을 제거합니다. | 텍스트 채널을 생략하면 해당 VC 설정 전체를 제거합니다.
/server-settings autojoin list | 저장된 자동 접속 설정을 표시합니다. | 특정 VC만 확인할 수 있습니다.
/server-settings sync | 현재 서버 설정을 다른 KuronekoServer 읽어주기 BOT과 동기화합니다. | 대상 설정은 덮어써집니다.
/server-settings reset | 서버 설정을 초기화합니다. | 확인 버튼이 표시됩니다.

## 사용 예시
```text
/server-settings speaker 화자:즌다몬
/server-settings force-guild-args 강제:true
/server-settings read-username 읽기:true
/server-settings autojoin add 음성 채널:#잡담VC 텍스트 채널:#tts
/server-settings exclude-user add 사용자:@example
/server-settings length-limit 글자수:120
```

## 플랜 관련 참고
- `read-bot add` 와 `read-bot toggle` 은 Basic 플랜 이상이 필요합니다.
- `length-limit` 의 상한과 `exclude-user add`, `exclude-role add` 의 등록 가능 수는 플랜에 따라 달라집니다.
- 자세한 내용은 [유료 플랜](payment.md)을 참고해 주세요.

## 관련 페이지
- [/subscription](subscription.md)
- [유료 플랜](payment.md)