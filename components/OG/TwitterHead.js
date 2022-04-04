const TwitterHead = ({ description, ogUrl, ogImage, ogTitle }) => {
  return (
    <>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Gr8087" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content="@Gr8087" />
      <meta property="og:url" content={ogUrl} />
      <meta name="twitter:image" content={ogImage} />
    </>
  );
};

export default TwitterHead;