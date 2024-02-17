'use client';

import React from 'react';
import { PopupTemplateComponent } from './components';
import usePopupStore from '~store/usePopupStore.ts';



const Popups: React.FC = () => {
  const isOpen = usePopupStore((state) => state.isOpen);
  const type = usePopupStore((state) => state.type);

  return (
    <>
      <PopupTemplateComponent type={type} isOpened={isOpen} />
    </>
  );
};

export { Popups };
