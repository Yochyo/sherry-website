import * as React from 'react';
import { Section } from '../components/reference/section/section';
import { SectionList } from '../components/reference/section/section-list';
import { SectionMap } from '../components/reference/section/section-map';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function Ref() {
  const { t } = useTranslation('ref');
  return (
    <div>
      <div className="pt-4">
        <Section src={'/images/ee77526164b7ea432a79a36654bc82facbc7a6431acfff92edaab7b94cfd215a.jpg'} className="grid gap-y-2 divide-y divide-neutral-200">
          <SectionMap title={t('general.title')} elements={t('general.items', { returnObjects: true })} />
          <SectionList title={t('personality.title')} elements={t('personality.items', { returnObjects: true })} />
          <SectionList title={t('likes.title')} elements={t('likes.items', { returnObjects: true })} />
          <SectionList title={t('dislikes.title')} elements={t('dislikes.items', { returnObjects: true })} />
          <SectionList title={t('food.likes.title')} elements={t('food.likes.items', { returnObjects: true })} />
          <SectionList title={t('food.dislikes.title')} elements={t('food.dislikes.items', { returnObjects: true })} />
        </Section>
      </div>
      <div className="mt-8 mb-4 md:mt-32">
        <Section src={'/images/landscape/431.jpg'} className="grid gap-y-2 divide-y divide-neutral-200">
          <SectionMap title={t('appearance1.title')} elements={t('appearance1.items', { returnObjects: true })} />
          <SectionList title={''} elements={t('appearance2', { returnObjects: true })} />
          <SectionList title={t('tails.title')} elements={t('tails.items', { returnObjects: true })} />
        </Section>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['header', 'footer', 'ref'])),
    },
  };
}
