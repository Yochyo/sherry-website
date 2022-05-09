import * as React from 'react';
import { PropsWithChildren } from 'react';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';

type Props = {
  url?: string;
};
export const Meta = (props: PropsWithChildren<Props>) => {
  const url = 'https://yochyo.me';
  const { t } = useTranslation('header');

  return (
    <Head>
      <title>{t('meta.title')}</title>
      <meta name="description" content={t('meta.description')} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={t('meta.title')} />
      <meta property="og:description" content={t('meta.description')} />
      <meta property="og:image" content={url + props.url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Sherry" />
      <meta name="twitter:title" content={t('meta.title')} />
      <meta name="twitter:description" content={t('meta.description')} />
      <meta name="twitter:image" content={url + props.url} key={'image'} />
    </Head>
  );
};
