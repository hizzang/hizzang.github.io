# hizzang blog

Astro와 GitHub Pages로 운영하는 개인 기술 블로그입니다.

## URL

- https://hizzang.github.io

## 기술 스택

- Astro
- Markdown Content Collections
- GitHub Pages
- GitHub Actions
- RSS

## 프로젝트 구조

```text
.
├── .github/workflows/deploy.yml
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── src/
    ├── content/
    │   ├── config.ts
    │   └── blog/
    │       ├── github-pages-astro.md
    │       └── platform-engineering-notes.md
    ├── layouts/
    │   └── BaseLayout.astro
    ├── pages/
    │   ├── index.astro
    │   ├── about.astro
    │   ├── rss.xml.js
    │   └── blog/
    │       ├── index.astro
    │       └── [...slug].astro
    └── styles/
        └── global.css
```

## 로컬 실행

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
npm run preview
```

## 글 추가 방법

`src/content/blog/` 아래에 Markdown 파일을 추가합니다.

```md
---
title: "글 제목"
description: "글 요약"
pubDate: 2026-07-02
tags: ["Astro", "DevOps"]
draft: false
---

본문을 Markdown으로 작성합니다.
```

`master` 브랜치에 push하면 GitHub Actions가 Astro 사이트를 빌드하고 GitHub Pages에 배포합니다.

## 향후 개선 후보

- 태그별 글 목록
- 검색 기능
- Giscus 댓글
- 다크 모드
- 코드 하이라이트 테마
- 커스텀 도메인
