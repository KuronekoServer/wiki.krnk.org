---
title: "/user-dictionary"
lastUpdated: 2026-04-14T00:00:00.000Z
---


# /user-dictionary
## 개요
/user-dictionary 는 개인 전용 사전을 관리하는 명령어입니다.
공용 서버 사전과 달리, 내 읽기 동작에만 반영됩니다.

## 하위 명령어
명령어 | 설명 | 참고
-- | -- | --
/user-dictionary help | 개인 사전 명령어를 표시합니다. | 응답은 본인에게만 표시됩니다.
/user-dictionary add | 개인 사전에 항목을 등록합니다. | 최대 100개까지 등록할 수 있습니다.
/user-dictionary remove | 개인 사전에서 항목을 삭제합니다. | 단어 이름은 자동완성을 지원합니다.
/user-dictionary export | 개인 사전을 내보냅니다. | csv, json, colon 형식을 지원합니다.
/user-dictionary import | 개인 사전을 가져옵니다. | 1MB 제한. 내보낸 JSON 재가져오기를 권장합니다.
/user-dictionary list | 개인 사전 목록을 표시합니다. | 응답은 본인에게만 표시됩니다.
/user-dictionary search | 개인 사전을 검색합니다. | 응답은 본인에게만 표시됩니다.
/user-dictionary reset | 개인 사전을 초기화합니다. | 확인 버튼이 표시됩니다.

## 사용 예시
```text
/user-dictionary add 단어:w 읽기:ㅋㅋ 정규표현식:false
/user-dictionary export format:json
/user-dictionary search 검색어:ㅋㅋ
```

## /user-dictionary add
단어와 읽기를 개인 사전에 등록합니다.

```text
/user-dictionary add 단어:w 읽기:ㅋㅋ 정규표현식:false
```

참고:
- 최대 100개까지 등록할 수 있습니다.
- 같은 단어를 다시 등록하면 기존 항목을 덮어씁니다.
- 정규 표현식도 사용할 수 있습니다.

## /user-dictionary remove
개인 사전에서 항목을 삭제합니다.

```text
/user-dictionary remove 단어:w
```

## /user-dictionary export
개인 사전을 파일로 내보냅니다.

```text
/user-dictionary export format:csv
/user-dictionary export format:json
```

## /user-dictionary import
개인 사전 파일을 가져옵니다.

```text
/user-dictionary import file:dictionary.json
```

참고:
- 1MB를 초과하는 파일은 가져올 수 없습니다.
- `/user-dictionary export format:json` 으로 내보낸 JSON을 다시 가져오는 방식을 권장합니다.

## /user-dictionary list
등록된 개인 사전 항목을 표시합니다.

```text
/user-dictionary list
```

## /user-dictionary search
개인 사전을 검색합니다.

```text
/user-dictionary search 검색어:ㅋㅋ
```

## /user-dictionary reset
개인 사전을 초기화합니다.

```text
/user-dictionary reset
```

참고:
- 응답은 대부분 본인에게만 표시됩니다.
- 실행 전에 확인 버튼이 표시됩니다.

## 관련 페이지
- [/dictionary](/ko/services/discordbot/tts-bot/dictionary/)
