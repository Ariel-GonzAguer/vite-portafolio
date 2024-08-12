import React from "react";

import styles from "./IntroPage.module.css";

import Header from "../../Header/Header";
import IntroOption from "../IntroOptions/IntroOption";

import { introOptions } from "../../../data/introOptions";

export default function IntroPage() {
  return (
    <section className={styles.introPage}>
      <div className={styles.header}>
        <Header />
      </div>

      <div className={`${styles.zero} ${styles.option}`}>
        <IntroOption
          icon={introOptions[0].icon}
          title={introOptions[0].title}
        />
      </div>

      <div className={`${styles.one} ${styles.option}`}>
        <IntroOption
          icon={introOptions[1].icon}
          title={introOptions[1].title}
        />
      </div>

      <div className={`${styles.two} ${styles.option}`}>
        <IntroOption
          icon={introOptions[2].icon}
          title={introOptions[2].title}
        />
      </div>

      <div className={`${styles.three} ${styles.option}`}>
        <IntroOption
          icon={introOptions[3].icon}
          title={introOptions[3].title}
        />
      </div>
    </section>
  );
}
