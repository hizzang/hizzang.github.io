import type { Translations } from '../types';

const en: Translations = {
  meta: {
    title: 'hizzang — Platform Engineer & Builder',
    description:
      'Personal brand site of hizzang, a platform engineer working on game platforms, infrastructure, DevOps, and automation.'
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
    viewAll: 'View all →',
    featured: 'Featured',
    about: 'About'
  },
  home: {
    heroTitle: 'I design platforms and',
    heroTitleAccent: 'document the journey',
    heroTitleEnd: '.',
    expertiseEyebrow: 'Expertise',
    expertiseTitle: 'Areas of Focus',
    expertiseDesc:
      'From game platforms to infrastructure and automation — connecting operations with engineering.',
    projectsEyebrow: 'Projects',
    projectsTitle: 'Featured Projects',
    postsEyebrow: 'Latest Posts',
    postsTitle: 'Recent Articles',
    ctaEyebrow: 'Connect',
    ctaTitle: 'Build, learn, and share together.',
    ctaDesc:
      'Interested in platform engineering, infrastructure design, or ops automation? Find more projects and code on GitHub.',
    aboutMe: 'About Me',
    readBlog: 'Read Blog',
    visitGithub: 'Visit GitHub'
  },
  about: {
    eyebrow: 'About',
    role: 'Role',
    contact: 'Contact',
    contactGithub: 'GitHub',
    contactEmail: 'Email',
    contactLocation: 'Location',
    valuesEyebrow: 'Values',
    valuesTitle: 'How I Work',
    expertiseEyebrow: 'Expertise',
    expertiseTitle: 'Areas of Focus'
  },
  projects: {
    eyebrow: 'Projects',
    title: 'Projects',
    lead: 'A collection of platform engineering work, personal brand sites, and game brand samples built hands-on.'
  },
  blog: {
    eyebrow: 'Blog',
    title: 'All Posts'
  },
  site: {
    tagline: 'Platform Engineer · Builder · Writer',
    role: 'Platform Engineer',
    bio: 'I design and operate game platforms and global service infrastructure, documenting problems and system design decisions along the way.',
    longBio:
      'A platform engineer covering authentication, launchers, ops tooling, CDN, deployment automation, and monitoring. I share operational lessons through blog posts and projects, and maintain a personal web ecosystem on Astro and GitHub Pages.',
    location: 'Seoul, Korea',
    highlights: [
      { value: 'Platform', label: 'Game platform engineering' },
      { value: 'Global', label: 'Global service operations' },
      { value: 'DevOps', label: 'Infrastructure & automation' },
      { value: 'Open', label: 'Sharing & documentation' }
    ],
    expertise: [
      {
        icon: '🏗️',
        title: 'Platform',
        description: 'Game platforms, auth, launchers, ops tools, and global service operations'
      },
      {
        icon: '⚡',
        title: 'Infrastructure',
        description: 'CDN, servers, monitoring, deployment automation, and incident response'
      },
      {
        icon: '🤖',
        title: 'Automation',
        description: 'Workflow automation, reporting, data pipelines, and operational efficiency'
      }
    ],
    projects: [
      {
        title: 'Chef Defenders',
        category: 'Game Brand Site',
        description:
          'A full-page game brand site sample built with Astro — pre-registration, characters, media, and notices.',
        tags: ['Astro', 'Game', 'Brand Site'],
        href: '/games/chef-defenders/',
        featured: true
      },
      {
        title: 'hizzang.dev',
        category: 'Personal Brand',
        description:
          'Personal brand website on GitHub Pages and Astro — blog, projects, and RSS in one static site.',
        tags: ['Astro', 'GitHub Pages', 'RSS'],
        href: '/',
        featured: true
      },
      {
        title: 'Platform Engineering Notes',
        category: 'Knowledge Base',
        description:
          'A technical blog documenting operational problems and solutions — building reusable experience over time.',
        tags: ['Platform', 'DevOps', 'Blog'],
        href: '/blog/',
        featured: false
      }
    ],
    values: [
      {
        title: 'Problem-first documentation',
        description: 'Capture reusable experience and decision context over polished prose.'
      },
      {
        title: 'Start small, iterate',
        description: 'Begin with minimal structure and expand features and design as needed.'
      },
      {
        title: 'Bridge ops and engineering',
        description: 'Treat code, infrastructure, and operational process as one system.'
      }
    ]
  }
};

export default en;
