import React from 'react';
import { ReviewsBlockProps } from './ReviewsBlock.props';
import styles from './ReviewsBlock.module.scss';
import { RatingLabelElement, ReviewCard } from './elements';




const ReviewsBlock: React.FC<ReviewsBlockProps> = ({ reviewsDataItem }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.titleContainer}>
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

      <div className={`${styles.innerBlock}`}>
        {reviewsDataItem && reviewsDataItem.map(item => {
          return (
            <ReviewCard key={item._id} data={item} />
          );
        })}
      </div>
    </section>
  );
};

export { ReviewsBlock };
