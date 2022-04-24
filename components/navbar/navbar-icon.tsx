import * as React from 'react';
import { Image } from '../utils/image';

type Props = {};
export const NavbarIcon = (props: Props) => {
  return (
    <div className="flex flex-shrink-0 items-center">
      <Image src="/logo.png" trueWidth={1200} trueHeight={1440} height="3rem" alt={'logo'} />
    </div>
  );
};
