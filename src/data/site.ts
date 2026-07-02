export const site = {
  name: 'hizzang',
  title: 'hizzang — Platform Engineer & Builder',
  description:
    '게임 플랫폼, 인프라, DevOps, 자동화를 다루는 플랫폼 엔지니어 hizzang의 개인 브랜드 사이트입니다.',
  url: 'https://hizzang.github.io',
  tagline: 'Platform Engineer · Builder · Writer',
  role: 'Platform Engineer',
  bio: '게임 플랫폼과 글로벌 서비스 인프라를 설계·운영하며, 문제 해결 과정과 시스템 설계 판단을 기록합니다.',
  longBio:
    '인증·런처·운영 도구부터 CDN, 배포 자동화, 모니터링까지 게임 플랫폼 전반을 다루는 플랫폼 엔지니어입니다. 운영 중 마주친 문제와 해결 과정을 블로그와 프로젝트로 공유하며, Astro·GitHub Pages 기반의 개인 웹 생태계를 직접 구축합니다.',
  email: 'hello@hizzang.dev',
  location: 'Seoul, Korea',
  social: {
    github: 'https://github.com/hizzang',
    rss: '/rss.xml'
  },
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about/' },
    { label: 'Projects', href: '/projects/' },
    { label: 'Blog', href: '/blog/' },
    { label: 'Games', href: '/games/chef-defenders/' }
  ],
  expertise: [
    {
      icon: '🏗️',
      title: 'Platform',
      description: '게임 플랫폼, 인증, 런처, 운영 도구 설계와 글로벌 서비스 운영'
    },
    {
      icon: '⚡',
      title: 'Infrastructure',
      description: 'CDN, 서버, 모니터링, 배포 자동화와 장애 대응 체계 구축'
    },
    {
      icon: '🤖',
      title: 'Automation',
      description: '업무 자동화, 리포트, 데이터 파이프라인과 운영 효율화'
    }
  ],
  highlights: [
    { value: 'Platform', label: '게임 플랫폼 엔지니어링' },
    { value: 'Global', label: '글로벌 서비스 운영' },
    { value: 'DevOps', label: '인프라 & 자동화' },
    { value: 'Open', label: '경험 공유 & 기록' }
  ],
  projects: [
    {
      title: 'Chef Defenders',
      category: 'Game Brand Site',
      description:
        'Astro로 구현한 게임 공식 브랜드 사이트 샘플. 사전등록, 캐릭터, 미디어, 공지 섹션을 포함한 풀 페이지 경험.',
      tags: ['Astro', 'Game', 'Brand Site'],
      href: '/games/chef-defenders/',
      featured: true
    },
    {
      title: 'hizzang.dev',
      category: 'Personal Brand',
      description:
        'GitHub Pages와 Astro로 운영하는 개인 브랜드 웹사이트. 블로그, 프로젝트, RSS를 하나의 정적 사이트로 통합.',
      tags: ['Astro', 'GitHub Pages', 'RSS'],
      href: '/',
      featured: true
    },
    {
      title: 'Platform Engineering Notes',
      category: 'Knowledge Base',
      description:
        '운영 중 발생한 문제와 해결 과정을 체계적으로 정리하는 기술 블로그. 재사용 가능한 경험을 축적합니다.',
      tags: ['Platform', 'DevOps', 'Blog'],
      href: '/blog/',
      featured: false
    }
  ],
  values: [
    {
      title: '문제 중심 기록',
      description: '멋진 문장보다 재사용 가능한 경험과 의사결정 맥락을 남깁니다.'
    },
    {
      title: '작게 시작, 점진적 개선',
      description: '최소한의 구조로 시작하고, 필요에 따라 기능과 설계를 확장합니다.'
    },
    {
      title: '운영과 개발의 연결',
      description: '코드와 인프라, 운영 프로세스를 하나의 시스템으로 바라봅니다.'
    }
  ]
} as const;
