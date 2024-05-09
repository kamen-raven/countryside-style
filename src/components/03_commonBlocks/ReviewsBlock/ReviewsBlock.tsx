import React from 'react';
import { ReviewsBlockProps } from './ReviewsBlock.props';
import styles from './ReviewsBlock.module.scss';
import { ReviewCardPreview, /* ReviewTitleComponent */ } from './components';




const ReviewsBlock: React.FC<ReviewsBlockProps> = ({ reviewsDataItem }) => {




  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>

{/*         <ReviewTitleComponent /> */}

        <div className={styles.contentContainer}>
          <div className={`${styles.innerBlock}`}>
            {reviewsDataItem && reviewsDataItem.map((item, index) => {
              return (
                <ReviewCardPreview key={index} data={item} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export { ReviewsBlock };
