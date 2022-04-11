import { getSortedPostsData } from '../utils/posts';
import Example from '../components/navbar/test';
import Image from 'next/Image';

export interface HomeProps {
  posts: any;
}

export default function Home({ posts }: HomeProps) {
  return (
    <div>
      <Example />
      <div className="mt-16 bg-pink-200">
        <div className="p-x-4 flex h-96 justify-start">
          <div className="flex h-96 w-full justify-end">
            <div className="relative h-full w-52">
              <Image src="/images/b9eb0b22727b693b1ff8ac6c15ecb18994cf7e7680425e87ecbde543e62c0d21.png" alt="img" objectFit="cover" layout="fill" />
            </div>
            <div className="relative h-full w-52">
              <Image src="/images/becd63170eb60f454cd9a00c5442b90365b64d1949209ba712fe8ecbc39db972.png" alt="img" objectFit="cover" layout="fill" />
            </div>
            <div className="relative h-full w-96">
              <Image src="/images/0199014a753fc67a309433b5993f575d50c6c3f44779ef6c72017e712543c0c5.png" alt="img" objectFit="cover" layout="fill" />
            </div>
            <div className="relative h-full w-96">
              <Image src="/images/43c3ef772b8ced76b2e784c6f5981ebc11dcae91c34c9f0d3a213fbf9e2d31bc.png" alt="img" objectFit="cover" layout="fill" />
            </div>

            {/* <Image src="/images/43c3ef772b8ced76b2e784c6f5981ebc11dcae91c34c9f0d3a213fbf9e2d31bc.png" alt="img" objectFit="contain" width="100%" height="100%" layout="responsive" /> */}
          </div>
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
