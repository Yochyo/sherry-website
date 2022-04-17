import * as React from 'react';
import { Disclosure } from '@headlessui/react';
import { NavbarMobileTab } from './navbar-mobile-tab';
import { NavigationItem } from '../navbar';

type Props = {
  navigation: NavigationItem[];
  currentPath: string;
};
export const NavbarMobileTabPanel = (props: Props) => {
  return (
    <Disclosure.Panel className="sm:hidden">
      <div className="space-y-1 px-2 pt-2 pb-3">
        {props.navigation.map(item => (
          <NavbarMobileTab key={item.name} item={item} current={props.currentPath == item.href} />
        ))}
      </div>
    </Disclosure.Panel>
  );
};
