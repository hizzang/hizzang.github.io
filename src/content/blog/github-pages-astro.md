---
title: "GitHub Pages와 Astro로 기술 블로그 시작하기"
description: "정적 HTML 블로그에서 Astro 기반 기술 블로그로 전환하면서 얻는 장점과 기본 운영 방식을 정리합니다."
pubDate: 2026-07-02
tags: ["Astro", "GitHub Pages", "Blog"]
draft: false
---

GitHub Pages는 개인 기술 블로그를 시작하기에 좋은 선택입니다. 별도 서버를 운영하지 않아도 되고, GitHub 저장소에 글과 코드를 함께 관리할 수 있습니다.

하지만 글이 늘어나면 단순 HTML 방식은 관리가 어려워집니다. 새 글을 추가할 때마다 홈 화면 링크를 직접 수정해야 하고, 태그나 RSS 같은 기능도 직접 구현해야 합니다.

## Astro로 전환하는 이유

Astro는 정적 사이트 생성기입니다. Markdown으로 글을 작성하면 빌드 시점에 HTML로 변환해 GitHub Pages에 배포할 수 있습니다.

장점은 다음과 같습니다.

- Markdown 기반 글 작성
- 자동 글 목록 생성
- 태그와 카테고리 확장 가능
- RSS 피드 제공
- 빠른 정적 페이지 제공
- React, Vue, Svelte 컴포넌트도 필요할 때만 사용 가능

## 운영 방식

이 블로그는 다음 흐름으로 운영됩니다.

```text
src/content/blog/ 에 Markdown 글 작성
→ GitHub에 push
→ GitHub Actions에서 npm install, npm run build 실행
→ dist 결과물을 GitHub Pages에 배포
```

## 앞으로 추가할 기능

현재는 기본 블로그 구조를 갖춘 상태입니다. 이후 다음 기능을 추가하면 더 완성도 높은 기술 블로그가 됩니다.

- 태그별 글 목록
- 검색 기능
- Giscus 댓글
- 코드 하이라이트 개선
- 다크 모드
- 커스텀 도메인

작게 시작하고, 글이 쌓일수록 구조를 개선하는 것이 개인 블로그 운영에는 가장 현실적입니다.
