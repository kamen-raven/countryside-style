'use client';

import React, { useRef, useState } from 'react';
import styles from './CatalogCardsLayout.module.scss';
import { CatalogCardsLayoutInterface } from './CatalogCardsLayout.interface.ts';
import { CatalogCardComponent, CatalogCardsPagination } from '~entities/index.ts';


const CatalogCardsLayout: React.FC<CatalogCardsLayoutInterface> = ({ data, itemsPerPage }) => {
  const pageInfo = data.info.pages;
  const countInfo = data.info.count;

  const perPage = countInfo / pageInfo;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(perPage / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.results.slice(startIndex, endIndex);

  const parentRef = useRef<HTMLDivElement>(null); // реф для скролла вверх при пагинации

  return (
    <>
      <div ref={parentRef} className={styles.cardsLayout}>

        {currentItems.map((item) => (
          <CatalogCardComponent key={item.id} item={item} />
        ))}
      </div>

      <CatalogCardsPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        parentRef={parentRef}
        /* scrollFunction={scrollToTop} */ />
    </>
  );
};

export { CatalogCardsLayout };
