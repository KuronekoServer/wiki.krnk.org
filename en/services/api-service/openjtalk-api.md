---
title: OpenJTalk API
description: 
published: true
date: 2025-03-13T07:39:31.798Z
tags: api, openjtalk
editor: markdown
dateCreated: 2025-03-13T07:35:28.258Z
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

> If you make more than 100 requests in 10 seconds, you'll receive 429 Too Many Requests.
{.is-danger}
