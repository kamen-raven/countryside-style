import React from 'react';
import { ReviewCardProps } from './ReviewCard.props';
import styles from './ReviewCard.module.scss';
import { Button } from '~shared/index';


const ReviewCard = ({ data }: ReviewCardProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.infoContainer}>
        <div className={styles.infoContainer__avatar}></div>
        <div className={styles.infoContainer__inner}>
          <p className={styles.infoContainer__name}>
            {data.name}
          </p>
          <p className={styles.infoContainer__date}>
            {data.date}
          </p>
        </div>
      </div>
      <div className={styles.reviewContainer}>
        <p className={styles.reviewText}>
          {data.textReview}
        </p>
      </div>
      <div className={styles.buttonsContainer}>
        <Button appearance="transparent">
          Читать весь отзыв
        </Button>
        <Button appearance="transparent">
          Оригинал отзыва
        </Button>
      </div>
    </div>
  );
};

export { ReviewCard };
