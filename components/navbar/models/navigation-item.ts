import { AriaAttributes } from 'react';

export type NavigationItem = {
  name: string;
  href: string;
  current: AriaAttributes['aria-current'];
};

export const navigation: NavigationItem[] = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
];
