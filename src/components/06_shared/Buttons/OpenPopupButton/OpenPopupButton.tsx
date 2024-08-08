'use client';
import React from 'react';

import { OpenPopupButtonInterface } from './OpenPopupButton.interface';
import { useToggleMainPopupStore } from '~store/popupsStore/useTogglePopupStore';


const OpenPopupButton: React.FC<OpenPopupButtonInterface> = ({ type, className, children }) => {
  const openPopup = useToggleMainPopupStore((state) => state.actions.openPopup);

  const handleOpenPopup = () => {
    openPopup(type);
  };

  return (
    <button className={className} onClick={handleOpenPopup}>
      {children}
    </button>
  );
};

export { OpenPopupButton };
