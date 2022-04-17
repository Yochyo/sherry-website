import NextImage from 'next/image';

export default function Home() {
  return (
    <div>
      <div className="px-1 py-1 sm:px-2 sm:py-2 md:px-4 md:py-4">
        {/* <NextImage src="/images/43c3ef772b8ced76b2e784c6f5981ebc11dcae91c34c9f0d3a213fbf9e2d31bc.png" width="100%" resizeBy="width" trueWidth={3821} trueHeight={2256} alt="img" /> */}
        <div className="grid gap-2 md:grid-cols-2 md:gap-4">
          <NextImage src="/images/43c3ef772b8ced76b2e784c6f5981ebc11dcae91c34c9f0d3a213fbf9e2d31bc.jpg" layout={'responsive'} width="2560" height="1440" alt="img" />
          <NextImage src="/images/2368f83b77e26b151acf180c78906ca3492aafeb088583f55b4f047fec385401.jpg" layout={'responsive'} width="2560" height="1440" alt="img" />
        </div>
      </div>
    </div>
  );
}
