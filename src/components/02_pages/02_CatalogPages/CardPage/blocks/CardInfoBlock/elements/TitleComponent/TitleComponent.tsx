import React from 'react';
import styles from './TitleComponent.module.scss';
import { TitleComponentInterface } from './TitleComponent.interface.ts';

/* SVG Icons */
import DistanceKADIcon from '~svg/catalogCard/distanceKAD.svg';
import DownloadPDFIcon from '~svg/catalogCard/downloadPDF.svg';

const TitleComponent: React.FC<TitleComponentInterface> = ({ data }) => {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>
        {data.name}
      </h1>
      {data.area_plot &&
        <p className={styles.squareArea}>
          Участок: {data.area_plot} {data.land_area_measurement}
        </p>
      }
      {data.place &&
        <p className={styles.address}>
          Адрес: {data.place}
        </p>
      }
      <div className={styles.buttonsContainer}>
        {data.distance_CAD &&
          <>
            <DistanceKADIcon />
            <p className={styles.distanceKAD}>
              Расстояние до КАД&nbsp;-&nbsp;
              <span className={styles.distanceKAD_spanAccent}>
                {data.distance_CAD} км.
              </span>
            </p>
          </>
        }
        <button className={styles.downloadButton}>
          Скачать PDF
          <span className={styles.downloadButton_icon}>
            <DownloadPDFIcon />
          </span>
        </button>
      </div>
    </div>
  );
};

export { TitleComponent };
