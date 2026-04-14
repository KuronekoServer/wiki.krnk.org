---
title: /user-settings
description: 
published: true
date: 2026-04-14T00:00:00.000Z
tags: discordbot, tts, user-settings
editor: markdown
dateCreated: 2026-04-14T00:00:00.000Z
---

# /user-settings
## Overview
/user-settings is a grouped command for managing your personal reading settings inside a server.
This group is server-only.

## Subcommands
Command | Description | Notes
-- | -- | --
/user-settings speed | Change your reading speed. | Same range as [/setspeed](voice-settings.md)
/user-settings pitch | Change your reading pitch. | Same range as [/setpitch](voice-settings.md)
/user-settings intonation | Change your intonation. | Same range as [/setintonation](voice-settings.md)
/user-settings volume | Change your volume. | Same range as [/setvolume](voice-settings.md)
/user-settings sync | Sync your settings to other KuronekoServer TTS bots. | Shows a confirmation button
/user-settings reset | Reset your personal settings. | Shows a confirmation button
/user-settings show | Show your current personal settings. | Displays the current values

## Examples
```text
/user-settings speed Speed:1.2
/user-settings pitch Pitch:1.0
/user-settings intonation Intonation:1.0
/user-settings volume Volume:0.9
/user-settings show
```

## /user-settings sync
Copy your current personal settings to other KuronekoServer TTS bots in the same series.

```text
/user-settings sync
```

Notes:
- The destination bot settings will be overwritten.
- A confirmation button is shown before execution.

## /user-settings reset
Reset your personal settings to the defaults.

```text
/user-settings reset
```

Notes:
- Your current settings are discarded.
- A confirmation button is shown before execution.

## /user-settings show
Show your current speaker, speed, pitch, intonation, volume, and other values.

```text
/user-settings show
```

## Related Pages
- [Voice Setting Commands](voice-settings.md)