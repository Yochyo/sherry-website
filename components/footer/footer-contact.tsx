import * as React from 'react';

type Props = {};
export const FooterContact = (props: Props) => {
  return (
    <div className="">
      <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">Contact</h6>
      <p className="mb-2">
        <a href="#!" className="text-gray-600">
          Ko-fi
        </a>
      </p>
      <p className="mb-2">
        <a href="#!" className="text-gray-600">
          Twitter
        </a>
      </p>
      <p className="">
        <a href="#!" className="text-gray-600">
          Skeb
        </a>
      </p>
    </div>
  );
};
