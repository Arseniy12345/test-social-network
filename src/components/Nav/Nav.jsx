import React from "react";
import styles from "./Nav.module.css";
import NavElement from "./NavElement";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <NavElement path={"/profile"} text={"Профиль"} />
      <NavElement path={"/dialogs"} text={"Сообщения"} />
      <NavElement path={"/find"} text={"Поиск людей"} />
      <NavElement path={"/news"} text={"Новости"} />
      <NavElement path={"/music"} text={"Музыка"} />
      <NavElement path={"/settings"} text={"Настройки"} />
    </nav>
  );
};

export default Nav;
