import React from 'react';

import styles from './TitleHead.module.scss';
import { YearInfoElement } from './YearInfoElement/YearInfoElement';


const TitleHead: React.FC = () => {


  return (
    <div className={`${styles.wrapper} ${styles.wrapper__bg}`}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
            Агентство<br /> загородной недвижимости
            <span className={styles.subtitle}>
              в&nbsp;Санкт-Петербурге и&nbsp;Ленинградской&nbsp;области
            </span>
          </h1>
{/*           <p className={styles.description}>
            Лучшая риэлтерская компания на&nbsp;рынке загородной недвижимости 2018&nbsp;года
          </p> */}
        </div>
        <YearInfoElement />
      </div>
    </div>
  );
};

export { TitleHead };
