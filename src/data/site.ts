export const site = {
  name: 'hizzang',
  url: 'https://hizzang.github.io',
  email: 'hello@hizzang.dev',
  social: {
    github: 'https://github.com/hizzang',
    rss: '/rss.xml'
  },
  navItems: [
    { id: 'home', path: '/' },
    { id: 'about', path: '/about/' },
    { id: 'projects', path: '/projects/' },
    { id: 'blog', path: '/blog/' },
    { id: 'games', path: '/games/chef-defenders/' }
  ] as const
} as const;

export type NavItemId = (typeof site.navItems)[number]['id'];
