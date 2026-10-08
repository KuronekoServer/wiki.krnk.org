---
title: "원신 API"
lastUpdated: 2025-03-13T08:02:18.820Z
---

# 원신 API
## 개요
이 API는 Enka.Network의 API 정보를 재구성한 데이터를 반환합니다.
GET 요청을 보내면 원신 사용자의 캐릭터 정보를 JSON 형식으로 반환합니다.

## API 사양
```
https://genshin-api.krnk.org/api/genshindata/?uid=UID&scoretype=SCORE&charaName=CHARACTER
```

| 값 | 설명 |
|---|---|
| UID | 원신 UID |
| ATTACK | 공격력 점수 |
| HP | 체력 점수 |
| CHARGE | 원소 충전 점수 |
| ELEMENT | 원소 마스터리 점수 |
| DEFENCE | 방어력 점수 |
| CHARACTER | 일본어 원신 캐릭터 이름. 예: 旅人 (여행자) |

### 요청 예시
```
https://genshin-api.krnk.org/api/genshindata/?uid=830322314&scoretype=ATTACK&charaName=ディオナ
```

### 응답 예시
아래 일본어 키와 값은 API가 반환하는 내용입니다.
```json
{"uid":830322314,"Character":{"Name":"ディオナ","Const":0,"Level":50,"Love":1,"Status":{"HP":8999,"攻撃力":296,"防御力":390,"元素熟知":97,"会心率":5,"会心ダメージ":50,"元素チャージ効率":105.8,"氷元素ダメージ":6},"Talent":{"通常":1,"スキル":1,"爆発":1},"Base":{"HP":5074,"攻撃力":222,"防御力":318}},"Weapon":{"name":"絶弦","Level":20,"totu":1,"rarelity":4,"BaseATK":109,"Sub":{"name":"元素熟知","value":64}},"Score":{"State":"攻撃","total":0,"flower":0,"wing":0,"clock":0,"cup":0,"crown":0},"Artifacts":{"flower":{"type":"冒険者","Level":5,"rarelity":3,"main":{"option":"HP","value":1040},"sub":[{"option":"元素チャージ効率パーセンテージ","value":3.1},{"option":"元素熟知","value":10}]},"wing":{"type":"冒険者","Level":5,"rarelity":3,"main":{"option":"攻撃力","value":68},"sub":[{"option":"元素チャージ効率パーセンテージ","value":2.7},{"option":"HP","value":115}]},"clock":{"type":"冒険者","Level":5,"rarelity":3,"main":{"option":"防御パーセンテージ","value":16},"sub":[{"option":"元素熟知","value":14},{"option":"HP","value":143}]},"cup":{"type":"医者","Level":9,"rarelity":3,"main":{"option":"HPパーセンテージ","value":19},"sub":[{"option":"HP","value":115},{"option":"防御力","value":11},{"option":"攻撃力","value":7}]},"crown":{"type":"冒険者","Level":4,"rarelity":3,"main":{"option":"HPパーセンテージ","value":11},"sub":[{"option":"元素熟知","value":10},{"option":"防御力","value":10}]}},"元素":"氷"}
```

서비스 페이지: https://genshin-api.krnk.org

:::danger
1초에 50회 이상 요청하면 `429 Too Many Requests`가 반환됩니다.
API 요청 제한 완화를 원하시면 [문의](https://discord.krnk.org)해 주세요.
:::
