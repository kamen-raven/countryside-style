import React from 'react';
import styles from './TitleComponent.module.scss';
import { TitleComponentInterface } from './TitleComponent.interface.ts';

/* SVG Icons */
import DistanceKADIcon from '~svg/catalogCard/distanceKAD.svg';
import MetroLogoIcon from '~svg/catalogCard/metroLogo.svg';
import { RealEstateObjectInterface } from '~interfaces/objects.interface.ts';
import { VillageObjectInterface } from '~interfaces/villages.interface.ts';
import { PathLinkComponent, PrintPageButton } from '~shared/index.ts';

const TitleComponent: React.FC<TitleComponentInterface> = ({ data, agentData }) => {
  function isRealEstateObject(obj: RealEstateObjectInterface | VillageObjectInterface): obj is RealEstateObjectInterface {
    return 'area_plot' in obj && 'land_area_measurement' in obj;
  }



  return (
    <div className={styles.titleContainer}>
      <PathLinkComponent dataInfo={data.name} />
      <h1 className={styles.title}>
        {data.name && data.name}
      </h1>

      {/* //* УЧАСТОК / УЧАСТКИ */}
      {isRealEstateObject(data) ? null
        /*         (data.area_plot &&  //? для домов / земельных участков
                  <p className={styles.squareArea}>
                    Участок: {data.area_plot} {data.land_area_measurement}
                  </p>) */
        :
        (data.area_of_plot &&  /* //? Для коттеджных поселков */
          <p className={styles.squareArea}>
            Участки от {data.area_of_plot} {data.area_of_plot_measurement}
          </p>)
      }

      {/* //* АДРЕС */}
      {data.place &&
        <p className={styles.address}>
          Адрес: {data.place}
        </p>
      }

      <div className={styles.buttonsContainer}>
        {/* //* Расстояние до КАД */}
        {data.distance_CAD &&
          <div className={styles.distanceContainer}>
            <DistanceKADIcon />
            <p className={styles.distance}>
              Расстояние до КАД&nbsp;-&nbsp;
              <span className={styles.distance_spanAccent}>
                {data.distance_CAD} км
              </span>
            </p>
          </div>
        }
        {/* //* Метро */}
        {isRealEstateObject(data) ?
          (data.metro &&  /* //? для объектов  */
            <div className={styles.distanceContainer}>
              <MetroLogoIcon className={styles.metroIcon} />
              <p className={styles.distance}>
                Метро&nbsp;-&nbsp;
                <span className={styles.distance_spanAccent}>
                  {data.metro}
                </span>
              </p>
            </div>)
          : null
        }

        {/* //* Кнопка для сохранения в PDF  */}
        <PrintPageButton data={data} agentData={agentData} func={'push'} />
      </div>
    </div>
  );
};

export { TitleComponent };
