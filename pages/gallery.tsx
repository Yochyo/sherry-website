import * as React from 'react';
import { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import { GalleryPopover } from '../components/gallery/gallery-popover';
import { InferGetStaticPropsType } from 'next';
import { getGallery } from '../utils/gallery';

export default function Gallery(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const [openPopover, setOpenPopover] = useState(false);
  const [popoverImage, setPopoverImage] = useState<string>('');

  return (
    <div className="px-4 py-2 md:px-8 lg:px-16 lg:py-4">
      <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4">
        {props.gallery.fileNames.map(file => (
          <div
            key={file}
            className="aspect-4-3 relative w-full bg-neutral-200 bg-opacity-40"
            onClick={() => {
              setPopoverImage(`/images/landscape/${file}`);
              setOpenPopover(true);
            }}>
            <Image src={`/images/gallery/${file}`} layout={'fill'} objectFit={'contain'} alt={file} />
          </div>
        ))}
      </div>
      <GalleryPopover open={openPopover} setOpen={setOpenPopover} src={popoverImage} />
    </div>
  );
}

export async function getStaticProps({ locale }: any) {
  const gallery = getGallery();
  console.log(gallery);
  return {
    props: {
      ...(await serverSideTranslations(locale, ['header', 'footer'])),
      gallery,
    },
  };
}
