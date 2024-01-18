import React from 'react';
import styles from './MapBlock.module.scss';
import { MapBlockInterface } from './MapBlock.interface.ts';


const MapBlock: React.FC<MapBlockInterface> = ({ mapInfoData }) => {
    return (
        <section className = {styles.wrapper}>
          <div className = {styles.container}>
            <iframe className = {styles.yandexMap}
            src={mapInfoData.mapLink}/>
          </div>
        </section>
    );
};

export { MapBlock };
