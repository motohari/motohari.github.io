import { defineConfig } from 'astro/config';

export default defineConfig({
  // あなたのGitHub PagesのURLを設定（SEO用のsitemapやcanonical URL生成に必須）
  site: 'https://github.io',
  
  // 多言語（i18n）の基本設定
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
