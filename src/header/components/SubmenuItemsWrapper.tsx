import React, { useState } from 'react';
import SubmenuItems from './SubMenuItems';


interface SubmenuItemsWrapperProps {
  subItems: string[];
}

const SubmenuItemsWrapper: React.FC<SubmenuItemsWrapperProps> = ({ subItems }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered && subItems && subItems.length > 0 && (
        <SubmenuItems subItems={subItems} />
      )}
    </div>
  );
};

export default SubmenuItemsWrapper;
