import * as React from 'react';
import classNames from 'classnames';
import { Disclosure } from '@headlessui/react';
import { NavigationItem } from '../navbar';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

type Props = {
  item: NavigationItem;
  current: boolean;
};
export const NavbarMobileButton = (props: Props) => {
  const { t } = useTranslation('header');
  return (
    <div className={classNames(props.item.disabled && 'pointer-events-none')}>
      <Link href={props.item.href} passHref>
        <Disclosure.Button
          key={props.item.name}
          as="a"
          className={classNames(
            props.current ? 'border-b-2 bg-neutral-200' : 'hover:border-b-2',
            props.item.disabled ? 'text-gray-500' : 'text-blue-900',
            'block border-pink-300 px-3 py-2 text-base font-medium hover:no-underline'
          )}
          aria-current={props.current ? 'page' : undefined}>
          {t(props.item.name)}
        </Disclosure.Button>
      </Link>
    </div>
  );
};
