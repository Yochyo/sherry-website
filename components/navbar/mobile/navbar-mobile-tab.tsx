import * as React from 'react';
import classNames from 'classnames';
import { Disclosure } from '@headlessui/react';
import { NavigationItem } from '../navbar';
import { useTranslation } from 'next-i18next';

type Props = {
  item: NavigationItem;
  current: boolean;
};
export const NavbarMobileTab = (props: Props) => {
  const { t } = useTranslation('header');
  return (
    <Disclosure.Button
      key={props.item.name}
      as="a"
      href={props.item.href}
      className={classNames(props.current ? 'border-b-2 bg-neutral-200' : 'hover:border-b-2', 'block border-pink-300 px-3 py-2 text-base font-medium text-blue-900 hover:no-underline')}
      aria-current={props.current ? 'page' : undefined}>
      {t(props.item.name)}
    </Disclosure.Button>
  );
};
