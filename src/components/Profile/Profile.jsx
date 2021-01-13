import React from "react";
import styles from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Preloader from "./../Common/Preloader/Preloader";

const Profile = (props) => {
  if (props.profileData.fullName === undefined) {
    return <Preloader />;
  }
  return (
    <div className={styles.profile}>
      <ProfileInfo
        profileData={props.profileData}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
