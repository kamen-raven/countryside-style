import React from 'react';
import styles from './CharacteristicsPrintElement.module.scss';
import { CharacteristicsPrintElementInterface } from './CharacteristicsPrintElement.interface';
import { RealEstateObjectInterface } from '~interfaces/objects.interface';
import { VillageObjectInterface } from '~interfaces/villages.interface';
import * as icons from '~svg/catalogCard/iconsInfo/index';

const CharacteristicsPrintElement: React.FC<CharacteristicsPrintElementInterface> = ({ objectData }) => {
  function isRealEstateObject(obj: RealEstateObjectInterface | VillageObjectInterface): obj is RealEstateObjectInterface {
    return (
      'area_house' in obj &&
      'living_area' in obj &&
      'area_plot' in obj &&
      'kitchen_area' in obj &&
      'number_of_rooms' in obj &&
      'number_of_storeys' in obj &&
      'land_area_measurement' in obj);
  }

  const characteristicsList = [
    'SHouse',
    'SLiving',
    'SArea',
    'SKitchen',
    'RoomCount',
    'DistanceToKad',
  ];

  interface CharacteristicsInterface {
    objItem: {
      [key: string]: number | string;
    };
    icon: {
      [key: string]: React.JSX.Element;
    };
    textLabel: {
      [key: string]: string;
    }
  }


  const characteristicsData: CharacteristicsInterface[] = [
    {
      objItem: {
        SHouse: isRealEstateObject(objectData) ? objectData.area_house && `${objectData.area_house} кв.м` : '', // площадь дома
        SLiving: isRealEstateObject(objectData) ? objectData.living_area && `${objectData.living_area} кв.м` : '', // жилая площадь
        SArea: isRealEstateObject(objectData) ? objectData.area_plot && `${objectData.area_plot} ${objectData.land_area_measurement}` : '', // площадь участка
        SKitchen: isRealEstateObject(objectData) ? objectData.kitchen_area && `${objectData.kitchen_area} кв.м` : '', // площадь кухни
        RoomCount: (isRealEstateObject(objectData) && objectData.category === 'Квартиры') ? objectData.number_of_rooms : '', // количество комнат
        DistanceToKad: objectData.distance_CAD && `${objectData.distance_CAD} км`, // расстояние до КАД
      },
      icon: {
        SHouse: <icons.SHouseIcon />,  // площадь дома
        SLiving: <icons.SLivingIcon />,  // жилая площадь
        SArea: <icons.SAreaIcon />,  // площадь участка
        SKitchen: <icons.SKitchenIcon />,  // площадь кухни
        RoomCount: <icons.RoomCountIcon />,  // количество комнат
        DistanceToKad: <icons.DistanceToKadIcon />,  // расстояние до КАД
      },
      textLabel: {
        SHouse: 'Площадь дома: ', // площадь дома
        SLiving: 'Жилая площадь: ', // жилая площадь
        SArea: 'Площадь участка: ', // площадь участка
        SKitchen: 'Площадь кухни: ', // площадь кухни
        RoomCount: 'Кол-во комнат: ', // количество комнат
        DistanceToKad: `Расстояние до\u00A0КАД: `, // расстояние до КАД
      },
    }
  ];


  const iconTemplate = (item: CharacteristicsInterface, key: string, index: number) => {
    if (item.objItem[key]) {
      return (
        <div key={index} className={styles.iconContainer}>
          <div className={styles.icon}>
            {item.icon[key]}
          </div>
          <p className={styles.info}>
            {item.textLabel[key]}
            <span className={styles.info_accent}>
              <br />
              {item.objItem[key]}
            </span>
          </p>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    characteristicsData.map((item, index) => {
      return (
        <div key={index} className={styles.characteristicContainer}>

          {characteristicsList.map((innerItem, innerIndex) => {
            return (
              iconTemplate(item, innerItem, innerIndex)
            );
          })}

        </div>
      );
    })
  );
};

export { CharacteristicsPrintElement };
// <div className={styles.characteristicContainer}>
//   {/* площадь дома */}
//   <> {(isRealEstateObject(objectData) ? objectData.area_house &&
//     <p className={styles.info}>
//       Площадь дома:&nbsp;
//       <span className={styles.info_span}>
//         {objectData.area_house}&nbsp;кв.м
//       </span>
//     </p> : null)}

//     {/* площадь участка */}
//     <> {(isRealEstateObject(objectData) ? (objectData.area_plot && objectData.land_area_measurement) &&
//       <p className={styles.info}>
//         Площадь участка:&nbsp;
//         <span className={styles.info_span}>
//           {objectData.area_plot}&nbsp;{objectData.land_area_measurement}
//         </span>
//       </p> : null)}
//     </>
//   </>



//   {/* площадь квартиры */}
//   <> {(isRealEstateObject(objectData) ? objectData.area_flat &&
//     <p className={styles.info}>
//       Площадь:&nbsp;
//       <span className={styles.info_span}>
//         {objectData.area_flat} кв.м
//       </span>
//     </p> : null)}
//   </>
//   <> {(isRealEstateObject(objectData) ? objectData.living_area &&
//     <p className={styles.info}>
//       Жилая площадь:&nbsp;
//       <span className={styles.info_span}>
//         {objectData.living_area} кв.м
//       </span>
//     </p> : null)}
//   </>
//   <>{(isRealEstateObject(objectData) ? objectData.kitchen_area &&
//     <p className={styles.info}>
//       Площадь кухни:&nbsp;
//       <span className={styles.info_span}>
//         {objectData.kitchen_area} кв.м
//       </span>
//     </p> : null)}
//   </>

//   {/* расстояние до КАД */}
//   <> {objectData.distance_CAD &&
//     <p className={styles.info}>
//       Расстояние до КАД:&nbsp;
//       <span className={styles.info_span}>
//         {objectData.distance_CAD} км
//       </span>
//     </p>}
//   </>
//   {/* метро */}
//   <> {(isRealEstateObject(objectData) ? objectData.metro &&
//     <p className={styles.info}>
//       Метро:&nbsp;
//       <span className={styles.info_span}>
//         {objectData.metro}
//       </span>
//     </p> : null)}
//   </>
// </div>
