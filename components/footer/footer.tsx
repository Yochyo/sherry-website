import * as React from 'react';
import { Copyright } from './copyright';
import { FooterAbout } from './footer-about';
import { FooterLinks } from './footer-links';
import { FooterContact } from './footer-contact';

type Props = {};
export const Footer = (props: Props) => {
  return (
    <footer className="bg-gray-100 text-center text-gray-600 lg:text-left">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <div className="col-span-2 px-12">
            <FooterAbout />
          </div>
          <FooterLinks />
          <FooterContact />
        </div>
      </div>
      <Copyright />
    </footer>
  );
};
