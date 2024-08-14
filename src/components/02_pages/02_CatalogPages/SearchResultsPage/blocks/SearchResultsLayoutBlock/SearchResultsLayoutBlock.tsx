'use client';

import React, { useRef } from 'react';
import styles from './SearchResultsLayoutBlock.module.scss';
import { SearchResultsLayoutBlockInterface } from './SearchResultsLayoutBlock.interface.ts';

import { BackgroundSVGPattern } from '~shared/index.ts';
import BackgroundPatternLeft from '~svg/background/backgroundObjectsForSaleLeft.svg';
import BackgroundPatternRight from '~svg/background/backgroundObjectsForSaleRight.svg';
import { CardItemPagination, CatalogCardComponent } from '~entities/index.ts';
import usePaginationCounter from '~hooks/usePaginationCounter.ts';


const SearchResultsLayoutBlock: React.FC<SearchResultsLayoutBlockInterface> = ({ filteredData }) => {
  const itemsPerPage = 12;//filteredData?.length + 1;  //! количество объектов на странице //*пока не отображаем



  // функция для управления пагинацией
    const {
      totalPages,
      currentItems,
      currentPage,
      setCurrentPage
    } = usePaginationCounter(filteredData, itemsPerPage);

  // реф для скролла вверх при пагинации
    const parentRef = useRef<HTMLDivElement>(null);






  return (
    <section className={styles.wrapper}>
      <>
        <BackgroundSVGPattern positionX='right' positionY='bottom' >
          <BackgroundPatternRight className={styles.backgroundRight} />
        </BackgroundSVGPattern>
        <BackgroundSVGPattern positionX='left' positionY='bottom'>
          <BackgroundPatternLeft className={styles.backgroundLeft} />
        </BackgroundSVGPattern>
      </>

      <div className={styles.container}>

        <>
          {filteredData.length > 0 ?
            <div ref={parentRef}  className={`${styles.cardsLayout} { ${filteredData.length > itemsPerPage ? styles.paginationMargin : null}`}>
              {currentItems.map((item, index) => ( //currentItems
                <CatalogCardComponent key={item.id} item={item} index={index} />
              ))}
            </div>
            :
            <p className={styles.errorMessage}>
              По вашему запросу ничего не&nbsp;найдено
            </p>
          }
        </>

      {filteredData.length > itemsPerPage ?
        <CardItemPagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          parentRef={parentRef}
        />
        :
        null
      }

      </div>


    </section>
  );
};

export { SearchResultsLayoutBlock };
