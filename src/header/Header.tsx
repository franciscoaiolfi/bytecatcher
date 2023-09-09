import React from "react";
import NavBarHeader from "./components/NavBarHeader";
import "../../styles/styles.css";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="headerStyles">
      <div className="header__header-grid">
        <div className="header__header-wrapper">
          <h1>{title}</h1>
          <NavBarHeader />
        </div>
      </div>
    </header>
  );
};

export default Header;
