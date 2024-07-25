'use client';

import React, { useEffect } from 'react';
import styles from './PrintPage.module.scss';
import { PrintPageInterface } from './PrintPage.interface';
import { InfoForPrint, PrintObjectCard } from './blocks';
import { useRouter } from 'next/navigation';


const PrintPage: React.FC<PrintPageInterface> = ({ objectData, agentData }) => {


    const router = useRouter();

        useEffect(() => {
          const handleAfterPrint = () => {
            router.back();
          };

          // Устанавливаем обработчик события
          window.onafterprint = handleAfterPrint;

          // Инициируем печать
          window.print();

          // Очищаем обработчик при размонтировании компонента
          return () => {
            window.onafterprint = null;
          };
        }, []);


  return (
    <main className={styles.mainContainer}>
      <InfoForPrint />
      <section className={styles.printContainer}>
        <PrintObjectCard objectData={objectData} agentData={agentData} />
      </section>
    </main>
  );
};

export { PrintPage };
