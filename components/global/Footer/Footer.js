import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <div className={styles.socials}>
        <a href="https://twitter.com/Gr8087" target="_blank" rel="noreferrer">
          <img src="/images/social/twitter.png" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCyqKzd3ddXJxgh6o9jx0M3g"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/images/social/youtube.png" />
        </a>
        <a
          href="https://www.linkedin.com/in/calvinturn/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/images/social/linkedin.png" />
        </a>
      </div>
      <div className={styles.footer}></div>
    </div>
  );
};

export default Footer;
