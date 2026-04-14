---
title: /channel
description: 
published: true
date: 2026-04-14T00:00:00.000Z
tags: discordbot, tts, channel
editor: markdown
dateCreated: 2026-04-14T00:00:00.000Z
---

# /channel
## 개요
/channel 은 읽기 대상 텍스트 채널, 카테고리, 그리고 음성 채널별 자동 연결 설정을 관리하는 그룹 명령어입니다.

## 일반 사용자용 하위 명령어
명령어 | 설명 | 참고
-- | -- | --
/channel connect-category | 현재 카테고리의 텍스트 채널을 한 번에 읽기 대상으로 추가합니다. | 현재 채널이 카테고리에 속해 있어야 하며, 실행자는 VC에 참가 중이어야 합니다.
/channel disconnect | 현재 채널을 읽기 대상에서 제외합니다. | BOT 접속 중에만 사용할 수 있습니다.
/channel disconnect-category | 현재 카테고리의 읽기 대상을 한 번에 해제합니다. | 현재 채널이 카테고리에 속해 있어야 합니다.
/channel list | 현재 읽기 대상 채널 목록을 표시합니다. | BOT 접속 중에만 사용할 수 있습니다.

## /channel connect-category
현재 카테고리에 있는 텍스트 채널을 모두 읽기 대상으로 추가합니다.

```text
/channel connect-category
```

참고:
- 실행자는 먼저 VC에 접속해 있어야 합니다.
- BOT이 아직 접속하지 않았다면, 먼저 실행자의 현재 VC에 참가합니다.

## /channel disconnect
현재 채널을 읽기 대상에서 제외합니다.

```text
/channel disconnect
```

## /channel disconnect-category
현재 카테고리에 등록된 읽기 대상을 모두 해제합니다.

```text
/channel disconnect-category
```

## /channel list
현재 읽기에 사용 중인 채널 목록을 표시합니다.

```text
/channel list
```

## 관리자용 하위 명령어: /channel link
명령어 | 설명 | 참고
-- | -- | --
/channel link add | BOT이 VC에 참가할 때 자동으로 읽을 텍스트 채널을 등록합니다. | 서버 관리 권한이 필요합니다.
/channel link remove | 기존 채널 연결 설정을 제거합니다. | 텍스트 채널을 생략하면 해당 VC의 연결을 모두 제거합니다.
/channel link list | 저장된 채널 연결 설정을 표시합니다. | 특정 VC만 확인할 수 있습니다.

### /channel link add
```text
/channel link add 음성 채널:#잡담VC 텍스트 채널:#tts
```

### /channel link remove
```text
/channel link remove 음성 채널:#잡담VC
/channel link remove 음성 채널:#잡담VC 텍스트 채널:#tts
```

### /channel link list
```text
/channel link list
/channel link list 음성 채널:#잡담VC
```

## 관련 페이지
- [접속 명령어](basic-commands.md)
- [/server-settings](server-settings.md)