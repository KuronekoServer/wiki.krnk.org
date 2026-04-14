---
title: TTS BOT
description: 
published: true
date: 2026-04-14T00:00:00.000Z
tags: discordbot, tts, voicevox, voiceroid, a.i.voice
editor: markdown
dateCreated: 2026-04-14T00:00:00.000Z
---

# TTS BOT
## About
The TTS BOT reads messages from text channels and in-VC chat using speech synthesis.
You can control voice channel connection, speakers, reading parameters, dictionaries, and server-wide behavior with slash commands.

Some features require a paid plan and server management permissions. See [Paid Plans](tts-bot/payment.md).

## Commands and Guide
### Basic Operations
Command | Description | Guide
-- | -- | --
[/join](tts-bot/basic-commands.md) | Join a voice channel. | [Connection Commands](tts-bot/basic-commands.md)
[/disconnect](tts-bot/basic-commands.md) | Disconnect from a voice channel. | [Connection Commands](tts-bot/basic-commands.md)
[/skip](tts-bot/basic-commands.md) | Skip the current reading. | [Connection Commands](tts-bot/basic-commands.md)

### Personal Settings
Command | Description | Guide
-- | -- | --
[/setvoice](tts-bot/voice-settings.md) | Change your speaker. | [Voice Setting Commands](tts-bot/voice-settings.md)
[/setspeed](tts-bot/voice-settings.md) | Change your reading speed. | [Voice Setting Commands](tts-bot/voice-settings.md)
[/setpitch](tts-bot/voice-settings.md) | Change your reading pitch. | [Voice Setting Commands](tts-bot/voice-settings.md)
[/setintonation](tts-bot/voice-settings.md) | Change your intonation. | [Voice Setting Commands](tts-bot/voice-settings.md)
[/setvolume](tts-bot/voice-settings.md) | Change your reading volume. | [Voice Setting Commands](tts-bot/voice-settings.md)
[/user-settings speed](tts-bot/user-settings.md) | Change personal settings through a group command. | [/user-settings](tts-bot/user-settings.md)
[/user-settings pitch](tts-bot/user-settings.md) | Change personal settings through a group command. | [/user-settings](tts-bot/user-settings.md)
[/user-settings intonation](tts-bot/user-settings.md) | Change personal settings through a group command. | [/user-settings](tts-bot/user-settings.md)
[/user-settings volume](tts-bot/user-settings.md) | Change personal settings through a group command. | [/user-settings](tts-bot/user-settings.md)
[/user-settings sync](tts-bot/user-settings.md) | Sync your settings to other KuronekoServer TTS bots. | [/user-settings](tts-bot/user-settings.md)
[/user-settings reset](tts-bot/user-settings.md) | Reset your personal settings. | [/user-settings](tts-bot/user-settings.md)
[/user-settings show](tts-bot/user-settings.md) | Show your current personal settings. | [/user-settings](tts-bot/user-settings.md)

### Channels and Dictionaries
Command | Description | Guide
-- | -- | --
[/channel connect-category](tts-bot/channel.md) | Add all text channels in the current category as reading targets. | [/channel](tts-bot/channel.md)
[/channel disconnect](tts-bot/channel.md) | Remove the current channel from reading targets. | [/channel](tts-bot/channel.md)
[/channel disconnect-category](tts-bot/channel.md) | Remove reading targets for the current category. | [/channel](tts-bot/channel.md)
[/channel list](tts-bot/channel.md) | Show the current list of connected reading channels. | [/channel](tts-bot/channel.md)
[/channel link add](tts-bot/channel.md) | Link text channels to a voice channel for automatic reading on join. | [/channel](tts-bot/channel.md)
[/channel link remove](tts-bot/channel.md) | Remove a linked channel setting. | [/channel](tts-bot/channel.md)
[/channel link list](tts-bot/channel.md) | Show linked channel settings. | [/channel](tts-bot/channel.md)
[/dictionary help](tts-bot/dictionary.md) | Show server dictionary commands. | [/dictionary](tts-bot/dictionary.md)
[/dictionary add](tts-bot/dictionary.md) | Add an entry to the server dictionary. | [/dictionary](tts-bot/dictionary.md)
[/dictionary remove](tts-bot/dictionary.md) | Remove an entry from the server dictionary. | [/dictionary](tts-bot/dictionary.md)
[/dictionary export](tts-bot/dictionary.md) | Export the server dictionary. | [/dictionary](tts-bot/dictionary.md)
[/dictionary import](tts-bot/dictionary.md) | Import the server dictionary. | [/dictionary](tts-bot/dictionary.md)
[/dictionary list](tts-bot/dictionary.md) | Show the server dictionary list. | [/dictionary](tts-bot/dictionary.md)
[/dictionary search](tts-bot/dictionary.md) | Search the server dictionary. | [/dictionary](tts-bot/dictionary.md)
[/dictionary reset](tts-bot/dictionary.md) | Reset the server dictionary. | [/dictionary](tts-bot/dictionary.md)
[/dictionary sync](tts-bot/dictionary.md) | Sync the dictionary to other KuronekoServer TTS bots. | [/dictionary](tts-bot/dictionary.md)
[/user-dictionary help](tts-bot/user-dictionary.md) | Show personal dictionary commands. | [/user-dictionary](tts-bot/user-dictionary.md)
[/user-dictionary add](tts-bot/user-dictionary.md) | Add an entry to your personal dictionary. | [/user-dictionary](tts-bot/user-dictionary.md)
[/user-dictionary remove](tts-bot/user-dictionary.md) | Remove an entry from your personal dictionary. | [/user-dictionary](tts-bot/user-dictionary.md)
[/user-dictionary export](tts-bot/user-dictionary.md) | Export your personal dictionary. | [/user-dictionary](tts-bot/user-dictionary.md)
[/user-dictionary import](tts-bot/user-dictionary.md) | Import your personal dictionary. | [/user-dictionary](tts-bot/user-dictionary.md)
[/user-dictionary list](tts-bot/user-dictionary.md) | Show your personal dictionary list. | [/user-dictionary](tts-bot/user-dictionary.md)
[/user-dictionary search](tts-bot/user-dictionary.md) | Search your personal dictionary. | [/user-dictionary](tts-bot/user-dictionary.md)
[/user-dictionary reset](tts-bot/user-dictionary.md) | Reset your personal dictionary. | [/user-dictionary](tts-bot/user-dictionary.md)

### Utility
Command | Description | Guide
-- | -- | --
[/help](tts-bot/utility.md) | Show the bot overview and command list. | [Utility Commands](tts-bot/utility.md)
[/ping](tts-bot/utility.md) | Check the bot response time. | [Utility Commands](tts-bot/utility.md)
[/exvoice](tts-bot/utility.md) | Show the ExVoice list URL. | [Utility Commands](tts-bot/utility.md)
[/invite](tts-bot/utility.md) | Show the invite link. | [Utility Commands](tts-bot/utility.md)

### For Server Administrators
Command | Description | Guide
-- | -- | --
[/server-settings ...](tts-bot/server-settings.md) | Manage default speakers, dictionaries, and server-wide reading behavior. | [/server-settings](tts-bot/server-settings.md)
[/subscription ...](tts-bot/subscription.md) | Manage paid plan codes and subscription status. | [/subscription](tts-bot/subscription.md)

## Notes
Internal /admin commands and development /debug commands are intentionally excluded from this public guide.