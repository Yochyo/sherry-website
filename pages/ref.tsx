import * as React from 'react';
import { Section } from '../components/reference/section/section';
import { SectionList } from '../components/reference/section/section-list';
import { SectionMap } from '../components/reference/section/section-map';

export default function Ref() {
  return (
    <div>
      <div className="pt-4">
        <Section title={'General information'} src={'/images/ee77526164b7ea432a79a36654bc82facbc7a6431acfff92edaab7b94cfd215a.jpg'} className="grid gap-y-2 divide-y divide-neutral-200">
          <SectionMap title={'General information'} elements={general} />
          <SectionList title={'Personality'} elements={personality} />
          <SectionList title={'Likes'} elements={likes} />
          <SectionList title={'Dislikes'} elements={dislikes} />
        </Section>
      </div>
      <div className="mt-8 mb-4 md:mt-32">
        <Section title={'Appearance'} src={'/images/431.jpg'} className="grid gap-y-2 divide-y divide-neutral-200">
          <SectionMap title={'General appearance'} elements={generalAppearance} />
          <SectionList title={''} elements={generalAppearance1} />
          <SectionList title={'Tails'} elements={tails} />
        </Section>
      </div>
    </div>
  );
}
// general
const general: [string, string][] = [
  ['Name', 'Sherry'],
  ['Gender', 'Female'],
  ['Age', '17-19 (her real age is a secret)'],
  ['Race', 'Foxtopus (half octopus, half fox)'],
];

const personality: string[] = [
  'Very trusting',
  'Very patient',
  'Optimistic & positive',
  'Makes friends very quickly',
  'Easy to make happy',
  "She always tries to appear happy, even when she isn't",
  'Would do everything for people that mean a lot to her',
  'Wants to become an elementary school teacher',
];
const likes: string[] = ['Reading books and novels', 'Flowers (has a garden full of beautiful flowers)', 'Fluffy and soft things', 'Beautiful outfits and uniforms'];
const dislikes: string[] = ['Egoism', 'Corruption and unfair treatment'];
// appearance

const generalAppearance: [string, string][] = [
  ['Eyes', 'Dark blue with violet tint'],
  ['Hair', 'Very dark brown'],
  ['Height', '165cm (5,41339 ft)'],
  ['Weight', '55kg (121,254 lb)'],
  ['Bust size', 'Small (~A cups)'],
  ['Nose size', 'Small'],
];
const generalAppearance1 = ['Her fox ears are slightly white at the end', 'Wears two red ribbons on the left side of her hair', 'Wears round glasses (sometimes)'];
const tails = [
  'Has 9 tails',
  'Her tails are fluffy like fox tails',
  'They have suckers on them',
  'She can slightly change the shape of her tails',
  'Can be used as tail pillow (a lap pillow but a million times softer), as blanket or to headpat',
];
