import * as React from 'react';
import classNames from 'classnames';
import { NavigationItem } from '../navbar';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

type Props = {
  item: NavigationItem;
  current: boolean;
};
export const NavbarButton = (props: Props) => {
  const { t } = useTranslation('header');
  return (
    <div className={classNames(props.item.disabled && 'pointer-events-none')}>
      <Link href={props.item.href} prefetch={false}>
        <a className={classNames(props.current ? 'border-b-2' : 'hover:border-b-2', props.item.disabled ? 'text-gray-500' : 'text-blue-900', 'border-pink-300 px-3 py-2 text-lg hover:no-underline')}>
          {t(props.item.name)}
        </a>
      </Link>
    </div>
  );
};
