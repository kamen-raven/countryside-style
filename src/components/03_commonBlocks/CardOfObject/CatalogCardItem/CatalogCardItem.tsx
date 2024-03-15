import React from 'react';
import styles from './CatalogCardItem.module.scss';
import {CatalogCardItemInterface } from './CatalogCardItem.interface.ts';
import Image from 'next/image';


import Link from 'next/link';
 // ! доделать 
const CatalogCardItem: React.FC<CatalogCardItemInterface> = ({ item }) => {







/*   const youtubeLabel = <div className={`${styles.label} ${styles.label_youtube}`}>
    <YoutubeIcon />
  </div>; */

/*   const renderYoutubeLabel = item.links?.youtube != '' ? youtubeLabel : null;

 */

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



{/*           {renderYoutubeLabel} */}
        </Link>
      </div>
      <div className={styles.infoBlock}>
        <div className={styles.infoContainer}>
          <div className={`${styles.link} ${styles.link_title}`}>
            <h2 className={styles.title} >
              {item.title}
            </h2>
          </div>
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




      </div>
    </div>
  );
};

export { CatalogCardItem };
