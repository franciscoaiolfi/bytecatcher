// src/components/Navbar.tsx
import React from 'react';
import MenuItemsHeader from './MenuItemsHeader';
import '../../../styles/styles.css';

const NavBarHeader: React.FC = () => {
  return (
    <nav className='header__nav-bar'>
      <MenuItemsHeader text='Home' url='/'/>
      <MenuItemsHeader text='About' url='/'/>
      <MenuItemsHeader text='Contact' url='/'/>
      <MenuItemsHeader text='Projects' url='/'/>
      <MenuItemsHeader text='Hiring' url='/'/>
    </nav>
  );
};

export default NavBarHeader;
