import * as React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Image } from '../components/utils/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

export default function Error404() {
  const router = useRouter();
  const { t } = useTranslation('common');

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="m-8 border-b-2 border-black border-opacity-30 py-4 px-4 font-semibold">404</h1>
      <Image src={'/sad.png'} trueHeight={100} trueWidth={100} height="8rem" className="mb-4" />
      <button onClick={() => router.back()}>
        <p>{t('404.error_404')}</p>
        <h2 className="mb-4 mt-2 mr-2 text-xl font-semibold uppercase">{t('404.go_back')}</h2>
      </button>
    </div>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'header', 'footer'])),
    },
  };
}
