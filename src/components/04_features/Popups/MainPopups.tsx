'use client';

import React, { useEffect } from 'react';
import { ContactUsFormPopup, ObjectImagePopup, PopupTemplateComponent, ReviewFormPopup, ReviewFullPopup, ReviewImagePopup, VideoPopup } from './components';
import { useToggleMainPopupStore } from '~store/popupsStore/useTogglePopupStore';
import { usePathname } from 'next/navigation';


const MainPopups: React.FC = () => {
  /* Стейт */
  const isOpen = useToggleMainPopupStore((state) => state.isOpen); // открытие
  const type = useToggleMainPopupStore((state) => state.type); // тип попапа
  const actions = useToggleMainPopupStore((state) => state.actions);
  const pathname = usePathname(); //

  const popupType = {
    contactForm: <ContactUsFormPopup />,
    reviewForm: <ReviewFormPopup />,
    reviewFull: <ReviewFullPopup />,
    reviewImage: <ReviewImagePopup />,
    videoPopup: <VideoPopup/>,
    objectImage: <ObjectImagePopup/>
  };

  useEffect(() => {
    if (isOpen) {
      actions.closePopup();
    }
  }, [pathname]);



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
