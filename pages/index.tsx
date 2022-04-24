import NextImage from 'next/image';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  const [rightImage, setRightImage] = useState<string | undefined>(undefined);
  const { t } = useTranslation('footer', { useSuspense: false });

  useEffect(() => {
    setRightImage(rightImages[Math.floor(Math.random() * rightImages.length)]);
  }, []);
  return (
    <div>
      <div className="px-1 py-1 sm:px-2 sm:py-2 md:px-4 md:py-4">
        {/* <NextImage src="/images/43c3ef772b8ced76b2e784c6f5981ebc11dcae91c34c9f0d3a213fbf9e2d31bc.png" width="100%" resizeBy="width" trueWidth={3821} trueHeight={2256} alt="img" /> */}
        <div className="grid gap-2 md:grid-cols-2 md:gap-4">
          <NextImage src="/images/landscape/43c3ef772b8ced76b2e784c6f5981ebc11dcae91c34c9f0d3a213fbf9e2d31bc.jpg" layout={'responsive'} width="2560" height="1440" alt="img" />
          {rightImage ? <NextImage src={rightImage} layout={'responsive'} width="2560" height="1440" alt="img" /> : <div />}
        </div>
      </div>
    </div>
  );
}

const rightImages = [
  '/images/landscape/8a073fafd1d500225b9123546ee6773ead9c3ddab1635544ec8425a48bea7346.jpg',
  '/images/landscape/236b698a6abecd3677c75401ddf1d2443b4af50a6b68f3155b305bcd20fb2479.jpg',
  '/images/landscape/8a073fafd1d500225b9123546ee6773ead9c3ddab1635544ec8425a48bea7346.jpg',
  '/images/landscape/431.jpg',
  '/images/landscape/2368f83b77e26b151acf180c78906ca3492aafeb088583f55b4f047fec385401.jpg',
];

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['header', 'footer', 'ref'])),
    },
  };
}
