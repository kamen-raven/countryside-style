import React from 'react';
import { ReviewsBlockProps } from './ReviewsBlock.props';
import styles from './ReviewsBlock.module.scss';
import { Button } from '~shared/index';
import { ReviewCard } from '~features/index';


const ReviewsBlock: React.FC<ReviewsBlockProps> = ({ reviewsDataItem }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className = {styles.titleContainer}>
          <h2 className={styles.title}>
            Отзывы
          </h2>
          <Button appearance={'colored'}>
            Оставить свой отзыв
          </Button>
        </div>
        <div className = {`${styles.innerBlock}`}>
          {reviewsDataItem && reviewsDataItem.map(item => {
            return (
              <ReviewCard key={item._id} data={item} />
            );
          })}

        </div>
      </div>
    </section>
  );
};

export { ReviewsBlock };
