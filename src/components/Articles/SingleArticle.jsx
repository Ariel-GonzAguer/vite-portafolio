import React from "react";
import { useParams } from "react-router-dom";
import { articles } from "../../data/articles";

export default function SingleArticle() {
  let { title } = useParams();
  const articlesData = Object.values(articles).find(art => art.title === title);

  return (
      <div>
        <h1 >{title} </h1>
        <p>{articlesData.text} </p>
      </div>
  );
}
