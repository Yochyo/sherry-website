import * as React from 'react';
import { Disclosure } from '@headlessui/react';
import { NavbarIcon } from './navbar-icon';
import { NavbarMobileMenuButton } from './mobile/navbar-mobile-menu-button';
import { NavbarTabs } from './desktop/navbar-tabs';
import { NavbarMobileTabPanel } from './mobile/navbar-mobile-tab-panel';
import { useRouter } from 'next/router';

export type NavigationItem = {
  name: string;
  href: string;
};

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About', href: '/about' },
  { name: 'Reference', href: '/ref' },
];

type Props = {};

export default function Navbar() {
  const router = useRouter();
  const path = router.asPath;

  return (
    <Disclosure as="nav" className="bg-neutral-100">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* left side of the navbar */}
              <div className="absolute inset-y-0 left-0 flex items-center">
                {/* nav logo on desktop*/}
                <div className="hidden sm:block">
                  <NavbarIcon />
                </div>
                {/* hamburger on mobile */}
                <div className="sm:hidden">
                  <NavbarMobileMenuButton open={open} />
                </div>
              </div>

              {/* center of the navbar */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
                {/* logo if mobile */}
                <div className="block sm:hidden">
                  <NavbarIcon />
                </div>
                {/* tabs if desktop */}
                <NavbarTabs navigation={navigation} currentPath={path} />
              </div>
            </div>
          </div>
          <NavbarMobileTabPanel navigation={navigation} currentPath={path} />
        </>
      )}
    </Disclosure>
  );
}
