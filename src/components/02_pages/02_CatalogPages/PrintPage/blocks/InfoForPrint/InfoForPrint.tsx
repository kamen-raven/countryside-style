'use client';

import React from 'react';
import styles from './InfoForPrint.module.scss';
import { PrintPageButton } from '~shared/index';
import { usePathname, useRouter } from 'next/navigation';
import ArrowIcon from '~svg/button/arrow.svg';
import AttentionDisclaimerIcon from '~svg/icons/attentionDisclaimer.svg';

const InfoForPrint: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname(); //
  const objectID = pathname.replace(/\/print$/, ''); // берем поле ID


  const handleButton = () => {
    router.push(`${objectID}`);
  };

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>
        Страница информационной карточки выбранного объекта
      </h2>

      <div className={styles.disclaimerWrapper}>
        <div className = {styles.disclaimerInner}>

        <div className={styles.disclaimerContainer}>
          <div className={styles.disclaimerIcon}>
            <AttentionDisclaimerIcon />
          </div>
          <p className={styles.disclaimerText}>
            <span className={styles.disclaimerText_spanAccent}>
              Сохранение или&nbsp;печать карточки должно начаться автоматически,{' '}
            </span>
            но&nbsp;если этого не&nbsp;произошло, то&nbsp;вы&nbsp;можете самостоятельно
            нажать на&nbsp;клавиатуре CTRL&nbsp;+&nbsp;P (для&nbsp;Mac:&nbsp;Command&nbsp;+&nbsp;P) для&nbsp;печати
          </p>
        </div>
        <div className={styles.btnContainer}>
          <PrintPageButton func={'print'} />
          <button onClick={handleButton} className={styles.returnBtn} >
            вернуться к объекту
            <ArrowIcon />
          </button>
        </div>
        </div>
      </div>


    </section>
  );
};

export { InfoForPrint };
