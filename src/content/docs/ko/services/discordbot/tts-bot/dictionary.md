---
title: "/dictionary"
lastUpdated: 2026-04-14T00:00:00.000Z
---


# /dictionary
## 개요
/dictionary 는 서버 전체에서 공유되는 사전을 관리하는 명령어입니다.
특정 단어를 원하는 읽기로 바꾸고 싶을 때 사용합니다.

## 하위 명령어
명령어 | 설명 | 참고
-- | -- | --
/dictionary help | 사전 명령어 도움말을 표시합니다. | 사용 가능한 사전 작업을 확인할 수 있습니다.
/dictionary add | 사전에 단어를 등록합니다. | 정규 표현식은 상위 플랜이 필요합니다.
/dictionary remove | 사전에서 단어를 삭제합니다. | 단어 이름은 자동완성을 지원합니다.
/dictionary export | 사전을 내보냅니다. | csv, json, colon 형식을 지원합니다.
/dictionary import | 사전을 가져옵니다. | 1MB 제한. 내보낸 JSON 재가져오기를 권장합니다.
/dictionary list | 사전 목록을 표시합니다. | 페이지 기능을 사용합니다.
/dictionary search | 사전을 검색합니다. | 부분 일치 검색입니다.
/dictionary reset | 사전을 초기화합니다. | 확인 버튼이 표시됩니다.
/dictionary sync | 다른 KuronekoServer 읽어주기 BOT과 사전을 동기화합니다. | 대상 사전을 덮어씁니다.

## 사용 예시
```text
/dictionary add 단어:krnk 읽기:쿠로네코 정규표현식:false
/dictionary remove 단어:krnk
/dictionary export format:json
/dictionary search 검색어:쿠로네코
```

## /dictionary add
단어와 읽기를 등록합니다.

```text
/dictionary add 단어:hello 읽기:헬로 정규표현식:false
```

참고:
- 등록 가능한 개수와 단어, 읽기 길이 제한은 플랜에 따라 달라집니다.
- 정규 표현식 등록은 Advance 플랜 이상이 필요합니다.
- 같은 단어를 다시 등록하면 기존 항목을 덮어씁니다.

## /dictionary remove
등록된 항목을 삭제합니다.

```text
/dictionary remove 단어:hello
```

## /dictionary export
사전을 파일로 내보냅니다.

```text
/dictionary export format:csv
/dictionary export format:json
/dictionary export format:colon
```

## /dictionary import
사전 파일을 가져옵니다.

```text
/dictionary import file:dictionary.json
```

참고:
- 1MB를 초과하는 파일은 가져올 수 없습니다.
- `/dictionary export format:json` 으로 내보낸 JSON을 다시 가져오는 방식을 권장합니다.

## /dictionary list
등록된 사전 항목을 표시합니다.

```text
/dictionary list
```

## /dictionary search
등록된 사전을 검색합니다.

```text
/dictionary search 검색어:hello
```

## /dictionary reset
서버 사전을 초기화합니다.

```text
/dictionary reset
```

## /dictionary sync
현재 서버 사전을 다른 KuronekoServer 읽어주기 BOT과 동기화합니다.

```text
/dictionary sync
```

참고:
- 동기화 대상의 사전은 덮어써집니다.
- 실행 전에 확인 버튼이 표시됩니다.

## 관련 페이지
- [/user-dictionary](/ko/services/discordbot/tts-bot/user-dictionary/)
- [유료 플랜](/ko/services/discordbot/tts-bot/payment/)
