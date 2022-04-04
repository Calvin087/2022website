import { fetchPostsLarge, fetchPostsSingle } from "../../utils/fetchPosts";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import { useEffect } from "react";
import styles from "./blog.module.css";
import Header from "../../components/global/Header/Header";
import Link from "next/link";
import Footer from "../../components/global/Footer/Footer";
import Head from "next/head";
import GeneralHead from "../../components/OG/GeneralHead";
import TwitterHead from "../../components/OG/TwitterHead";

const Blog = ({ post }) => {
  const content = post[0];

  //   OG Sharing
  const currentURL = `https://calvintorra.com/blog/${content.slug}`;

  useEffect(() => {
    const highlight = async () => {
      await Prism.highlightAll();
    };

    highlight();
  }, []);

  return (
    <>
      <Head>
        {/* default deets */}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={content.acf.excerpt} />
        <meta charSet="utf-8" />

        {/* OG Sharing Deets */}
        <GeneralHead
          description={content.acf.excerpt}
          ogUrl={currentURL}
          ogImage={content.acf.Featured_Image}
          ogTitle={content.title.rendered}
        />

        {/* Twitter Sharing Deets */}
        <TwitterHead
          description={content.acf.excerpt}
          ogUrl={currentURL}
          ogImage={content.acf.Featured_Image}
          ogTitle={content.title.rendered}
        />

        {/* regular title */}
        <title>{content.title.rendered}</title>
      </Head>

      <div className={styles.main_container}>
        <Link href="/">
          <a>
            <Header />
          </a>
        </Link>
        <div>
          <div className={styles.hero_container}>
            <div className={styles.post_header}>{content.title.rendered}</div>
            <div className={styles.tag_banner}>{content.acf.jsxTag}</div>
            <img
              className={styles.hero_image}
              src={content.acf.Featured_Image}
            />
            <div className={styles.gradient_bg_left}></div>
          </div>
        </div>
        <div
          className={styles.post_container}
          dangerouslySetInnerHTML={{ __html: content.content.rendered }}
        ></div>
        <Footer />
      </div>
    </>
  );
};

export default Blog;

export async function getStaticProps({ params }) {
  const post = await fetchPostsSingle(params);

  return {
    props: { post: post },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const results = await fetchPostsLarge();

  const paths = results.map((post) => {
    return {
      params: { slug: post.slug },
    };
  });

  return { paths, fallback: "blocking" };
}
