---
title: "Users"
description: "Invite, find, change roles for, and remove team members"
lastUpdated: 2026-08-21T00:00:00.000Z
sidebar:
  order: 8
---

**Users** manages the organization's members, roles, invitation state, and last-active time.

## Reading the page

Summary cards show total members, administrators, and pending invitations. Under **All members**, search by name or email and review each member's role, status, and last-active time.

:::note
No screenshot is published for this page because it contains member names and email addresses. Its layout and operations are documented below.
:::

## Roles

| Role          | Typical permissions                                                    |
| ------------- | ---------------------------------------------------------------------- |
| **Owner**     | Full access, including billing, ownership transfer, and team deletion |
| **Sub-owner** | Nearly all operations except ownership transfer and team deletion     |
| **Member**    | Read-only access to stream keys and analytics                         |

Assign the least privileged role that is sufficient. Reserve administrator roles for people who must change streaming or notification configuration.

## Invite a member

1. Select **Invite member**.
2. Enter the email address and role.
3. Confirm that the member appears as **Invited**.
4. The status changes to **Active** after the recipient joins.

Pending invitations can be resent or canceled from the action menu.

## Change a role or remove a member

Use the member's action menu to change their role. Removing a member revokes access to the organization's stream keys, recordings, analytics, and settings.

:::caution
After a responsibility change or departure, also consider regenerating shared stream keys and revoking API keys. Do not remove the final owner.
:::

## Related pages

- [Settings](../settings/)
- [Activity](../activity/)
- [Stream Keys](../stream-keys/)

