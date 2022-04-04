import { fetchPostsLarge, fetchPostsSingle } from "../../utils/fetchPosts";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import { useEffect } from "react";
import styles from "./blog.module.css";
import Header from "../../components/global/Header/Header";
import Link from "next/link";
import Footer from "../../components/global/Footer/Footer";

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
          <img className={styles.hero_image} src={content.acf.Featured_Image} />
          <div className={styles.gradient_bg_left}></div>
        </div>
      </div>
      <div
        className={styles.post_container}
        dangerouslySetInnerHTML={{ __html: content.content.rendered }}
      ></div>
      <Footer />
    </div>
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
