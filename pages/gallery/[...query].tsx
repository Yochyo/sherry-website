import * as React from 'react';
import { useEffect } from 'react';
import { qs } from 'qs-props';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GalleryUtils } from '../../utils/gallery-utils';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { GalleryPopover } from '../../components/gallery/gallery-popover';

const { getQueryStringProps, makeQuery } = qs(['q'] as const, 'query');

export default function Gallery(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const toPath = (simpleName: string) => `/images/gallery/${props.gallery.find((file: any) => file.simpleName == simpleName)?.name ?? ''}`;
  const router = useRouter();

  const refs: { [key: string]: HTMLDivElement | null } = {};

  const updateQueryParam = (file?: string) => router.push({ pathname: '/gallery', query: makeQuery({ q: file ?? '1' }) }, `/gallery?q=${file ?? '1'}`, { shallow: true });

  // on initial page load, scroll to selected image.
  useEffect(() => {
    refs[props.q]?.scrollIntoView({ block: 'center' });
  }, [props.q]);

  return (
    <div className="px-4 py-2 md:px-8 lg:px-16 lg:py-4">
      <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4">
        {props.gallery.map((file: any) => {
          return (
            <div
              key={file.simpleName}
              className="aspect-4-3 relative w-full overflow-hidden bg-neutral-200 bg-opacity-40"
              onClick={() => updateQueryParam(file.simpleName)}
              ref={ref => (refs[file.simpleName] = ref)}>
              <div className="absolute h-full w-full scale-100 transform bg-cover bg-center transition-all duration-1000 ease-in-out hover:scale-110">
                <Image src={`/images/gallery/${file.name}`} layout={'fill'} objectFit={'contain'} alt={''} />
              </div>
            </div>
          );
        })}
      </div>
      <GalleryPopover onClick={() => updateQueryParam(undefined)} src={toPath(props.q)} />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: GalleryUtils.simpleFileNames().map(q => ({
      params: makeQuery({ q }),
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ctx => {
  const gallery = GalleryUtils.files();
  // { q: string }
  const props = getQueryStringProps(ctx);

  return {
    props: {
      ...props,
      ...(await serverSideTranslations(ctx.locale as string, ['header', 'footer'])),
      gallery,
    },
  };
};
