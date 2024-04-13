'use client';

import React, { useRef } from 'react';
import styles from './CatalogCardsLayout.module.scss';
import { CatalogCardsLayoutInterface } from './CatalogCardsLayout.interface.ts';
import { CatalogCardComponent, CardItemPagination } from '~entities/index.ts';
import usePaginationCounter from '~hooks/usePaginationCounter.ts';


const CatalogCardsLayout: React.FC<CatalogCardsLayoutInterface> = ({ typePage, objectsData }) => {
  const itemsPerPage = 6;  //! количество объектов на странице


  const {
    totalPages,
    currentItems,
    currentPage,
    setCurrentPage
  } = usePaginationCounter(objectsData, itemsPerPage); // функция пагинации


  const parentRef = useRef<HTMLDivElement>(null); // реф для скролла вверх при пагинации

  return (
    <>
      <div ref={parentRef} className={styles.cardsLayout}>

        {currentItems.map((item) => (
          <CatalogCardComponent key={item.id} item={item} typePage={typePage} />
        ))}
      </div>

      {
        <CardItemPagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          parentRef={parentRef}
        />
      }
    </>
  );
};

export { CatalogCardsLayout };
