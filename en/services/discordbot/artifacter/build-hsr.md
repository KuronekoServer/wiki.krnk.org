---
title: /build-hsr
description: 
published: true
date: 2025-03-13T07:29:30.110Z
tags: discordbot, honkai star rail, artifacter
editor: markdown
dateCreated: 2025-03-13T06:53:18.225Z
---

# /build-hsr
## Overview
Generate a Honkai: Star Rail build card.

## Usage
```
/build-hsr <option>
```

Option | Description | Required
--- | --- | --
uid / user | Show another user's data. | No

## Flow
```mermaid
graph LR
    A{/build}
    A -->|If uid/user specified| B[Show specified user's data]
    A -->|If not specified| C{Show your data}
    C -->|If uid not registered| D[Show UID registration form]
    C -->|If uid registered| E[Show data]
```

## Preview
![image](https://artifacter.krnk.org/img/image3.webp "HSR Sample")
