import React from 'react';
import styles from './CharacteristicsPrintElement.module.scss';
import { CharacteristicsPrintElementInterface } from './CharacteristicsPrintElement.interface';
import { RealEstateObjectInterface } from '~interfaces/objects.interface';
import { VillageObjectInterface } from '~interfaces/villages.interface';


const CharacteristicsPrintElement: React.FC<CharacteristicsPrintElementInterface> = ({ objectData }) => {
  function isRealEstateObject(obj: RealEstateObjectInterface | VillageObjectInterface): obj is RealEstateObjectInterface {
    return (
      'land_area_measurement' in obj &&
      'metro' in obj &&
      'area_house' in obj &&
      'area_plot' in obj &&
      'area_flat' in obj &&
      'living_area' in obj &&
      'kitchen_area' in obj
    );
  }

  return (
    <div className={styles.characteristicContainer}>
      {/*
                    {objectData.place &&
                      <p className={styles.address}>
                        Адрес: {objectData.place}
                      </p>
                    } */}
      {/* площадь дома */}
      <> {(isRealEstateObject(objectData) ? objectData.area_house &&
        <p className={styles.info}>
          Площадь дома:&nbsp;
          <span className={styles.info_span}>
            {objectData.area_house}&nbsp;кв.м
          </span>
        </p> : null)}

        {/* площадь участка */}
        <> {(isRealEstateObject(objectData) ? (objectData.area_plot && objectData.land_area_measurement) &&
          <p className={styles.info}>
            Площадь участка:&nbsp;
            <span className={styles.info_span}>
              {objectData.area_plot}&nbsp;{objectData.land_area_measurement}
            </span>
          </p> : null)}
        </>
      </>



      {/* площадь квартиры */}
      <> {(isRealEstateObject(objectData) ? objectData.area_flat &&
        <p className={styles.info}>
          Площадь:&nbsp;
          <span className={styles.info_span}>
            {objectData.area_flat} кв.м
          </span>
        </p> : null)}
      </>
      <> {(isRealEstateObject(objectData) ? objectData.living_area &&
        <p className={styles.info}>
          Жилая площадь:&nbsp;
          <span className={styles.info_span}>
            {objectData.living_area} кв.м
          </span>
        </p> : null)}
      </>
      <>{(isRealEstateObject(objectData) ? objectData.kitchen_area &&
        <p className={styles.info}>
          Площадь кухни:&nbsp;
          <span className={styles.info_span}>
            {objectData.kitchen_area} кв.м
          </span>
        </p> : null)}
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
      <> {(isRealEstateObject(objectData) ? objectData.metro &&
        <p className={styles.info}>
          Метро:&nbsp;
          <span className={styles.info_span}>
            {objectData.metro}
          </span>
        </p> : null)}
      </>
    </div>
  );
};

export { CharacteristicsPrintElement };
