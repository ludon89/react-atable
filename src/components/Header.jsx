import { useState } from "react";

import logo from "../logo.jpg";
import "../styles/header.css";

function Header() {
  const [active, setActive] = useState("nav__menu");

  const navToggle = () => {
    active === "nav__menu"
      ? setActive("nav__menu nav__active")
      : setActive("nav__menu");
  };

  return (
    <header className="header">
      <nav className="nav">
        <a href="#" className="nav__brand">
          <img src={logo} alt="logo du restaurant" className="logo" />
        </a>
      </nav>
    </header>
  );
}

export default Header;
