const GeneralHead = ({ description, ogUrl, ogImage, ogTitle }) => {
  return (
    <>
      <meta property="og:url" content={ogUrl} key="ogurl" />
      <meta property="og:image" content={ogImage} key="ogimage" />
      <meta property="og:site_name" content="Calvin Torra" key="ogsitename" />
      <meta property="og:title" content={ogTitle} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
    </>
  );
};

export default GeneralHead;
