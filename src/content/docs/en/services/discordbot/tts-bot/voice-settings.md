---
title: "Voice Setting Commands"
lastUpdated: 2026-04-14T00:00:00.000Z
---


# Voice Setting Commands
## Overview
These commands change your personal speaker and reading parameters.
If the server forces a default speaker or server-level parameters, the server settings take priority over your personal settings.

## Commands
Command | Description | Notes
-- | -- | --
/setvoice | Change your speaker. | Opens a selection UI when no argument is given.
/setspeed | Change your reading speed. | 0.5 to 4.0, reset when omitted
/setpitch | Change your reading pitch. | Uses the bot's allowed range, reset when omitted
/setintonation | Change your intonation. | 0.0 to 2.0, reset when omitted
/setvolume | Change your volume. | 0.1 to 3.0, reset when omitted

## Examples
```text
/setvoice Speaker:Shikoku Metan
/setspeed Speed:1.2
/setpitch Pitch:1.1
/setintonation Intonation:1.0
/setvolume Volume:0.8
```

## /setvoice
Change your personal speaker.

```text
/setvoice Speaker:Zundamon
/setvoice
```

Notes:
- Speaker names can be selected through autocomplete.
- If you omit the argument, a selection menu is shown.

## /setspeed
Change your reading speed.

```text
/setspeed Speed:1.0
/setspeed
```

Notes:
- The valid range is 0.5 to 4.0.
- Running the command without an argument resets it to the default value.

## /setpitch
Change your reading pitch.

```text
/setpitch Pitch:1.0
/setpitch
```

Notes:
- The available range follows the bot's voice engine settings.
- Running the command without an argument resets it to the default value.

## /setintonation
Change your intonation.

```text
/setintonation Intonation:1.0
/setintonation
```

Notes:
- The valid range is 0.0 to 2.0.
- Running the command without an argument resets it to the default value.

## /setvolume
Change your reading volume.

```text
/setvolume Volume:1.0
/setvolume
```

Notes:
- The valid range is 0.1 to 3.0.
- Running the command without an argument resets it to the default value.

## Related Pages
- [/user-settings](/en/services/discordbot/tts-bot/user-settings/)
- [/server-settings](/en/services/discordbot/tts-bot/server-settings/)
