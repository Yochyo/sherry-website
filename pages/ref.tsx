import * as React from 'react';
import { AboutBanner } from '../components/reference/about-banner';
import { Section } from '../components/reference/section/section';
import { SectionList } from '../components/reference/section/section-list';
import { SectionMap } from '../components/reference/section/section-map';

type Props = {
  text: string;
};
export default function Ref(props: Props) {
  return (
    <div>
      <AboutBanner text={"Should sherry's history be written here? or maybe a random quote?"} />
      {/* <Title text={'Reference'} /> */}
      <div className="py-8">
        <Section title={'General information'} src={'/images/ee77526164b7ea432a79a36654bc82facbc7a6431acfff92edaab7b94cfd215a.jpg'} className="grid gap-y-2 divide-y divide-neutral-200">
          <SectionMap title={'General information'} elements={general} />
          <SectionList title={'Personality'} elements={personality} />
          <SectionList title={'Personality'} elements={personality} />
          <SectionList title={'Personality'} elements={personality} />
          <SectionList title={'Likes'} elements={likes} />
          <SectionList title={'Dislikes'} elements={dislikes} />
        </Section>
      </div>
    </div>
  );
}

const general: [string, string][] = [
  ['Name', 'Sherry'],
  ['Gender', 'Female'],
  ['Age', 'Late tens'],
  ['Race', 'Foxtopus (half octopus, half fox)'],
];

const personality: string[] = [
  'Very trusting',
  'Optimistic & positive',
  'Makes friends very quickly',
  'Very patient',
  'She always tries to appear happy',
  'Even the smallest things make her happy',
  'Would do everything for people that mean a lot to her',
  'Wants to become an elementary school teacher',
];
const likes: string[] = ['Reading books and novels', 'flowers (has a garden full of beautiful flowers)', 'fluffy and soft things', 'beautiful outfits and uniforms'];
const dislikes: string[] = ['Egoism', 'Corruption'];
