import React from 'react';
import styles from './InfoContainer.module.scss';
import { InfoContainerInterface } from './InfoContainer.interface.ts';
import { CommonInfoInner, IconsInner, MapInner, CharacteristicsInner } from './modules/index.ts';
import { RealEstateObjectInterface } from '~interfaces/objects.interface.ts';
import { VillageObjectInterface } from '~interfaces/villages.interface.ts';
/* import { PriceElement, SellerElement } from '../PriceComponent/modules/index.ts'; */


const InfoContainer: React.FC<InfoContainerInterface> = ({ data, typePage }) => {

  function isRealEstateObject(obj: RealEstateObjectInterface | VillageObjectInterface): obj is RealEstateObjectInterface {
    return (
      'area_house' in obj &&
      'living_area' in obj &&
      'area_plot' in obj &&
      'number_of_rooms' in obj &&
      'number_of_storeys' in obj &&
      'kitchen_area' in obj &&
      'land_area_measurement' in obj);
  }



  return (
    <div className={styles.infoContainer}>

{/*       <div className={styles.photosContainer}>
        <PhotosInner data={data} />
      </div> */}


      {/*       <div className={styles.priceContainer}>
        <PriceElement objectData={undefined} agentData={undefined}  />
        <SellerElement agentData={undefined}  />
      </div> */}


      {isRealEstateObject(data) ?
        ((data.area_house ||
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
          </div>)
        :
        ((data.wall_material ||
          data.foundation ||
          data.display_engineering_services ||
          data.distance_CAD) &&

          <div className={styles.iconsContainer}>
            <IconsInner data={data} />
          </div>)
      }

      {data.object_description &&
        <div className={styles.commonInfoContainer}>
          <CommonInfoInner data={data} />
        </div>
      }

      {/* //* характеристики*/}
      {<div className={styles.characteristicsContainer}>
        <CharacteristicsInner data={data} typePage={typePage} />
      </div>
      }

      {/* //* КАРТА */}
      {data.yandex_map_link &&
        <div className={styles.mapContainer}>
          <MapInner data={data} />
        </div>
      }

    </div>
  );
};

export { InfoContainer };
