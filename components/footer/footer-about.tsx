import * as React from 'react';
import { useTranslation } from 'next-i18next';

type Props = {};
export const FooterAbout = (props: Props) => {
  const { t } = useTranslation('footer');
  return (
    <div>
      <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">{t('backstory.title')}</h6>
      <p>{t('backstory.description')}</p>
    </div>
  );
};
