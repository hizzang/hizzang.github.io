# hizzang — Personal Brand Website

Astro와 GitHub Pages로 운영하는 개인 브랜드 웹사이트입니다.

## URL

- https://hizzang.github.io/ko/ (한국어, 기본)
- https://hizzang.github.io/en/ (English)
- https://hizzang.github.io/ja/ (日本語)

## i18n

한국어(ko), English(en), 日本語(ja) 3개 언어를 지원합니다. URL prefix(`/ko/`, `/en/`, `/ja/`)로 언어가 구분되며, 헤더의 언어 스위처로 전환할 수 있습니다.

| 언어 | 폰트 |
|------|------|
| 한국어 | Noto Sans KR |
| English | Inter |
| 日本語 | Noto Sans JP |

번역 파일: `src/i18n/locales/`

## 소개

플랫폼 엔지니어링, 인프라, DevOps, 자동화 경험을 소개하고 기록하는 개인 브랜드 사이트입니다.

- **Home** — 브랜드 소개, 전문 영역, 주요 프로젝트, 최근 글
- **About** — 프로필, 연락처, 일하는 방식
- **Projects** — 프로젝트 및 작업물
- **Blog** — 기술 글과 운영 기록
- **Games** — Chef Defenders 게임 브랜드 사이트 샘플

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
├── public/
│   └── favicon.svg
└── src/
    ├── data/
    │   └── site.ts          # 사이트 설정 (이름, 소개, 프로젝트 등)
    ├── content/
    │   └── blog/
    ├── layouts/
    │   └── BaseLayout.astro
    ├── pages/
    │   ├── index.astro      # 홈 (브랜드 랜딩)
    │   ├── about.astro
    │   ├── projects/
    │   ├── blog/
    │   ├── games/
    │   └── rss.xml.js
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

## 사이트 정보 수정

`src/data/site.ts`에서 이름, 소개, 전문 영역, 프로젝트, 소셜 링크 등을 수정할 수 있습니다.

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

## 배포

`master` 브랜치에 push하면 GitHub Actions가 Astro 사이트를 빌드하고 `gh-pages` 브랜치에 배포합니다.

### GitHub Pages 설정 (최초 1회)

Pages 소스를 **`gh-pages` 브랜치**로 설정해야 배포 결과가 라이브 사이트에 반영됩니다.

**방법 A — GitHub UI**

1. 저장소 → **Settings** → **Pages**
2. **Build and deployment** → **Source** → **Deploy from a branch**
3. Branch: **`gh-pages`** / **`/ (root)`** 선택 → Save

**방법 B — CLI**

```bash
gh api --method PUT repos/hizzang/hizzang.github.io/pages \
  -f build_type=legacy \
  -f 'source[branch]=gh-pages' \
  -f 'source[path]=/'
```

또는 Actions 배포를 사용하려면 Source를 **GitHub Actions**로 선택합니다.

### 디자인 시스템

Spotify에서 영감을 받은 다크 테마 가이드는 [`design.md`](./design.md)를 참고하세요.
