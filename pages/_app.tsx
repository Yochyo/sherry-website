import '../styles/globals.css';
import type { AppProps } from 'next/app';

import Image from 'next/image';
import { Footer } from '../components/footer/footer';

function MyApp({ Component, pageProps }: AppProps) {
  // @ts-ignore
  let C = Component as any;

  return (
    <div className="relative">
      <div className="pointer-events-none hidden opacity-20 md:block">
        <Image src="/background3.jpg" layout={'fill'} quality={100} objectFit={'cover'} objectPosition={'top'} />
      </div>
      <div className="pointer-events-none opacity-20 md:hidden">
        <Image src="/background3.jpg" layout={'fill'} quality={100} objectFit={'cover'} objectPosition={'left'} />
      </div>
      {/* <div className="pointer-events-none absolute inset-0 opacity-30"> */}
      {/*   <Image src="/background.jpg" layout={'fill'} objectFit={'cover'} /> */}
      {/* </div> */}
      <C {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
