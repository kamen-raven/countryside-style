import React from 'react';
import styles from './PopupCloseButton.module.scss';
import { PopupCloseButtonInterface } from './PopupCloseButton.interface';
import CloseIcon from '~svg/button/clear.svg';



const PopupCloseButton: React.FC<PopupCloseButtonInterface> = ({ closePopupHandler, className }) => {
  return (
    <button className={`${className} ${styles.closeBtn}`}
      onClick={closePopupHandler}>
      <CloseIcon />
    </button>
  );
};

export { PopupCloseButton };
