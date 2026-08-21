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
    mermaid({ theme: "default", autoTheme: true }),
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
        Header: "./src/components/Header.astro",
        Sidebar: "./src/components/Sidebar.astro",
        Footer: "./src/components/Footer.astro",
      },
      defaultLocale: "root",
      locales: {
        root: { label: "日本語", lang: "ja" },
        en: { label: "English", lang: "en" },
        ko: { label: "한국어", lang: "ko" },
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
          translations: { en: "About KuronekoServer", ko: "KuronekoServer란?" },
        },
        {
          slug: "history",
          label: "運営履歴",
          translations: { en: "History", ko: "업데이트 내역" },
        },
        {
          label: "サービス",
          translations: { en: "Services", ko: "서비스" },
          collapsed: true,
          items: [
            {
              slug: "services",
              label: "サービス一覧",
              translations: { en: "Service List", ko: "서비스 목록" },
            },
            {
              label: "APIサービス",
              translations: { en: "API Service", ko: "API 서비스" },
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
              translations: { en: "Discord Bots", ko: "디스코드 봇" },
              collapsed: true,
              items: [
                {
                  slug: "services/discordbot",
                  label: "概要",
                  translations: { en: "Overview", ko: "개요" },
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
                  translations: { en: "TTS Bot", ko: "읽어주기 봇" },
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
              translations: { en: "Streaming Service", ko: "스트리밍 서비스" },
              collapsed: true,
              items: [
                {
                  slug: "services/streaming-service",
                  label: "概要",
                  translations: { en: "Overview", ko: "개요" },
                },
                {
                  label: "Nyan Streaming",
                  collapsed: true,
                  items: [
                    {
                      label: "はじめに",
                      translations: { en: "Introduction", ko: "시작하기" },
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
                          },
                        },
                        {
                          slug: "services/streaming-service/nyan-streaming/overview",
                          label: "機能概要",
                          translations: {
                            en: "Feature Overview",
                            ko: "기능 개요",
                          },
                        },
                      ],
                    },
                    {
                      label: "配信・視聴",
                      translations: {
                        en: "Streaming & Playback",
                        ko: "송출・시청",
                      },
                      collapsed: true,
                      items: [
                        {
                          slug: "services/streaming-service/nyan-streaming/streaming-methods",
                          label: "配信方法",
                          translations: {
                            en: "Streaming Methods",
                            ko: "송출 방법",
                          },
                        },
                        {
                          slug: "services/streaming-service/nyan-streaming/viewing-methods",
                          label: "視聴方法",
                          translations: {
                            en: "Viewing Methods",
                            ko: "시청 방법",
                          },
                        },
                        {
                          slug: "services/streaming-service/nyan-streaming/codecs",
                          label: "対応コーデック",
                          translations: {
                            en: "Supported Codecs",
                            ko: "지원 코덱",
                          },
                        },
                        {
                          slug: "services/streaming-service/nyan-streaming/obs-profile",
                          label: "低遅延OBSプロファイル",
                          translations: {
                            en: "Low-latency OBS Profile",
                            ko: "저지연 OBS 프로필",
                          },
                        },
                        {
                          slug: "services/streaming-service/nyan-streaming/video-player-settings",
                          label: "ビデオプレイヤー設定",
                          translations: {
                            en: "Video Player Settings",
                            ko: "비디오 플레이어 설정",
                          },
                        },
                      ],
                    },
                    {
                      label: "ダッシュボード",
                      translations: { en: "Dashboard", ko: "대시보드" },
                      collapsed: true,
                      items: [
                        {
                          slug: "services/streaming-service/nyan-streaming/dashboard",
                          label: "概要",
                          translations: { en: "Overview", ko: "개요" },
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
                      },
                      collapsed: true,
                      items: [
                        {
                          slug: "services/streaming-service/nyan-streaming/plans-and-limits",
                          label: "プラン・制限",
                          translations: {
                            en: "Plans & Limits",
                            ko: "요금제・제한",
                          },
                        },
                        {
                          slug: "services/streaming-service/nyan-streaming/troubleshooting",
                          label: "トラブルシューティング",
                          translations: {
                            en: "Troubleshooting",
                            ko: "문제 해결",
                          },
                        },
                        {
                          slug: "services/streaming-service/nyan-streaming/api",
                          label: "公開API",
                          translations: { en: "Public API", ko: "공개 API" },
                        },
                      ],
                    },
                  ],
                },
              ],
            },

            {
              label: "Twitch翻訳",
              translations: { en: "Twitch Translation", ko: "Twitch 번역" },
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
