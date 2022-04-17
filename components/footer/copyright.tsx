import * as React from 'react';

type Props = {};
export const Copyright = (props: Props) => {
  return (
    <div className="bg-gray-200 p-6 text-center">
      <span>© {new Date().getUTCFullYear()} Copyright: </span>
      <a className="font-semibold text-gray-600" href="https://tailwind-elements.com/">
        Yochyo
      </a>
    </div>
  );
};
