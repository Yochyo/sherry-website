import * as React from 'react';
import { useTranslation } from 'next-i18next';

type Props = {};
export const FooterContact = (props: Props) => {
  const { t } = useTranslation('footer');
  return (
    <div className="">
      <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">{t('contact.title')}</h6>
      <p className="mb-2">
        <a href="#!" className="text-gray-600">
          {t('contact.ko-fi')}
        </a>
      </p>
      <p className="mb-2">
        <a href="https://twitter.com/SherryTheOcto" className="text-gray-600">
          {t('contact.twitter')}
        </a>
      </p>
    </div>
  );
};
