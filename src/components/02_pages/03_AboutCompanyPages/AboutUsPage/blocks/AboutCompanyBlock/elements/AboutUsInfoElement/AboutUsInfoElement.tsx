import React from 'react';
import styles from './AboutUsInfoElement.module.scss';
import Image from 'next/image';
import AssociationLabel from '~img/aboutUs/Association.png';
import AwardImg from '~img/headBlock/kaissa.png';


const AboutUsInfoElement: React.FC = () => {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.awardImageContainer}>
        <Image
          className={styles.awardImage}
          src={AwardImg}
          alt={'Премия КАИССА 2018'}
          placeholder={'blur'}
          />
      </div>

      <div className={styles.blockWrapper}>
        <div className={styles.awardContainer}>
          <p className={styles.awardDescription}>
            Лучшая риэлторская компания на&nbsp;рынке загородной недвижимости 2018&nbsp;года
          </p>
        </div>
        <div className={styles.associationContainer}>
          <Image
            className={styles.associationImage}
            src={AssociationLabel}
            alt={'Ассоциация риэлторов СПб и ЛО'}
            placeholder={'blur'}
            />
          <p className={styles.associationDescription}>
            Состоим в&nbsp;Ассоциации риэлторов <br />Санкт-Петербурга и&nbsp;Ленинградской области
          </p>
        </div>
      </div>
    </div>
  );
};

export { AboutUsInfoElement };
