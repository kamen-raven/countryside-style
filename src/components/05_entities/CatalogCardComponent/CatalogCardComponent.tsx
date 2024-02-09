'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useRouter } from 'next/navigation';

import styles from './CatalogCardComponent.module.scss';
import { CatalogCardComponentInterface } from './CatalogCardComponent.interface.ts';


import ArrowIcon from '~svg/button/arrow.svg';

import { LabelNew, YoutubeLabel } from '~shared/index.ts';

const CatalogCardComponent: React.FC<CatalogCardComponentInterface> = ({ item }) => {
  ////для того чтобы отображать статус и гендер ////////////////////////////////////////////////////////////////////////
  /*   const targetKey = (targetValue: string) => Object.entries(item).find(([, value]) => value === targetValue)?.[0]; */
  ////////////////////////////////////////////////////////////////////////////

  const router = useRouter();

  const goToAnotherPage = () => {

    router.push('/houses/card');
  };


  const newLabel = <LabelNew />;
  const renderNewLabel = item.status == 'new' ? newLabel : '';

  const youtubeLabel = <YoutubeLabel />;
  const renderYoutubeLabel = item.links?.youtube != '' ? youtubeLabel : '';



  return (
    <div className={styles.cardWrapper}>
      <div className={styles.imageBlock}>
        <Link className={`${styles.link} ${styles.link_image}`} href={'/houses/card'}>
          <Image
            className={styles.image}
            src={item.mainImage}
            alt={item.address.town}
          />
          {renderNewLabel}
          {renderYoutubeLabel}
        </Link>
      </div>

      <div className={`${styles.infoBlock}`}>
        <div className={styles.infoContainer}>
          <Link className={`${styles.link} ${styles.link_title}`} href={'/houses/card'}>
            <h2 className={styles.title} >
              {item.address.town}
            </h2>
          </Link>
          <div className={styles.statusContainer}>
            <p className={styles.status}>
              {item.type}&nbsp;
              <span className={styles.status_bold}>
                {item.characteristics.house?.squareHouse}&nbsp;кв.м.
              </span>
            </p>

            {item.characteristics.homestead &&
              <>
                <span>|</span>
                <p className={styles.status}>
                  Участок&nbsp;
                  <span className={styles.status_bold}>
                    {item.characteristics.homestead.squareArea}
                  </span>
                </p>
              </>
            }
          </div>

          <p className={styles.address}>
            {item.address.town}, {item.address.area}, {item.address.organization}
          </p>
        </div>


          <div className={styles.priceContainer}>
            <p className={styles.price}>
              {item.cost}&nbsp;млн.&nbsp;руб.
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
