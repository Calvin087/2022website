import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/global/Footer/Footer";
import Header from "../components/global/Header/Header";
import LatestPosts from "../components/global/LatestPosts/LatestPosts";
import LatestProjects from "../components/global/LatestProjects/LatestProjects";
import LatestVideos from "../components/global/LatestVideos/LatestVideos";
import Logos from "../components/global/logos/Logos";
import { fetchPostsSmall, fetchVideos } from "../utils/fetchPosts";
import styles from "./index.module.css";

export default function Home({ posts, videos }) {
  return (
    <div className={styles.home_bg}>
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
      <Header />

      <section>
        <div className={styles.hero_box}>
          <div className={styles.hero_title}>
            Revenue Generating Fullstack <br />
            {"&"} Web3 Development
          </div>
          <div className={styles.hero_sub}>
            {`Increasing revenue and reducing costs are my primary goals. Once
            we've solved those problems, we can then focus on beauty.`}
          </div>
        </div>
        <Logos />
      </section>
      <section>
        <div className={styles.post_container}>
          <LatestPosts posts={posts} />

          <Link
            className={styles.view_more_link}
            href="/blog"
            target="_blank"
            rel="noreferrer"
          >
            <a className={styles.view_more_link}>
              <p>View More Posts ⟿</p>
            </a>
          </Link>
        </div>
        <div className={styles.gradient_bg_left}></div>
      </section>
      <section>
        <div className={styles.post_container}>
          <LatestVideos videos={videos} />

          <a
            href="https://www.youtube.com/playlist?list=PLy9pTsw77QF46oTUaJjZucQpkPx8yAnQt"
            target="_blank"
            rel="noreferrer"
            className={styles.view_more_link}
          >
            <p>View More Videos ⟿</p>
          </a>
        </div>
        <div className={styles.gradient_bg_right}></div>
      </section>
      <section>
        <LatestProjects />
      </section>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const posts = await fetchPostsSmall();
  const videos = await fetchVideos();

  return {
    props: { posts: posts, videos: videos },
    revalidate: 1,
  };
}
