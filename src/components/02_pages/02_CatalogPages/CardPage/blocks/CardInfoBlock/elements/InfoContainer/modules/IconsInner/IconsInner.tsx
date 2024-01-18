"use client";
import React from 'react';
import { InfoContainerInterface } from '../../InfoContainer.interface';
import styles from './IconsInner.module.scss';
import * as icons from '~svg/catalogCard/iconsInfo/index';


const IconsInner = ({ data }: InfoContainerInterface): JSX.Element => {




  return (
    <>

      <div className={styles.iconContainer}>
        <div className={styles.icon}>
          <icons.SHouseIcon />
        </div>
        {data.characteristics.house?.squareHouse &&
          <p className={styles.info}>
            Площадь дома:
            <span className={styles.info_accent}>
              <br />
              {data.characteristics.house.squareHouse} кв. м.
            </span>
          </p>
        }
      </div>
      <div className={styles.iconContainer}>
        <div className={styles.icon}>
          <icons.SAreaIcon />
        </div>
        {data.characteristics.homestead?.squareArea &&
          <p className={styles.info}>
            Площадь участка:
            <span className={styles.info_accent}>
              <br />
              {data.characteristics.homestead.squareArea} кв. м.
            </span>
          </p>
        }
      </div>
      <div className={styles.iconContainer}>
        <div className={styles.icon}>
          <icons.RoomCountIcon />
        </div>
        {data.characteristics.house?.roomCount &&
          <p className={styles.info}>
            Кол-во комнат:
            <span className={styles.info_accent}>
              <br />
              {data.characteristics.house.roomCount}
            </span>
          </p>
        }
      </div>
      <div className={styles.iconContainer}>
        <div className={styles.icon}>
          <icons.MaterialIcon />
        </div>
        {data.characteristics.house?.material &&
          <p className={styles.info}>
            Материал стен:
            <span className={styles.info_accent}>
              <br />
              {data.characteristics.house.material}
            </span>
          </p>
        }
      </div>
    </>
  );
};

export { IconsInner };
