---
title: "Whois API"
lastUpdated: 2025-03-13T08:00:48.388Z
---

# Whois API
## Overview
This API retrieves Whois information for a domain.

### Error Responses
- **500 Internal Server Error**: An error occurred while fetching Whois data.
- **400 Bad Request**: The `domain` parameter was not specified.
- **403 Forbidden**: Whois information was requested for a restricted TLD: `.edu` or `.mil`.

### API Specification
- **GET /api/whois**
  - Retrieve Whois information for the specified domain.
  - Parameter: `domain` (the domain name to look up).
  - Response: Whois information in text format.

Example:
```
https://whois-api.krnk.org/api/whois?domain=google.com
```

- **GET /api/whois/json**
  - Retrieve Whois information for the specified domain in JSON format.
  - Parameter: `domain` (the domain name to look up).
  - Response: Parsed Whois information in JSON format.

Example:
```
https://whois-api.krnk.org/api/whois/json?domain=google.com
```

:::caution
Some TLDs have restrictions on Whois lookups.
The JSON endpoint has been verified to work for `.com` and `.net`, but not for `.jp` and `.int`.
We plan to address this issue gradually.
:::

:::danger
If you make 50 or more requests per second, you will receive `429 Too Many Requests`.
If you would like the API rate limit relaxed, please [contact us](https://discord.krnk.org).
:::
