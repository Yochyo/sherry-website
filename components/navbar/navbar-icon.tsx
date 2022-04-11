import * as React from 'react';

type Props = {};
export const NavbarIcon = (props: Props) => {
  return (
    <div className="flex flex-shrink-0 items-center">
      {/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" /> */}
      <div className="text-4xl text-cyan-500">Logo</div>
    </div>
  );
};
