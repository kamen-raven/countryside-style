'use client';

import React from 'react';
import styles from './CardItemPagination.module.scss';
import { CardItemPaginationInterface } from './CardItemPagination.interface.ts';
import ArrowIcon from '~svg/button/arrow.svg';

const CardItemPagination: React.FC<CardItemPaginationInterface> = ({ currentPage, setCurrentPage, totalPages, parentRef }) => {

  /*
    const scrollToTop = () => {
      return new Promise<void>((resolve) => {
        if (parentRef.current) {
          parentRef.current.scrollIntoView({
            block: "start",
            inline: "nearest",
            behavior: "smooth"
          });
          setTimeout(resolve, 650); // Подождем 500 мс (можно уточнить время)
        } else {
          resolve();
        }
      });
    }; */
  const scrollToTop = async () => {
    try {
      if (parentRef.current) {
        parentRef.current.scrollIntoView({
          block: "start",
          inline: "nearest",
          behavior: "smooth"
        });
        await new Promise<void>((resolve) => {
          setTimeout(resolve, 650); // Подождем 500 мс (можно уточнить время)
        });
      }
    } catch (error) {
      console.error('Error scrolling to top:', error);
    }
  };


  // функция перелистывания следующей страницы
  const handlePageChange = async (page: number) => {
    scrollToTop();
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

export { CardItemPagination };
