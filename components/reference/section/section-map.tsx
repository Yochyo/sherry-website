import * as React from 'react';
import { PropsWithChildren } from 'react';
import { SectionContainer } from './section-container';

type Props = {
  title: string;
  elements: [string, string][];
};
export const SectionMap = (props: PropsWithChildren<Props>) => {
  return (
    <SectionContainer title={props.title}>
      <>
        {props.elements?.map(([k, v]) => (
          <div key={k} className="flex">
            <p className="min-w-6 font-semibold">{k}:</p>
            <p className="">{v}</p>
          </div>
        ))}
      </>
    </SectionContainer>
  );
};
