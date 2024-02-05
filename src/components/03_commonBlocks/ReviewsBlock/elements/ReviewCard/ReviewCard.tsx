import React from 'react';
import { ReviewCardInterface } from './ReviewCard.interface';
import styles from './ReviewCard.module.scss';


const ReviewCard = ({ data }: ReviewCardInterface): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.infoContainer}>
        <div className={styles.infoContainer__avatar}></div>  {/* avatar */}
        <div className={styles.infoContainer__inner}>
          <p className={styles.infoContainer__name}>
            {data.name}                                   {/* ИМЯ */}
          </p>
          <p className={styles.infoContainer__date}>
            {data.date}                         {/* ДАТА ПУБЛИКАЦИИ ОТЗЫВА */}
          </p>
        </div>
      </div>
      <div className={styles.reviewContainer}>
        <p className={styles.reviewText}>
          {data.textReview}                           {/* Текст отзыва */}
        </p>
      </div>
      <div className={styles.buttonsContainer}>
        <button className={styles.button}>
          Читать весь отзыв
        </button>
        <button className={styles.button}>
          Оригинал отзыва
        </button>
      </div>
    </div>
  );
};

export { ReviewCard };
