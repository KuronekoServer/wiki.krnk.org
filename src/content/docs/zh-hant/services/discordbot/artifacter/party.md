---
title: "/party"
lastUpdated: 2025-03-13T07:29:17.279Z
---


# /party
## 概述
生成《原神》的隊伍配裝卡。

## 使用方法
```
/party <option>
```

選項名稱 | 概述 | 必填
--- | --- | --
uid / user | 顯示其他使用者的資料。 | 否
score | 更改評分計算公式。 | 否

score 選項的值
score 選項可指定以下任一項。
- 攻擊力換算
- HP 換算
- 防禦力換算
- 元素充能效率換算
- 元素精通換算


## 工作流程
```mermaid
graph LR
    A{/party}
    A -->|指定 uid / user 時| B[顯示指定使用者的資料]
    A -->|未指定時| C{顯示你的資料}
    C -->|未登錄 uid 時| D[顯示 uid 登錄表單]
    C -->|已登錄 uid 時| E[顯示資料]
```

## 生成圖片預覽
![image](https://artifacter.krnk.org/img/image2.webp "普通示例")
