import React from 'react';
import styles from './DescriptionByOffers.module.scss';


const DescriptionByOffers: React.FC = () => {
    return (
      <div className={styles.descriptionContainer}>
      <h3 className={styles.descriptionTitle}>
        Мы получаем только %&nbsp;с&nbsp;продаж,
      </h3>
      <p className={styles.descriptionText}>
        а значит, нашей мотивации достаточно, чтобы работать максимально эффективно.
        Вы нам возможность продавать качественное жилье, мы&nbsp;Вам стабильный спрос и&nbsp;доход!
      </p>
    </div>
    );
};

export { DescriptionByOffers };
