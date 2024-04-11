import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './CatalogCardComponent.module.scss';
import { CatalogCardComponentInterface } from './CatalogCardComponent.interface.ts';
import ArrowIcon from '~svg/button/arrow.svg';
import { LabelNew, YoutubeLabel } from '~shared/index.ts';
import formatPhotosArray from '~helpers/formatters/formatPhotosArray.ts';
import generateObjectHrefLink from '~helpers/objects/generateObjectHrefLink.ts';


const CatalogCardComponent: React.FC<CatalogCardComponentInterface> = ({ item, typePage }) => {
  const getType = generateObjectHrefLink(item);
  const hrefLink = getType !== undefined ? `/${getType}/${item.id}` : '/'; // генерируем ссылку на карточку объекта
  const picturesArray = formatPhotosArray(item);

  return (
    <div key={item.uuid} className={styles.cardWrapper}>
      <div className={styles.imageBlock}>
        <Link className={`${styles.link} ${styles.link_image}`} href={hrefLink}>
        {picturesArray &&
          <Image
            className={styles.image}
            src={picturesArray[0].image}
            alt={item.name}
            width={460}
            height={350}
          />}
        </Link>
        <LabelNew createdAt={item.created_at} />
        <YoutubeLabel link={item.you_tube_link} />
      </div>

      <div className={`${styles.infoBlock}`}>
        <div className={styles.infoContainer}>
          <Link className={`${styles.link} ${styles.link_title}`} href={hrefLink}>
            <h2 className={styles.title} >
              {item.name}
            </h2>
          </Link>
          <div className={styles.statusContainer}>

            {item.area_house &&
              <>
                <p className={styles.status}>
                  {item.type_house !== null ?
                  `${item.type_house}\u00A0`
                  :
                  `S\u00A0=\u00A0`}

                  <span className={styles.status_bold}>
                    {item.area_house}&nbsp;кв.м
                  </span>
                </p>
              </>
            }

            {(typePage === 'flats' && item.area_flat) &&
              <>
                <p className={styles.status}>
                  S&nbsp;=&nbsp;
                  <span className={styles.status_bold}>
                    {item.area_flat}&nbsp;кв.м
                  </span>
                </p>
              </>
            }

            {((item.area_house || item.area_flat) && item.area_plot) &&
              <>
                <span>|</span>
              </>
            }

            {(item.area_plot && typePage !== 'lands') &&
              <>
                <p className={styles.status}>
                  Участок&nbsp;
                  <span className={styles.status_bold}>
                    {item.area_plot} {item.land_area_measurement}
                  </span>
                </p>
              </>
            }
          </div>

          <p className={styles.address}>
            {item.place}
          </p>
        </div>


        <div className={styles.priceContainer}>
          <p className={styles.price}>
            {`${(item.price / 1000000).toLocaleString('ru-RU')}`}&nbsp;млн.&nbsp;руб.
          </p>
          <Link className={`${styles.arrow} ${styles.arrow_right}`} href={hrefLink}>
            <ArrowIcon />
          </Link>
        </div>


      </div>
    </div>
  );
};

export { CatalogCardComponent };
