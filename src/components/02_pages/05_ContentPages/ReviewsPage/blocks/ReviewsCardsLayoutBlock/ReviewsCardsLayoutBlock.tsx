'use client';

import React, { useRef } from 'react';
import styles from './ReviewsCardsLayoutBlock.module.scss';
import { ReviewsCardsLayoutBlockInterface } from './ReviewsCardsLayoutBlock.interface.ts';
import { ReviewCardFull } from '~common/ReviewsBlock/components/index.ts';
import { CardItemPagination } from '~entities/index.ts';
import usePaginationCounter from '~hooks/usePaginationCounter.ts';


const ReviewsCardsLayoutBlock: React.FC<ReviewsCardsLayoutBlockInterface> = ({
  reviewsData,
  itemsPerPage }) => {
  // функция для управления пагинацией
  const { totalPages, currentItems, currentPage, setCurrentPage } = usePaginationCounter(reviewsData, itemsPerPage);

  // реф для скролла вверх при пагинации
  const parentRef = useRef<HTMLDivElement>(null);


  return (
    <section ref={parentRef} className={styles.wrapper}>
      <div className={styles.container}>


        <div className={styles.contentContainer}>
            {currentItems.map((item, index) => {
              return (
                <ReviewCardFull key={index} data={item} />
              );
            })}
        </div>

        <CardItemPagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          parentRef={parentRef} />

      </div>
    </section>
  );
};

export { ReviewsCardsLayoutBlock };
