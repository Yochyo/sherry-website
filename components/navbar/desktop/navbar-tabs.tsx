import * as React from 'react';
import { NavbarButton } from './navbar-button';
import { NavigationItem } from '../navbar';

type Props = {
  navigation: NavigationItem[];
  currentPath: string;
};
export const NavbarTabs = (props: Props) => {
  return (
    <div className="hidden sm:ml-6 sm:block">
      <div className="flex space-x-4">
        {props.navigation.map(item => (
          <NavbarButton key={item.name} item={item} current={props.currentPath == item.href} />
        ))}
      </div>
    </div>
  );
};
