import React from "react";
import userAva from "../../assets/images/user.png";
import styles from "./Find.module.css";
import { NavLink } from "react-router-dom";

let User = ({ user, followingInProgress, setFollow, setUnfollow }) => {
  return (
    <div key={user}>
      <NavLink to={`/profile/${user.id}`}>
        <img
          src={user.photos.small != null ? user.photos.small : userAva}
          className={styles.avatar}
          alt=""
        />
      </NavLink>
      {user.followed ? (
        <button
          disabled={followingInProgress.includes(user.id) ? true : false}
          onClick={() => {
            setUnfollow(user.id);
          }}
        >
          unfollow
        </button>
      ) : (
        <button
          disabled={followingInProgress.includes(user.id) ? true : false}
          onClick={() => {
            setFollow(user.id);
          }}
        >
          follow
        </button>
      )}
      <span>{user.name}</span>
      <span> {user.status}</span>
      <span> {"u.location.country"}</span>
      <span> {"u.location.city"}</span>
    </div>
  );
};

export default User;
