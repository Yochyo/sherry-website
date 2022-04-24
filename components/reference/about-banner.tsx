import * as React from 'react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

type Props = {};
export const AboutBanner = (props: Props) => {
  const { t } = useTranslation('header');
  const [quote, setQuote] = useState('');
  const router = useRouter();

  useEffect(() => {
    const quotes = t('quotes', { returnObjects: true });
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, [router.asPath]);

  return (
    <div>
      <div className="bg-neutral-100 py-10 px-8 text-center text-blue-900 sm:px-16 sm:text-xl md:px-24 lg:px-64 lg:text-2xl">~ {quote} ~</div>
    </div>
  );
};
