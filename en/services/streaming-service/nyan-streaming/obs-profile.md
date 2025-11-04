---
title: Low-latency OBS Profile
description: 
published: true
date: 2025-11-03T07:55:37.224Z
tags: streaming, obs, nyanstreaming
editor: markdown
dateCreated: 2025-11-03T07:52:12.717Z
---

# OBS Low-latency Profile

## Overview
This profile is distributed by "Remon Kajuu" on BOOTH and has been modified and redistributed.
The instructions below assume a Windows environment.

## Setup
Required software:
- OBS: https://obsproject.com/download
- iTunes: https://www.apple.com/itunes/download/win64

## Profiles
> The default contains the Node02 address. Please verify the address from NyanStreaming tools when using.
{.is-info}

### CoreAudio AAC
- Nvidia: https://kuronekoserver/wiki/nyst/obs-profile/nyst_nvidia_coreaudio_aac.zip
- Radeon: https://kuronekoserver/wiki/nyst/obs-profile/nyst_radeon_coreaudio_aac.zip
> Confirmed working on all nodes.
{.is-success}

### LPCM (Highest quality)
- Nvidia: https://kuronekoserver/wiki/nyst/obs-profile/nyst_nvidia_lpcm.zip
- Radeon: https://kuronekoserver/wiki/nyst/obs-profile/nyst_radeon_lpcm.zip
> Confirmed on Node01, Node03, Node04 and partner nodes.
{.is-success}

## Importing into OBS
Download and unzip the profile. In OBS, select Profiles → Import and choose the extracted folder. The profile should then appear in the list.

![import](https://cdn.krnk.org/kuronekoserver/wiki/nyst/obs-profile/import.webp)
