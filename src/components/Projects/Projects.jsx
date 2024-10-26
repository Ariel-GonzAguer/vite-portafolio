import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Projects.module.css";

import { projects } from "../../data/projects";

export default function ProjectsContainer() {
  const [currentProject, setCurrentProject] = useState("");
  const [currentProjectInfo, setCurrentProjectInfo] = useState("");

  return (
    <section className={`${styles.projectsSection} ${styles.slideInFwdCenter}`}>
      <h2>Check out this projects!</h2>
      <p>Click on them to see more info</p>
      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <div className={styles.projectDiv} key={project.key}>
            <FontAwesomeIcon
              icon={project.icon}
              src={project.src}
              alt={project.text}
              className={styles.projectIcon}
              onClick={() => {
                setCurrentProject(project);
                setCurrentProjectInfo(project.text);
              }}
            />
            <h3>{project.name}</h3>
          </div>
        ))}
      </div>

      <div className={styles.projectInfo}>
        <h3>{currentProject.name || "Click on a project to see more info"}</h3>{" "}
        <br />
        <p> {currentProjectInfo || "< / >"}</p>
        {currentProject && (
          <a href={currentProject.href} target="_blank">
            {currentProject.name}{" "}
          </a>
        )}
      </div>
    </section>
  );
}
