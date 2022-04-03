// import Airtable from "airtable";
const Airtable = require("airtable");

//
// fetch posts from wordpress

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

// const fetchAllPosts = async () => {

//   let allData = records.map((record) => {
//     return {
//       title: record.get("JobTitle") || "",
//       companyName: record.get("Company") || "",
//       published: record.get("DatePublished") || "",
//       posted: record.get("DatePublished") || "",
//       location: record.get("Location") || "",
//       salary: record.get("Salary") || "€",
//       url: record.get("Link") || "",
//       description: record.get("Description") || "",
//       image: stripURL(record.get("Link")) || "",
//       email: record.get("Email") || "",
//       record: record.get("record") || "",
//     };
//   });

//   return allData;
// };
