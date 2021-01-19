import React from "react";
import styles from "./ProfileInfo.module.css"

const Contacts = ({ profileData }) => {
  return (
    <div className={styles.contacts}>
      {Object.keys(profileData.contacts).map((nameSource) => (
        <div key={nameSource}>
          <b>{nameSource}:</b> {profileData.contacts[nameSource] ? profileData.contacts[nameSource] : "---"}
        </div>
      ))}
    </div>
  );
};

export default Contacts;
