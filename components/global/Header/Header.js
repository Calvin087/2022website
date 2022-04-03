import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.logo_box}>
      <img src="/images/logo/logo4.png" height="30px" />
      <div className={styles.logo}>CalvinTorra</div>
    </div>
  );
};

export default Header;
