import React from "react";
import logo from "../images/logo__image.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__image" src={logo} alt="Место Россия" />
    </header>
  );
}

export default Header;
