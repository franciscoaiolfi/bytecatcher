// src/components/Navbar.tsx
import React from 'react';
import MenuItemsHeader from './MenuItemsHeader';
import '../../../styles/styles.css';
import SubMenuItems from './SubMenuItems';
import Modal from './Modal';

const NavBarHeader: React.FC = () => {

  const homeSubItems = ['Subitem 1', 'Subitem 2', 'Subitem 3'];
  const ProjectsSubItems = ['Loja 01', 'Loja 02', 'Loja 03']

  return (
    <nav className='header__nav-bar'>
      <MenuItemsHeader text='Home' url='/' subItems={homeSubItems}/>
      <MenuItemsHeader text='About' url='/' />
      <MenuItemsHeader text='Contact' url='/'/>
      <MenuItemsHeader text='Projects' url='/'subItems={ProjectsSubItems}/>
      <MenuItemsHeader text='Hiring' url='/'/>
    </nav>
  );
};

export default NavBarHeader;
