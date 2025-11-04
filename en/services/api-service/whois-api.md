---
title: Whois API
description: 
published: true
date: 2025-03-13T08:00:48.388Z
tags: api, whois
editor: markdown
dateCreated: 2025-03-13T07:41:33.836Z
---

# Whois API
## Overview
This API retrieves Whois information for a domain.

### Endpoints
- **GET /api/whois**
  - Returns raw Whois text for the specified domain. Parameter: `domain`.

- **GET /api/whois/json**
  - Returns parsed Whois information in JSON format. Parameter: `domain`.

Example:
```
https://whois-api.krnk.org/api/whois?domain=google.com
```

### Error Responses
- 500 Internal Server Error: An error occurred while fetching Whois data.
- 400 Bad Request: The `domain` parameter was not specified.
- 403 Forbidden: Attempt to retrieve restricted TLD Whois (e.g. .edu, .mil)

> Note: Some TLDs are restricted and may not return data. The JSON endpoint currently works reliably for .com/.net, but may fail for .jp or .int — this is being improved.
{.is-warning}

> If you make more than 100 requests in 10 seconds, you'll receive `429 Too Many Requests`.
{.is-danger}
