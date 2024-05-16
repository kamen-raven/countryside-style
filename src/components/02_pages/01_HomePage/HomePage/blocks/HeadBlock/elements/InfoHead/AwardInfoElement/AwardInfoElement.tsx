import React from 'react';
import Image from 'next/image';

import styles from './AwardInfoElement.module.scss';
import Award from '~img/headBlock/kaissa.png';


const AwardInfoElement: React.FC = () => {
  return (
    <div className={styles.award}>
      <div className={styles.award__imgBlock}>
        <Image
          className={styles.award__image}
          width={140}
          height={348}
          src={Award}
          alt='Каисса - 2018' />
      </div>
      <div className={styles.award__infoBlock}>
        <p className={styles.award__info}>
          Лучшая риэлторская компания на&nbsp;рынке загородной недвижимости
        </p>
      </div>
      <p className={styles.award__description}>
        <span className={styles.award__description_dot}>*</span>
        Победитель премии КАИССА-2018 Ассоциации риэлторов
        Санкт-Петербурга и&nbsp;Ленинградской области в&nbsp;номинации «Лучшая риэлторская компания на&nbsp;рынке загородной недвижимости»
      </p>
    </div>
  );
};

export { AwardInfoElement };
