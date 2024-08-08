/* 'use client'; */

import React from 'react';
import styles from './CatalogCardsLayout.module.scss';
import { CatalogCardsLayoutInterface } from './CatalogCardsLayout.interface.ts';
import { CatalogCardComponent, /* CardItemPagination */ } from '~entities/index.ts';
/* import usePaginationCounter from '~hooks/usePaginationCounter.ts';
 */

const CatalogCardsLayout: React.FC<CatalogCardsLayoutInterface> = ({ /* typePage, */ objectsData, /* itemsPerPage */ }) => {

  // функция для управления пагинацией
/*   const {
    totalPages,
    currentItems,
    currentPage,
    setCurrentPage
  } = usePaginationCounter(objectsData, itemsPerPage);
 */
  // реф для скролла вверх при пагинации
/*   const parentRef = useRef<HTMLDivElement>(null); */

  return (
    <>
      <div /* ref={parentRef}  */className={`${styles.cardsLayout}`}> {/*  ${objectsData.length > itemsPerPage ? styles.paginationMargin : null}` */}

        {objectsData.map((item) => ( //currentItems
          <CatalogCardComponent key={item.id} item={item}/*  typePage={typePage} */ />
        ))}
      </div>
{/*
      {objectsData.length > itemsPerPage ?
        <CardItemPagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          parentRef={parentRef}
        />
        :
        null
      } */}
    </>
  );
};

export { CatalogCardsLayout };
