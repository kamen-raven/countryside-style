import React from 'react';
import { TitleHeadBlockProps } from './TitleHeadBlock.props';
import styles from './TitleHeadBlock.module.scss';
import { differenceInYears } from 'date-fns';


const TitleHeadBlock = ({ ...props }: TitleHeadBlockProps): JSX.Element => {
  // создаем переменные для расчета даты в информационном блоке "XX ЛЕТ НА РЫНКЕ" //
  const currentDate = new Date();
  const startData = new Date(2011, 0, 0);
  const years = differenceInYears(currentDate, startData);


  return (
    <div className={`${styles.wrapper} ${styles.wrapper__bg}`} {...props} >
      <div className = {styles.titleContainer}>
        <h1 className = {styles.title}>
          Агентство<br/> загородной недвижимости
          <span className = {styles.subtitle}>
            в&nbsp;Санкт-Петербурге и Ленинградской области
          </span>
        </h1>
        <p className = {styles.description}>
          Лучшая риэлтерская компания на рынке загородной недвижимости 2018 года
        </p>
      </div>
      <div className = {styles.info}>
        <p className = {styles.info__text}>
          <span className = {styles.info__years}>
            {years}<br/>
          </span>
          лет на рынке
        </p>
      </div>
    </div>
  );
};

export { TitleHeadBlock };
