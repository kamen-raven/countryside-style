'use client';

import React from 'react';
import styles from './CatalogCardsPagination.module.scss';
import { CatalogCardsPaginationInterface } from './CatalogCardsPagination.interface.ts';
import ArrowIcon from '~svg/button/arrow.svg';

const CatalogCardsPagination: React.FC<CatalogCardsPaginationInterface> = ({ currentPage, setCurrentPage, totalPages, parentRef }) => {


  const scrollToTop = () => {
    return new Promise<void>((resolve) => {
      if (parentRef.current) {
        parentRef.current.scrollIntoView({
          behavior: "smooth"
        });
        setTimeout(resolve, 650); // Подождем 500 мс (можно уточнить время)
      } else {
        resolve();
      }
    });
  };

  // функция перелистывания следующей страницы
  const handlePageChange = async (page: number) => {
    await scrollToTop();
    setCurrentPage(page);
  };

  const paginationButtonCondition = (i: number) => {
    return currentPage === i + 1 ? styles.active : '';
  };

  const arrowButtonCondition = () => {
    if (currentPage === 1) {
      return { prev: styles.disabled, next: '' };
    }
    if (currentPage === totalPages) {
      return { prev: '', next: styles.disabled };
    }
    return { prev: '', next: '' };
  };




  return (
    <div className={styles.paginationContainer}>
      <button className={`${styles.buttonPagination} ${styles.buttonPagination__arrow} ${styles.buttonPagination__arrow_prev} ${arrowButtonCondition().prev}`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}>
        <ArrowIcon />
      </button>


      {Array.from({ length: totalPages }).map((m, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          className={`${paginationButtonCondition(index)} ${styles.buttonPagination}`}
        >
          {index + 1}
        </button>
      ))}

      <button className={`${styles.buttonPagination} ${styles.buttonPagination__arrow} ${styles.buttonPagination__arrow_next} ${arrowButtonCondition().next}`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}>
        <ArrowIcon />
      </button>
    </div>
  );
};

export { CatalogCardsPagination };
