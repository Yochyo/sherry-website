import * as React from 'react';
import { PropsWithChildren } from 'react';
import { SectionContainer } from './section-container';

type Props = {
  title: string;
  elements?: string[];
};
export const SectionList = (props: PropsWithChildren<Props>) => {
  return (
    <SectionContainer title={props.title}>
      <>
        {props.elements?.map(e => (
          <>
            <p className="pl-24">- {e}</p>
          </>
        ))}
      </>
    </SectionContainer>
  );
};
