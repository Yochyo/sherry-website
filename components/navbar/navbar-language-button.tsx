import * as React from 'react';
import { GlobeAltIcon } from '@heroicons/react/solid';
import { useTranslation } from 'next-i18next';

type Props = {};
export const NavbarLanguageButton = (props: Props) => {
  const { i18n } = useTranslation('header');
  return (
    <div>
      <GlobeAltIcon onClick={() => i18n.changeLanguage('ja')}></GlobeAltIcon>
    </div>
  );
};
