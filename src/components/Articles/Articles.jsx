import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";

import { articles } from "../../data/articles";

import styles from "./Articles.module.css";

export default function Article() {
  const [searchParams] = useSearchParams();
  const articlesData = Object.values(articles);

  return (
    <section className={styles.articlesSection}>
      <h2>Welcome to the articles section</h2>
      <p>
        Here I share some thoughts, curiosities and lessons that I have learned
        during my journey as a Front End Developer.
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
