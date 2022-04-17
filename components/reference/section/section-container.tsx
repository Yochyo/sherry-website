import * as React from 'react';
import { PropsWithChildren } from 'react';

type Props = {
  title: string;
};
export const SectionContainer = (props: PropsWithChildren<Props>) => {
  return (
    <div>
      <div className="flex flex-col pr-1">
        <h2 className="pb-2 text-xl text-blue-900">{props.title}</h2>
        <div className="grid gap-y-1">{props.children}</div>
      </div>
    </div>
  );
};
