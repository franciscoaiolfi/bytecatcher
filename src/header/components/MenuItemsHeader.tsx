// src/header/components/MenuItem.tsx
import React from 'react';
import '../../../styles/styles.css';

interface MenuItemProps {
  text: string;
  url: string;
}

const MenuItemsHeader: React.FC<MenuItemProps> = ({ text, url }) => {
  return (
    <a className="MenuItem" href={url}>{text}</a>
  );
};

export default MenuItemsHeader;
