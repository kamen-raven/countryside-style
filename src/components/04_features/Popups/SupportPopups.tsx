'use client';

import React from 'react';
import { PopupTemplateComponent, ReviewImagePopup, SuccessMessagePopup } from './components';
import { useToggleSupportPopupStore } from '~store/popupsStore/useTogglePopupStore';


const SupportPopups: React.FC = () => {
  const isOpen = useToggleSupportPopupStore((state) => state.isOpen);
  const type = useToggleSupportPopupStore((state) => state.type);
  const actions = useToggleSupportPopupStore((state) => state.actions);

  const popupType = {
    reviewImage: <ReviewImagePopup />,
    successMessage: <SuccessMessagePopup />,
    errorMessage: <SuccessMessagePopup />,
  };






  if (type === null) {
    return null;
  } else {
    return (
      <>
      <PopupTemplateComponent
        isOpened={isOpen}
        type={type}
        actions={actions}
      >
          {popupType[type]}
        </PopupTemplateComponent>
      </>
    );
  }



};

export { SupportPopups };
