import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://motohari.github.io',
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
    routing: {
      // デフォルト言語でも /ja/ のプレフィックスを付ける設定
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false
    }
  }
});
