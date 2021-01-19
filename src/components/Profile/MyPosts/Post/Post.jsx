import React from "react";
import styles from "./Post.module.css";
import Like from "../../../../assets/images/Like.svg";
import Repost from "../../../../assets/images/Repost.svg";
import User from "../../../../assets/images/user.png"

const Post = ({ message, likeCount, profileData }) => {
  return (
    <div className={styles.post}>
      <div className={styles.profileBlock}>
        <img
          className={styles.userPhoto}
          src={profileData.photos.small || User}
          alt=""
        />
        <span className={styles.userName}>{profileData.fullName}</span>
      </div>
      <div></div>
      <div className={styles.postText}>
        <span>{message}</span>
      </div>
      <div className={styles.statisticBlock}>
        <img className={styles.likeRepostButton} src={Like} alt="" />
        <span className={styles.countText}>{likeCount}</span>
        <span></span>
        <img className={styles.likeRepostButton}src={Repost} alt=""/>
        <span className={styles.countText}>15</span>
      </div>
    </div>
  );
};

export default Post;
