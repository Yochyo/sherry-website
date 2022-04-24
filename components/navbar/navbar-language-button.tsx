import * as React from 'react';
import { Fragment } from 'react';
import { useTranslation } from 'next-i18next';
import classNames from 'classnames';
import { Menu, Transition } from '@headlessui/react';
import { GlobeAltIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import Link from 'next/link';

type Props = {};
export const NavbarLanguageButton = (_: Props) => {
  const { t, i18n } = useTranslation('header');
  const router = useRouter();
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center px-4 py-2 text-sm font-medium text-gray-700">
          <GlobeAltIcon className="mr-2 h-5 w-5" aria-hidden="true" />
          {t(`languages.${i18n.language}`)}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items className="absolute right-0 mt-2 origin-top-right bg-white shadow-lg">
          <div className="py-1">
            {Object.keys(t('languages', { returnObjects: true }))
              .filter(key => key != i18n.language)
              .map(it => (
                <Link href={router.asPath} key={it} locale={it}>
                  <a className={classNames('block px-4 py-2 text-sm text-gray-700')}>{t(`languages.${it}`)}</a>
                </Link>
              ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
