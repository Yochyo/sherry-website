import * as React from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Disclosure } from '@headlessui/react';

type Props = {
  open: boolean;
};
export const NavbarMobileMenuButton = (props: Props) => {
  return (
    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
      <span className="sr-only">Open main menu</span>
      {props.open ? <XIcon className="block h-6 w-6" aria-hidden="true" /> : <MenuIcon className="block h-6 w-6" aria-hidden="true" />}
    </Disclosure.Button>
  );
};