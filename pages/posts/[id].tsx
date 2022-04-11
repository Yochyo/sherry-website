import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../utils/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

export default function Post(props: any /*InferGetStaticPropsType<typeof getStaticProps>*/) {
  return (
    <Layout>
      <Head>
        <title>{props.postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{props.postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={props.postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: props.postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
