import React from "react";
import logo from "../img/Logo.png";
import classNames from "classnames";

function Header() {
  let MENU_ITEMS = ["Home", "About", "Courses", "News", "Contact", "Log in"];
  return (
    <div className="Header">
      <img src={logo} className="CompanyLogo inline" alt="Logo" />
      <ul className="TopMenu inline">
        {MENU_ITEMS.map((menu_item) => (
          <li
            className={classNames(
              "inline",
              menu_item === "Log in" ? "LoginButton " : "",
              menu_item === "Home" ? "onPage" : ""
            )}
            key={menu_item}
          >
            {menu_item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
