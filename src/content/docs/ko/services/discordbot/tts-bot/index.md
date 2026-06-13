---
title: "읽어주기 BOT"
lastUpdated: 2026-04-14T00:00:00.000Z
---


# 읽어주기 BOT
## 소개
읽어주기 BOT은 텍스트 채널과 VC 내 채팅 내용을 음성 합성으로 읽어주는 봇입니다.
슬래시 명령어로 음성 채널 접속, 화자 변경, 읽기 파라미터 조정, 사전 등록, 서버 단위 설정을 관리할 수 있습니다.

일부 기능은 유료 플랜과 서버 관리 권한이 필요합니다. 자세한 내용은 [유료 플랜](/ko/services/discordbot/tts-bot/payment/)을 참고해 주세요.

## 명령어 및 가이드
### 기본 조작
명령어 | 설명 | 가이드
-- | -- | --
[/join](/ko/services/discordbot/tts-bot/basic-commands/) | 음성 채널에 참가합니다. | [접속 명령어](/ko/services/discordbot/tts-bot/basic-commands/)
[/disconnect](/ko/services/discordbot/tts-bot/basic-commands/) | 음성 채널에서 연결을 해제합니다. | [접속 명령어](/ko/services/discordbot/tts-bot/basic-commands/)
[/skip](/ko/services/discordbot/tts-bot/basic-commands/) | 현재 읽기를 건너뜁니다. | [접속 명령어](/ko/services/discordbot/tts-bot/basic-commands/)

### 개인 설정
명령어 | 설명 | 가이드
-- | -- | --
[/setvoice](/ko/services/discordbot/tts-bot/voice-settings/) | 내 화자를 변경합니다. | [음성 설정 명령어](/ko/services/discordbot/tts-bot/voice-settings/)
[/setspeed](/ko/services/discordbot/tts-bot/voice-settings/) | 내 읽기 속도를 변경합니다. | [음성 설정 명령어](/ko/services/discordbot/tts-bot/voice-settings/)
[/setpitch](/ko/services/discordbot/tts-bot/voice-settings/) | 내 읽기 피치를 변경합니다. | [음성 설정 명령어](/ko/services/discordbot/tts-bot/voice-settings/)
[/setintonation](/ko/services/discordbot/tts-bot/voice-settings/) | 내 억양을 변경합니다. | [음성 설정 명령어](/ko/services/discordbot/tts-bot/voice-settings/)
[/setvolume](/ko/services/discordbot/tts-bot/voice-settings/) | 내 읽기 볼륨을 변경합니다. | [음성 설정 명령어](/ko/services/discordbot/tts-bot/voice-settings/)
[/user-settings speed](/ko/services/discordbot/tts-bot/user-settings/) | 그룹 명령어 형식으로 개인 설정을 변경합니다. | [/user-settings](/ko/services/discordbot/tts-bot/user-settings/)
[/user-settings pitch](/ko/services/discordbot/tts-bot/user-settings/) | 그룹 명령어 형식으로 개인 설정을 변경합니다. | [/user-settings](/ko/services/discordbot/tts-bot/user-settings/)
[/user-settings intonation](/ko/services/discordbot/tts-bot/user-settings/) | 그룹 명령어 형식으로 개인 설정을 변경합니다. | [/user-settings](/ko/services/discordbot/tts-bot/user-settings/)
[/user-settings volume](/ko/services/discordbot/tts-bot/user-settings/) | 그룹 명령어 형식으로 개인 설정을 변경합니다. | [/user-settings](/ko/services/discordbot/tts-bot/user-settings/)
[/user-settings sync](/ko/services/discordbot/tts-bot/user-settings/) | 다른 KuronekoServer 계열 BOT과 개인 설정을 동기화합니다. | [/user-settings](/ko/services/discordbot/tts-bot/user-settings/)
[/user-settings reset](/ko/services/discordbot/tts-bot/user-settings/) | 개인 설정을 초기화합니다. | [/user-settings](/ko/services/discordbot/tts-bot/user-settings/)
[/user-settings show](/ko/services/discordbot/tts-bot/user-settings/) | 현재 개인 설정을 표시합니다. | [/user-settings](/ko/services/discordbot/tts-bot/user-settings/)

### 채널 및 사전
명령어 | 설명 | 가이드
-- | -- | --
[/channel connect-category](/ko/services/discordbot/tts-bot/channel/) | 현재 카테고리의 텍스트 채널을 한 번에 읽기 대상으로 추가합니다. | [/channel](/ko/services/discordbot/tts-bot/channel/)
[/channel disconnect](/ko/services/discordbot/tts-bot/channel/) | 현재 채널을 읽기 대상에서 제외합니다. | [/channel](/ko/services/discordbot/tts-bot/channel/)
[/channel disconnect-category](/ko/services/discordbot/tts-bot/channel/) | 현재 카테고리의 읽기 연결을 해제합니다. | [/channel](/ko/services/discordbot/tts-bot/channel/)
[/channel list](/ko/services/discordbot/tts-bot/channel/) | 현재 읽기 대상 채널 목록을 표시합니다. | [/channel](/ko/services/discordbot/tts-bot/channel/)
[/channel link add](/ko/services/discordbot/tts-bot/channel/) | BOT이 VC에 참가할 때 자동으로 읽을 텍스트 채널을 연결합니다. | [/channel](/ko/services/discordbot/tts-bot/channel/)
[/channel link remove](/ko/services/discordbot/tts-bot/channel/) | 채널 연결 설정을 해제합니다. | [/channel](/ko/services/discordbot/tts-bot/channel/)
[/channel link list](/ko/services/discordbot/tts-bot/channel/) | 등록된 채널 연결 설정을 확인합니다. | [/channel](/ko/services/discordbot/tts-bot/channel/)
[/dictionary help](/ko/services/discordbot/tts-bot/dictionary/) | 서버 사전 명령어 목록을 표시합니다. | [/dictionary](/ko/services/discordbot/tts-bot/dictionary/)
[/dictionary add](/ko/services/discordbot/tts-bot/dictionary/) | 서버 공용 사전에 단어를 등록합니다. | [/dictionary](/ko/services/discordbot/tts-bot/dictionary/)
[/dictionary remove](/ko/services/discordbot/tts-bot/dictionary/) | 서버 공용 사전에서 단어를 삭제합니다. | [/dictionary](/ko/services/discordbot/tts-bot/dictionary/)
[/dictionary export](/ko/services/discordbot/tts-bot/dictionary/) | 서버 공용 사전을 내보냅니다. | [/dictionary](/ko/services/discordbot/tts-bot/dictionary/)
[/dictionary import](/ko/services/discordbot/tts-bot/dictionary/) | 서버 공용 사전을 가져옵니다. | [/dictionary](/ko/services/discordbot/tts-bot/dictionary/)
[/dictionary list](/ko/services/discordbot/tts-bot/dictionary/) | 서버 공용 사전 목록을 표시합니다. | [/dictionary](/ko/services/discordbot/tts-bot/dictionary/)
[/dictionary search](/ko/services/discordbot/tts-bot/dictionary/) | 서버 공용 사전을 검색합니다. | [/dictionary](/ko/services/discordbot/tts-bot/dictionary/)
[/dictionary reset](/ko/services/discordbot/tts-bot/dictionary/) | 서버 공용 사전을 초기화합니다. | [/dictionary](/ko/services/discordbot/tts-bot/dictionary/)
[/dictionary sync](/ko/services/discordbot/tts-bot/dictionary/) | 다른 KuronekoServer 계열 BOT과 사전을 동기화합니다. | [/dictionary](/ko/services/discordbot/tts-bot/dictionary/)
[/user-dictionary help](/ko/services/discordbot/tts-bot/user-dictionary/) | 개인 사전 명령어 목록을 표시합니다. | [/user-dictionary](/ko/services/discordbot/tts-bot/user-dictionary/)
[/user-dictionary add](/ko/services/discordbot/tts-bot/user-dictionary/) | 개인 사전에 단어를 등록합니다. | [/user-dictionary](/ko/services/discordbot/tts-bot/user-dictionary/)
[/user-dictionary remove](/ko/services/discordbot/tts-bot/user-dictionary/) | 개인 사전에서 단어를 삭제합니다. | [/user-dictionary](/ko/services/discordbot/tts-bot/user-dictionary/)
[/user-dictionary export](/ko/services/discordbot/tts-bot/user-dictionary/) | 개인 사전을 내보냅니다. | [/user-dictionary](/ko/services/discordbot/tts-bot/user-dictionary/)
[/user-dictionary import](/ko/services/discordbot/tts-bot/user-dictionary/) | 개인 사전을 가져옵니다. | [/user-dictionary](/ko/services/discordbot/tts-bot/user-dictionary/)
[/user-dictionary list](/ko/services/discordbot/tts-bot/user-dictionary/) | 개인 사전 목록을 표시합니다. | [/user-dictionary](/ko/services/discordbot/tts-bot/user-dictionary/)
[/user-dictionary search](/ko/services/discordbot/tts-bot/user-dictionary/) | 개인 사전을 검색합니다. | [/user-dictionary](/ko/services/discordbot/tts-bot/user-dictionary/)
[/user-dictionary reset](/ko/services/discordbot/tts-bot/user-dictionary/) | 개인 사전을 초기화합니다. | [/user-dictionary](/ko/services/discordbot/tts-bot/user-dictionary/)

### 안내 및 유틸리티
명령어 | 설명 | 가이드
-- | -- | --
[/help](/ko/services/discordbot/tts-bot/utility/) | BOT 소개와 명령어 목록을 표시합니다. | [유틸리티 명령어](/ko/services/discordbot/tts-bot/utility/)
[/ping](/ko/services/discordbot/tts-bot/utility/) | BOT 응답 속도를 확인합니다. | [유틸리티 명령어](/ko/services/discordbot/tts-bot/utility/)
[/exvoice](/ko/services/discordbot/tts-bot/utility/) | 사용 가능한 ExVoice 목록 안내를 표시합니다. | [유틸리티 명령어](/ko/services/discordbot/tts-bot/utility/)
[/invite](/ko/services/discordbot/tts-bot/utility/) | 초대 링크를 표시합니다. | [유틸리티 명령어](/ko/services/discordbot/tts-bot/utility/)

### 서버 관리자용
명령어 | 설명 | 가이드
-- | -- | --
[/server-settings ...](/ko/services/discordbot/tts-bot/server-settings/) | 서버 기본 화자, 사전, 읽기 동작을 관리합니다. | [/server-settings](/ko/services/discordbot/tts-bot/server-settings/)
[/subscription ...](/ko/services/discordbot/tts-bot/subscription/) | 유료 플랜 코드 등록과 구독 상태 확인을 관리합니다. | [/subscription](/ko/services/discordbot/tts-bot/subscription/)

## 참고
내부 운영용 `/admin` 과 개발용 `/debug` 는 일반 공개용 가이드에서 제외했습니다.
