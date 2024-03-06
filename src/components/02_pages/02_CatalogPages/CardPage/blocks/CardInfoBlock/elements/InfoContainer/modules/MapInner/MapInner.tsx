import React from 'react';
import styles from './MapInner.module.scss';
import { InfoContainerInterface } from '../../InfoContainer.interface';


const MapInner = ({ data }: InfoContainerInterface): JSX.Element => {

  return (
    <>
      <h3 className={styles.title}>
        На карте
      </h3>
      <iframe
      className = {styles.map}
      src={data.yandex_map_link}
      loading="lazy">
      </iframe>
    </>
  );
};

export { MapInner };
