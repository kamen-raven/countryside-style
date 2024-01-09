import React from 'react';
import styles from './InfoContainer.module.scss';
import { InfoContainerInterface } from './InfoContainer.interface.ts';
import { CharacteristicsInner, CommonInfoInner, IconsInner, MapInner } from './modules/index.ts';


const InfoContainer: React.FC<InfoContainerInterface> = ({ data }) => {


  return (
    <div className={styles.infoContainer}>
      <div className={styles.photosContainer}> PICTURES HERE</div>

      {data.characteristics &&
        <div className={styles.iconsContainer}>
          <IconsInner data={data} />
        </div>
      }


      {data.information &&
        <div className={styles.commonInfoContainer}>
          <CommonInfoInner data={data} />
        </div>
      }

      {data.characteristics &&
        <div className={styles.characteristicsContainer}>
          <CharacteristicsInner data={data} />
        </div>
      }


      {data.address.map.mapLink &&
        <div className={styles.mapContainer}>
          <MapInner data={data}/>
        </div>
      }


    </div>
  );
};

export { InfoContainer };
