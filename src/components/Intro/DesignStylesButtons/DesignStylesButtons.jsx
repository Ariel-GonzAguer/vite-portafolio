import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { chooseDesignStyle } from "../../../redux/designSlice";
import { toast, Toaster } from "sonner";

import styles from "../IntroPage/IntroPage.module.css";

export default function DesingStylesButtons() {
  const dispatch = useDispatch();
  const designStyle = useSelector((state) => state.design.design);
  const [color, setColor] = useState(
    `#${Math.floor(Math.random() * 16777215).toString(16)}`
  );
  let newColor;

  useEffect(() => {
    if (designStyle === "light") {
      const interval = setInterval(() => {
        newColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        setColor(newColor);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [designStyle]);

  function handleClick(e) {
    const { value } = e.target;
    dispatch(chooseDesignStyle(value));
    toast(
      `Great! This page will be in ${value} mode. The other sections will be ${
        value === "dark" ? "well, in dark mode too" : " in dark mode"
      }`,
      {
        duration: 3000,
      }
    );
  }

  return (
    <>
      <Toaster position="bottom-center" closeButton visibleToasts={2} />
      <p
        className={`${styles.designStyle} ${styles.pChoose}`}
        style={designStyle === "light" ? { color: "green" } : null}
      >
        Choose a design style
      </p>
      <input
        type="button"
        id="neumorphism"
        name="design-styles"
        value="neumorphism"
        onClick={handleClick}
        style={
          designStyle === "light"
            ? {
                backgroundColor: `rgba(${parseInt(
                  color.slice(1, 3),
                  16
                )}, ${parseInt(color.slice(1, 5), 16)}, ${parseInt(
                  color.slice(1, 7),
                  16
                )}, 0.2)`,
              }
            : null
        }
      />
      <label htmlFor="neumorphism" />

      <input
        type="button"
        id="dark"
        name="design-styles"
        value="dark"
        onClick={handleClick}
        style={
          designStyle === "light"
            ? {
                backgroundColor: `rgba(${parseInt(
                  color.slice(1, 3),
                  16
                )}, ${parseInt(color.slice(2, 5), 16)}, ${parseInt(
                  color.slice(5, 7),
                  16
                )}, 0.2)`,
              }
            : null
        }
      />
      <label htmlFor="dark" />

      <input
        type="button"
        id="light"
        name="design-styles"
        value="light"
        onClick={handleClick}
        style={
          designStyle === "light"
            ? {
                backgroundColor: `rgba(${parseInt(
                  color.slice(1, 3),
                  16
                )}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(
                  color.slice(6, 7),
                  16
                )}, 0.2)`,
              }
            : null
        }
      />
      <label htmlFor="dark" />

      <input
        type="button"
        id="neubrutalism"
        name="design-styles"
        value="neubrutalism"
        onClick={handleClick}
        style={
          designStyle === "light"
            ? {
                backgroundColor: `rgba(${parseInt(
                  color.slice(1, 3),
                  16
                )}, ${parseInt(color.slice(4, 5), 16)}, ${parseInt(
                  color.slice(5, 7),
                  16
                )}, 0.2)`,
              }
            : null
        }
      />
      <label htmlFor="neubrutalism" />
    </>
  );
}
