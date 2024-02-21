import React from 'react';

import styles from './ReviewCardFull.module.scss';
import { ReviewCardFullInterface } from './ReviewCardFull.interface.ts';
import { ReviewCardInfoContainer } from '../elements/ReviewCardInfoContainer/ReviewCardInfoContainer.tsx';


import { ImageReviewLinkElement } from './elements/ImageReviewLinkElement/ImageReviewLinkElement.tsx';
import { LinkReviewLinkElement } from './elements/LinkReviewLinkElement/LinkReviewLinkElement.tsx';

const ReviewCardFull: React.FC<ReviewCardFullInterface> = ({ data }) => {
  return (
    <div className={styles.wrapper}>

      <ReviewCardInfoContainer data={data} className={styles.infoContainer} />  {/* ЗАГОЛОВОК */}

      <p className={styles.reviewText}>
        {data.text}                                   {/* ТЕКСТ ОТЗЫВА */}
      </p>

      <div className={styles.buttonsContainer}>  {/* КНОПКИ И ФОТОГРАФИИ ОТЗЫВА */}
        {/* ФОТО ОТЗЫВА */}
        {<ImageReviewLinkElement data={data} />}

        {/* ОРИГИНАЛ ОТЗЫВА */}
        {<LinkReviewLinkElement data={data} />} {/* КНОПКА С ССЫЛКОЙ НА ОТЗЫВ */}

      </div>
    </div>
  );
};

export { ReviewCardFull };
