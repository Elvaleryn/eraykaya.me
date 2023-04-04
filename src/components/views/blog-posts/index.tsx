import React from "react";
// import styles from '.module.scss'

async function getPosts() {
  const response = await fetch(
    "https://dev.to/api/articles?username=eraywebdev"
  );
  const data = await response.json();
  return data;
}

export default async function BlogPosts() {
  const posts = await getPosts();
  console.log(posts);

  return <>posts</>;
}
