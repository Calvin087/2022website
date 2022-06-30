const Redirecter = () => {
  return <></>;
};

export default Redirecter;

export async function getServerSideProps(context) {
  const { q } = context.params;

  const options = {
    youtube:
      "https://www.youtube.com/playlist?list=PLy9pTsw77QF46oTUaJjZucQpkPx8yAnQt",
    linkedin: "https://www.linkedin.com/in/calvinturn/",
    github: "https://github.com/Calvin087",
    cv: "https://drive.google.com/drive/folders/117UVUre3jIeQ6m616geMqylOeXpOYSG4",
    twitter: "https://twitter.com/Gr8087",
  };

  return {
    redirect: {
      destination: `${options[q]}`,
      permanent: false,
    },
  };
}
