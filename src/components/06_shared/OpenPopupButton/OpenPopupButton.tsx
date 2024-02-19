'use client';
import React from 'react';
import usePopupStore from '~store/usePopupStore.ts';

import { OpenPopupButtonInterface } from './OpenPopupButton.interface';


const OpenPopupButton: React.FC<OpenPopupButtonInterface> = ({ type, className, children }) => {
  const openPopup = usePopupStore((state) => state.controls.openPopup);

  const handleOpenPopup = () => {
    openPopup(type);

    console.log('click!');
  };

  return (
    <button className={className} onClick={handleOpenPopup}>
      {children}
    </button>
  );
};

export { OpenPopupButton };
