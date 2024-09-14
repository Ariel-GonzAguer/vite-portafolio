import React from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import styles from "./Technologies.module.css";

import git from "/icons/git.svg";
import zustand from "/icons/zustand.ico";
import nextJS from "/icons/nextJS.png";
import react from "/icons/react.svg";
import typescript from "/icons/typeScript.svg";
import redux from "/icons/redux.svg";
import reactrouter from "/icons/reactrouter.svg";
import netlify from "/icons/netlify.svg";

export default function TechnologiesContainer() {
  return (
    <section className={styles.technologiesSection}>
      <Tooltip id="my-tooltip" />

      <h2>Technologies that I use daily</h2>
      <ul>
        <li className={styles.technologiesLi}>
          <img
            data-tooltip-id="my-tooltip"
            data-tooltip-content="React. Powerfull JavaScript Library"
            data-tooltip-place="top"
            src={react}
            alt="React Logo"
          />
        </li>

        <li>
          <img
            className={styles.technologiesImg}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Git. Control version System"
            data-tooltip-place="top"
            src={git}
            alt="Git Logo"
          />
        </li>

        <li className={styles.technologiesLi}>
          <img
            className={styles.technologiesImg}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Redux. State Management Library"
            data-tooltip-place="top"
            src={redux}
            alt="Redux Logo"
          />
        </li>

        <li className={styles.technologiesLi}>
          <img
            className={styles.technologiesImg}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="React Router. React Framework for server-side routing"
            data-tooltip-place="top"
            src={reactrouter}
            alt="React Router Logo"
          />
        </li>

        <li className={styles.technologiesLi}>
          <img
            className={styles.technologiesImg}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Netlify. Platform to deploy web apps"
            data-tooltip-place="top"
            src={netlify}
            alt="Netlify Logo"
          />
        </li>
      </ul>

      <h2 className={styles.techTitle}>Technologies I want to learn soon!</h2>
      <ul className={styles.technologiesUl}>
        <li className={styles.technologiesLi}>
          <img
            className={styles.technologiesImg}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Zustand. State Management Library"
            data-tooltip-place="top"
            src={zustand}
            alt="Zustand Logo"
          />
        </li>

        <li className={styles.technologiesLi}>
          <img
            className={styles.technologiesImg}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="TypeScript. Programming language"
            data-tooltip-place="top"
            src={typescript}
            alt="TypeScript Logo"
          />
        </li>

        <li className={styles.technologiesLi}>
          <img
            className={styles.technologiesImg}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="NextJS. React Framework"
            data-tooltip-place="top"
            src={nextJS}
            alt="NextJS Logo"
          />
        </li>
      </ul>
    </section>
  );
}
