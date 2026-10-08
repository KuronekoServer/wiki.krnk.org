---
title: "Hiragana Conversion API"
lastUpdated: 2025-03-13T08:01:43.429Z
---


# Hiragana Conversion API
## Overview
This API converts romaji, Korean, and Chinese to hiragana or katakana.
Send a GET request to convert romanized text or kanji to hiragana.

### Endpoint
```
https://eng-jpn-api.krnk.org/query?text=TEXT
```

Example:
```
https://eng-jpn-api.krnk.org/query?text=안녕하세요私はnihonngoを喋ります我会尽力而为
```

Result example:
```
あんにょんはせよすはにほんごをでぃえりますうぉふいじんりえるうぇい
```

Service page: https://eng-jpn-api.krnk.org

:::danger
If you make 50 or more requests per second, you will receive `429 Too Many Requests`.
If you would like the API rate limit relaxed, please [contact us](https://discord.krnk.org).
:::
