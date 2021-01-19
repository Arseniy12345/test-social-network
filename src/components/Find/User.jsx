import React from "react";
import userAva from "../../assets/images/user.png";
import styles from "./Find.module.css";
import { NavLink } from "react-router-dom";

let User = ({ user, followingInProgress, setFollow, setUnfollow }) => {
  return (
    <div key={user.id} className={styles.userItem}>
      <NavLink to={`/profile/${user.id}`}>
        <img
          src={user.photos.small != null ? user.photos.small : userAva}
          className={styles.avatar}
          alt=""
        />
      </NavLink>
      <div>
        <div>
          <span><b>Ник:</b> {user.name}</span>
        </div>
        <div>
          <span><b>Статус:</b> {user.status || "Всем привет!!!"}</span>
        </div>
        {user.followed ? (
        <button
          disabled={followingInProgress.includes(user.id) ? true : false}
          className={styles.followButton}
          onClick={() => {
            setUnfollow(user.id);
          }}
        >
          Удалить из друзей
        </button>
      ) : (
        <button
          disabled={followingInProgress.includes(user.id) ? true : false}
          className={styles.followButton}
          onClick={() => {
            setFollow(user.id);
          }}
        >
          Добавить в друзья
        </button>
      )}
      </div>
    </div>
  );
};

export default User;
