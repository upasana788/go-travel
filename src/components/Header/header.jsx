import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">GoTravel</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/tours">Tours</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;