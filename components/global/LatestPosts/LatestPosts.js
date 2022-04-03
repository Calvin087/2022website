import Link from "next/link";
import styles from "./LatestPosts.module.css";

const renderPosts = (post) => {
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

const LatestPosts = ({ posts }) => {
  return (
    <div>
      <h2 className={styles.post_header}>Latest Posts</h2>
      {posts &&
        posts.map((post, i) => {
          return <div key={i}>{renderPosts(post)}</div>;
        })}
    </div>
  );
};

export default LatestPosts;
