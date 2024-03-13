'use client';
import React from 'react';
import styles from './PrintPageButton.module.scss';
import DownloadPDFIcon from '~svg/catalogCard/downloadPDF.svg';

const PrintPageButton: React.FC = () => {

  const handlePrint = () => {
    window.print();
  };


    return (
      <button onClick={handlePrint} className={styles.downloadButton}>
        Скачать PDF
        <span className={styles.downloadButton_icon}>
          <DownloadPDFIcon />
        </span>
      </button>
    );
  };

  export { PrintPageButton };
