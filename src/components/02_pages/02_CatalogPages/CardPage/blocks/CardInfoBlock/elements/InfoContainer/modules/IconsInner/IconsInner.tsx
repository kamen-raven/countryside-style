"use client";
import React from 'react';
import styles from './IconsInner.module.scss';
import * as icons from '~svg/catalogCard/iconsInfo/index';
import { IconsInnerInterface } from './IconsInner.interface';
import { RealEstateObjectInterface } from '~interfaces/objects.interface';
import { VillageObjectInterface } from '~interfaces/villages.interface';



const IconsInner: React.FC<IconsInnerInterface> = ({ data }) => {
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


  const characteristicsList = [
    'SHouse',
    'SLiving',
    'SArea',
    'RoomCount',
    'Floor',
    'Material',
    'Basement',
    'Communications',
    'SKitchen',
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
        SHouse: isRealEstateObject(data) ? data.area_house && `${data.area_house} кв.м` : '', // площадь дома
        SLiving: isRealEstateObject(data) ? data.living_area && `${data.living_area} кв.м` : '', // жилая площадь
        SArea: isRealEstateObject(data) ? data.area_plot && `${data.area_plot} ${data.land_area_measurement}` : '', // площадь участка
        RoomCount: isRealEstateObject(data) ? data.number_of_rooms : '', // количество комнат
        Floor: isRealEstateObject(data) ? data.floor : '', // этаж
        Material: data.wall_material, // материал стен
        Basement: data.foundation,  // фундамент
        Communications: data.display_engineering_services && `${data.display_engineering_services.map((item, index) => {
          return (`${index + 1 > 1 ? ' ' : ''}${item.engineering_service}`);
        })}`,
        SKitchen: isRealEstateObject(data) ? data.kitchen_area && `${data.kitchen_area} кв.м` : '', // площадь кухни
        DistanceToKad: data.distance_CAD && `${data.distance_CAD} км`, // расстояние до КАД
      },
      icon: {
        SHouse: <icons.SHouseIcon />,  // площадь дома
        SLiving: <icons.SLivingIcon />,  // жилая площадь
        SArea: <icons.SAreaIcon />,  // площадь участка
        RoomCount: <icons.RoomCountIcon />,  // количество комнат
        Floor: <icons.FloorIcon />,  // этаж
        Material: <icons.MaterialIcon />,  // материал стен
        Basement: <icons.BasementIcon />,  // фундамент
        Communications: <icons.CommunicationsIcon />,  // коммуникации
        SKitchen: <icons.SKitchenIcon />,  // площадь кухни
        DistanceToKad: <icons.DistanceToKadIcon />,  // расстояние до КАД
      },
      textLabel: {
        SHouse: 'Площадь дома: ', // площадь дома
        SLiving: 'Жилая площадь: ', // жилая площадь
        SArea: 'Площадь участка: ', // площадь участка
        RoomCount: 'Кол-во комнат: ', // количество комнат
        Floor: 'Этаж: ', // этаж
        Material: 'Материал стен: ', // материал стен
        Basement: 'Фундамент: ', // фундамент
        Communications: 'Коммуникации: ', // коммуникации
        SKitchen: 'Площадь кухни: ', // площадь кухни
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
    characteristicsData.map((item , index) => {
      return (
        <React.Fragment key={index}>
          {characteristicsList.map((innerItem, innerIndex) => {
            return (
              iconTemplate(item, innerItem, innerIndex)
            );
          })}
        </React.Fragment>
      );
    })
  );
};

export { IconsInner };
