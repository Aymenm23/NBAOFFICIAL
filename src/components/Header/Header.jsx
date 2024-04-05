import React from "react";
import "./Header.scss";
import nbaLogo from "../../assets/nba_logo.svg";
import headerIcon from "../../assets/menu_vector.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-container">
        <img className="header__logo" src={nbaLogo} />
      </div>
      <div className="header__text-container">
        <img className="header__icon" src={headerIcon} />
        <p className="header__text">Sign In</p>
      </div>
    </header>
  );
};

export default Header;
