import * as React from 'react';
import { Disclosure } from '@headlessui/react';
import { NavbarMobileButton } from './navbar-mobile-button';
import { NavigationItem } from '../navbar';

type Props = {
  navigation: NavigationItem[];
  currentPath: string;
};
export const NavbarMobileTabs = (props: Props) => {
  return (
    <Disclosure.Panel className="sm:hidden">
      <div className="space-y-1 px-2 pt-2 pb-3">
        {props.navigation.map(item => (
          <NavbarMobileButton key={item.name} item={item} current={props.currentPath == item.href} />
        ))}
      </div>
    </Disclosure.Panel>
  );
};
