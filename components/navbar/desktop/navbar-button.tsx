import * as React from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { NavigationItem } from '../navbar';

type Props = {
  item: NavigationItem;
  current: boolean;
};
export const NavbarButton = (props: Props) => {
  return (
    <Link href={props.item.href} prefetch={false}>
      <a className={classNames(props.current ? 'border-b-2' : 'hover:border-b-2', 'border-pink-300 px-3 py-2 text-lg text-blue-900 hover:no-underline')}>{props.item.name}</a>
    </Link>
  );
};
