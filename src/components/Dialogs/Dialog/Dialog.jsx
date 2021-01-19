import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./../Dialogs.module.css";

const Dialog = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div>
      <NavLink to={path} className={styles.nameUser} activeClassName={styles.active}><div className={styles.dialog}>{props.name}</div></NavLink>
    </div>
  );
};

export default Dialog;
