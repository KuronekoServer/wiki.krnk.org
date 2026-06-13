---
title: "Genshin Build Card API"
lastUpdated: 2025-03-13T08:02:42.108Z
---


# Genshin Build Card API
## Overview
This API uses Enka.Network data and Artifacter designs to generate build card images.

:::caution
This service is in beta and availability is not guaranteed.
:::

### API: Character list
```
https://genshin-image-gen-api.krnk.org/api/genshindata/?uid=UID
```

### Build card generation
```
https://genshin-image-gen-api.krnk.org/api/generation/?uid=UID&scoretype=SCORE&charaName=CHARACTER
```

Service page: https://genshin-api.krnk.org

:::danger
If you make more than 100 requests in 10 seconds, you'll receive 429 Too Many Requests.
:::
