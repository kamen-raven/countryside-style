'use client';

import React from 'react';
import styles from './CatalogCardComponent.module.scss';
import { CatalogCardComponentInterface } from './CatalogCardComponent.interface.ts';
import Image from 'next/image';

import YoutubeIcon from '~svg/catalogCard/youtubeIcon.svg';
import ArrowIcon from '~svg/button/arrow.svg';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

const CatalogCardComponent: React.FC<CatalogCardComponentInterface> = ({ item }) => {
  ////////////////////////////////////////////////////////////////////////////
  const targetKey = (targetValue: string) => Object.entries(item).find(([key, value]) => value === targetValue)?.[0];
  ////////////////////////////////////////////////////////////////////////////

  const router = useRouter();

  const goToAnotherPage = () => {

    router.push(item.url);
  };


  const newLabel =
    <div className={`${styles.label} ${styles.label_new}`}>
      NEW
    </div>;

  const renderNewLabel = item.gender == 'Male' ? newLabel : '';

  const youtubeLabel =
    <div className={`${styles.label} ${styles.label_youtube}`}>
      <YoutubeIcon />
    </div>;

  const renderYoutubeLabel = item.status == 'Dead' ? youtubeLabel : '';



  return (
    <div className={styles.cardWrapper}>
      <div className={styles.imageBlock}>
        <Link className={`${styles.link} ${styles.link_image}`} href={item.url}>
          <Image
            className={styles.image}
            src={item.image}
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
          <Link className={`${styles.link} ${styles.link_title}`} href={item.url}>
            <h2 className={styles.title} >
              {item.name}
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
