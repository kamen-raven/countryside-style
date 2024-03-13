import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './VillageCardComponent.module.scss';
import { VillageCardComponentInterface } from './VillageCardComponent.interface.ts';
import ArrowIcon from '~svg/button/arrow.svg';
import { /* LabelNew,  */YoutubeLabel } from '~shared/index.ts';


const VillageCardComponent: React.FC<VillageCardComponentInterface> = ({ item, typePage }) => {


  const hrefLink = `/${typePage}/${item.id}`;


  return (
    <div key={item.uuid} className={styles.cardWrapper}>
      <div className={styles.imageBlock}>
        <Link className={`${styles.link} ${styles.link_image}`} href={hrefLink}>
          {item.photo_images[0] &&
            <Image
              className={styles.image}
              src={item.photo_images[0].image}
              alt={item.name}
              width={460}
              height={350}
            />
          }
        </Link>
{/*         <LabelNew createdAt={item.created_at} /> */}
      {/*   <YoutubeLabel link={item.you_tube_link} /> */}  {/* //! */}
      </div>

      <div className={`${styles.infoBlock}`}>
        <div className={styles.infoContainer}>
          <Link className={`${styles.link} ${styles.link_title}`} href={hrefLink}>
            <h2 className={styles.title} >
              {item.name}
            </h2>
          </Link>
          <div className={styles.statusContainer}>

            {item.area_of_plot &&
              <>
                <p className={styles.status}>
                  Участки&nbsp;от&nbsp;
                  <span className={styles.status_bold}>
                    {item.area_of_plot} {item.area_of_plot_measurement}
                  </span>
                </p>
              </>
            }


            {item.area_of_houses &&
              <>
                <p className={styles.status}>
                  Площадь домов&nbsp;от&nbsp;
                  <span className={styles.status_bold}>
                    {item.area_of_houses}
                  </span>
                </p>
              </>
            }
{/*
            {(item.area_of_houses && item.area_of_plot) &&
              <>
                <span>⎯⎯⎯⎯</span>
              </>
            } */}

          </div>

          <p className={styles.address}>
            {item.place}
          </p>
        </div>


        <div className={styles.priceContainer}>
          <p className={styles.price}>
            от {`${(item.price / 1000000).toLocaleString('ru-RU')}`}&nbsp;млн.&nbsp;руб.
          </p>
          <Link className={`${styles.arrow} ${styles.arrow_right}`} href={hrefLink}>
            <ArrowIcon />
          </Link>
        </div>


      </div>
    </div>
  );
};

export { VillageCardComponent };
