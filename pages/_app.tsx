import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Image from 'next/image';
import { Footer } from '../components/footer/footer';
import Navbar from '../components/navbar/navbar';
import { useEffect, useState } from 'react';
import { AboutBanner } from '../components/reference/about-banner';

function MyApp({ Component, pageProps }: AppProps) {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  // @ts-ignore
  let C = Component as any;
  return (
    <div className="relative">
      <div className="mb-2 sm:mb-6 md:mb-12">
        <Navbar />
      </div>
      <AboutBanner text={quote} />

      {/* Background desktop */}
      <div className="pointer-events-none hidden opacity-20 md:block">
        <Image src="/background.jpg" layout={'fill'} quality={100} objectFit={'cover'} objectPosition={'top'} alt="background" />
      </div>
      {/* background mobile */}
      <div className="pointer-events-none opacity-20 md:hidden">
        <Image src="/background-mobile.jpg" layout={'fill'} quality={100} objectFit={'cover'} objectPosition={'top'} alt="mobile-background" />
      </div>

      <C {...pageProps} />

      <div>
        <Footer />
      </div>
    </div>
  );
}

const quotes = [
  'A soft tail a day takes the doctor away.',
  'The most beautiful flower is the one you are holding.',
  'D-do you want to sleep on my tails >.<',
  '☆*: .｡. o(≧▽≦)o .｡.:*☆',
  "It's Sherry, not cherry (>'-'<).",
];

export default MyApp;
