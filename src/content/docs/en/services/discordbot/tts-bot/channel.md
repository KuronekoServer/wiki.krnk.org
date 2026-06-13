---
title: "/channel"
lastUpdated: 2026-04-14T00:00:00.000Z
---


# /channel
## Overview
/channel is a grouped command for managing reading target text channels, categories, and automatic links per voice channel.

## User-Facing Subcommands
Command | Description | Notes
-- | -- | --
/channel connect-category | Add all text channels in the current category as reading targets. | The current channel must belong to a category, and you must already be in a voice channel.
/channel disconnect | Remove the current channel from the reading targets. | Available only while the bot is connected.
/channel disconnect-category | Remove reading targets for the current category. | The current channel must belong to a category.
/channel list | Show the current reading channel list. | Available only while the bot is connected.

## /channel connect-category
Add all text channels in the current category to the reading targets.

```text
/channel connect-category
```

Notes:
- You must already be connected to a voice channel.
- If the bot is not connected yet, it joins your current voice channel first.

## /channel disconnect
Remove the current channel from the reading targets.

```text
/channel disconnect
```

## /channel disconnect-category
Remove all reading targets under the current category.

```text
/channel disconnect-category
```

## /channel list
Show the list of channels currently used for reading.

```text
/channel list
```

## Administrator Subcommands: /channel link
Command | Description | Notes
-- | -- | --
/channel link add | Register text channels that should be read automatically when the bot joins a voice channel. | Requires server management permissions.
/channel link remove | Remove an existing linked channel setting. | If the text channel is omitted, all links for that voice channel are removed.
/channel link list | Show saved linked channel settings. | You can filter by a specific voice channel.

### /channel link add
```text
/channel link add Voice Channel:#General VC Text Channel:#tts
```

### /channel link remove
```text
/channel link remove Voice Channel:#General VC
/channel link remove Voice Channel:#General VC Text Channel:#tts
```

### /channel link list
```text
/channel link list
/channel link list Voice Channel:#General VC
```

## Related Pages
- [Connection Commands](/en/services/discordbot/tts-bot/basic-commands/)
- [/server-settings](/en/services/discordbot/tts-bot/server-settings/)
