import * as React from 'react';
import Example from '../navbar/test';

type Props = {
  text: string;
};
export const AboutBanner = (props: Props) => {
  return (
    <div>
      <Example />
      <div className="bg-neutral-100 py-10 px-8 text-center text-blue-900 sm:px-16 sm:text-xl md:px-24 lg:px-64 lg:text-2xl">~ {props.text} ~</div>
    </div>
  );
};
