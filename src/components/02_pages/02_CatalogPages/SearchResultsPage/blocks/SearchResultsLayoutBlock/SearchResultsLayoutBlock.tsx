import React from 'react';
import styles from './SearchResultsLayoutBlock.module.scss';
import { SearchResultsLayoutBlockInterface } from './SearchResultsLayoutBlock.interface.ts';

import { BackgroundSVGPattern } from '~shared/index.ts';
import BackgroundPatternLeft from '~svg/background/backgroundObjectsForSaleLeft.svg';
import BackgroundPatternRight from '~svg/background/backgroundObjectsForSaleRight.svg';
import { CatalogCardComponent } from '~entities/index.ts';


const SearchResultsLayoutBlock: React.FC<SearchResultsLayoutBlockInterface> = ({ filteredData }) => {
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
    <section className={styles.wrapper}>
      <>
        <BackgroundSVGPattern positionX='right' positionY='top' >
          <BackgroundPatternRight className={styles.backgroundRight} />
        </BackgroundSVGPattern>
        <BackgroundSVGPattern positionX='left' positionY='bottom'>
          <BackgroundPatternLeft className={styles.backgroundLeft} />
        </BackgroundSVGPattern>
      </>

      <div className={styles.container}>

        <>
          {filteredData.length > 0 ?
            <div /* ref={parentRef}  */ className={`${styles.cardsLayout}`}> {/*  ${objectsData.length > itemsPerPage ? styles.paginationMargin : null}` */}
              {filteredData.map((item) => ( //currentItems
                <CatalogCardComponent key={item.id} item={item}/*  typePage={typePage} */ />
              ))}
            </div>
            :
            <p className={styles.errorMessage}>
              По вашему запросу ничего не&nbsp;найдено
            </p>
          }
        </>
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

      </div>


    </section>
  );
};

export { SearchResultsLayoutBlock };
