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
        {data.title}
      </h1>
      <p className={styles.squareArea}>
        Участок {data.characteristics.homestead?.squareArea}
      </p>
      <p className={styles.address}>
        Адрес: {data.address.area}, {data.address.town}, {data.address.organization}
      </p>
      <div className={styles.buttonsContainer}>
        <DistanceKADIcon />
        <p className={styles.distanceKAD}>
          Расстояние до КАД&nbsp;-&nbsp;
          <span className={styles.distanceKAD_spanAccent}>
            {data.characteristics.distanceToKad}
          </span>
        </p>
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
