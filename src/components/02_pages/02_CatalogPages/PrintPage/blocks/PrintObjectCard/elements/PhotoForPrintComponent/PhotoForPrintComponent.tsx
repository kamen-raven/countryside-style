'use client';

import React from 'react';
import Image from 'next/image';
import styles from './PhotoForPrintComponent.module.scss';
import { PhotoForPrintComponentInterface } from './PhotoForPrintComponent.interface';
import formatPhotosArray from '~helpers/formatters/formatPhotosArray';
import { usePathname } from 'next/navigation';


const PhotoForPrintComponent: React.FC<PhotoForPrintComponentInterface> = ({ objectData }) => {
  const pathname = usePathname();
  const typePage = pathname.split('/')[1];
  // весь массив фотографий и планов объекта
  const picturesArray = formatPhotosArray(objectData);


  return (
    <>
      {picturesArray.length &&
        <div className={`${styles.infoContainer}`}>
          <div className={styles.imageContainer}>

            <Image
              className={`${styles.image}`}
              src={picturesArray[0].image}
              alt={objectData.name}
              width={320}
              height={240}
              priority={true}
            /*               onClick={() => console.log('click photo!!')} */
            />
          </div>
          <div className={`${styles.innerContainer}`}>
            <div className={styles.characteristicContainer}>

              {objectData.place &&
                <p className={styles.address}>
                  Адрес: {objectData.place}
                </p>
              }
              {/* площадь дома */}
              <> {objectData.area_house &&
                <p className={styles.info}>
                  Площадь дома:&nbsp;
                  <span className={styles.info_span}>
                    {objectData.area_house}&nbsp;кв.м
                  </span>
                </p>}

                {/* площадь участка */}
                <> {(objectData.area_plot && objectData.land_area_measurement) &&
                  <p className={styles.info}>
                    Площадь участка:&nbsp;
                    <span className={styles.info_span}>
                      {objectData.area_plot}&nbsp;{objectData.land_area_measurement}
                    </span>
                  </p>}
                </>
              </>



              {/* площадь квартиры */}
              <> {objectData.area_flat &&
                <p className={styles.info}>
                  Площадь:&nbsp;
                  <span className={styles.info_span}>
                    {objectData.area_flat} кв.м
                  </span>
                </p>}
              </>
              <> {objectData.living_area &&
                <p className={styles.info}>
                  Жилая площадь:&nbsp;
                  <span className={styles.info_span}>
                    {objectData.living_area} кв.м
                  </span>
                </p>}
              </>
              <> {objectData.kitchen_area &&
                <p className={styles.info}>
                  Площадь кухни:&nbsp;
                  <span className={styles.info_span}>
                    {objectData.kitchen_area} кв.м
                  </span>
                </p>}
              </>

              {/* расстояние до КАД */}
              <> {objectData.distance_CAD &&
                <p className={styles.info}>
                  Расстояние до КАД:&nbsp;
                  <span className={styles.info_span}>
                    {objectData.distance_CAD} км
                  </span>
                </p>}
              </>
              {/* метро */}
              <> {objectData.metro &&
                <p className={styles.info}>
                  Метро:&nbsp;
                  <span className={styles.info_span}>
                    {objectData.metro}
                  </span>
                </p>}
              </>
            </div>


            <p className={styles.price}>
              {/* //* ЦЕНА */}
              {typePage !== "villages" ?
                (objectData.price &&   /* //? для объектов */
                  <>
                    Цена:&nbsp;
                    <span className={styles.info_span}>
                    {`${(objectData.price / 1000000).toLocaleString('ru-RU')}`}&nbsp;млн.&nbsp;руб.
                    </span>
                  </>)
                :
                (objectData.price &&  /*  //? для коттеджей */
                  <>
                    от&nbsp;{`${(objectData.price / 1000000).toLocaleString('ru-RU')}`}&nbsp;млн.&nbsp;руб.
                  </>)
              }
            </p>

          </div>
        </div>
      }
    </>

  );
};

export { PhotoForPrintComponent };
