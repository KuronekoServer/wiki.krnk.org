---
title: "/user-dictionary"
lastUpdated: 2026-04-14T00:00:00.000Z
---


# /user-dictionary
## Overview
/user-dictionary manages your personal dictionary.
Unlike the shared server dictionary, this only affects your own reading behavior.

## Subcommands
Command | Description | Notes
-- | -- | --
/user-dictionary help | Show personal dictionary commands. | Responses are shown only to you.
/user-dictionary add | Add an entry to your personal dictionary. | Up to 100 entries.
/user-dictionary remove | Remove an entry from your personal dictionary. | Word names support autocomplete.
/user-dictionary export | Export your personal dictionary. | Supports csv, json, and colon.
/user-dictionary import | Import your personal dictionary. | 1MB limit. Re-importing exported JSON is recommended.
/user-dictionary list | Show your personal dictionary list. | Responses are shown only to you.
/user-dictionary search | Search your personal dictionary. | Responses are shown only to you.
/user-dictionary reset | Reset your personal dictionary. | Shows a confirmation button.

## Examples
```text
/user-dictionary add Word:w Reading:lol Regex:false
/user-dictionary export format:json
/user-dictionary search Query:lol
```

## /user-dictionary add
Register a word and its reading in your personal dictionary.

```text
/user-dictionary add Word:w Reading:lol Regex:false
```

Notes:
- You can register up to 100 entries.
- Adding the same word again overwrites the existing entry.
- Regex is also supported here.

## /user-dictionary remove
Delete an entry from your personal dictionary.

```text
/user-dictionary remove Word:w
```

## /user-dictionary export
Export your personal dictionary as a file.

```text
/user-dictionary export format:csv
/user-dictionary export format:json
```

## /user-dictionary import
Import a personal dictionary file.

```text
/user-dictionary import file:dictionary.json
```

Notes:
- Files larger than 1MB cannot be imported.
- Re-importing the JSON exported by `/user-dictionary export format:json` is recommended.

## /user-dictionary list
Show your registered personal dictionary entries.

```text
/user-dictionary list
```

## /user-dictionary search
Search your personal dictionary.

```text
/user-dictionary search Query:lol
```

## /user-dictionary reset
Reset your personal dictionary.

```text
/user-dictionary reset
```

Notes:
- Responses are usually shown only to you.
- A confirmation button is shown before execution.

## Related Pages
- [/dictionary](/en/services/discordbot/tts-bot/dictionary/)
