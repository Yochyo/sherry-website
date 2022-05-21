import * as React from 'react';
import { useEffect } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import { GalleryPopover } from '../components/gallery/gallery-popover';
import { InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { GalleryUtils } from '../utils/gallery-utils';

export default function Gallery(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const toPath = (simpleName: string) => `/images/gallery/${props.gallery.find(it => it.simpleName == simpleName)?.name ?? ''}`;
  const router = useRouter();

  const refs: { [key: string]: HTMLDivElement | null } = {};

  const updateQueryParam = (file?: string) => router.push({ href: router.asPath, query: { ...router.query, q: file } }, undefined, { shallow: true });

  // on initial page load, scroll to selected image.
  useEffect(() => {
    refs[props.q]?.scrollIntoView({ block: 'center' });
  }, [props.q]);

  return (
    <div className="px-4 py-2 md:px-8 lg:px-16 lg:py-4">
      <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4">
        {props.gallery.map(({ name, simpleName }) => {
          return (
            <div
              key={simpleName}
              className="aspect-4-3 relative w-full overflow-hidden bg-neutral-200 bg-opacity-40"
              onClick={() => updateQueryParam(simpleName)}
              ref={ref => (refs[simpleName] = ref)}>
              <div className="absolute h-full w-full scale-100 transform bg-cover bg-center transition-all duration-1000 ease-in-out hover:scale-110">
                <Image src={`/images/gallery/${name}`} layout={'fill'} objectFit={'contain'} alt={''} />
              </div>
            </div>
          );
        })}
      </div>
      <GalleryPopover onClick={() => updateQueryParam(undefined)} src={toPath(props.q)} />
    </div>
  );
}

export async function getStaticProps({ locale }: any) {
  const gallery = GalleryUtils.files();
  return {
    props: {
      q: '1',
      ...(await serverSideTranslations(locale, ['header', 'footer'])),
      gallery,
    },
  };
}
