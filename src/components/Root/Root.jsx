import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

import styles from "./Root.module.css";

export default function Root() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <section className={styles.rootContainer}>
      <div className={styles.content}>
        <Outlet />
      </div>
      {location.pathname !== "/" && (
        <button className={styles.backBTN} onClick={() => navigate(-1)}>
          Go back!
        </button>
      )}
    </section>
  );
}
