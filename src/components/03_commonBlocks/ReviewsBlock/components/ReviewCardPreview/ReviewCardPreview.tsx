import React from 'react';
import { ReviewCardPreviewInterface } from './ReviewCardPreview.interface';
import styles from './ReviewCardPreview.module.scss';
import { ReviewCardInfoContainer } from '../elements/ReviewCardInfoContainer/ReviewCardInfoContainer';


const ReviewCardPreview: React.FC<ReviewCardPreviewInterface> = ({ data }) => {
  return (
    <div className={styles.wrapper}>

      <ReviewCardInfoContainer data={data} />

      <div className={styles.reviewContainer}>
        <p className={styles.reviewText}>
          {data.text}                           {/* Текст отзыва */}
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

export { ReviewCardPreview };
