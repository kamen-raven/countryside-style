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
        'Ошибка!' : ''}
      </h3>
      <p className={styles.subtitle}>
      {type === 'successMessage' ?
        `Наш менеджер свяжется с\u00A0Вами в\u00A0ближайшее время
        и\u00A0бесплатно проконсультирует по\u00A0интересующему
        Вас вопросу.` :
        type === 'errorMessage' ?
        `Попробуйте перезагрузить страницу
        и\u00A0отправить форму снова.` : ''}
      </p>
    </div>
  );
};

export { SuccessMessagePopup };
