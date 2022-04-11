import * as React from 'react';
import { NavigationItem } from '../models/navigation-item';
import { NavbarButton } from './navbar-button';

type Props = {
  navigation: NavigationItem[];
};
export const NavbarTabs = (props: Props) => {
  return (
    <div className="hidden sm:ml-6 sm:block">
      <div className="flex space-x-4">
        {props.navigation.map(item => (
          <NavbarButton key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
};
