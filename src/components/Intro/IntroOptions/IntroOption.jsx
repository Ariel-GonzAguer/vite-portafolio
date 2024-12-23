import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import styles from "./IntroOptions.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IntroOptions({ icon, title }) {
  const designStyle = useSelector((state) => state.design.design);
  const [color, setColor] = useState(
    `#${Math.floor(Math.random() * 16777215).toString(16)}`
  );

  useEffect(() => {
    if (designStyle === "light") {
      const interval = setInterval(() => {
        const newColor = `#${Math.floor(Math.random() * 16777215).toString(
          16
        )}`;
        setColor(newColor);
      }, 5000);

      return () => clearInterval(interval);
    }
    console.log(designStyle);
  }, [designStyle]);

  return (
    <NavLink to={`/${title}`} className={styles.introOption}>
      <FontAwesomeIcon
        icon={icon}
        className={`${styles.icon} ${styles[designStyle]} ${
          designStyle === "neumorphism"
            ? styles.pinkHover
            : designStyle === "dark"
            ? styles.matrixHover
            : designStyle === "light"
            ? styles.light
            : null
        }`}
        style={{
          color: designStyle === "light" ? color : undefined, // Aplica el color del texto si es necesario
        }}
      />
      <p>{title}</p>
    </NavLink>
  );
}
