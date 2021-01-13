import React from "react";
import StatusInfoWithHooks from "./StatusInfoWithHooks";

const ProfileInfo = ({profileData, status, updateStatus}) => {
  return (
    <div>
      {profileData.photos !== undefined && (
        <img src={profileData.photos.small} alt="" />
      )}
      {profileData.fullName}
      <StatusInfoWithHooks status={status} updateStatus={updateStatus} />
    </div>
  );
};

export default ProfileInfo;
