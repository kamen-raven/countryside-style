import React from 'react';
import Image from 'next/image';

import styles from './AwardInfoElement.module.scss';
import Kaissa from '~img/headBlock/kaissa.png';


const AwardInfoElement: React.FC = () => {
    return (
      <div className={styles.kaissa}>
      <div className={styles.kaissa__imgBlock}>
        <Image
          className={styles.kaissa__image}
          src={Kaissa}
          alt='Каисса - 2018' />
      </div>
      <div className={styles.kaissa__infoBlock}>
        <p className={styles.kaissa__info}>
          Лучшая риэлтерская компания на&nbsp;рынке загородной недвижимости 2018&nbsp;года
        </p>
      </div>
    </div>
    );
};

export { AwardInfoElement };
