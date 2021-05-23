import React from "react";

import logo from "../img/Logo.png";

import classNames from "classnames";
import Popup from "reactjs-popup";

function Header() {
  let MENU_ITEMS = ["Home", "About", "Courses", "News", "Contact", "Log in"];
  console.log(window.innerWidth);

  return (
    <div className="Header">
      <img src={logo} className="CompanyLogo inline" alt="Logo" />
      <ul className="TopMenu inline">
        {window.innerWidth > 376 ? (
          MENU_ITEMS.map((menu_item) => (
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
          ))
        ) : (
          <Popup
            trigger={
              <svg
                width="30"
                height="17"
                viewBox="0 0 30 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="30" height="3" rx="1.5" fill="#131E07" />
                <rect y="7" width="30" height="3" rx="1.5" fill="#131E07" />
                <rect y="14" width="30" height="3" rx="1.5" fill="#131E07" />
              </svg>
            }
            position="right center"
          >
            <div>Popup content here !!</div>
          </Popup>
        )}
      </ul>
    </div>
  );
}

export default Header;
