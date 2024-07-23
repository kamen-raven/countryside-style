import React from 'react';
import Image from 'next/image';
import styles from './RecentlySoldObjectCard.module.scss';
import { RecentlySoldObjectCardInterface } from './RecentlySoldObjectCard.interface.ts';

import formatPhotosArray from '~helpers/formatters/formatPhotosArray.ts';


const RecentlySoldObjectCard: React.FC<RecentlySoldObjectCardInterface> = ({ item }) => {
  const picturesArray = formatPhotosArray(item);

  return (
    <div key={item.uuid} className={styles.cardWrapper}>
      <div className={styles.imageBlock}>
        {picturesArray &&
          <Image
            className={styles.image}
            src={picturesArray[0].image}
            alt={item.name}
            width={460}
            height={350}
          />}
      </div>

      <div className={`${styles.infoBlock}`}>
        <div className={styles.infoContainer}>

            <div className={styles.title} >
              {item.name}
            </div>

          <div className={styles.statusContainer}>
          {/* дачи дома коттеджи */}
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

            {/* квартиры */}
            {(item.category === 'Квартиры' && item.area_flat) /* (typePage === 'flats' && item.area_flat) */ &&
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

            {(item.area_plot && item.category !== 'Земельные участки' /* typePage !== 'lands' */) &&
              <>
                <p className={styles.status}>
                  Участок&nbsp;
                  <span className={styles.status_bold}>
                    {item.area_plot} {item.land_area_measurement}
                  </span>
                </p>
              </>
            }

            {/* земельные участки */}
            {(item.area_plot && item.category === 'Земельные участки'/* && typePage === 'lands' */) &&
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
      </div>
    </div>
  );
};

export { RecentlySoldObjectCard };
