import React from "react";
import styles from "./Articles.module.css";

export default function Article() {
  return (
    <section className={styles.articlesSection}>
      <h2>Welcome to the articles section</h2>
      <p>Here I share some thoughts, curiosities and lessons that I have learned during my education as a Front End Developer.</p>
    </section>
  );
}
