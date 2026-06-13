---
title: "Connection Commands"
lastUpdated: 2026-04-14T00:00:00.000Z
---


# Connection Commands
## Overview
These commands are used to make the TTS BOT join a voice channel, disconnect, or skip the current queue.

## Commands
Command | Description | Main Parameters
-- | -- | --
/join | Join a voice channel. | voice channel, force
/disconnect | Disconnect from the voice channel. | none
/skip | Skip the current reading and clear the queue. | none

## /join
Join a voice channel.
If you omit the voice channel argument, the bot joins the voice channel you are currently in.

```text
/join
/join Voice Channel:#General VC
/join Voice Channel:#General VC Force:true
```

Notes:
- You cannot make the bot join a voice channel that you cannot connect to.
- If the bot is already in the same voice channel, the current text channel is added as a new reading target.
- If the bot is being used in another voice channel and `Force` is not set, a move confirmation is shown.

## /disconnect
Disconnect from the current voice channel.

```text
/disconnect
```

Notes:
- This command is only available while the bot is connected.
- You must be allowed to control the currently connected voice channel.

## /skip
Skip the current reading and clear the queued items.

```text
/skip
```

Notes:
- This command is only available while the bot is connected.
- You must be allowed to control the currently connected voice channel.

## Related Pages
- [Voice Setting Commands](/en/services/discordbot/tts-bot/voice-settings/)
- [/channel](/en/services/discordbot/tts-bot/channel/)
