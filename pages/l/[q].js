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
    twitter: "https://twitter.com/calvintorra",
    google:
      "https://www.google.com/search?q=%22Calvin+Torra%22&ei=xO3OYvL9OeiZlwSa17O4Cw&ved=0ahUKEwjy78ncn_b4AhXozIUKHZrrDLcQ4dUDCA4&uact=5&oq=%22Calvin+Torra%22&gs_lcp=Cgdnd3Mtd2l6EAM6CAgAEIAEELADOgcIABAeELADOgkIABAeELADEAU6BggAEB4QFkoECEEYAUoECEYYAFC7BFjHCWDYC2gBcAB4AIABaogByAGSAQMxLjGYAQCgAQHIAQPAAQE&sclient=gws-wiz",
    scrape: "https://offers.torramedia.com/scrape-the-world",
    newsletter: "https://offers.torramedia.com/newsletter",
    letstalk: "https://calendly.com/calvint/get-started",
  };

  return {
    redirect: {
      destination: `${options[q]}`,
      permanent: false,
    },
  };
}
