import styles from "./Logos.module.css";
const renderImages = (image) => {
  let invert = image.invert ? styles.logo_invert : null;
  return (
    <img
      className={`${invert} ${styles.img}`}
      src={`/images/headerLogos/${image.name}.png`}
    />
  );
};

const image = [
  {
    name: "Node",
    invert: false,
  },
  {
    name: "JS",
    invert: false,
  },
  {
    name: "nextJs",
    invert: true,
  },
  {
    name: "Solidity",
    invert: true,
  },
  {
    name: "web3js",
    invert: false,
  },
];

const Logos = () => {
  return (
    <div className={styles.main_container}>
      <h2 className={styles.post_header}>Tools of the trade</h2>
      <div className={styles.logo_container}>
        {image.map((images) => {
          return renderImages(images);
        })}
      </div>
      <div className={styles.hero_sub}>
        Frontend design & development. <br />
        Web3 Smart Contract integration. <br />
        Web applications + Automation.
      </div>
    </div>
  );
};

export default Logos;
