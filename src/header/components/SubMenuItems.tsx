import React from "react";

interface SubMenuItemsProps {
  subItems?: string[];
}

const SubMenuItems: React.FC<SubMenuItemsProps> = ({ subItems }) => {
  return (
    <ul className="SubMenuItems">
      {subItems?.map((item, index) => (
        <li className="header__sub-menu-item-li" key={index}>{item}</li>
      ))}
    </ul>
  );
};


export default SubMenuItems;