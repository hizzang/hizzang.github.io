import type { Translations } from '../types';

const ja: Translations = {
  meta: {
    title: 'hizzang — Platform Engineer & Builder',
    description:
      'ゲームプラットフォーム、インフラ、DevOps、自動化を扱うプラットフォームエンジニア hizzang の個人ブランドサイトです。'
  },
  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    blog: 'Blog',
    games: 'Games',
    github: 'GitHub'
  },
  footer: {
    poweredBy: 'Powered by Astro and GitHub Pages.'
  },
  common: {
    viewAll: 'すべて見る →',
    featured: 'Featured',
    about: 'About'
  },
  home: {
    heroTitle: 'プラットフォームを設計し、',
    heroTitleAccent: '経験を記録',
    heroTitleEnd: 'します。',
    expertiseEyebrow: 'Expertise',
    expertiseTitle: '専門領域',
    expertiseDesc:
      'ゲームプラットフォームからインフラ、自動化まで — 運用と開発をつなぐ領域を扱います。',
    projectsEyebrow: 'Projects',
    projectsTitle: '主要プロジェクト',
    postsEyebrow: 'Latest Posts',
    postsTitle: '最近の記事',
    ctaEyebrow: 'Connect',
    ctaTitle: '共に働き、学び、記録します。',
    ctaDesc:
      'プラットフォームエンジニアリング、インフラ設計、運用自動化に興味がある方は、GitHubでより多くのプロジェクトとコードをご覧ください。',
    aboutMe: 'About Me',
    readBlog: 'Read Blog',
    visitGithub: 'GitHub を見る'
  },
  about: {
    eyebrow: 'About',
    role: '役割',
    contact: '連絡先',
    contactGithub: 'GitHub',
    contactEmail: 'Email',
    contactLocation: 'Location',
    valuesEyebrow: 'Values',
    valuesTitle: '仕事の進め方',
    expertiseEyebrow: 'Expertise',
    expertiseTitle: '専門領域'
  },
  projects: {
    eyebrow: 'Projects',
    title: 'プロジェクト',
    lead: 'プラットフォームエンジニアリング、個人ブランドサイト、ゲームブランドサンプルなど、自ら構築したプロジェクトをまとめました。'
  },
  blog: {
    eyebrow: 'Blog',
    title: 'すべての記事'
  },
  site: {
    tagline: 'Platform Engineer · Builder · Writer',
    role: 'Platform Engineer',
    bio: 'ゲームプラットフォームとグローバルサービスインフラを設計・運用し、問題解決の過程とシステム設計の判断を記録しています。',
    longBio:
      '認証、ランチャー、運用ツールから CDN、デプロイ自動化、モニタリングまで、ゲームプラットフォーム全般を扱うプラットフォームエンジニアです。運用中に直面した問題と解決過程をブログとプロジェクトで共有し、Astro・GitHub Pages ベースの個人ウェブエコシステムを自ら構築しています。',
    location: 'Seoul, Korea',
    highlights: [
      { value: 'Platform', label: 'ゲームプラットフォームエンジニアリング' },
      { value: 'Global', label: 'グローバルサービス運用' },
      { value: 'DevOps', label: 'インフラ & 自動化' },
      { value: 'Open', label: '経験共有 & 記録' }
    ],
    expertise: [
      {
        icon: '🏗️',
        title: 'Platform',
        description: 'ゲームプラットフォーム、認証、ランチャー、運用ツール設計とグローバルサービス運用'
      },
      {
        icon: '⚡',
        title: 'Infrastructure',
        description: 'CDN、サーバー、モニタリング、デプロイ自動化と障害対応体制の構築'
      },
      {
        icon: '🤖',
        title: 'Automation',
        description: '業務自動化、レポート、データパイプラインと運用効率化'
      }
    ],
    projects: [
      {
        title: 'Chef Defenders',
        category: 'Game Brand Site',
        description:
          'Astroで実装したゲーム公式ブランドサイトサンプル。事前登録、キャラクター、メディア、お知らせセクションを含むフルページ体験。',
        tags: ['Astro', 'Game', 'Brand Site'],
        href: '/games/chef-defenders/',
        featured: true
      },
      {
        title: 'hizzang.dev',
        category: 'Personal Brand',
        description:
          'GitHub Pages と Astro で運営する個人ブランドウェブサイト。ブログ、プロジェクト、RSS を一つの静的サイトに統合。',
        tags: ['Astro', 'GitHub Pages', 'RSS'],
        href: '/',
        featured: true
      },
      {
        title: 'Platform Engineering Notes',
        category: 'Knowledge Base',
        description:
          '運用中に発生した問題と解決過程を体系的に整理する技術ブログ。再利用可能な経験を蓄積します。',
        tags: ['Platform', 'DevOps', 'Blog'],
        href: '/blog/',
        featured: false
      }
    ],
    values: [
      {
        title: '問題中心の記録',
        description: '美しい文章より、再利用可能な経験と意思決定の文脈を残します。'
      },
      {
        title: '小さく始めて段階的に改善',
        description: '最小限の構造で始め、必要に応じて機能と設計を拡張します。'
      },
      {
        title: '運用と開発の接続',
        description: 'コード、インフラ、運用プロセスを一つのシステムとして捉えます。'
      }
    ]
  }
};

export default ja;
