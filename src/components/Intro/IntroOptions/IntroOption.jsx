import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import styles from "./IntroOptions.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import blob1 from "/imgs/blob1.svg";
import blob2 from "/imgs/blob2.svg";
import blob3 from "/imgs/blob3.svg";
import blob4 from "/imgs/blob4.svg";

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
