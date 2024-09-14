import React from "react";
import { Link } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";

import { articles } from "../../data/articlesData";

import styles from "./Articles.module.css";

export default function Article() {
  const articlesData = Object.values(articles);

  return (
    <section className={`${styles.articlesSection} ${styles.slideInFwdCenter}`}>
      <h2>Welcome to the articles section</h2>
      <p>
        Here I share some thoughts, curiosities and lessons that I have learned
        during my journey as a Front End Developer.<br /> 
        <strong>¡Todos los artículos de esta página estarán escritos en español!</strong>
      </p>
      <ul>
        {articlesData.map((art) => {
          return (
            <li key={nanoid()} className={styles.article}>
              <Link to={`/articles/${art.title}`}>{art.title}</Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
