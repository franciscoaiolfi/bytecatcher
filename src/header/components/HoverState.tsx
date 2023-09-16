'use client'
import React, { useState } from 'react';
interface HoverStateProps {
  children: (isHovered: boolean) => React.ReactNode;
}

const HoverState: React.FC<HoverStateProps> = ({ children }) => {
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
      {children(isHovered)}
    </div>
  );
};

export default HoverState;
