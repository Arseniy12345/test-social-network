import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = ({ isAuth, data, logout }) => {
  return (
    <header className={s.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
        alt=""
      />
      <div className={s.authBlock}>
        {isAuth ? (
          <div>
            {data.login}
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
