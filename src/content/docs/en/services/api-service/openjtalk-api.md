---
title: "OpenJTalk API"
lastUpdated: 2025-03-13T07:39:31.798Z
---


# OpenJTalk API
## Overview
This API provides text-to-speech functionality using OpenJTalk.

### Endpoints
Speakers (GET):
```
https://openjtalk-api.krnk.org/speakers
```

Synthesize (POST):
```
https://openjtalk-api.krnk.org/synthesize?text=TEXT&type=SPEAKER&speed=0.7&pitch=0.7
```

Service page: https://openjtalk-api.krnk.org

:::danger
If you make 50 or more requests per second, you will receive `429 Too Many Requests`.
If you would like the API rate limit relaxed, please [contact us](https://discord.krnk.org).
:::
