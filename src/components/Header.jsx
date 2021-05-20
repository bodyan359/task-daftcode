import React from "react";
import logo from "../img/Logo.png";

function Header() {
  let MENU_ITEMS = ["Home", "About", "Courses", "News", "Contact", "Log in"];
  return (
    <div className="Header">
      <img src={logo} className="CompanyLogo" alt="Logo" />
      <div className="TopMenu">
        {MENU_ITEMS.map((menu_item) => (
          <div className={menu_item === "Log in" ? "LoginButton" : ""}>
            {menu_item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
