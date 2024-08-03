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


  const generatePaginationButtons = () => {
    const buttons = [];
    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    buttons.push(
      <button
        key={1}
        onClick={() => handlePageChange(1)}
        className={`${paginationButtonCondition(0)} ${styles.buttonPagination}`}
      >
        1
      </button>
    );

    if (startPage > 2) {
      buttons.push(
        <div key="start-ellipsis" className={styles.ellipsisContainer}>
          <span  className={` ${styles.ellipsis}`}>
          ···
          </span>
        </div>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`${paginationButtonCondition(i - 1)} ${styles.buttonPagination}`}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages - 1) {
      buttons.push(
        <div key="end-ellipsis" className={styles.ellipsisContainer}>
          <span  className={` ${styles.ellipsis}`}>
          ···
          </span>
        </div>
      );
    }

    buttons.push(
      <button
        key={totalPages}
        onClick={() => handlePageChange(totalPages)}
        className={`${paginationButtonCondition(totalPages - 1)} ${styles.buttonPagination}`}
      >
        {totalPages}
      </button>
    );

    return buttons;
  };



  
  return (
    <div className={styles.paginationContainer}>
      <button className={`${styles.buttonPagination} ${styles.buttonPagination__arrow} ${styles.buttonPagination__arrow_prev} ${arrowButtonCondition().prev}`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}>
        <ArrowIcon />
      </button>

      {generatePaginationButtons()}
      {/*       {Array.from({ length: totalPages }).map((m, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          className={`${paginationButtonCondition(index)} ${styles.buttonPagination}`}
        >
          {index + 1}
        </button>
      ))} */}

      <button className={`${styles.buttonPagination} ${styles.buttonPagination__arrow} ${styles.buttonPagination__arrow_next} ${arrowButtonCondition().next}`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}>
        <ArrowIcon />
      </button>
    </div>
  );
};

export { CardItemPagination };
