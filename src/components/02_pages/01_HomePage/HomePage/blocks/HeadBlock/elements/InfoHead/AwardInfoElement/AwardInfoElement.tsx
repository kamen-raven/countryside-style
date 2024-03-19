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
          Лучшая риэлтерская компания на&nbsp;рынке загородной недвижимости 2018&nbsp;года
        </p>
      </div>
    </div>
    );
};

export { AwardInfoElement };
