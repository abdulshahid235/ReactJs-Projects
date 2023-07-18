import React from "react";
import ReactDOM from "react-dom";

export default function Header() {
  return (
    <header>
      <nav className="nav-bar">
        <img className="logo" src="React-icon.svg" width="50px" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
