"use client";
import Image from "next/image";
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
        <div className="header__logo-content">
          <Image
            src="/logoBitcherEdited-removebg-preview.png"
            width={100}
            height={100}
            alt="Picture of the author"
          />
          <h1 className="header__title-logo">{title}</h1>
        </div>
        <div className="header__header-wrapper">
          <NavBarHeader />
        </div>
      </div>
    </header>
  );
};

export default Header;
