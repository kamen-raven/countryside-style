import React from 'react';
import styles from './ReviewTitleComponent.module.scss';
import { ReviewTitleComponentInterface } from './ReviewTitleComponent.interface';
import { RatingLabelElement } from './elements/RatingLabelElement/RatingLabelElement';
import { OpenPopupButton } from '~shared/index';

const ReviewTitleComponent: React.FC<ReviewTitleComponentInterface> = ({className, type}) => {
  return (
    <div className={`${styles.titleContainer} ${className}`}>
      {type === 'review' ?
      <h1 className={styles.title}>
        Отзывы
      </h1>
      :
      <h2 className={styles.title}>
        Отзывы
      </h2>
      }
      <div className={styles.reviewsContainer}>
        <RatingLabelElement service={'yandex'} />
        <RatingLabelElement service={'cian'} />
        <OpenPopupButton className={styles.buttonReview} type={'reviewForm'}>
          Оставить свой отзыв
        </OpenPopupButton>
      </div>
    </div>
  );
};

export { ReviewTitleComponent };
