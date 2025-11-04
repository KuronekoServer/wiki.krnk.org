---
title: Hiragana Conversion API
description: 
published: true
date: 2025-03-13T08:01:43.429Z
tags: api, hiragana
editor: markdown
dateCreated: 2025-03-13T07:34:07.860Z
---

# Hiragana Conversion API
## Overview
This API converts romaji to hiragana or katakana. It can also convert Korean Hangul into a phonetic rendering.

### Endpoint
```
https://eng-jpn-api.krnk.org/query?text=TEXT
```

Example:
```
https://eng-jpn-api.krnk.org/query?text=안녕하세요私はnihonngoを喋ります
```

Result example:
```
あっにぇおんぐはせよわたしはにほんごをしゃべります
```

Service page: https://eng-jpn-api.krnk.org

> If you make more than 100 requests in 10 seconds, you'll receive 429 Too Many Requests.
{.is-danger}
