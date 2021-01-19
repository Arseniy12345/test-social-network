import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../../assets/images/Logo.svg";
import userAva from "../../assets/images/user.png";
import LogoutPhoto from "../../assets/images/Logout.svg";
import Login from "../../assets/images/Login.svg";

const Header = ({ isAuth, data, logout, userPhoto }) => {
  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <img className={styles.logo} src={Logo} alt="" />
        <div className={styles.logoName}>
          <span>
            <b>SOCIAL-NETWORK</b>
          </span>
        </div>
        {isAuth ? (
          <div className={styles.authBlock}>
            <div>
              <span className={styles.loginName}>{data.login}</span>
            </div>
            <div>
              <img src={userPhoto || userAva} className={styles.userPhoto}/>
            </div>
            <div className={styles.logoutBlock}>
              <img src={LogoutPhoto} onClick={logout} />
            </div>
          </div>
        ) : (
          <div className={styles.authBlock}>
            <div></div>
            <NavLink to="/login" className={styles.loginName}>
              <span> Войти </span>
            </NavLink>
            <img src={Login} alt="" />
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
