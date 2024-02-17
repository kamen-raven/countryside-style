'use client';
import React from 'react';
import usePopupStore from '~store/usePopupStore.ts';

import { ButtonInterface } from './Button.interface.ts';


const Button: React.FC<ButtonInterface> = ({ type, className, children }) => {
  const openPopup = usePopupStore((state) => state.controls.openPopup);
  //const isOpened = usePopupStore((state) => state.isOpen);

  const handleOpenContactFormPopup = () => {
    openPopup(type);

    console.log('click!');
  };

  return (
    <button className={className} onClick={handleOpenContactFormPopup}>
      {children}
    </button>
  );
};

export { Button };
