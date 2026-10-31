// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import mermaid from "astro-mermaid";

// https://astro.build/config
export default defineConfig({
  site: "https://wiki.krnk.org",
  // Bunny Storage は「ディレクトリ + index.html」配信なので末尾スラッシュに統一する
  trailingSlash: "always",
  build: { format: "directory" },
  integrations: [
    // mermaid は Starlight より前に登録する（remark プラグインを先に走らせるため）
    mermaid({
      theme: "default",
      autoTheme: true,
      mermaidConfig: { flowchart: { wrappingWidth: 240 } },
    }),
    starlight({
      title: "KuronekoServer Wiki",
      description: "KuronekoServer の公式ドキュメント",
      favicon: "/favicon.ico",
      logo: {
        src: "./src/assets/logo.webp",
        alt: "KuronekoServer",
        replacesTitle: false,
      },
      customCss: ["./src/styles/custom.css"],
      components: {
        Head: "./src/components/Head.astro",
        Header: "./src/components/Header.astro",
        Sidebar: "./src/components/Sidebar.astro",
        Footer: "./src/components/Footer.astro",
      },
      defaultLocale: "root",
      locales: {
        root: { label: "日本語", lang: "ja" },
        en: { label: "English", lang: "en" },
        ko: { label: "한국어", lang: "ko" },
        "zh-hans": { label: "简体中文", lang: "zh-CN" },
        "zh-hant": { label: "繁體中文", lang: "zh-TW" },
      },
      editLink: {
        baseUrl: "https://github.com/KuronekoServer/wiki.krnk.org/edit/master/",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/KuronekoServer/wiki.krnk.org",
        },
        { icon: "discord", label: "Discord", href: "https://discord.krnk.org" },
      ],
      sidebar: [
        {
          slug: "what-is-kuronekoserver",
          label: "KuronekoServerとは",
          translations: {
            en: "About KuronekoServer",
            ko: "KuronekoServer란?",
            "zh-CN": "关于 KuronekoServer",
            "zh-TW": "關於 KuronekoServer",
          },
        },
        {
          slug: "history",
          label: "運営履歴",
          translations: {
            en: "History",
            ko: "업데이트 내역",
            "zh-CN": "运营历史",
            "zh-TW": "營運歷史",
          },
        },
        {
          label: "サービス",
          translations: {
            en: "Services",
            ko: "서비스",
            "zh-CN": "服务",
            "zh-TW": "服務",
          },
          collapsed: true,
          items: [
            {
              slug: "services",
              label: "サービス一覧",
              translations: {
                en: "Service List",
                ko: "서비스 목록",
                "zh-CN": "服务列表",
                "zh-TW": "服務列表",
              },
            },
            {
              label: "APIサービス",
              translations: {
                en: "API Service",
                ko: "API 서비스",
                "zh-CN": "API 服务",
                "zh-TW": "API 服務",
              },
              collapsed: true,
              items: [
                {
                  autogenerate: {
                    directory: "services/api-service",
                    collapsed: true,
                  },
                },
              ],
            },
            {
              label: "DiscordBOT",
              translations: {
                en: "Discord Bots",
                ko: "디스코드 봇",
                "zh-CN": "Discord 机器人",
                "zh-TW": "Discord 機器人",
              },
              collapsed: true,
              items: [
                {
                  slug: "services/discordbot",
                  label: "概要",
                  translations: {
                    en: "Overview",
                    ko: "개요",
                    "zh-CN": "概述",
                    "zh-TW": "概述",
                  },
                },
                {
                  label: "Artifacter",
                  collapsed: true,
                  items: [
                    {
                      autogenerate: {
                        directory: "services/discordbot/artifacter",
                        collapsed: true,
                      },
                    },
                  ],
                },
                {
                  label: "読み上げBOT",
                  translations: {
                    en: "TTS Bot",
                    ko: "읽어주기 봇",
                    "zh-CN": "语音朗读机器人",
                    "zh-TW": "語音朗讀機器人",
                  },
                  collapsed: true,
                  items: [
                    {
                      autogenerate: {
                        directory: "services/discordbot/tts-bot",
                        collapsed: true,
                      },
                    },
                  ],
                },
                {
                  label: "WebAuth BOT",
                  collapsed: true,
                  items: [
                    {
                      autogenerate: {
                        directory: "services/discordbot/webauth-bot",
                        collapsed: true,
                      },
                    },
                  ],
                },
              ],
            },
            {
              label: "Streamingサービス",
              translations: {
                en: "Streaming Service",
                ko: "스트리밍 서비스",
                "zh-CN": "流媒体服务",
                "zh-TW": "串流服務",
              },
              collapsed: true,
              items: [
                {
                  slug: "services/streaming-service",
                  label: "概要",
                  translations: {
                    en: "Overview",
                    ko: "개요",
                    "zh-CN": "概述",
                    "zh-TW": "概述",
                  },
                },
                {
                  label: "Nyan Streaming",
                  collapsed: true,
                  items: [
                    {
                      label: "はじめに",
                      translations: {
                        en: "Introduction",
                        ko: "시작하기",
                        "zh-CN": "入门",
                        "zh-TW": "入門",
                      },
                      collapsed: true,
                      items: [
                        {
                          slug: "services/streaming-service/nyan-streaming",
                          label: "Nyan Streaming",
                        },
                        {
                          slug: "services/streaming-service/nyan-streaming/getting-started",
                          label: "入門ガイド",
                          translations: {
                            en: "Getting Started",
                            ko: "시작 가이드",
                            "zh-CN": "入门指南",
                            "zh-TW": "入門指南",
                          },
                        },
                        {
                          slug: "services/streaming-service/nyan-streaming/nodes",
                          label: "ノードの選び方",
                          translations: {
                            en: "Choosing a Node",
                            ko: "노드 선택 가이드",
                            "zh-CN": "选择节点",
                            "zh-TW": "選擇節點",
                          },
                        },
                        {
                          slug: "services/streaming-service/nyan-streaming/overview",
                          label: "機能概要",
                          translations: {
                            en: "Feature Overview",
                            ko: "기능 개요",
                            "zh-CN": "功能概述",
                            "zh-TW": "功能概述",
                          },
                        },
                      ],
                    },
                    {
                      label: "配信・視聴",
                      translations: {
                        en: "Streaming & Playback",
                        ko: "송출・시청",
                        "zh-CN": "推流与观看",
                        "zh-TW": "推流與觀看",
                      },
                      collapsed: true,
                      items: [
                        {
                          slug: "services/streaming-service/nyan-streaming/streaming-methods",
                          label: "配信方法",
                          translations: {
                            en: "Streaming Methods",
                            ko: "송출 방법",
                            "zh-CN": "推流方法",
                            "zh-TW": "推流方法",
                          },
                        },
                        {
                          slug: "services/streaming-service/nyan-streaming/viewing-methods",
                          label: "視聴方法",
                          translations: {
                            en: "Viewing Methods",
                            ko: "시청 방법",
                            "zh-CN": "观看方法",
                            "zh-TW": "觀看方法",
                          },
                        },
                        {
                          slug: "services/streaming-service/nyan-streaming/codecs",
                          label: "対応コーデック",
                          translations: {
                            en: "Supported Codecs",
                            ko: "지원 코덱",
                            "zh-CN": "支持的编解码器",
                            "zh-TW": "支援的編解碼器",
                          },
                        },
                        {
                          slug: "services/streaming-service/nyan-streaming/obs-profile",
                          label: "低遅延OBSプロファイル",
                          translations: {
                            en: "Low-latency OBS Profile",
                            ko: "저지연 OBS 프로필",
                            "zh-CN": "低延迟 OBS 配置",
                            "zh-TW": "低延遲 OBS 設定檔",
                          },
                        },
                        {
                          slug: "services/streaming-service/nyan-streaming/video-player-settings",
                          label: "ビデオプレイヤー設定",
                          translations: {
                            en: "Video Player Settings",
                            ko: "비디오 플레이어 설정",
                            "zh-CN": "视频播放器设置",
                            "zh-TW": "影片播放器設定",
                          },
                        },
                        {
                          slug: "services/streaming-service/nyan-streaming/vrchat-world-domains",
                          label: "VRChatワールドのドメイン設定",
                          translations: {
                            en: "VRChat World Domain Settings",
                            ko: "VRChat 월드 도메인 설정",
                            "zh-CN": "VRChat 世界域名设置",
                            "zh-TW": "VRChat 世界網域設定",
                          },
                        },
                      ],
                    },
                    {
                      label: "ダッシュボード",
                      translations: {
                        en: "Dashboard",
                        ko: "대시보드",
                        "zh-CN": "控制台",
                        "zh-TW": "控制台",
                      },
                      collapsed: true,
                      items: [
                        {
                          slug: "services/streaming-service/nyan-streaming/dashboard",
                          label: "概要",
                          translations: {
                            en: "Overview",
                            ko: "개요",
                            "zh-CN": "概述",
                            "zh-TW": "概述",
                          },
                        },
                        {
                          autogenerate: {
                            directory:
                              "services/streaming-service/nyan-streaming/dashboard",
                            collapsed: true,
                          },
                        },
                      ],
                    },
                    {
                      label: "運用・リファレンス",
                      translations: {
                        en: "Operations & Reference",
                        ko: "운영・참조",
                        "zh-CN": "运维与参考",
                        "zh-TW": "維運與參考",
                      },
                      collapsed: true,
                      items: [
                        {
                          slug: "services/streaming-service/nyan-streaming/plans-and-limits",
                          label: "プラン・制限",
                          translations: {
                            en: "Plans & Limits",
                            ko: "요금제・제한",
                            "zh-CN": "套餐与限制",
                            "zh-TW": "方案與限制",
                          },
                        },
                        {
                          slug: "services/streaming-service/nyan-streaming/troubleshooting",
                          label: "トラブルシューティング",
                          translations: {
                            en: "Troubleshooting",
                            ko: "문제 해결",
                            "zh-CN": "故障排查",
                            "zh-TW": "疑難排解",
                          },
                        },
                        {
                          slug: "services/streaming-service/nyan-streaming/api",
                          label: "公開API",
                          translations: {
                            en: "Public API",
                            ko: "공개 API",
                            "zh-CN": "公共 API",
                            "zh-TW": "公開 API",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },

            {
              label: "Twitch翻訳",
              translations: {
                en: "Twitch Translation",
                ko: "Twitch 번역",
                "zh-CN": "Twitch 翻译",
                "zh-TW": "Twitch 翻譯",
              },
              collapsed: true,
              items: [
                {
                  autogenerate: {
                    directory: "services/twitch-translation",
                    collapsed: true,
                  },
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
