import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Image from 'next/image';
import { Footer } from '../components/footer/footer';
import Navbar from '../components/navbar/navbar';

function MyApp({ Component, pageProps }: AppProps) {
  // @ts-ignore
  let C = Component as any;
  return (
    <div className="relative">
      <Navbar />
      {/* Background desktop */}
      <div className="pointer-events-none hidden opacity-20 md:block">
        <Image src="/background.jpg" layout={'fill'} quality={100} objectFit={'cover'} objectPosition={'top'} />
      </div>
      {/* background mobile */}
      <div className="pointer-events-none opacity-20 md:hidden">
        <Image src="/background-mobile.jpg" layout={'fill'} quality={100} objectFit={'cover'} objectPosition={'top'} />
      </div>

      <C {...pageProps} />

      <Footer />
    </div>
  );
}

export default MyApp;
