---
title: "Activity"
description: "Audit authentication, stream-key, billing, and team changes"
lastUpdated: 2026-08-21T00:00:00.000Z
sidebar:
  order: 5
---

**Activity** is the audit view for user actions and system events in the organization.

![Nyan Streaming Activity page](/images/nyan-streaming/dashboard/activity.png)

## Summary cards

The cards summarize the last 24 hours, authentication failures, stream-key creation/deletion, and team invitations/removals. If a value changes unexpectedly, use the log to identify the actor and time.

## Common recorded events

- Successful/failed sign-in, sign-out, and sign-up
- Stream-key creation, update, deletion, and regeneration
- Recording deletion and restream destination changes
- API-key creation/revocation and notification tests
- Plan upgrades and downgrades
- Member invitations/removals, role changes, and settings changes

## Investigate the log

Search for an event or user. Each row shows the event, actor, timestamp, and IP address when captured. The row menu opens details or marks an entry as reviewed.

Use **Export all** or export selected rows for an investigation. Users with permission can also delete selected entries.

:::caution
Deleted audit entries are no longer available for investigations. Export and retain them before deletion in normal operations.
:::

## If you find an unexpected action

1. Record its actor, time, IP address, and target.
2. Match the time against the authentication log in [Analytics](../analytics/).
3. Regenerate the [Stream Key](../stream-keys/) if its secret may be exposed.
4. Review active members and organization security in [Users](../users/) and [Settings](../settings/).

## Related pages

- [Analytics](../analytics/)
- [Users](../users/)
- [Settings](../settings/)
