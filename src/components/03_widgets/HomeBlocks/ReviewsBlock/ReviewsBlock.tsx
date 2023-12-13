import React from 'react';
import { ReviewsBlockProps } from './ReviewsBlock.props';
import styles from './ReviewsBlock.module.scss';
import { Button } from '~/components/06_shared';
import { ReviewCard } from '~/components/04_features';


const ReviewsBlock: React.FC<ReviewsBlockProps> = ({ }) => {
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
          <ReviewCard />

          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
    </section>
  );
};

export { ReviewsBlock };
