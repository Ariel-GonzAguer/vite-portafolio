import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import DesignStylesButtons from "../DesignStylesButtons/DesignStylesButtons";

import styles from "../IntroPage/IntroPage.module.css";


export default function Header() {
  const designStyle = useSelector((state) => state.design.design);
  const [color, setColor] = useState(`#${Math.floor(Math.random() * 16777215).toString(16)}`);

  useEffect(() => {
    if (designStyle === "light") {
      const interval = setInterval(() => {
        const newColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        setColor(newColor);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [designStyle]);

  return (
    <section>
      <h1 className={styles[designStyle]} style={designStyle === "light" ? { color: color } : null}>Ariel GonzAgüer</h1>
      <h2 className={styles[designStyle]}>Neat Web Development</h2>

      <DesignStylesButtons />
    </section>
  );
}
