---
title: "Settings"
description: "Configure organization details, billing, notifications, security, and API keys"
lastUpdated: 2026-08-21T00:00:00.000Z
sidebar:
  order: 9
---

**Settings** manages organization-wide identity, payments, notifications, access controls, and Public API keys. Available controls depend on your current role.

![Security tab in Nyan Streaming Settings](/images/nyan-streaming/dashboard/settings.png)

:::note
The screenshot includes complete cards from the Security tab. Sensitive areas such as the team ID, billing details, and account deletion are excluded from the published image.
:::

## General

Set the team name, team URL, avatar, and **default language**. The default language is used for limit emails, webhooks, dashboard notifications, and warning videos shown to viewers.

This page also contains the team ID, ownership transfer, leave-team, and delete-team controls. Do not publish the team ID unless a trusted integration specifically requires it.

## Billing

Review the current plan, payment methods, and billing history. A valid payment method is required before switching to a paid plan. Only an appropriately privileged user should add, update, or remove payment methods.

:::caution
The Billing tab may contain payment information. Inspect it before screen sharing or taking screenshots.
:::

## Notifications

### Delivery channels

Choose in-app, email, and webhook delivery. After saving a webhook URL, you can send a standard-format or Discord-embed test.

### Events

- Stream start and stop
- Authentication failures
- Viewer milestones
- Weekly report
- Bitrate limit exceeded
- 24-hour continuous streaming limit exceeded
- Storage limit reached

A webhook test sends a real notification. Coordinate with the channel owner before running it in production.

## Security

- Enable or disable two-factor authentication.
- Choose a session timeout.
- Allow or deny publisher IP addresses in `IP / CIDR` format.
- Follow the API-key management link and review the API rate limit.

IP rules are evaluated from top to bottom, and the first match applies. The default action is allow.

:::note
IP rules apply only to publishing. They do not restrict public playback.
:::

## API keys

Create a Public API key with a name and optional expiry. The list shows creation date, last use, and expiry; revoke keys that are no longer needed.

:::caution
The full key is displayed only once, immediately after creation. Store it in a secure secret manager and never paste it into chat or a public repository. Revoke and replace a leaked key immediately.
:::

The page also documents authentication headers and endpoints. See [Public API](../../api/) for the full guide.

## Ownership transfer, leaving, and deletion

These actions have a wide impact. Verify the team, recipient, current role, and billing state, and preserve any required stream keys, recordings, and audit logs before continuing.

## Related pages

- [Users](../users/)
- [Activity](../activity/)
- [Public API](../../api/)
