import * as React from 'react';
import { useTranslation } from 'next-i18next';

type Props = {};
export const Copyright = (props: Props) => {
  const { t } = useTranslation('footer');
  return (
    <div className="bg-gray-200 p-6 text-center">
      <span>
        © {new Date().getUTCFullYear()} {t('copyright.copyright')}:{' '}
      </span>
      <a className="font-semibold text-gray-600" href="https://github.com/Yochyo">
        {t('copyright.name')}
      </a>
    </div>
  );
};
