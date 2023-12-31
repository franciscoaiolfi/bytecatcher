import React, { useState } from 'react';
import '../../../styles/styles.css';
import SubmenuItems from './SubMenuItems';


interface MenuItemProps {
  text: string;
  url: string;
  subItems?: string[];
}

const MenuItemsHeader: React.FC<MenuItemProps> = ({ text, url, subItems }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="MenuItem"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a className='header__menu-item-style' href={url}>{text}</a>
      {isHovered && subItems && subItems.length > 0 && (
        <div className="SubmenuContainer">
          <SubmenuItems subItems={subItems} />
        </div>
      )}
    </div>
  );
};

export default MenuItemsHeader;
