---
title: "노드 선택 가이드"
description: "Node01·Node02·Node03의 용도, 녹화 지원, 음악 이용 보고, 송출 시간 차이"
lastUpdated: 2026-08-22T00:00:00.000Z
sidebar:
  order: 3
---

# 노드 선택 가이드

Nyan Streaming에서는 스트림 키를 만들 때 송출 대상 노드를 선택합니다. 노드마다 대상 지역, 녹화 지원, 송출 시간 조건이 다르므로 송출 목적에 맞는 노드를 선택하세요.

## 용도별 빠른 선택

| 송출 내용·조건 | 선택할 노드 |
| --- | --- |
| JASRAC 또는 NexTone이 관리하는 음악을 사용 | **Node01** |
| 일반 송출, 이벤트, 전 세계 송출 또는 녹화 이용 | **Node02** |
| 낮은 비트레이트로 24시간을 초과하는 장시간 송출 | **Node03** |

:::tip
특별한 조건이 없고 어떤 노드를 사용할지 모르겠다면 **Node02**를 선택하세요.
:::

## Node01: 관리 음악을 사용하는 송출

Node01은 JASRAC 또는 NexTone이 관리하는 음악을 사용하는 송출을 위한 노드입니다. 송출과 시청은 모두 일본 국내로 제한됩니다.

Node01을 이용한 경우 사용한 음악을 대시보드의 [음악 이용 보고](/ko/services/streaming-service/nyan-streaming/dashboard/music-reports/)에서 **이용한 달의 말일까지** 보고해야 합니다. 기한 내에 보고하지 않거나 보고 내용에 문제가 있으면 계정 제재 또는 추가 요금의 대상이 될 수 있습니다.

:::caution[녹화를 이용할 수 없습니다]
JASRAC 및 NexTone과의 이용 허락 계약에 따라 Node01의 녹화 데이터를 이용자에게 제공할 수 없습니다.
:::

## Node02: 일반·전 세계 송출

Node02는 전 세계에 설치된 송출 서버를 이용하여 여러 국가와 지역에 안정적으로 전달하기 위한 표준 노드입니다. 일반 송출과 이벤트 송출뿐 아니라 녹화가 필요한 송출에도 적합합니다.

:::note[녹화를 지원하는 유일한 노드입니다]
녹화는 **Node02에서만** 이용할 수 있습니다. 녹화 이용 가능 여부, 저장 용량, 보존 기간은 요금제에 따라 다릅니다. 자세한 내용은 [아카이브](/ko/services/streaming-service/nyan-streaming/dashboard/archives/)를 확인하세요.
:::

## Node03: 낮은 비트레이트의 장시간 송출

Node03은 낮은 비트레이트로 장시간·장기간 연속 송출하기 위한 노드입니다. 24시간 연속 송출 제한의 대상이 아니므로 24시간을 초과하는 송출에도 이용할 수 있습니다.

:::note
Node03에서도 요금제별 비트레이트 제한, 스토리지 제한, 이용약관 등 송출 시간 이외의 조건은 계속 적용됩니다.
:::

:::caution[녹화를 이용할 수 없습니다]
Node03은 장시간 송출용 노드이므로 녹화 데이터가 서버 저장 공간을 과도하게 차지하지 않도록 녹화를 지원하지 않습니다.
:::

## 녹화 지원 비교

| 노드 | 녹화 | 이유·조건 |
| --- | --- | --- |
| **Node01** | 이용 불가 | JASRAC·NexTone과의 이용 허락 계약상 녹화 데이터를 제공할 수 없음 |
| **Node02** | 이용 가능 | 요금제의 녹화 지원, 저장 용량, 보존 기간 범위에서 이용 가능 |
| **Node03** | 이용 불가 | 장시간 녹화로 인한 서버 저장 공간 압박을 방지하기 위함 |

## 대시보드에서 선택하기

1. 대시보드에서 **스트림 키**를 엽니다.
2. **새 스트림 키**를 선택하고 용도에 맞는 노드와 리전을 지정합니다.
3. 생성한 키의 **개요** 탭을 열고 선택한 송출 URL을 OBS 등의 송출 프로그램에 설정합니다.

:::note
대시보드에서 노드를 표시하거나 선택하는 것만으로 연결 대상이 고정되지는 않습니다. 실제 연결 대상은 송출 프로그램에 입력한 URL로 결정됩니다.
:::

## 관련 페이지

- [시작 가이드](/ko/services/streaming-service/nyan-streaming/getting-started/)
- [스트림 키](/ko/services/streaming-service/nyan-streaming/dashboard/stream-keys/)
- [음악 이용 보고](/ko/services/streaming-service/nyan-streaming/dashboard/music-reports/)
- [요금제・제한・정책](/ko/services/streaming-service/nyan-streaming/plans-and-limits/)
- [서버 상태](/ko/services/streaming-service/nyan-streaming/dashboard/servers/)
