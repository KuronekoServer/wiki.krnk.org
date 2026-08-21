---
title: "Low-Latency OBS Profile"
lastUpdated: 2026-08-22T00:00:00.000Z
sidebar:
  order: 11
---

# OBS Low-Latency Profile

## Overview

This profile was created with the guidance of **Lemon Kaju** and **Kyou**.
It is a modified and redistributed version based on the profile at https://lemonkaju.booth.pm/items/7497730.
The following instructions are for Windows. Please note this in advance.

## Setup

The software you need to install in advance is as follows.
🔷OBS: https://obsproject.com/download
🔷iTunes: https://www.apple.com/itunes/download/win64

## Profiles

> By default, the address for Node02 is set.
> When actually using it, please check the address from the Nyan Streaming tool yourself and start streaming.

### CoreAudio AAC

- Nvidia: https://cdn.krnk.org/kuronekoserver/wiki/nyst/obs-profile/nyst_nvidia_coreaudio_aac.zip
- Radeon: https://cdn.krnk.org/kuronekoserver/wiki/nyst/obs-profile/nyst_radeon_coreaudio_aac.zip

### LPCM (Highest Audio Quality)

:::caution
LPCM is available **only for streaming and playback over RTSP**. It cannot be used over RTMP, HLS, or WebRTC.
:::

- Nvidia: https://cdn.krnk.org/kuronekoserver/wiki/nyst/obs-profile/nyst_nvidia_lpcm.zip
- Radeon: https://cdn.krnk.org/kuronekoserver/wiki/nyst/obs-profile/nyst_radeon_lpcm.zip

## Importing the Profile in OBS

Download the profile above, and **after extracting it**, select Import from the OBS profile menu and choose the extracted file.
It should then appear in the profile list.

![import](https://cdn.krnk.org/kuronekoserver/wiki/nyst/obs-profile/import.webp)
