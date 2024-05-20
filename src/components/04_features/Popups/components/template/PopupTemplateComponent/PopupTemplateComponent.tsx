'use client';

import React, { useEffect } from 'react';
import styles from './PopupTemplateComponent.module.scss';
import { PopupTemplateComponentInterface } from './PopupTemplateComponent.interface.ts';

import CloseIcon from '~svg/button/clear.svg';



const PopupTemplateComponent: React.FC<PopupTemplateComponentInterface> = ({
  isOpened, // состояния открыт/закрыт
  type, // тип попапа
  actions, // управление кнопками
  children
}) => {
  /* Стили для отображения того или иного попапа в зависимости от типа */
  const popupContainerStyle = {
    contactForm: styles.popupContainer_form,
    reviewForm: styles.popupContainer_form,
    reviewFull: styles.popupContainer_reviewFull,
    reviewImage: styles.popupContainer_reviewImage,
    objectImage: styles.popupContainer_objectImage,
    successMessage: styles.popupContainer_form,
    errorMessage: styles.popupContainer_form,
    videoPopup: styles.popupContainer_video,
  };

/* Навешиваем слушатель на закрытие попапа по ESC */
  useEffect(() => {
    window.addEventListener('keydown', actions.handleKeyPress);
    return () => {
      window.removeEventListener('keydown', actions.handleKeyPress);
    };
  }, []);



  return (
    <div className={`${styles.popupOverlay}
                    ${isOpened ? styles.popup_open : styles.popup_close}`}
        onClick={actions.handleOverlayClick}
    >
      <div className={`${styles.popupContainer} ${type && popupContainerStyle[type]}`}>
        <button className={styles.popupCloseButton}
          onClick={actions.closePopup}>
          <CloseIcon />
        </button>
        {children}
      </div>
    </div>
  );
};

export { PopupTemplateComponent };
