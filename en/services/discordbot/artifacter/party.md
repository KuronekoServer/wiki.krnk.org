---
title: /party
description: 
published: true
date: 2025-03-13T07:29:17.279Z
tags: discordbot, genshin, artifacter
editor: markdown
dateCreated: 2025-03-13T06:59:09.871Z
---

# /party
## Overview
Generate a Genshin party build card.

## Usage
```
/party <option>
```

Option | Description | Required
--- | --- | --
uid / user | Show another user's data. | No
score | Change score calculation method. | No

score option values include:
- ATTACK-based
- HP-based
- DEFENCE-based
- ENERGY RECHARGE-based
- ELEMENTAL MASTERY-based

## Flow
```mermaid
graph LR
    A{/party}
    A -->|If uid/user specified| B[Show specified user's data]
    A -->|If not specified| C{Show your data}
    C -->|If uid not registered| D[Show UID registration form]
    C -->|If uid registered| E[Show data]
```

## Preview
![image](https://artifacter.krnk.org/img/image2.webp "Sample")
