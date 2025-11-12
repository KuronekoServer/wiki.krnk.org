---
title: 配信情報
description: 
published: true
date: 2025-11-12T08:35:33.025Z
tags: 
editor: markdown
dateCreated: 2025-11-12T08:30:54.684Z
---


```mermaid
flowchart TD
    %% ===============================
    %% 配信全体構成図（全サーバー視聴可能）
    %% ===============================

    %% === 配信元 ===
    subgraph SRC["配信元 (RTMP Input)"]
        A["各配信ユーザー"]
    end

    %% === Node02 ===
    subgraph NODE02["Node02"]
        A --> IN["as-in-01.nyst.live<br/>SRT publish"]
        A --> SG["as-sg-01.nyst.live<br/>SRT publish"]
        A --> KC["us-kc-01.nyst.live<br/>SRT publish"]
    end

    %% === KCノード ===
    subgraph KCNODE["us-kc-01"]
        KC --> DE["🇩🇪 eu-de-01.nyst.live<br/>SRT publish"]
        KC --> FR["🇫🇷 eu-fr-01.nyst.live<br/>SRT publish"]
        KC --> LAX["🇺🇸 us-lax-01.nyst.live<br/>SRT publish"]
        KC --> MIA["🇺🇸 us-mia-01.nyst.live<br/>SRT publish"]
        KC --> WDC["🇺🇸 us-wdc-01.nyst.live<br/>SRT publish"]
    end

    %% === スタイリング ===
    classDef src fill:#334155,stroke:#94a3b8,color:#fff,stroke-width:2px;
    classDef asia fill:#1e3a8a,stroke:#60a5fa,color:#fff,stroke-width:2px;
    classDef kc fill:#7c2d12,stroke:#f97316,color:#fff,stroke-width:2px;
    classDef edge fill:#064e3b,stroke:#34d399,color:#fff,stroke-width:1.5px;

    class SRC src;
    class NODE02 asia;
    class KCNODE kc;
    class IN,SG,KC,DE,FR,LAX,MIA,WDC edge;
```
