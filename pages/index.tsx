import { getSortedPostsData } from '../utils/posts';
import Example from '../components/navbar/test';
import { Image } from '../components/hack/image2';

// export default function Home() {
//   return (
//     <div className="bg-gray-100">
//       <div className="h-10 px-8 py-12">
//         <div className="h-10"></div>
//       </div>
//       <Image src="/path/to/image.jpg" alt="" title="" width="100%" height="100%" layout="responsive" objectFit="contain" />
//     </div>
//   );
// }

export interface HomeProps {
  posts: any;
}

export default function Home({ posts }: HomeProps) {
  return (
    <div>
      <Example />
      {/* style={{ overflowX: 'scroll' }} */}
      <div className="mt-16 bg-pink-200">
        <div style={{ height: '24rem', display: 'flex', justifyContent: 'start', width: '200vw' }}>
          <Image src="/images/43c3ef772b8ced76b2e784c6f5981ebc11dcae91c34c9f0d3a213fbf9e2d31bc.png" height={'24rem'} trueWidth={3821} trueHeight={2256} />
          <Image src="/images/0199014a753fc67a309433b5993f575d50c6c3f44779ef6c72017e712543c0c5.png" height={'24rem'} trueWidth={3840} trueHeight={2160} />
          <Image src="/images/b9eb0b22727b693b1ff8ac6c15ecb18994cf7e7680425e87ecbde543e62c0d21.png" height={'24rem'} trueWidth={1800} trueHeight={2160} />
          <Image src="/images/becd63170eb60f454cd9a00c5442b90365b64d1949209ba712fe8ecbc39db972.png" height={'24rem'} trueWidth={800} trueHeight={1753} />
          <Image src="/images/9b9eedbc23114b1f4e6877bd1787ba3b8c09ba844fed5d66ccc8a350f31e0233.png" height={'24rem'} trueWidth={3541} trueHeight={5016} />
          <Image src="/images/e764a2d9c9d91ed8f0078da0fbc0ddd08b1853aec585518396e2e891442acfb8.png" height={'24rem'} trueWidth={1668} trueHeight={2224} />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(): Promise<{ props: HomeProps }> {
  const posts = getSortedPostsData();
  return {
    props: {
      posts,
    },
  };
}
