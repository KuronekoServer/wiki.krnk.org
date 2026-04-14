---
title: 읽어주기 BOT
description: 
published: true
date: 2026-04-14T00:00:00.000Z
tags: discordbot, tts, 읽어주기봇, voicevox, voiceroid, a.i.voice
editor: markdown
dateCreated: 2026-04-14T00:00:00.000Z
---

# 읽어주기 BOT
## 소개
읽어주기 BOT은 텍스트 채널과 VC 내 채팅 내용을 음성 합성으로 읽어주는 봇입니다.
슬래시 명령어로 음성 채널 접속, 화자 변경, 읽기 파라미터 조정, 사전 등록, 서버 단위 설정을 관리할 수 있습니다.

일부 기능은 유료 플랜과 서버 관리 권한이 필요합니다. 자세한 내용은 [유료 플랜](tts-bot/payment.md)을 참고해 주세요.

## 명령어 및 가이드
### 기본 조작
명령어 | 설명 | 가이드
-- | -- | --
[/join](tts-bot/basic-commands.md) | 음성 채널에 참가합니다. | [접속 명령어](tts-bot/basic-commands.md)
[/disconnect](tts-bot/basic-commands.md) | 음성 채널에서 연결을 해제합니다. | [접속 명령어](tts-bot/basic-commands.md)
[/skip](tts-bot/basic-commands.md) | 현재 읽기를 건너뜁니다. | [접속 명령어](tts-bot/basic-commands.md)

### 개인 설정
명령어 | 설명 | 가이드
-- | -- | --
[/setvoice](tts-bot/voice-settings.md) | 내 화자를 변경합니다. | [음성 설정 명령어](tts-bot/voice-settings.md)
[/setspeed](tts-bot/voice-settings.md) | 내 읽기 속도를 변경합니다. | [음성 설정 명령어](tts-bot/voice-settings.md)
[/setpitch](tts-bot/voice-settings.md) | 내 읽기 피치를 변경합니다. | [음성 설정 명령어](tts-bot/voice-settings.md)
[/setintonation](tts-bot/voice-settings.md) | 내 억양을 변경합니다. | [음성 설정 명령어](tts-bot/voice-settings.md)
[/setvolume](tts-bot/voice-settings.md) | 내 읽기 볼륨을 변경합니다. | [음성 설정 명령어](tts-bot/voice-settings.md)
[/user-settings speed](tts-bot/user-settings.md) | 그룹 명령어 형식으로 개인 설정을 변경합니다. | [/user-settings](tts-bot/user-settings.md)
[/user-settings pitch](tts-bot/user-settings.md) | 그룹 명령어 형식으로 개인 설정을 변경합니다. | [/user-settings](tts-bot/user-settings.md)
[/user-settings intonation](tts-bot/user-settings.md) | 그룹 명령어 형식으로 개인 설정을 변경합니다. | [/user-settings](tts-bot/user-settings.md)
[/user-settings volume](tts-bot/user-settings.md) | 그룹 명령어 형식으로 개인 설정을 변경합니다. | [/user-settings](tts-bot/user-settings.md)
[/user-settings sync](tts-bot/user-settings.md) | 다른 KuronekoServer 계열 BOT과 개인 설정을 동기화합니다. | [/user-settings](tts-bot/user-settings.md)
[/user-settings reset](tts-bot/user-settings.md) | 개인 설정을 초기화합니다. | [/user-settings](tts-bot/user-settings.md)
[/user-settings show](tts-bot/user-settings.md) | 현재 개인 설정을 표시합니다. | [/user-settings](tts-bot/user-settings.md)

### 채널 및 사전
명령어 | 설명 | 가이드
-- | -- | --
[/channel connect-category](tts-bot/channel.md) | 현재 카테고리의 텍스트 채널을 한 번에 읽기 대상으로 추가합니다. | [/channel](tts-bot/channel.md)
[/channel disconnect](tts-bot/channel.md) | 현재 채널을 읽기 대상에서 제외합니다. | [/channel](tts-bot/channel.md)
[/channel disconnect-category](tts-bot/channel.md) | 현재 카테고리의 읽기 연결을 해제합니다. | [/channel](tts-bot/channel.md)
[/channel list](tts-bot/channel.md) | 현재 읽기 대상 채널 목록을 표시합니다. | [/channel](tts-bot/channel.md)
[/channel link add](tts-bot/channel.md) | BOT이 VC에 참가할 때 자동으로 읽을 텍스트 채널을 연결합니다. | [/channel](tts-bot/channel.md)
[/channel link remove](tts-bot/channel.md) | 채널 연결 설정을 해제합니다. | [/channel](tts-bot/channel.md)
[/channel link list](tts-bot/channel.md) | 등록된 채널 연결 설정을 확인합니다. | [/channel](tts-bot/channel.md)
[/dictionary help](tts-bot/dictionary.md) | 서버 사전 명령어 목록을 표시합니다. | [/dictionary](tts-bot/dictionary.md)
[/dictionary add](tts-bot/dictionary.md) | 서버 공용 사전에 단어를 등록합니다. | [/dictionary](tts-bot/dictionary.md)
[/dictionary remove](tts-bot/dictionary.md) | 서버 공용 사전에서 단어를 삭제합니다. | [/dictionary](tts-bot/dictionary.md)
[/dictionary export](tts-bot/dictionary.md) | 서버 공용 사전을 내보냅니다. | [/dictionary](tts-bot/dictionary.md)
[/dictionary import](tts-bot/dictionary.md) | 서버 공용 사전을 가져옵니다. | [/dictionary](tts-bot/dictionary.md)
[/dictionary list](tts-bot/dictionary.md) | 서버 공용 사전 목록을 표시합니다. | [/dictionary](tts-bot/dictionary.md)
[/dictionary search](tts-bot/dictionary.md) | 서버 공용 사전을 검색합니다. | [/dictionary](tts-bot/dictionary.md)
[/dictionary reset](tts-bot/dictionary.md) | 서버 공용 사전을 초기화합니다. | [/dictionary](tts-bot/dictionary.md)
[/dictionary sync](tts-bot/dictionary.md) | 다른 KuronekoServer 계열 BOT과 사전을 동기화합니다. | [/dictionary](tts-bot/dictionary.md)
[/user-dictionary help](tts-bot/user-dictionary.md) | 개인 사전 명령어 목록을 표시합니다. | [/user-dictionary](tts-bot/user-dictionary.md)
[/user-dictionary add](tts-bot/user-dictionary.md) | 개인 사전에 단어를 등록합니다. | [/user-dictionary](tts-bot/user-dictionary.md)
[/user-dictionary remove](tts-bot/user-dictionary.md) | 개인 사전에서 단어를 삭제합니다. | [/user-dictionary](tts-bot/user-dictionary.md)
[/user-dictionary export](tts-bot/user-dictionary.md) | 개인 사전을 내보냅니다. | [/user-dictionary](tts-bot/user-dictionary.md)
[/user-dictionary import](tts-bot/user-dictionary.md) | 개인 사전을 가져옵니다. | [/user-dictionary](tts-bot/user-dictionary.md)
[/user-dictionary list](tts-bot/user-dictionary.md) | 개인 사전 목록을 표시합니다. | [/user-dictionary](tts-bot/user-dictionary.md)
[/user-dictionary search](tts-bot/user-dictionary.md) | 개인 사전을 검색합니다. | [/user-dictionary](tts-bot/user-dictionary.md)
[/user-dictionary reset](tts-bot/user-dictionary.md) | 개인 사전을 초기화합니다. | [/user-dictionary](tts-bot/user-dictionary.md)

### 안내 및 유틸리티
명령어 | 설명 | 가이드
-- | -- | --
[/help](tts-bot/utility.md) | BOT 소개와 명령어 목록을 표시합니다. | [유틸리티 명령어](tts-bot/utility.md)
[/ping](tts-bot/utility.md) | BOT 응답 속도를 확인합니다. | [유틸리티 명령어](tts-bot/utility.md)
[/exvoice](tts-bot/utility.md) | 사용 가능한 ExVoice 목록 안내를 표시합니다. | [유틸리티 명령어](tts-bot/utility.md)
[/invite](tts-bot/utility.md) | 초대 링크를 표시합니다. | [유틸리티 명령어](tts-bot/utility.md)

### 서버 관리자용
명령어 | 설명 | 가이드
-- | -- | --
[/server-settings ...](tts-bot/server-settings.md) | 서버 기본 화자, 사전, 읽기 동작을 관리합니다. | [/server-settings](tts-bot/server-settings.md)
[/subscription ...](tts-bot/subscription.md) | 유료 플랜 코드 등록과 구독 상태 확인을 관리합니다. | [/subscription](tts-bot/subscription.md)

## 참고
내부 운영용 `/admin` 과 개발용 `/debug` 는 일반 공개용 가이드에서 제외했습니다.