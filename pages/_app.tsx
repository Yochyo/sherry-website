import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Image from 'next/image';
import { Footer } from '../components/footer/footer';
import Navbar from '../components/navbar/navbar';
import { AboutBanner } from '../components/reference/about-banner';
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }: AppProps) {
  // @ts-ignore
  let C = Component as any;
  return (
    <div className="relative">
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
