// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
  site: 'https://wiki.krnk.org',
  // Bunny Storage は「ディレクトリ + index.html」配信なので末尾スラッシュに統一する
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    // mermaid は Starlight より前に登録する（remark プラグインを先に走らせるため）
    mermaid({ theme: 'default', autoTheme: true }),
    starlight({
      title: 'KuronekoServer Wiki',
      description: 'KuronekoServer の公式ドキュメント',
      logo: {
        src: './src/assets/logo.webp',
        alt: 'KuronekoServer',
        replacesTitle: false,
      },
      customCss: ['./src/styles/custom.css'],
      defaultLocale: 'root',
      locales: {
        root: { label: '日本語', lang: 'ja' },
        en: { label: 'English', lang: 'en' },
        ko: { label: '한국어', lang: 'ko' },
      },
      editLink: {
        baseUrl: 'https://github.com/KuronekoServer/wiki.krnk.org/edit/master/',
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/KuronekoServer/wiki.krnk.org' },
        { icon: 'discord', label: 'Discord', href: 'https://discord.krnk.org' },
      ],
      sidebar: [
        {
          slug: 'what-is-kuronekoserver',
          label: 'KuronekoServerとは',
          translations: { en: 'About KuronekoServer', ko: 'KuronekoServer란?' },
        },
        {
          slug: 'history',
          label: '運営履歴',
          translations: { en: 'History', ko: '업데이트 내역' },
        },
        {
          label: 'サービス',
          translations: { en: 'Services', ko: '서비스' },
          items: [
            {
              slug: 'services',
              label: 'サービス一覧',
              translations: { en: 'Service List', ko: '서비스 목록' },
            },
            {
              label: 'APIサービス',
              translations: { en: 'API Service', ko: 'API 서비스' },
              items: [{ autogenerate: { directory: 'services/api-service' } }],
            },
            {
              label: 'DiscordBOT',
              translations: { en: 'Discord Bots', ko: '디스코드 봇' },
              items: [
                {
                  slug: 'services/discordbot',
                  label: '概要',
                  translations: { en: 'Overview', ko: '개요' },
                },
                {
                  label: 'Artifacter',
                  items: [{ autogenerate: { directory: 'services/discordbot/artifacter' } }],
                },
                {
                  label: '読み上げBOT',
                  translations: { en: 'TTS Bot', ko: '읽어주기 봇' },
                  items: [{ autogenerate: { directory: 'services/discordbot/tts-bot' } }],
                },
                {
                  label: 'WebAuth BOT',
                  items: [{ autogenerate: { directory: 'services/discordbot/webauth-bot' } }],
                },
              ],
            },
            {
              label: 'Streamingサービス',
              translations: { en: 'Streaming Service', ko: '스트리밍 서비스' },
              items: [
                {
                  slug: 'services/streaming-service',
                  label: '概要',
                  translations: { en: 'Overview', ko: '개요' },
                },
                {
                  label: 'Nyan Streaming',
                  items: [{ autogenerate: { directory: 'services/streaming-service/nyan-streaming' } }],
                },
              ],
            },

            {
              label: 'Twitch翻訳',
              translations: { en: 'Twitch Translation', ko: 'Twitch 번역' },
              items: [{ autogenerate: { directory: 'services/twitch-translation' } }],
            },
          ],
        },
      ],
    }),
  ],
});
