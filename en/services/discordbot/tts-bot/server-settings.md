---
title: /server-settings
description: 
published: true
date: 2026-04-14T00:00:00.000Z
tags: discordbot, tts, server-settings
editor: markdown
dateCreated: 2026-04-14T00:00:00.000Z
---

# /server-settings
## Overview
/server-settings is a grouped command for managing server-wide reading settings.
It is server-only and requires server management permissions.

## Dashboard and Overview
Command | Description | Notes
-- | -- | --
/server-settings dashboard | Open the web dashboard. | A button is shown to open the settings page.
/server-settings show | Show the current server settings. | Opens an interactive settings view.

## Default Voice Settings
Command | Description | Notes
-- | -- | --
/server-settings speaker | Set the default server speaker. | Opens a selection UI when no argument is given.
/server-settings speed | Set the default server speed. | 0.5 to 4.0, reset when omitted
/server-settings pitch | Set the default server pitch. | Uses the bot's allowed range, reset when omitted
/server-settings intonation | Set the default server intonation. | 0.0 to 2.0, reset when omitted
/server-settings volume | Set the default server volume. | 0.1 to 5.0, reset when omitted
/server-settings force-guild-args | Force the server default speed, pitch, intonation, and volume. | Takes priority over personal settings.
/server-settings force-guild-speaker | Force the server default speaker. | Takes priority over personal speaker settings.

## Speaker Control
Command | Description | Notes
-- | -- | --
/server-settings disable-speaker add | Disable a specific speaker. | The engine default speaker and server default speaker cannot be disabled.
/server-settings disable-speaker remove | Re-enable a disabled speaker. | Speaker names support autocomplete.
/server-settings disable-speaker list | Show the list of disabled speakers. | Display only.

## Reading Behavior
Command | Description | Notes
-- | -- | --
/server-settings read-username | Toggle username reading. | true enables it, false disables it.
/server-settings read-join-leave | Toggle join and leave name reading. | true enables it, false disables it.
/server-settings exvoice | Toggle ExVoice usage. | Applies to the whole server.
/server-settings prefix | Set a custom server prefix. | Available only when custom prefix support is enabled.
/server-settings length-limit | Change the max readable message length. | Must be over 30 and within the plan limit.
/server-settings read-emoji | Toggle emoji reading. | true enables it, false disables it.
/server-settings read-sticker | Toggle sticker reading. | true enables it, false disables it.

## ExVoice and Target Management
Command | Description | Notes
-- | -- | --
/server-settings exclude-exvoice add | Add an ExVoice item to the exclusion list. | Choices are available through autocomplete.
/server-settings exclude-exvoice remove | Remove an ExVoice item from the exclusion list. | Choices are available through autocomplete.
/server-settings exclude-exvoice list | Show excluded ExVoice items. | Display only.
/server-settings read-bot add | Add a bot whose messages should be read. | Requires Basic Plan or above.
/server-settings read-bot remove | Remove a bot from the readable bot list. | Only bot users can be specified.
/server-settings read-bot toggle | Enable or disable bot message reading. | Requires Basic Plan or above.
/server-settings exclude-user add | Exclude a user from reading. | The entry limit depends on the plan.
/server-settings exclude-user remove | Remove a user exclusion. | Bots are not the target here.
/server-settings exclude-user list | Show excluded users. | Display only.
/server-settings exclude-role add | Exclude users with a specific role from reading. | The entry limit depends on the plan.
/server-settings exclude-role remove | Remove a role exclusion. | Using @everyone clears all role exclusions.

## Auto Join and Maintenance
Command | Description | Notes
-- | -- | --
/server-settings autojoin add | Add an auto-join setting for when members join a voice channel. | If text channel is omitted, in-VC chat is used.
/server-settings autojoin remove | Remove an auto-join setting. | If text channel is omitted, the whole voice channel setting is removed.
/server-settings autojoin list | Show saved auto-join settings. | You can filter by voice channel.
/server-settings sync | Sync the current server settings to other KuronekoServer TTS bots. | Destination settings are overwritten.
/server-settings reset | Reset the server settings. | Shows a confirmation button.

## Examples
```text
/server-settings speaker Speaker:Zundamon
/server-settings force-guild-args Force:true
/server-settings read-username Read:true
/server-settings autojoin add Voice Channel:#General VC Text Channel:#tts
/server-settings exclude-user add User:@example
/server-settings length-limit Limit:120
```

## Plan-Related Notes
- `read-bot add` and `read-bot toggle` require Basic Plan or above.
- The `length-limit` maximum and the number of entries for `exclude-user add` and `exclude-role add` depend on the plan.
- See [Paid Plans](payment.md) for details.

## Related Pages
- [/subscription](subscription.md)
- [Paid Plans](payment.md)