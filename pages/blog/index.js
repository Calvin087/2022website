import Link from "next/link";
import Header from "../../components/global/Header/Header";
import styles from "./index.module.css";
import { fetchPostsLarge } from "../../utils/fetchPosts";
import Head from "next/head";

const renderBlogList = (post) => {
  const ex = post.acf.excerpt.split(" ").slice(0, 15).join(" ");

  return (
    <div className={styles.post_container}>
      <Link href={`/blog/${post.slug}`}>
        <a>
          <div className={styles.post_title}>{post.title.rendered}:</div>
          <div className={styles.post_ex}> {ex}...</div>
        </a>
      </Link>
    </div>
  );
};

const BlogList = ({ posts }) => {
  return (
    <>
      <Head>
        {/* default deets */}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content={`Increasing revenue and reducing costs are my primary goals. Once we've solved those problems, we can then focus on beauty.`}
        />
        <meta charSet="utf-8" />

        {/* regular title */}
        <title>Calvin Torra - Frontend Developer - Web3</title>
      </Head>
      <div>
        <Link href="/">
          <a>
            <Header />
          </a>
        </Link>
        <div className={styles.main_container}>
          {posts &&
            posts.map((post, i) => {
              return <div key={i}>{renderBlogList(post)}</div>;
            })}
        </div>
      </div>
    </>
  );
};

export default BlogList;

export async function getStaticProps() {
  const posts = await fetchPostsLarge();

  return {
    props: { posts: posts },
    revalidate: 1,
  };
}
