import { Disclosure } from '@headlessui/react';
import { NavbarMobileMenuButton } from './mobile/navbar-mobile-menu-button';
import { NavbarTabs } from './desktop/navbar-tabs';
import { NavbarIcon } from './navbar-icon';
import { NavbarMobileTabPanel } from './mobile/navbar-mobile-tab-panel';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Gallery', href: '#', current: false },
  { name: 'About', href: '#', current: false },
  { name: 'Reference', href: '/ref', current: false },
];

export default function Example() {
  return (
    <Disclosure as="nav" className="mb-12 bg-neutral-100">
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
                <NavbarTabs navigation={navigation} />
              </div>
            </div>
          </div>
          <NavbarMobileTabPanel navigation={navigation} />
        </>
      )}
    </Disclosure>
  );
}
