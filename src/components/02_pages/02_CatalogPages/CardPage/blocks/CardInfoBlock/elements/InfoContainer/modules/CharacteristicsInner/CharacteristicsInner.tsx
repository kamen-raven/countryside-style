import React from 'react';
import { InfoContainerInterface } from '../../InfoContainer.interface';
import styles from './CharacteristicsInner.module.scss';



const CharacteristicsInner = ({ data }: InfoContainerInterface): JSX.Element => {

  const houseChar = {
    squareHouse: 'Площадь дома',
    // squareLiving: 'Жилая площадь',
    // squareKitchen: 'Площадь кухни',
    // floorCount: 'Количество этажей',
    basement: 'Фундамент',
    material: 'Материал стен',
    rooms: 'Количество комнат',
    communications: 'Коммуникации',
    category: 'Категория земель',
    squareArea: 'Площадь участка',
    relief: 'Рельеф участка',
    fence: 'Ограждение участка',
  };

  /*   const homestandChar = {
      category: 'Категория земель',
      squareArea: 'Площадь участка',
      relief: 'Рельеф участка',
      fence: 'Ограждение участка',
    }; */

  const houseCharacteristics = data;
  const homestandCharacteristics = data.balcony;

  const charList = (chars: typeof houseChar, dataItems: typeof houseCharacteristics | typeof homestandCharacteristics) => {
    if (dataItems == undefined) {
      return;
    }

    return (
      <ul className={styles.list}>
        {Object.keys(chars).map((key) => (
          dataItems[key as keyof typeof dataItems] && (
            <li className={styles.listItem} key={key}>
              <>
                {chars[key as keyof typeof chars]}: {key === 'squareHouse'
                  ? <span className={styles.listItem__spanAccent}>
                    {dataItems[key as keyof typeof dataItems]} кв.м.
                  </span>
                  :
                  <span className={styles.listItem__spanAccent}>
                    {dataItems[key as keyof typeof dataItems]}
                  </span>
                }
              </>
            </li>
          )
        ))}
      </ul>
    );
  };


  return (
    <>
      <h3 className={styles.title}>
        Характеристики объекта
      </h3>
      <div className={styles.inner}>

        <div className={styles.blockInfo}>
          <h4 className={styles.label}>
            Дом
          </h4>
          {charList(houseChar, houseCharacteristics)}
        </div>

        {homestandCharacteristics &&
          <div className={styles.blockInfo}>
            <h4 className={styles.label}>
              Участок
            </h4>

            {charList(houseChar, homestandCharacteristics)}
          </div>
        }
      </div>
        <div className={styles.blockInfo}>
          <h4 className={styles.label}>
            Местоположение
          </h4>
          {charList(houseChar, houseCharacteristics)}
        </div>
    </>
  );
};

export { CharacteristicsInner };
