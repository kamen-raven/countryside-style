'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useRouter } from 'next/navigation';

import styles from './CatalogCardComponent.module.scss';
import { CatalogCardComponentInterface } from './CatalogCardComponent.interface.ts';


import ArrowIcon from '~svg/button/arrow.svg';

import ImageTemplate from '~img/template/House_5 1.jpg';
import { LabelNew, YoutubeLabel } from '~shared/index.ts';

const CatalogCardComponent: React.FC<CatalogCardComponentInterface> = ({ item }) => {
  ////для того чтобы отображать статус и гендер ////////////////////////////////////////////////////////////////////////
  const targetKey = (targetValue: string) => Object.entries(item).find(([, value]) => value === targetValue )?.[0];
  ////////////////////////////////////////////////////////////////////////////

  const router = useRouter();

  const goToAnotherPage = () => {

    router.push('/houses/card');
  };


  const newLabel = <LabelNew />;
  const renderNewLabel = item.gender == 'Male' ? newLabel : '';

  const youtubeLabel = <YoutubeLabel/>;
  const renderYoutubeLabel = item.status == 'Dead' ? youtubeLabel : '';



  return (
    <div className={styles.cardWrapper}>
      <div className={styles.imageBlock}>
        <Link className={`${styles.link} ${styles.link_image}`} href={'/houses/card'}>
          <Image
            className={styles.image}
            src={ImageTemplate}
            alt={item.name}
            width={300}
            height={300}
          />

          {renderNewLabel}
          {renderYoutubeLabel}
        </Link>
      </div>
      <div className={styles.infoBlock}>
        <div className={styles.infoContainer}>
          <Link className={`${styles.link} ${styles.link_title}`} href={'/houses/card'}>
            <h2 className={styles.title} >
              Лесколово
            </h2>
          </Link>
          <div className={styles.statusContainer}>
            <p className={styles.status}>
              {targetKey(item.status)}&nbsp;
              <span className={styles.status_bold}>
                {item.status}
              </span>
            </p>
            <span>&nbsp;|&nbsp;</span>
            <p className={styles.status}>
              {targetKey(item.gender)}&nbsp;
              <span className={styles.status_bold}>
                {item.gender}
              </span>
            </p>
          </div>
          <p className={styles.address}>
            {item.location.name}
          </p>
        </div>


        <div className={styles.priceContainer}>
          <p className={styles.price}>
            {item.created.slice(11, 18)} млн. руб.
          </p>
          <button className={`${styles.arrow} ${styles.arrow_right}`}
            onClick={goToAnotherPage}>
            <ArrowIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export { CatalogCardComponent };
