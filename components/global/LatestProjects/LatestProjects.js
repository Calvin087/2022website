import styles from "./LatestProjects.module.css";

const renderProjects = ({ title, image, description, link }) => {
  return (
    <div className={styles.card}>
      <div
        className={styles.featured_image}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      <a target="_blank" rel="noreferrer" href={link}>
        {`Visit Site >>`}
      </a>{" "}
    </div>
  );
};

const LatestProjects = () => {
  return (
    <div>
      <div className={styles.card_container}>
        {projects.map((project) => {
          return renderProjects(project);
        })}
      </div>
    </div>
  );
};

export default LatestProjects;

const projects = [
  {
    title: "Wp2email.com",
    image:
      "http://calvint1.sg-host.com/wp-content/uploads/2021/04/Screenshot-2021-04-13-at-21.22.27.png",
    description:
      "Create High Quality Email Newsletters For Your Clients in Seconds.",
    link: "https://wp2email.com/",
  },
  {
    title: "Blacumen",
    image:
      "http://calvint1.sg-host.com/wp-content/uploads/2020/08/blacumen.jpg",
    description:
      "Business directory, book list, video archive for the black community.",
    link: "https://blacumen.com",
  },
  {
    title: "Peque Desarrollo",
    image:
      "http://calvint1.sg-host.com/wp-content/uploads/2022/04/Screenshot-2022-04-04-at-16.47.03.png",
    description:
      "Encuentra toda la información sobre desarrollo infantil en tu bolsillo.",
    link: "https://evatellez.com/peque-desarrollo-app/",
  },
  {
    title: "Kyokushin Karate Build",
    image:
      "http://calvint1.sg-host.com/wp-content/uploads/2020/07/Screenshot-2020-07-18-at-16.46.11_640x400.png",
    description:
      "Built for a Karate club, attracting local students using SEO.",
    link: "http://budokyokushinkai.com/",
  },
  {
    title: "Contractor Template",
    image:
      "http://calvint1.sg-host.com/wp-content/uploads/2020/07/Screenshot-2020-07-18-at-16.45.41_640x400.png",
    description:
      "Customisable template for contractors in the UK for lead generation.",
    link: "https://fencingservicesnorthlondon.torramedia.com/",
  },
  {
    title: "Eva Tellez OT",
    image:
      "http://calvint1.sg-host.com/wp-content/uploads/2020/07/Screenshot-2020-07-18-at-16.45.06_640x400.png",
    description:
      "Website design and build for an occupational therapist based in Madrid",
    link: "https://evatellez.com/",
  },
];
