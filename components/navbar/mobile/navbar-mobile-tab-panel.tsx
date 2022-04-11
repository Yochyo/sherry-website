import * as React from 'react';
import { Disclosure } from '@headlessui/react';
import { NavigationItem } from '../models/navigation-item';
import { NavbarMobileTab } from './navbar-mobile-tab';

type Props = {
  navigation: NavigationItem[];
};
export const NavbarMobileTabPanel = ({ navigation }: Props) => {
  return (
    <Disclosure.Panel className="sm:hidden">
      <div className="space-y-1 px-2 pt-2 pb-3">
        {navigation.map(item => (
          <NavbarMobileTab key={item.name} item={item} />
        ))}
      </div>
    </Disclosure.Panel>
  );
};
