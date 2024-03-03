'use client';

import React, { useRef } from 'react';
import styles from './BlogCardsLayoutBlock.module.scss';
import { BlogCardsLayoutBlockInterface } from './BlogCardsLayoutBlock.interface.ts';

import { CardBlogComponent, CardItemPagination } from '~entities/index.ts';
import usePaginationCounter from '~hooks/usePaginationCounter.ts';


const BlogCardsLayoutBlock: React.FC<BlogCardsLayoutBlockInterface> = ({ blogPostsData }) => {
  const itemsPerPage: number = 1;


  const {
    totalPages,
    currentItems,
    currentPage,
    setCurrentPage
  } = usePaginationCounter(blogPostsData.results, itemsPerPage); // функция пагинации

  // реф для скролла вверх при пагинации
  const parentRef = useRef<HTMLDivElement>(null);


  return (
    <section ref={parentRef} className={styles.wrapper}>
      <div className={styles.container}>
          {currentItems.map((blogCard, index) => {
            return (
              <div key={index} className={styles.cardContainer}>
                <CardBlogComponent
                  key={blogCard.uuid}
                  path={'blog'}
                  blogCardItem={blogCard} />
              </div>
            );
          })}
        <CardItemPagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} parentRef={parentRef} />
      </div>
    </section>
  );
};

export { BlogCardsLayoutBlock };
