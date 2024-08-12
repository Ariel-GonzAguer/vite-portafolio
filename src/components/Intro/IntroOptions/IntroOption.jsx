import React from "react";

import styles from "./IntroOptions.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IntroOptions({ id, icon, title }) {
  return (
    <section>
      <div key={id}>
        <FontAwesomeIcon icon={icon} className={styles.icon} />
        <p>{title}</p>
      </div>
    </section>
  );
}
