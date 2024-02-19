'use client';

import React from 'react';
import { ContactUsFormPopup, PopupTemplateComponent, ReviewFormPopup, ReviewFullPopup, SuccessMessagePopup } from './components';
import usePopupStore from '~store/usePopupStore.ts';


const Popups: React.FC = () => {
  const isOpen = usePopupStore((state) => state.isOpen);
  const type = usePopupStore((state) => state.type);

  const popupType = {
    contactForm: <ContactUsFormPopup />,
    reviewForm: <ReviewFormPopup />,
    successMessage: <SuccessMessagePopup />,
    reviewFull: <ReviewFullPopup />
  };






  if (type === null) {
    return null;
  } else {
    return (
      <>
        <PopupTemplateComponent type={type} isOpened={isOpen}>
          {popupType[type]}
        </PopupTemplateComponent>
      </>
    );
  }



};

export { Popups };
