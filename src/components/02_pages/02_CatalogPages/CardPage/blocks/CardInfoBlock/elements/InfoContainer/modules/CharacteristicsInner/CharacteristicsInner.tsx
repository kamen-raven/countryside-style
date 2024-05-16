import React, { ReactNode } from 'react';
import { CharacteristicsInnerInterface } from './CharacteristicsInner.interface';
import styles from './CharacteristicsInner.module.scss';
import { RealEstateObjectInterface } from '~interfaces/objects.interface';

import { houseType, landType, flatType, villageType, villagePlotType, placeType } from '~data/constant/cardCharacteristicsList/cardCharacteristicsList';
import { VillageObjectInterface } from '~interfaces/villages.interface';

const CharacteristicsInner = ({ data, typePage }: CharacteristicsInnerInterface): JSX.Element => {
  function isRealEstateObject(obj: RealEstateObjectInterface | VillageObjectInterface): obj is RealEstateObjectInterface {
    return 'land_area_measurement' in obj && 'metro' in obj;
  }



  const measureInfo = {
    area_house: 'кв.м',
    area_flat: 'кв.м',
    living_area: 'кв.м',
    kitchen_area: 'кв.м',
    ceiling_height: 'м',
    date_foundation: '',
    distance_CAD: 'км',
    area_plot: `${isRealEstateObject(data) ? data.land_area_measurement : ''}`,
    area_of_plot: `${isRealEstateObject(data) ? null : data.area_of_plot_measurement}`
  };

  //* функция отрисовки инженерных систем (коммуникаций)
  const engineeringServicesRender = (): React.JSX.Element => {
    return (
      <>
        <li className={styles.listItem} >
          Коммуникации:&nbsp;
          {data.display_engineering_services.map((service, index) => {
            return (
              <React.Fragment key={index}>
                <span className={styles.listItem__spanAccent}>
                  {`${service.engineering_service}${index + 1 < data.display_engineering_services.length ? ', ' : ''} `}
                </span>
              </React.Fragment>
            );
          })}
        </li>
      </>
    );
  };




  //* функция отрисовки листа характеристик
  const createCharacteristicsList = (
    chars: typeof houseType | typeof landType | typeof flatType | typeof placeType | typeof villageType | typeof villagePlotType,
    dataItems: RealEstateObjectInterface | VillageObjectInterface): ReactNode => {

    if (!dataItems) {
      return null;
    }

    return (
      /* //* создаем список характеристик и результатов на основе перечня имеющейся информации  */
      <>
        {Object.keys(chars).map((key) => (
          dataItems[key as keyof typeof chars] && (
            <li className={styles.listItem} key={key}>
              <>
                {chars[key as keyof typeof chars]}:&nbsp;
                <span className={styles.listItem__spanAccent}>
                  {dataItems[key as keyof typeof chars]}&nbsp;{key as keyof typeof chars ? measureInfo[key as keyof typeof chars] : null}
                </span>
              </>
            </li>
          )
        ))}
      </>
    );
  };


  const renderCharacteristicsTypeList = (type: 'flats' | 'lands' | 'houses-and-cottages' | 'villages') => {

    if (type === 'houses-and-cottages') {
      data = data as RealEstateObjectInterface;
      return (
        <>
          <div className={styles.blockInfo}>
            {data.type_house &&
              <h4 className={styles.label}>
                {data.type_house}
              </h4>
            }
            <ul className={styles.list}>
              {createCharacteristicsList(houseType, data)}
              {data.display_engineering_services[0].engineering_service && engineeringServicesRender()}
            </ul>
          </div>
          <div className={styles.blockInfo}>
            <h4 className={styles.label}>
              Участок
            </h4>
            <ul className={styles.list}>
              {createCharacteristicsList(landType, data)}
            </ul>
          </div>
        </>
      );
    } else if (type === 'lands') {
      data = data as RealEstateObjectInterface;
      return (
        <>
          <div className={styles.blockInfo}>
            {data.type_house &&
              <h4 className={styles.label}>
                {data.type_house}
              </h4>
            }
            <ul className={styles.list}>
              {createCharacteristicsList(landType, data)}
              {data.display_engineering_services[0] && engineeringServicesRender()}
            </ul>
          </div>
        </>
      );
    } else if (type === 'flats') {
      data = data as RealEstateObjectInterface;
      return (
        <>
          <div className={styles.blockInfo}>
            {data.type_house &&
              <h4 className={styles.label}>
                {data.type_house}
              </h4>
            }
            <ul className={styles.list}>
              {createCharacteristicsList(flatType, data)}
            </ul>
          </div>
        </>
      );
    } else if (type === 'villages') {
      data = data as VillageObjectInterface;
      return (
        <>
          <div className={styles.blockInfo}>

            <h4 className={styles.label}>
              Поселок
            </h4>

            <ul className={styles.list}>
              {createCharacteristicsList(villageType, data)}
              {data.display_engineering_services[0].engineering_service && engineeringServicesRender()}
            </ul>
          </div>
          <div className={styles.blockInfo}>
            <h4 className={styles.label}>
              Участки
            </h4>
            <ul className={styles.list}>
              {createCharacteristicsList(villagePlotType, data)}
            </ul>
          </div>
        </>
      );
    } else if (!type) {
      return null;
    }
  };


  return (
    <>
      <h3 className={styles.title}>
        {typePage !== 'villages' ?
          'Характеристики объекта'
          :
          'Характеристики'
        }
      </h3>

      <div className={styles.inner}>
        {renderCharacteristicsTypeList(typePage)}
      </div>

      {/*  //* отображаем местоположение в характеристики - адрес, КАД и тд */}
      {(data.place || data.distance_CAD || (isRealEstateObject(data) ? data.metro : null)) &&
        <div className={styles.blockInfo}>
          <h4 className={styles.label}>
            Местоположение
          </h4>
          <ul className={styles.list}>
            {createCharacteristicsList(placeType, data)}
          </ul>
        </div>
      }
    </>
  );
};

export { CharacteristicsInner };
