---
title: "TTS BOT"
lastUpdated: 2026-04-14T00:00:00.000Z
---


# TTS BOT
## About
The TTS BOT reads messages from text channels and in-VC chat using speech synthesis.
You can control voice channel connection, speakers, reading parameters, dictionaries, and server-wide behavior with slash commands.

Some features require a paid plan and server management permissions. See [Paid Plans](/en/services/discordbot/tts-bot/payment/).

## Commands and Guide
### Basic Operations
Command | Description | Guide
-- | -- | --
[/join](/en/services/discordbot/tts-bot/basic-commands/) | Join a voice channel. | [Connection Commands](/en/services/discordbot/tts-bot/basic-commands/)
[/disconnect](/en/services/discordbot/tts-bot/basic-commands/) | Disconnect from a voice channel. | [Connection Commands](/en/services/discordbot/tts-bot/basic-commands/)
[/skip](/en/services/discordbot/tts-bot/basic-commands/) | Skip the current reading. | [Connection Commands](/en/services/discordbot/tts-bot/basic-commands/)

### Personal Settings
Command | Description | Guide
-- | -- | --
[/setvoice](/en/services/discordbot/tts-bot/voice-settings/) | Change your speaker. | [Voice Setting Commands](/en/services/discordbot/tts-bot/voice-settings/)
[/setspeed](/en/services/discordbot/tts-bot/voice-settings/) | Change your reading speed. | [Voice Setting Commands](/en/services/discordbot/tts-bot/voice-settings/)
[/setpitch](/en/services/discordbot/tts-bot/voice-settings/) | Change your reading pitch. | [Voice Setting Commands](/en/services/discordbot/tts-bot/voice-settings/)
[/setintonation](/en/services/discordbot/tts-bot/voice-settings/) | Change your intonation. | [Voice Setting Commands](/en/services/discordbot/tts-bot/voice-settings/)
[/setvolume](/en/services/discordbot/tts-bot/voice-settings/) | Change your reading volume. | [Voice Setting Commands](/en/services/discordbot/tts-bot/voice-settings/)
[/user-settings speed](/en/services/discordbot/tts-bot/user-settings/) | Change personal settings through a group command. | [/user-settings](/en/services/discordbot/tts-bot/user-settings/)
[/user-settings pitch](/en/services/discordbot/tts-bot/user-settings/) | Change personal settings through a group command. | [/user-settings](/en/services/discordbot/tts-bot/user-settings/)
[/user-settings intonation](/en/services/discordbot/tts-bot/user-settings/) | Change personal settings through a group command. | [/user-settings](/en/services/discordbot/tts-bot/user-settings/)
[/user-settings volume](/en/services/discordbot/tts-bot/user-settings/) | Change personal settings through a group command. | [/user-settings](/en/services/discordbot/tts-bot/user-settings/)
[/user-settings sync](/en/services/discordbot/tts-bot/user-settings/) | Sync your settings to other KuronekoServer TTS bots. | [/user-settings](/en/services/discordbot/tts-bot/user-settings/)
[/user-settings reset](/en/services/discordbot/tts-bot/user-settings/) | Reset your personal settings. | [/user-settings](/en/services/discordbot/tts-bot/user-settings/)
[/user-settings show](/en/services/discordbot/tts-bot/user-settings/) | Show your current personal settings. | [/user-settings](/en/services/discordbot/tts-bot/user-settings/)

### Channels and Dictionaries
Command | Description | Guide
-- | -- | --
[/channel connect-category](/en/services/discordbot/tts-bot/channel/) | Add all text channels in the current category as reading targets. | [/channel](/en/services/discordbot/tts-bot/channel/)
[/channel disconnect](/en/services/discordbot/tts-bot/channel/) | Remove the current channel from reading targets. | [/channel](/en/services/discordbot/tts-bot/channel/)
[/channel disconnect-category](/en/services/discordbot/tts-bot/channel/) | Remove reading targets for the current category. | [/channel](/en/services/discordbot/tts-bot/channel/)
[/channel list](/en/services/discordbot/tts-bot/channel/) | Show the current list of connected reading channels. | [/channel](/en/services/discordbot/tts-bot/channel/)
[/channel link add](/en/services/discordbot/tts-bot/channel/) | Link text channels to a voice channel for automatic reading on join. | [/channel](/en/services/discordbot/tts-bot/channel/)
[/channel link remove](/en/services/discordbot/tts-bot/channel/) | Remove a linked channel setting. | [/channel](/en/services/discordbot/tts-bot/channel/)
[/channel link list](/en/services/discordbot/tts-bot/channel/) | Show linked channel settings. | [/channel](/en/services/discordbot/tts-bot/channel/)
[/dictionary help](/en/services/discordbot/tts-bot/dictionary/) | Show server dictionary commands. | [/dictionary](/en/services/discordbot/tts-bot/dictionary/)
[/dictionary add](/en/services/discordbot/tts-bot/dictionary/) | Add an entry to the server dictionary. | [/dictionary](/en/services/discordbot/tts-bot/dictionary/)
[/dictionary remove](/en/services/discordbot/tts-bot/dictionary/) | Remove an entry from the server dictionary. | [/dictionary](/en/services/discordbot/tts-bot/dictionary/)
[/dictionary export](/en/services/discordbot/tts-bot/dictionary/) | Export the server dictionary. | [/dictionary](/en/services/discordbot/tts-bot/dictionary/)
[/dictionary import](/en/services/discordbot/tts-bot/dictionary/) | Import the server dictionary. | [/dictionary](/en/services/discordbot/tts-bot/dictionary/)
[/dictionary list](/en/services/discordbot/tts-bot/dictionary/) | Show the server dictionary list. | [/dictionary](/en/services/discordbot/tts-bot/dictionary/)
[/dictionary search](/en/services/discordbot/tts-bot/dictionary/) | Search the server dictionary. | [/dictionary](/en/services/discordbot/tts-bot/dictionary/)
[/dictionary reset](/en/services/discordbot/tts-bot/dictionary/) | Reset the server dictionary. | [/dictionary](/en/services/discordbot/tts-bot/dictionary/)
[/dictionary sync](/en/services/discordbot/tts-bot/dictionary/) | Sync the dictionary to other KuronekoServer TTS bots. | [/dictionary](/en/services/discordbot/tts-bot/dictionary/)
[/user-dictionary help](/en/services/discordbot/tts-bot/user-dictionary/) | Show personal dictionary commands. | [/user-dictionary](/en/services/discordbot/tts-bot/user-dictionary/)
[/user-dictionary add](/en/services/discordbot/tts-bot/user-dictionary/) | Add an entry to your personal dictionary. | [/user-dictionary](/en/services/discordbot/tts-bot/user-dictionary/)
[/user-dictionary remove](/en/services/discordbot/tts-bot/user-dictionary/) | Remove an entry from your personal dictionary. | [/user-dictionary](/en/services/discordbot/tts-bot/user-dictionary/)
[/user-dictionary export](/en/services/discordbot/tts-bot/user-dictionary/) | Export your personal dictionary. | [/user-dictionary](/en/services/discordbot/tts-bot/user-dictionary/)
[/user-dictionary import](/en/services/discordbot/tts-bot/user-dictionary/) | Import your personal dictionary. | [/user-dictionary](/en/services/discordbot/tts-bot/user-dictionary/)
[/user-dictionary list](/en/services/discordbot/tts-bot/user-dictionary/) | Show your personal dictionary list. | [/user-dictionary](/en/services/discordbot/tts-bot/user-dictionary/)
[/user-dictionary search](/en/services/discordbot/tts-bot/user-dictionary/) | Search your personal dictionary. | [/user-dictionary](/en/services/discordbot/tts-bot/user-dictionary/)
[/user-dictionary reset](/en/services/discordbot/tts-bot/user-dictionary/) | Reset your personal dictionary. | [/user-dictionary](/en/services/discordbot/tts-bot/user-dictionary/)

### Utility
Command | Description | Guide
-- | -- | --
[/help](/en/services/discordbot/tts-bot/utility/) | Show the bot overview and command list. | [Utility Commands](/en/services/discordbot/tts-bot/utility/)
[/ping](/en/services/discordbot/tts-bot/utility/) | Check the bot response time. | [Utility Commands](/en/services/discordbot/tts-bot/utility/)
[/exvoice](/en/services/discordbot/tts-bot/utility/) | Show the ExVoice list URL. | [Utility Commands](/en/services/discordbot/tts-bot/utility/)
[/invite](/en/services/discordbot/tts-bot/utility/) | Show the invite link. | [Utility Commands](/en/services/discordbot/tts-bot/utility/)

### For Server Administrators
Command | Description | Guide
-- | -- | --
[/server-settings ...](/en/services/discordbot/tts-bot/server-settings/) | Manage default speakers, dictionaries, and server-wide reading behavior. | [/server-settings](/en/services/discordbot/tts-bot/server-settings/)
[/subscription ...](/en/services/discordbot/tts-bot/subscription/) | Manage paid plan codes and subscription status. | [/subscription](/en/services/discordbot/tts-bot/subscription/)

## Notes
Internal /admin commands and development /debug commands are intentionally excluded from this public guide.
