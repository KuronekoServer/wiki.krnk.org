---
title: /subscription
description: 
published: true
date: 2026-04-14T00:00:00.000Z
tags: discordbot, tts, subscription
editor: markdown
dateCreated: 2026-04-14T00:00:00.000Z
---

# /subscription
## Overview
/subscription is used to check the current paid plan status and to register or remove subscription codes.
It is a server-only command group for server administrators.

## Subcommands
Command | Description | Notes
-- | -- | --
/subscription register | Register a subscription code. | Opens a code input form.
/subscription unregister | Remove the currently applied code. | Can be used by the registrant or a server manager.
/subscription info | Show the current plan and limits. | If no valid plan is active, it also shows the subscription page.

## /subscription register
Register a subscription code for the server.

```text
/subscription register
```

Notes:
- Running this command opens a code input form.
- You cannot register a new code on a server where another code is already active.

## /subscription unregister
Remove the currently applied subscription code.

```text
/subscription unregister
```

Notes:
- This can be used by the user who registered the code or by a user with server management permissions.

## /subscription info
Show the current plan, character limit, dictionary limit, and other related values.

```text
/subscription info
```

## Related Pages
- [Paid Plans](payment.md)
- [/server-settings](server-settings.md)