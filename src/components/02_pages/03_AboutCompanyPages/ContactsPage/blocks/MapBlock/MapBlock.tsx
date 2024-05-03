
import React from 'react';
import styles from './MapBlock.module.scss';
import { MapBlockInterface } from './MapBlock.interface.ts';
import { MapActiveContainer } from '~features/index.ts';


const MapBlock: React.FC<MapBlockInterface> = ({ mapInfoData }) => {




  return (
    <section className={styles.wrapper}>
      <MapActiveContainer>
        <iframe className={styles.yandexMap}
          src={mapInfoData.mapLink}
          loading="lazy" />
      </MapActiveContainer>
    </section>
  );
};

export { MapBlock };
