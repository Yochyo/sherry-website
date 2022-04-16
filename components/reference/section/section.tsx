import * as React from 'react';
import { PropsWithChildren } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

type Props = {
  title: string;
  src: string;
  className: string;
};
export const Section = (props: PropsWithChildren<Props>) => {
  return (
    <div className="grid md:grid-cols-2">
      <div className="relative mr-16 hidden md:block">
        <Image layout={'fill'} objectFit={'cover'} src={props.src} objectPosition={'top'} draggable={false} />
      </div>
      {/* <h1 className="text-2xl text-blue-900">{props.title}</h1> */}
      <div className={classNames('ml-4 sm:ml-8 md:ml-12 lg:ml-16', props.className)}>{props.children}</div>
    </div>
  );
};
