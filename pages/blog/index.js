import Link from "next/link";
import Header from "../../components/global/Header/Header";
import styles from "./index.module.css";
import { fetchPostsLarge } from "../../utils/fetchPosts";

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
