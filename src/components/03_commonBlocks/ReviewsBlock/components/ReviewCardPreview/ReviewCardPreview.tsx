import React from 'react';
import { ReviewCardPreviewInterface } from './ReviewCardPreview.interface';
import styles from './ReviewCardPreview.module.scss';
import { ReviewCardInfoContainer } from '../elements/ReviewCardInfoContainer/ReviewCardInfoContainer';
import { LinkReviewLinkElement } from '../ReviewCardFull/elements/LinkReviewLinkElement/LinkReviewLinkElement';
import { ReviewPopupButton } from '~shared/index';


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

        {/* КНОПКА ОТКРЫТИЯ ПОПАПА ОТЗЫВА */}
        <ReviewPopupButton className={styles.button}
          type={'reviewFull'}
          data={data}
        >
          Читать весь отзыв
        </ReviewPopupButton>

        {/* ОРИГИНАЛ ОТЗЫВА */}
        {<LinkReviewLinkElement data={data} />}          {/* КНОПКА С ССЫЛКОЙ НА ОТЗЫВ */}

      </div>
    </div>
  );
};

export { ReviewCardPreview };
