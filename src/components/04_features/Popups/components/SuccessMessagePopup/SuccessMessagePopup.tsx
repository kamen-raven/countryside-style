import React from 'react';
import styles from './SuccessMessagePopup.module.scss';


const SuccessMessagePopup: React.FC = () => {
  return (
    <div className={styles.innerContainer}>
      <h3 className={styles.title}>
        Ваше сообщение отправлено!
      </h3>
      <p className={styles.subtitle}>
        Наш менеджер свяжется с Вами в ближайшее время
        и бесплатно проконсультирует по интересующему
        Вас объекту.
      </p>
    </div>
  );
};

export { SuccessMessagePopup };
