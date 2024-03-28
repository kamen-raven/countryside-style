import React from 'react';
import styles from './SuccessMessagePopup.module.scss';
import { useToggleSupportPopupStore } from '~store/popupsStore/useTogglePopupStore.ts';


const SuccessMessagePopup: React.FC = () => {
  const type = useToggleSupportPopupStore((state) => state.type);


  return (
    <div className={styles.innerContainer}>
      <h3 className={styles.title}>
        {type === 'successMessage' ?
        'Ваше сообщение отправлено!' :
        type === 'errorMessage' ?
        'Ошибка! Что-то пошло не так...' : ''}
      </h3>
      <p className={styles.subtitle}>
      {type === 'successMessage' ?
        `Наш менеджер свяжется с Вами в ближайшее время
        и бесплатно проконсультирует по интересующему
        Вас вопросу.` :
        type === 'errorMessage' ?
        `Попробуйте перезагрузить страницу
        и отправить форму снова.` : ''}
      </p>
    </div>
  );
};

export { SuccessMessagePopup };
