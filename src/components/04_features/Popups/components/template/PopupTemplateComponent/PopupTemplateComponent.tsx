'use client';

import React, { useEffect } from 'react';
import styles from './PopupTemplateComponent.module.scss';
import { PopupTemplateComponentInterface } from './PopupTemplateComponent.interface.ts';

import CloseIcon from '~svg/button/clear.svg';
import usePopupStore from '~store/usePopupStore.ts';





const PopupTemplateComponent: React.FC<PopupTemplateComponentInterface> = ({
  type,
  isOpened,
  children
}) => {
  const closePopup = usePopupStore((state) => state.controls.closePopup);
  //const handleOverlayClickOrKeyPress = usePopupStore((state) => state.controls.handleOverlayClickOrKeyPress);

  const handleOverlayClick = usePopupStore((state) => state.controls.handleOverlayClick);
  const handleKeyPress = usePopupStore((state) => state.controls.handleKeyPress);



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
      <div className={`${styles.popupContainer} ${type && popupContainerStyle[type]}`}>
        <button className={styles.popupCloseButton}
          onClick={closePopup}>
          <CloseIcon />
        </button>
        {children}
      </div>
    </div>
  );
};

export { PopupTemplateComponent };
