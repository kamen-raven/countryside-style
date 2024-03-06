"use client";
import React from 'react';
import { InfoContainerInterface } from '../../InfoContainer.interface';
import styles from './IconsInner.module.scss';
import * as icons from '~svg/catalogCard/iconsInfo/index';



const IconsInner: React.FC<InfoContainerInterface> = ({ data }) => {

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
        SHouse: data.area_house && `${data.area_house} кв.м.`, // площадь дома
        SLiving: data.living_area && `${data.living_area} кв.м.`, // жилая площадь
        SArea: data.area_plot && `${data.area_plot} ${data.land_area_measurement}`, // площадь участка
        RoomCount: data.number_of_rooms, // количество комнат
        Floor: data.number_of_storeys, // этаж
        Material: data.wall_material, // материал стен
        Basement: data.foundation,  // фундамент
        Communications: data.display_engineering_services && `${data.display_engineering_services.map((item, index) => {
          return (`${index + 1 > 1 ? ' ' : ''}${item.engineering_service}`);
        })}`,
        SKitchen: data.kitchen_area && `${data.kitchen_area} кв.м.`, // площадь кухни
        DistanceToKad: data.distance_CAD && `${data.distance_CAD} км.`, // расстояние до КАД
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
        DistanceToKad: 'Расстояние до КАД: ', // расстояние до КАД
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
