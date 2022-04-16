import * as React from 'react';
import classNames from 'classnames';
import { NavigationItem } from '../models/navigation-item';

type Props = {
  item: NavigationItem;
};
export const NavbarButton = (props: Props) => {
  return (
    <a
      key={props.item.name}
      href={props.item.href}
      className={classNames(props.item.current ? 'border-b-2 border-pink-300' : 'text-grey-900 hover:border-b-2 hover:border-pink-300', 'px-3 py-2 text-lg text-blue-900')}
      aria-current={props.item.current ? 'page' : undefined}>
      {props.item.name}
    </a>
  );
};
