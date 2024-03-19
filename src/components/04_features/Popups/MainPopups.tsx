'use client';

import React from 'react';
import { ContactUsFormPopup, PopupTemplateComponent, ReviewFormPopup, ReviewFullPopup, ReviewImagePopup, VideoPopup } from './components';
import { useToggleMainPopupStore } from '~store/useTogglePopupStore';


const MainPopups: React.FC = () => {
  /* Стейт */
  const isOpen = useToggleMainPopupStore((state) => state.isOpen); // открытие
  const type = useToggleMainPopupStore((state) => state.type); // тип попапа
  const actions = useToggleMainPopupStore((state) => state.actions);

  const popupType = {
    contactForm: <ContactUsFormPopup />,
    reviewForm: <ReviewFormPopup />,
    reviewFull: <ReviewFullPopup />,
    reviewImage: <ReviewImagePopup />,
    videoPopup: <VideoPopup/>,
  };



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




};

export { MainPopups };
