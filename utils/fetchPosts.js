// import Airtable from "airtable";
const Airtable = require("airtable");

//
// fetch a few posts from wordpress

module.exports.fetchPostsSmall = async () => {
  const posts = await fetch(
    `https://calvint1.sg-host.com/wp-json/wp/v2/react_blog?per_page=6`
  ).then((response) => response.json());

  return posts;
};

//
// fetch posts from wordpress

module.exports.fetchPostsLarge = async () => {
  const posts = await fetch(
    `https://calvint1.sg-host.com/wp-json/wp/v2/react_blog?per_page=100`
  ).then((response) => response.json());

  return posts;
};

//
// fetch single post

module.exports.fetchPostsSingle = async (params) => {
  const post = await fetch(
    `https://calvint1.sg-host.com/wp-json/wp/v2/react_blog?slug=${params.slug}`
  ).then((response) => response.json());

  return post;
};

//
// fetch videos from airtable

module.exports.fetchVideos = async () => {
  Airtable.configure({
    endpointUrl: process.env.BASEURL,
    apiKey: process.env.AIRTABLEAPIKEY,
  });

  const base = Airtable.base(process.env.BASE);

  const records = await base("Table 1")
    .select({
      view: "Grid view",
    })
    .all();

  const embedURL = (string) => {
    const splitOnEq = string.split("=")[1];
    return splitOnEq.split("&")[0];
  };

  return records.map((record) => {
    return {
      videoTitle: record.get("Title"),
      fullURL: record.get("URL"),
      embedURL: embedURL(record.get("URL")),
    };
  });
};
