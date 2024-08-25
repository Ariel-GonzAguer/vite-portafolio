import React from "react";
import { useParams } from "react-router-dom";
import { articles } from "../../data/articles";

import styles from "./Articles.module.css";

export default function SingleArticle() {
  let { title } = useParams();
  const articlesData = Object.values(articles).find(art => art.title === title);

  return (
      <div className={`${styles.singleArticle} ${styles.slideInFwdCenter}`}>
        <h2>{title} </h2>
        <p>{articlesData.text} </p>
      </div>
  );
}
