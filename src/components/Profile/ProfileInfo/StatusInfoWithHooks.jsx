import React, { useState, useEffect } from "react";
import styles from "./ProfileInfo.module.css"

const StatusInfoWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  const activeEditMode = () => {
    setEditMode(true);
  };
  const deactiveEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  const editStatus = (e) => {
    setStatus(e.currentTarget.value);
  };

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  return (
    <div className={styles.status}>
      {!editMode && (
        <span onDoubleClick={activeEditMode}>{props.status || "---"}</span>
      )}
      {editMode && (
        <input
          type="text"
          autoFocus={true}
          onBlur={deactiveEditMode}
          onChange={editStatus}
          value={status}
        />
      )}
    </div>
  );
};

export default StatusInfoWithHooks;
