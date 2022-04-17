import * as React from 'react';

type Props = {};
export const FooterLinks = (props: Props) => {
  return (
    <div className="">
      <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">Links</h6>
      <p className="mb-2">
        <a href="#!" className="text-gray-600">
          Artists
        </a>
      </p>
      <p className="mb-2">
        <a href="#!" className="text-gray-600">
          Gallery
        </a>
      </p>
      <p>
        <a href="#!" className="text-gray-600">
          Thank you
        </a>
      </p>
    </div>
  );
};
