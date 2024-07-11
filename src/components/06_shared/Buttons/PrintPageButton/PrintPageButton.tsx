'use client';

import React from 'react';
import styles from './PrintPageButton.module.scss';
import { PrintPageButtonInterface } from './PrintPageButton.interface.ts';
import DownloadPDFIcon from '~svg/catalogCard/downloadPDF.svg';
import { usePathname, useRouter } from 'next/navigation';
import { useDataForPrintStore } from '~store/objectsCardStore/useDataForPrintStore.ts';


const PrintPageButton: React.FC<PrintPageButtonInterface> = ({ data, agentData, func }) => {
  const {
    actions: {
      setObjectData,
      setAgentData,
    }
  } = useDataForPrintStore();



  const pathname = usePathname();
  const router = useRouter();

  let handlePrint;


  if (func == 'push') {
    handlePrint = () => {
      data && setObjectData(data);
      agentData && setAgentData(agentData);

      /*     const printWindow = window.open(`${pathname}/print`); */
      router.push(`${pathname}/print`);
      //printWindow && printWindow.focus();
    };
  }

  if (func == 'print') {
    handlePrint = () => {
      window.print();
    };
  }





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
