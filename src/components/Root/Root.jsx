import React from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";

import styles from "./Root.module.css";

export default function Root() {
  const location = useLocation();
  return (
    <div>
      <Outlet />
      {location.pathname !== "/" && (
        <NavLink aria-label="link" to="/">
          <button className={styles.backBTN}>Go back!</button>
        </NavLink>
      )}
    </div>
  );
}
