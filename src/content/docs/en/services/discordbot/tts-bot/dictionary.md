---
title: "/dictionary"
lastUpdated: 2026-04-14T00:00:00.000Z
---


# /dictionary
## Overview
/dictionary manages the dictionary shared across the whole server.
Use it when you want specific words to be read in a different way.

## Subcommands
Command | Description | Notes
-- | -- | --
/dictionary help | Show dictionary command help. | Useful for checking the available dictionary operations.
/dictionary add | Add a word to the dictionary. | Regular expressions require a higher plan.
/dictionary remove | Remove a word from the dictionary. | Word names support autocomplete.
/dictionary export | Export the dictionary. | Supports csv, json, and colon.
/dictionary import | Import the dictionary. | 1MB limit. Re-importing exported JSON is recommended.
/dictionary list | Show the dictionary list. | Uses pagination.
/dictionary search | Search the dictionary. | Uses partial matching.
/dictionary reset | Reset the dictionary. | Shows a confirmation button.
/dictionary sync | Sync the dictionary to other KuronekoServer TTS bots. | Overwrites the destination dictionary.

## Examples
```text
/dictionary add Word:krnk Reading:Kuroneko Regex:false
/dictionary remove Word:krnk
/dictionary export format:json
/dictionary search Query:Kuroneko
```

## /dictionary add
Register a word and its reading.

```text
/dictionary add Word:hello Reading:hullo Regex:false
```

Notes:
- The entry count limit and the maximum length for words and readings depend on your plan.
- Regex entries require Advance Plan or above.
- Adding the same word again overwrites the existing entry.

## /dictionary remove
Delete an existing entry.

```text
/dictionary remove Word:hello
```

## /dictionary export
Export the dictionary as a file.

```text
/dictionary export format:csv
/dictionary export format:json
/dictionary export format:colon
```

## /dictionary import
Import a dictionary file.

```text
/dictionary import file:dictionary.json
```

Notes:
- Files larger than 1MB cannot be imported.
- Re-importing the JSON exported by `/dictionary export format:json` is recommended.

## /dictionary list
Show the registered dictionary entries.

```text
/dictionary list
```

## /dictionary search
Search the registered dictionary.

```text
/dictionary search Query:hello
```

## /dictionary reset
Reset the server dictionary.

```text
/dictionary reset
```

## /dictionary sync
Sync the current server dictionary to other KuronekoServer TTS bots.

```text
/dictionary sync
```

Notes:
- The destination dictionary will be overwritten.
- A confirmation button is shown before execution.

## Related Pages
- [/user-dictionary](/en/services/discordbot/tts-bot/user-dictionary/)
- [Paid Plans](/en/services/discordbot/tts-bot/payment/)
