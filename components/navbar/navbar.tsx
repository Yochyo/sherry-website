import * as React from 'react';
import { Disclosure } from '@headlessui/react';
import { NavbarIcon } from './navbar-icon';
import { NavbarMobileMenuButton } from './mobile/navbar-mobile-menu-button';
import { NavbarTabs } from './desktop/navbar-tabs';
import { NavbarMobileTabs } from './mobile/navbar-mobile-tabs';
import { useRouter } from 'next/router';
import { NavbarLanguageButton } from './navbar-language-button';

export type NavigationItem = {
  name: string;
  href: string;
};

const navigation: NavigationItem[] = [
  { name: 'tabs.home', href: '/' },
  { name: 'tabs.gallery', href: '/gallery' },
  { name: 'tabs.about', href: '/about' },
  { name: 'tabs.reference', href: '/ref' },
];

type Props = {};

export default function Navbar() {
  const router = useRouter();
  const path = router.asPath;

  return (
    <Disclosure as="nav" className="mb-2 bg-neutral-100 sm:mb-6 md:mb-12">
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
              <div className="absolute inset-y-0 right-0 flex items-center">
                {/* language change button*/}
                <NavbarLanguageButton />
              </div>
            </div>
          </div>
          <NavbarMobileTabs navigation={navigation} currentPath={path} />
        </>
      )}
    </Disclosure>
  );
}
