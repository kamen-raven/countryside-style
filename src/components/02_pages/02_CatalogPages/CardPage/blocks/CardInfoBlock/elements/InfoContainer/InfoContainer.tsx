import React from 'react';
import styles from './InfoContainer.module.scss';
import { InfoContainerInterface } from './InfoContainer.interface.ts';
import { PhotosInner, /* CharacteristicsInner, */ CommonInfoInner, IconsInner, MapInner } from './modules/index.ts';
/* import { PriceElement, SellerElement } from '../PriceComponent/modules/index.ts'; */


const InfoContainer: React.FC<InfoContainerInterface> = ({ data }) => {


  return (
    <div className={styles.infoContainer}>
      <div className={styles.photosContainer}>
        <PhotosInner data={data} />
      </div>

      {/*       <div className={styles.priceContainer}>
        <PriceElement objectData={undefined} agentData={undefined}  />
        <SellerElement agentData={undefined}  />
      </div> */}


      {(data.area_house ||
        data.living_area ||
        data.area_plot ||
        data.number_of_rooms ||
        data.number_of_storeys ||
        data.wall_material ||
        data.foundation ||
        data.display_engineering_services ||
        data.kitchen_area ||
        data.distance_CAD) &&

        <div className={styles.iconsContainer}>
          <IconsInner data={data} />
        </div>
      }

      {data.object_description &&
        <div className={styles.commonInfoContainer}>
          <CommonInfoInner data={data} />
        </div>
      }


{/*       {data. &&
        <div className={styles.characteristicsContainer}>
          <CharacteristicsInner data={data} />
        </div>
      } */}


      {data.yandex_map_link &&
        <div className={styles.mapContainer}>
          <MapInner data={data} />
        </div>
      }


    </div>
  );
};

export { InfoContainer };
