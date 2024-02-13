import React from 'react';
import styles from './ReviewTitleComponent.module.scss';
import { ReviewTitleComponentInterface } from './ReviewTitleComponent.interface';
import { RatingLabelElement } from './elements/RatingLabelElement/RatingLabelElement';

const ReviewTitleComponent: React.FC<ReviewTitleComponentInterface> = ({className}) => {
  return (
    <div className={`${styles.titleContainer} ${className}`}>
      <h2 className={styles.title}>
        Отзывы
      </h2>
      <div className={styles.reviewsContainer}>
        <RatingLabelElement service={'cian'} />
        <RatingLabelElement service={'yandex'} />
        <button className={styles.buttonReview}>
          Оставить свой отзыв
        </button>
      </div>
    </div>
  );
};

export { ReviewTitleComponent };
