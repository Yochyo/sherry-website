import '../styles/globals.css';
import type { AppProps } from 'next/app';

import Image from 'next/image';

function MyApp({ Component, pageProps }: AppProps) {
  // @ts-ignore
  let C = Component as any;

  return (
    <div className="relative">
      <div className="pointer-events-none opacity-20">
        <Image src="/background3.jpg" layout={'fill'} objectFit={'cover'} quality={100} objectPosition={'top'} />
      </div>
      {/* <div className="pointer-events-none absolute inset-0 opacity-30"> */}
      {/*   <Image src="/background.jpg" layout={'fill'} objectFit={'cover'} /> */}
      {/* </div> */}
      <C {...pageProps} />
    </div>
  );
}

export default MyApp;
