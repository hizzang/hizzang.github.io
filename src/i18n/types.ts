import type { Locale } from './config';

export type SiteHighlight = { value: string; label: string };
export type SiteExpertise = { icon: string; title: string; description: string };
export type SiteProject = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  href: string;
  featured: boolean;
};
export type SiteValue = { title: string; description: string };

export type Translations = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    about: string;
    projects: string;
    blog: string;
    games: string;
    github: string;
  };
  footer: {
    poweredBy: string;
  };
  common: {
    viewAll: string;
    featured: string;
    about: string;
  };
  home: {
    heroTitle: string;
    heroTitleAccent: string;
    heroTitleEnd: string;
    expertiseEyebrow: string;
    expertiseTitle: string;
    expertiseDesc: string;
    projectsEyebrow: string;
    projectsTitle: string;
    postsEyebrow: string;
    postsTitle: string;
    ctaEyebrow: string;
    ctaTitle: string;
    ctaDesc: string;
    aboutMe: string;
    readBlog: string;
    visitGithub: string;
  };
  about: {
    eyebrow: string;
    role: string;
    contact: string;
    contactGithub: string;
    contactEmail: string;
    contactLocation: string;
    valuesEyebrow: string;
    valuesTitle: string;
    expertiseEyebrow: string;
    expertiseTitle: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    lead: string;
  };
  blog: {
    eyebrow: string;
    title: string;
  };
  site: {
    tagline: string;
    role: string;
    bio: string;
    longBio: string;
    location: string;
    highlights: SiteHighlight[];
    expertise: SiteExpertise[];
    projects: SiteProject[];
    values: SiteValue[];
  };
};

export type TranslationMap = Record<Locale, Translations>;
