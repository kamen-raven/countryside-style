import React from 'react';
import styles from './ReviewsPage.module.scss';
import { ReviewsPageInterface } from './ReviewsPage.interface.ts';
import { ReviewsCardsLayoutBlock, ReviewsCreateFormBlock, ReviewsTitleBlock } from './blocks/index.ts';


const ReviewsPage: React.FC<ReviewsPageInterface> = ({ employeesData, reviewsData }) => {




  return (
    <main className={styles.mainContainer}>
      <ReviewsTitleBlock employeesData={employeesData} />
      <ReviewsCardsLayoutBlock reviewsData={reviewsData} itemsPerPage={5}/>
      <ReviewsCreateFormBlock/>
    </main>
  );
};

export { ReviewsPage };
