import Head from 'next/head'
import Layout, {siteTitle} from "../components/layout";
import utilStyles from '../styles/utils.module.css'
import {getSortedPostsData} from "../utils/posts";
import Link from "next/link"
import Date from "../components/date";
export interface HomeProps {
  posts: any
}

export default function Home({ posts }: HomeProps) {
  return (
    <Layout home>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {posts.map(({ id, date, title }: any) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>

          ))}
        </ul>
      </section>
    </Layout>
  )
}


export async function getStaticProps(): Promise<{props: HomeProps}> {
  const posts = getSortedPostsData()
  return {
    props: {
      posts
    }
  }
}
