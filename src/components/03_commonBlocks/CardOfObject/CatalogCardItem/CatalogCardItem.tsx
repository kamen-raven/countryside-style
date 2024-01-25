import React from 'react';
import styles from './CatalogCardItem.module.scss';
import {CatalogCardItemInterface } from './CatalogCardItem.interface.ts';
import Image from 'next/image';

import YoutubeIcon from '~svg/catalogCard/youtubeIcon.svg';
import ArrowIcon from '~svg/button/arrow.svg';

import Link from 'next/link';
import { LabelNew } from '~shared/index.ts';

const CatalogCardItem: React.FC<CatalogCardItemInterface> = ({ item }) => {


  const newLabel = <LabelNew />;

  const renderNewLabel = item.status == 'new' ? newLabel : '';


  const youtubeLabel = <div className={`${styles.label} ${styles.label_youtube}`}>
    <YoutubeIcon />
  </div>;

  const renderYoutubeLabel = item.links?.youtube != '' ? youtubeLabel : '';



  return (
    <div className={styles.cardWrapper}>
      <div className={styles.imageBlock}>
        <Link className={`${styles.link} ${styles.link_image}`} href={'/houses/card'}>
          <Image
            className={styles.image}
            src={item.mainImage}
            alt={item.title}
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
              {item.title}
            </h2>
          </Link>
          <div className={styles.statusContainer}>
            <p className={styles.status}>
              {item.type}&nbsp;
              {/* {targetKey(item.status)}&nbsp; */}
              <span className={styles.status_bold}>
                {item.characteristics.house?.squareHouse}&nbsp;кв.м.
              </span>
            </p>
            {item.characteristics.homestead?.squareArea &&
              <>
                <span>&nbsp;|&nbsp;</span>
                <p className={styles.status}>
                  Участок&nbsp;
                  <span className={styles.status_bold}>
                    {item.characteristics.homestead?.squareArea}
                  </span>
                </p>
              </>

            }


          </div>
          <p className={styles.address}>
            {item.address.area}&nbsp;{item.address.town}
          </p>
        </div>

        {item.status != 'sold' ?
          <div className={styles.priceContainer}>
            <p className={styles.price}>
              {item.cost} млн. руб.
            </p>
            <button className={`${styles.arrow} ${styles.arrow_right}`}>
              <ArrowIcon />
            </button>
          </div>
          :
          ''
        }



      </div>
    </div>
  );
};

export { CatalogCardItem };
