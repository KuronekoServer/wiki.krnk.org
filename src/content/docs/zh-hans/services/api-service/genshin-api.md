---
title: "原神 API"
lastUpdated: 2025-03-13T08:02:18.820Z
---



# 原神 API
## 概述
此 API 返回重新组织后的 Enka.Network API 数据。

通过 GET 请求访问 API，可获得 JSON 格式的原神玩家角色信息。

API 规范
```
https://genshin-api.krnk.org/api/genshindata/?uid=UID&scoretype=スコア&charaName=キャラクター名
```
参数值 | 概述 |
-- | -- |
UID | 原神 UID |
ATTACK | 攻击力
HP | 生命值
CHARGE | 元素充能
ELEMENT | 元素精通
DEFENCE | 防御力评分
CHARACTER | 原神角色的日语名称（例如：旅人）

请求示例
```
https://genshin-api.krnk.org/api/genshindata/?uid=830322314&scoretype=ATTACK&charaName=ディオナ
```
结果示例
```
{"uid":830322314,"Character":{"Name":"ディオナ","Const":0,"Level":50,"Love":1,"Status":{"HP":8999,"攻撃力":296,"防御力":390,"元素熟知":97,"会心率":5,"会心ダメージ":50,"元素チャージ効率":105.8,"氷元素ダメージ":6},"Talent":{"通常":1,"スキル":1,"爆発":1},"Base":{"HP":5074,"攻撃力":222,"防御力":318}},"Weapon":{"name":"絶弦","Level":20,"totu":1,"rarelity":4,"BaseATK":109,"Sub":{"name":"元素熟知","value":64}},"Score":{"State":"攻撃","total":0,"flower":0,"wing":0,"clock":0,"cup":0,"crown":0},"Artifacts":{"flower":{"type":"冒険者","Level":5,"rarelity":3,"main":{"option":"HP","value":1040},"sub":[{"option":"元素チャージ効率パーセンテージ","value":3.1},{"option":"元素熟知","value":10}]},"wing":{"type":"冒険者","Level":5,"rarelity":3,"main":{"option":"攻撃力","value":68},"sub":[{"option":"元素チャージ効率パーセンテージ","value":2.7},{"option":"HP","value":115}]},"clock":{"type":"冒険者","Level":5,"rarelity":3,"main":{"option":"防御パーセンテージ","value":16},"sub":[{"option":"元素熟知","value":14},{"option":"HP","value":143}]},"cup":{"type":"医者","Level":9,"rarelity":3,"main":{"option":"HPパーセンテージ","value":19},"sub":[{"option":"HP","value":115},{"option":"防御力","value":11},{"option":"攻撃力","value":7}]},"crown":{"type":"冒険者","Level":4,"rarelity":3,"main":{"option":"HPパーセンテージ","value":11},"sub":[{"option":"元素熟知","value":10},{"option":"防御力","value":10}]}},"元素":"氷"}
```

服务页面: https://genshin-api.krnk.org


:::danger
每秒发送 50 次或更多请求时，会返回「429 Too many Requests」。
如需提高 API 请求速率限制，请[联系我们](https://discord.krnk.org)。
:::
