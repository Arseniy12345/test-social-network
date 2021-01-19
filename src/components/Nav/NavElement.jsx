import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

const NavElement = ({ path, text }) => {
  return (
    <NavLink to={path} activeClassName={styles.active}>
      <div className={styles.item}><span>{text}</span></div>
    </NavLink>
  );
};

export default NavElement;
