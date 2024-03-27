import React from 'react';

import styles from './TitleHead.module.scss';
import differenceInYears from 'date-fns/differenceInYears';


const TitleHead: React.FC = () => {
  // создаем переменные для расчета даты в информационном блоке "XX ЛЕТ НА РЫНКЕ" //
  const currentDate = new Date();
  const startData = new Date(2011, 0, 0);
  const years = differenceInYears(currentDate, startData);


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
          <p className={styles.description}>
            Лучшая риэлтерская компания на&nbsp;рынке загородной недвижимости 2018&nbsp;года
          </p>
        </div>
        <div className={styles.info}>
          <p className={styles.info__text}>
            <span className={styles.info__years}>
              {years}
            </span>
            лет на рынке
          </p>
        </div>
      </div>
    </div>
  );
};

export { TitleHead };
