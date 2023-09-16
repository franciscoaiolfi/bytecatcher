import React from 'react';
import SubmenuItems from './SubMenuItems';


interface ModalProps {
  subItems?: string[];
}

const Modal: React.FC<ModalProps> = ({ subItems }) => {
  return (
    <div className="ModalContainer">
      {subItems && subItems.length > 0 && (
        <div className="SubmenuContainer">
          <SubmenuItems subItems={subItems} />
        </div>
      )}
    </div>
  );
};

export default Modal;
