---
title: "如何选择节点"
description: "Node01、Node02、Node03 在用途、录制支持、音乐使用报告和直播时长方面的区别"
lastUpdated: 2026-08-22T00:00:00.000Z
sidebar:
  order: 3
---

# 如何选择节点

在 Nyan Streaming 中，创建推流密钥时需要选择推流目标节点。各节点的适用地区、录制支持和直播时长等不同，请选择符合直播内容的节点。

## 先按用途选择

| 直播内容与条件 | 应选择的节点 |
| --- | --- |
| 使用 JASRAC 或 NexTone 管理的音乐作品 | **Node01** |
| 普通直播、活动、面向世界各地的直播或需要录制 | **Node02** |
| 以低码率进行超过 24 小时的长时间直播 | **Node03** |

:::tip
如果没有特殊条件，又不确定应该选哪个，请选择 **Node02**。
:::

## Node01：使用受管理音乐作品的直播

Node01 适用于使用 JASRAC 或 NexTone 管理音乐作品的直播。推流和观看均仅限日本国内。

使用 Node01 时，请通过控制台的[音乐使用申请](/zh-hans/services/streaming-service/nyan-streaming/dashboard/music-reports/)，在**使用音乐作品当月的最后一天之前**报告所用音乐。未按期报告或报告内容不完整时，会受到处罚或被收取额外使用费。

:::caution[无法使用录制功能]
根据与 JASRAC 及 NexTone 签订的授权协议，无法向用户提供 Node01 的录制数据。
:::

## Node02：普通直播与全球直播

Node02 是使用世界各地直播服务器、向多个国家和地区稳定传输的标准节点。除普通直播和活动直播外，也适用于需要录制的直播。

:::note[唯一支持录制的节点]
**只有 Node02** 可以使用录制功能。录制是否可用、存储容量和保留期限取决于套餐。详情请参阅[存档](/zh-hans/services/streaming-service/nyan-streaming/dashboard/archives/)。
:::

## Node03：低码率长时间直播

Node03 用于以低码率进行长时间、长期连续直播。不受连续直播 24 小时的限制，因此可以用于超过 24 小时的直播。

:::note
Node03 仍受各套餐的码率上限、存储上限、服务条款等直播时长以外的条件约束。
:::

:::caution[无法使用录制功能]
Node03 面向长时间直播，为避免录制挤占服务器存储容量，不支持录制。
:::

## 比较录制支持

| 节点 | 录制 | 原因与条件 |
| --- | --- | --- |
| **Node01** | 不可用 | 根据与 JASRAC、NexTone 的授权协议，无法提供录制数据 |
| **Node02** | 可用 | 在套餐提供的录制支持、存储容量和保留期限范围内使用 |
| **Node03** | 不可用 | 避免长时间直播占用过多服务器存储容量 |

## 在控制台中选择

1. 打开控制台的**推流密钥**。
2. 选择**新建推流密钥**，指定符合用途的节点和区域。
3. 打开已创建密钥的**概览**选项卡，将所选推流目标的 URL 设置到 OBS 等软件中。

:::note
仅在控制台中显示或选择节点，并不会固定连接目标。实际连接目标由输入直播软件的 URL 决定。
:::

## 相关页面

- [入门指南](/zh-hans/services/streaming-service/nyan-streaming/getting-started/)
- [推流密钥](/zh-hans/services/streaming-service/nyan-streaming/dashboard/stream-keys/)
- [音乐使用申请](/zh-hans/services/streaming-service/nyan-streaming/dashboard/music-reports/)
- [套餐、限制与政策](/zh-hans/services/streaming-service/nyan-streaming/plans-and-limits/)
- [服务器运行状态](/zh-hans/services/streaming-service/nyan-streaming/dashboard/servers/)
