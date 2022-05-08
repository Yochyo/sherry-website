import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Image from 'next/image';
import * as React from 'react';
import { AboutBanner } from '../components/reference/about-banner';
import { Meta } from '../components/meta';
import Navbar from '../components/navbar/navbar';
import { Footer } from '../components/footer/footer';
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }: AppProps) {
  // @ts-ignore
  let C = Component as any;

  return (
    <div className="relative">
      <Meta url={'/images/meta/twitter-card.jpg'} />
      <Navbar />
      <AboutBanner />
      {/* Background desktop */}
      <div className="pointer-events-none hidden opacity-20 md:block">
        <Image src="/background.jpg" layout={'fill'} objectFit={'cover'} objectPosition={'top'} alt="background" />
      </div>
      {/* background mobile */}
      <div className="pointer-events-none opacity-20 md:hidden">
        <Image src="/background-mobile.jpg" layout={'fill'} objectFit={'cover'} objectPosition={'top'} alt="mobile-background" />
      </div>
      <C {...pageProps} />
      <Footer />
    </div>
  );
}

export default appWithTranslation(MyApp);
