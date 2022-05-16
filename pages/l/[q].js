import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Redirecter = () => {
  const router = useRouter();
  const { q } = router.query;

  const options = {
    youtube:
      "https://www.youtube.com/playlist?list=PLy9pTsw77QF46oTUaJjZucQpkPx8yAnQt",
    linkedin: "https://www.linkedin.com/in/calvinturn/",
    github: "https://github.com/Calvin087",
    cv: "https://drive.google.com/drive/folders/117UVUre3jIeQ6m616geMqylOeXpOYSG4",
    twitter: "https://twitter.com/Gr8087",
  };

  useEffect(() => {
    if (q !== undefined) {
      router.push(options[q]);
    }
  }, [q]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      1 second boss
    </div>
  );
};

export default Redirecter;
