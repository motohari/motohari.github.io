import ja from './ja.json';
import en from './en.json';

const translations = { ja, en };

// 言語コード（'ja' または 'en'）を受け取り、対応するJSONデータを返す関数
export function getTranslations(lang) {
  return translations[lang] || translations.ja;
}

// 静的生成（getStaticPaths）で使う言語リスト
export const languages = ['ja', 'en'];
