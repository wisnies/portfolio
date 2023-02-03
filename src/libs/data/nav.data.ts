import type { NavItem } from '../types/navItem.type';

export const navData: NavItem[] = [
  {
    href: '/',
    label: {
      enGB: 'home',
      plPL: 'strona główna',
    },
    value: 0,
  },
  {
    href: '/about',
    label: {
      enGB: 'about me',
      plPL: 'o mnie',
    },
    value: 1,
  },
  {
    href: '/projects',
    label: {
      enGB: 'projects',
      plPL: 'projekty',
    },
    value: 2,
  },
  {
    href: '/contact',
    label: {
      enGB: 'contact',
      plPL: 'kontakt',
    },
    value: 3,
  },
  {
    href: '/game',
    label: {
      enGB: 'play game',
      plPL: 'zagraj w grę',
    },
    value: 4,
  },
];
