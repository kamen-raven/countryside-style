'use client';

import React, { useEffect } from 'react';
import styles from './PopupTemplateComponent.module.scss';
import { PopupTemplateComponentInterface } from './PopupTemplateComponent.interface.ts';

import CloseIcon from '~svg/button/clear.svg';
import { ContactUsFormPopup, ReviewFormPopup, ReviewFullPopup, SuccessMessagePopup } from '../../index.ts';
import usePopupStore from '~store/usePopupStore.ts';





const PopupTemplateComponent: React.FC<PopupTemplateComponentInterface> = ({
  type,
  isOpened,
}) => {
  const closePopup = usePopupStore((state) => state.controls.closePopup);
  const handleOverlayClick = usePopupStore((state) => state.controls.handleOverlayClick);
  const handleKeyPress = usePopupStore((state) => state.controls.handleKeyPress);

  const popupType = {
    contactForm: <ContactUsFormPopup />,
    reviewForm: <ReviewFormPopup />,
    successMessage: <SuccessMessagePopup />,
    reviewFull: <ReviewFullPopup />
  };

  const popupContainerStyle = {
    contactForm: styles.popupContainer_form,
    reviewForm: styles.popupContainer_form,
    successMessage: styles.popupContainer_form,
    reviewFull: styles.popupContainer_reviewFull,
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);




  return (
    <div className={`${styles.popupOverlay}
                    ${isOpened ? styles.popup_open : styles.popup_close}`}
        onClick={handleOverlayClick}
    >
      <div className={`${styles.popupContainer} ${popupContainerStyle[type]}`}>
        <button className={styles.popupCloseButton}
          onClick={closePopup}>
          <CloseIcon />
        </button>
        {popupType[type]}
      </div>
    </div>
  );
};

export { PopupTemplateComponent };
