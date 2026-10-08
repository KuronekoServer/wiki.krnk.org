---
title: "/build"
lastUpdated: 2025-03-13T07:29:47.266Z
---


# /build
## 概述
生成《原神》的配装卡。

## 使用方法
```
/build <option>
```

选项名称 | 概述 | 是否必填
--- | --- | --
uid / user | 显示其他用户的数据。 | 否
score | 更改评分计算公式。 | 否

score 选项的值
score 选项可输入以下任一项。
- 攻击力换算
- HP 换算
- 防御力换算
- 元素充能效率换算
- 元素精通换算

## 工作流程
```mermaid
graph LR
    A{/build}
    A -->|指定 uid / user 时| B[显示指定用户的数据]
    A -->|未指定时| C{显示你的数据}
    C -->|未登记 uid 时| D[显示 uid 登记表单]
    C -->|已登记 uid 时| E[显示数据]
```

## 生成图像预览
![image](https://artifacter.krnk.org/img/image1.webp "普通示例")
