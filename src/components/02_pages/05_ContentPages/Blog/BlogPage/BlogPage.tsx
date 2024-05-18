'use client';

import React, { useRef } from 'react';
import styles from './BlogPage.module.scss';

import { CardBlogComponent, CardItemPagination } from '~entities/index.ts';
import usePaginationCounter from '~hooks/usePaginationCounter.ts';
import { BlogPageInterface } from './BlogPage.interface.ts';

const BlogPage: React.FC<BlogPageInterface> = ({ blogPostsData }) => {
  const itemsPerPage: number = 10; //?


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

        {blogPostsData.results.length > itemsPerPage ?
          <CardItemPagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} parentRef={parentRef} />
          : null}

      </div>
    </section>
  );
};

export { BlogPage };
