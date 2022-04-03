import Link from "next/link";
import styles from "./LatestVideos.module.css";

const renderVideoEmbeds = ({ videoTitle, embedURL }) => {
  return (
    <div className={styles.post_container}>
      <iframe
        width="100%"
        height="280"
        src={`https://www.youtube.com/embed/${embedURL}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};

const LatestPosts = ({ videos }) => {
  const shortVids = videos.slice(0, 1);
  return (
    <div>
      <h2 className={styles.post_header}>Latest video</h2>
      {shortVids &&
        shortVids.map((video, i) => {
          return <div key={i}>{renderVideoEmbeds(video)}</div>;
        })}
    </div>
  );
};

export default LatestPosts;
