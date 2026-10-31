---
title: "入门指南"
description: "从选择节点和推流密钥，到通过 OBS 推流并在浏览器及 VRChat 中检查播放"
lastUpdated: 2026-08-22T00:00:00.000Z
sidebar:
  order: 2
---

:::note
**Nyan Streaming Japan 不支持直播录制和文件上传功能。** 本页面关于录制和媒体的说明适用于支持这些功能的 Nyan Streaming 服务。
:::


:::note
Nyan Streaming 免费服务器 `free.nyst.live` 无需注册控制台即可使用。Nyan Streaming 使用 [dash.nyst.live](https://dash.nyst.live/)，Nyan Streaming Japan 使用 [dash.jp.nyst.live](https://dash.jp.nyst.live/)。请确认适用于所用服务和合同的推流与观看 URL。
:::


# 入门指南

本页依次说明如何在 Nyan Streaming 控制台中创建推流密钥、从 OBS Studio 推流，以及实际检查播放效果。

## 事先准备

- 可登录 [Nyan Streaming 控制台](https://dash.nyst.live/)的账户
- OBS Studio 等支持使用 H.264 / AAC 进行 RTMP 推流的软件
- 用于管理直播的组织（团队）

登录后，请通过左上角的团队切换菜单选择要操作的组织。套餐上限、推流密钥、观看 URL 和录制等均按组织管理。

## 1. 创建推流密钥

1. 打开左侧菜单的**推流密钥**。
2. 选择**新建推流密钥**。
3. 指定易于识别的名称和套餐。按需设置节点、区域、观看密钥和备注。
4. 打开已创建的密钥，显示**概览**选项卡。

:::note
**推流密钥（机密值）**与观看 URL 中的**观看密钥**不同。只向观众分享观看 URL。
:::

## 2. 确认推流目标

### 如何选择节点

:::note
使用 Free 套餐时无需执行此步骤。
:::

创建推流密钥时，请选择符合直播内容的节点。



选择节点后，从概览选项卡确认要使用的服务器的以下两项信息。

| OBS 项目 | 从控制台复制的值 |
| --- | --- |
| 服务器 | RTMP 推流（接入）URL |
| 推流密钥 | 推流密钥／机密值 |

:::caution
请像保护密码一样保护推流密钥。不要发送给第三方，也不要让其出现在直播画面或截图中。如发生泄露，请从控制台重新生成。
:::

## 3. 设置 OBS Studio

打开 OBS Studio 的**设置 → 直播**，按以下方式设置。

| 项目 | 设置 |
| --- | --- |
| 服务 | 自定义 |
| 服务器 | 控制台的 RTMP URL |
| 推流密钥 | 控制台中的推流机密值 |
| 视频编码器 | H.264（AVC） |
| 音频编码器 | AAC |
| 码率控制 | 推荐 CBR |
| 视频码率 | 初始建议 1,000～1,500 kbps，并保证组织合计不超过套餐上限 |
| 关键帧间隔 | 推荐 1 秒 |

服务器不会重新编码视频。选择不支持的视频或音频编解码器时，即使能够开始推流，观众也可能无法播放。支持的音频为 AAC 和 PCM（s16be）。**只有 RTSP 支持 PCM（s16be）推流，通过 RTSP 以外的方式观看时，音频会转换为 AAC。**已设置好的配置文件可从[低延迟 OBS 配置文件](/zh-hans/services/streaming-service/nyan-streaming/obs-profile/)下载。

:::caution
输入码率上限按**组织内所有同时直播的流的合计**计算，而不是按单个直播计算。多路推流时，请确保合计不超过上限。
:::

## 4. 开始推流并检查

1. 在 OBS Studio 中点击**开始直播**。
2. 确认控制台中相应密钥变为活跃状态，并显示输入码率。
3. 通过密钥详情中的**浏览器观看**或 **HLS 观看**检查视频和音频。
4. 在 VRChat 中使用时，将概览选项卡中的 RTSP / RTSPT URL 输入支持 AVPro 的播放器。

优先考虑低延迟时适合使用 RTSP 或 WebRTC (WHEP)，优先考虑浏览器兼容性时适合使用 HLS。VRChat 各播放器的设置请参阅[视频播放器设置与检查](/zh-hans/services/streaming-service/nyan-streaming/video-player-settings/)。

## 5. 结束直播

在 OBS Studio 中点击**停止直播**，并确认控制台中的密钥变为非活跃状态。如果启用了录制，处理完成后可从**存档**播放和下载。

## 仅使用浏览器推流

密钥详情中的**浏览器推流**可通过 WebRTC (WHIP) 直接发送摄像头、麦克风和屏幕共享内容。请使用 Edge / Chrome / Firefox 等支持 HTTPS 的浏览器，允许访问相关设备后开始推流。

## 遇到问题时

无法开始推流、没有视频或音频，或直播中途切换到限制画面时，请参阅[故障排除](/zh-hans/services/streaming-service/nyan-streaming/troubleshooting/)。

## 相关页面

- [如何选择节点](/zh-hans/services/streaming-service/nyan-streaming/nodes/)
- [推流方式（接入）](/zh-hans/services/streaming-service/nyan-streaming/streaming-methods/)
- [观看方式（播放）](/zh-hans/services/streaming-service/nyan-streaming/viewing-methods/)
- [套餐、限制与政策](/zh-hans/services/streaming-service/nyan-streaming/plans-and-limits/)
- [控制台使用指南](/zh-hans/services/streaming-service/nyan-streaming/dashboard/)
