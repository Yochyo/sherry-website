import * as React from 'react';
import { useEffect, useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import { GalleryPopover } from '../components/gallery/gallery-popover';
import { InferGetStaticPropsType } from 'next';
import { getGallery } from '../utils/gallery';
import { useRouter } from 'next/router';

export default function Gallery(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const [image, setImage] = useState<string | undefined>(undefined);
  const toPath = (file: string) => `/images/gallery/${file}`;

  const router = useRouter();
  const [query, setQuery] = useState<string | undefined>();

  const refs: { [key: string]: HTMLDivElement | null } = {};

  const updateQueryParam = (query?: string) => router.push({ href: router.asPath, query: { ...router.query, query } }, undefined, { shallow: true });

  // show image if specified in query
  useEffect(() => {
    const imageName = props.gallery.fileNames.find(it => it == query);
    setImage(imageName ? toPath(imageName) : undefined);
  }, [props.gallery.fileNames, query]);

  // on initial page load, scroll to selected image. Update query on query change
  useEffect(() => {
    const q = router.query.query as string | undefined;
    if (query == undefined && q != undefined) refs[q]?.scrollIntoView();
    setQuery(q);
  }, [router.query]);

  return (
    <div className="px-4 py-2 md:px-8 lg:px-16 lg:py-4">
      <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4">
        {props.gallery.fileNames.map(file => (
          <div key={file} className="aspect-4-3 relative w-full overflow-hidden bg-neutral-200 bg-opacity-40" onClick={() => updateQueryParam(file)} ref={ref => (refs[file] = ref)}>
            <div className="absolute h-full w-full scale-100 transform bg-cover bg-center transition-all duration-1000 ease-in-out hover:scale-110">
              <Image src={`/images/gallery/${file}`} layout={'fill'} objectFit={'contain'} alt={file} />
            </div>
          </div>
        ))}
      </div>
      <GalleryPopover onClick={() => updateQueryParam(undefined)} src={image} />
    </div>
  );
}

export async function getStaticProps({ locale }: any) {
  const gallery = getGallery();
  return {
    props: {
      ...(await serverSideTranslations(locale, ['header', 'footer'])),
      gallery,
    },
  };
}
