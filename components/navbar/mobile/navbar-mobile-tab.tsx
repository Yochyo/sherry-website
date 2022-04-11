import * as React from 'react';
import classNames from 'classnames';
import { Disclosure } from '@headlessui/react';
import { NavigationItem } from '../models/navigation-item';

type Props = {
  item: NavigationItem;
};
export const NavbarMobileTab = ({ item }: Props) => {
  return (
    <Disclosure.Button
      key={item.name}
      as="a"
      href={item.href}
      className={classNames(item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium')}
      aria-current={item.current ? 'page' : undefined}>
      {item.name}
    </Disclosure.Button>
  );
};
