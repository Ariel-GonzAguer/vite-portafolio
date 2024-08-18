import React from "react";
import { useSelector } from "react-redux";

import styles from "./IntroOptions.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IntroOptions({ id, icon, title }) {
  const designStyle = useSelector((state) => state.design.design);

  return (
    <section key={id}>
        <FontAwesomeIcon icon={icon} className={`${styles.icon} ${styles[designStyle]}`} />
        <p>{title}</p>
    </section>
  );
}
