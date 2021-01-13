import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

const NavElement = ({path, text}) => {
  return (
    <div className={styles.item}>
      <NavLink to={path} activeClassName={styles.active}>
        {text}
      </NavLink>
    </div>
  );
};

export default NavElement;
