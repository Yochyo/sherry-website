import * as React from 'react';
import { PropsWithChildren } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

type Props = {
  src: string;
  className: string;
};
export const Section = (props: PropsWithChildren<Props>) => {
  return (
    <div className="grid md:grid-cols-2">
      <div className="relative ml-4 hidden md:block">
        <Image layout={'fill'} objectFit={'cover'} src={props.src} objectPosition={'top'} draggable={false} quality={90} />
      </div>
      <div className={classNames('ml-2 sm:ml-4 md:ml-12 lg:ml-16', props.className)}>{props.children}</div>
    </div>
  );
};
