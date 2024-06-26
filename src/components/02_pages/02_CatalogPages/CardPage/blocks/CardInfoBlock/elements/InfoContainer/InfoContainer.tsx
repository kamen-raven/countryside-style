import React from 'react';
import styles from './InfoContainer.module.scss';
import { InfoContainerInterface } from './InfoContainer.interface.ts';
import { CommonInfoInner, IconsInner, MapInner, CharacteristicsInner } from './modules/index.ts';
import { RealEstateObjectInterface } from '~interfaces/objects.interface.ts';
import { VillageObjectInterface } from '~interfaces/villages.interface.ts';
import Link from 'next/link';
import { SellerElement } from '../PriceComponent/modules/index.ts';
/* import { PriceElement, SellerElement } from '../PriceComponent/modules/index.ts'; */


const InfoContainer: React.FC<InfoContainerInterface> = ({ data, typePage, agentData }) => {

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
  function isVillageEstateObject(obj: RealEstateObjectInterface | VillageObjectInterface): obj is VillageObjectInterface {
    return (
      'web_page_link' in obj);
  }



  return (
    <div className={styles.infoContainer}>

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


      {isVillageEstateObject(data) ?
        data.web_page_link &&
        <div className={styles.webPageLinkContainer}>
          <Link className={styles.webPageLink} href={data.web_page_link} target='_blank' rel="noopener noreferrer">
            Перейти на сайт поселка
          </Link>
        </div>
        : null
      }

      {agentData &&
        <div className={styles.sellerContainer}>
          <SellerElement agentData={agentData} />
        </div>
      }
    </div>
  );
};

export { InfoContainer };
