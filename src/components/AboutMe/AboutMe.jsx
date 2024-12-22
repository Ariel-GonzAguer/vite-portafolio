import React from "react";

import TechnologiesContainer from "../Technologies/Technologies";
import styles from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <section className={styles.slideInFwdCenter}>
      <div className={styles.aboutMeDiv}>
        <h2 className={styles.h2}>¡Holas!</h2>
        <p>
          I would like to tell you a little more about who I am.
          <br />
          After several years as a professional brewer, winning medals at a
          local and international level, always focused on meeting objectives
          and extreme cleanliness in my processes, I wanted to look for new
          directions for my creativity and desire to help other people, and that
          is how I found the web development, becoming a new joy.
          <br />
          <br />
          I love creating minimalist, neat, creative and super user-friendly
          projects, always keeping in mind accessibility, clean design and good
          practices when writing code.
          <br />
          Since October 2024 Im a certified Front End Developer by{" "}
          <a href="https://www.codecademy.com/" target="_blank">
            CodeCademy
          </a>
          . You can check my Professional Certificate in this{" "}
          <a
            href="https://www.codecademy.com/profiles/ArieGonzAguer/certificates/2682884a0719474f96407efe432fdd87"
            target="_blank"
          >
            link
          </a>
          .
          <br />
          <br />I have knowledge in unit testing with Vitest and
          Testing Library, I use Git Bash without problems when creating
          projects and uploading them to Github, I also know how to work with
          third-parties APIs, and I'm learning more about Authentication. In
          addition to the above, I have obtained certificates in <a href="https://www.codecademy.com/profiles/ArieGonzAguer/certificates/d3bba2db294547af98049749763af329" target="_blank">Design
          Thinking</a>, <a href="https://www.codecademy.com/profiles/ArieGonzAguer/certificates/480eaeabe094423f8935cf972c7e27de" target="_blank">Interaction Design</a>, <a href="https://www.codecademy.com/profiles/ArieGonzAguer/certificates/8b5e81d520f9431d964d1233b62a12d3" target="_black">User Research</a>, <a href="https://www.codecademy.com/profiles/ArieGonzAguer/certificates/4109530062dc4b3baaa563dd3401d6b7" target="_blank">Open Source</a> and <a href="https://www.codecademy.com/profiles/ArieGonzAguer/certificates/4ccef8d532484ea2aeec3b3b3dbb4f9c" target="_blank">UI & UX Design</a>. Parallel to my education as a Front End Developer,
          I have also certified as a Lean Six Sigma White Belt and <a href="https://www.credly.com/badges/b3bd7293-e039-46ce-a141-b832f3d13901/public_url" target="_blank">Remote Work
          Professional</a>.
        </p>
      </div>
      <section className={styles.technologiesContainer}>
        <TechnologiesContainer />
      </section>
    </section>
  );
}
