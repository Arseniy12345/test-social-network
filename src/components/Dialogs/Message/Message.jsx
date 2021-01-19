import React from "react";
import styles from "./../Dialogs.module.css";

const Message = (props) => {
  return (
    <div className={props.id < 4 ? styles.message : styles.messageRight}>
      <div className={styles.messageText}>{props.text}</div>
      <div className={styles.time}>
        10:29
      </div>
    </div>
  );
};

export default Message;
