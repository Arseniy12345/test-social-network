import React from "react";

const Contacts = ({ profileData }) => {
  return (
    <div>
      {Object.keys(profileData.contacts).map((nameSource) => (
        <div key={nameSource}>
          <b>{nameSource}:</b> {profileData.contacts[nameSource]}
        </div>
      ))}
    </div>
  );
};

export default Contacts;
