import React from 'react';
import { ObjectsForSaleBlockProps } from './ObjectsForSaleBlock.props';
import styles from './ObjectsForSaleBlock.module.scss';
import BackgroundPatternLeft from '~svg/background/backgroundObjectsForSaleLeft.svg';
import BackgroundPatternRight from '~svg/background/backgroundObjectsForSaleRight.svg';

import { ObjectForSale } from './elements/ObjectForSale/ObjectForSale';
import { BackgroundSVGPattern } from '~shared/index';
import filteredObjectsByCategory from '~helpers/objects/filteredObjectsByCategory';

const ObjectsForSaleBlock: React.FC<ObjectsForSaleBlockProps> = ({
  objectsData, // объекты
  villagesData // поселки
}) => {


  const landsData = filteredObjectsByCategory(objectsData, 'Земельные участки');
  const flatsData = filteredObjectsByCategory(objectsData, 'Квартиры');
  const housesData = filteredObjectsByCategory(objectsData, 'Дома, дачи, коттеджи');



  return (
    <section className={styles.wrapper}>
      <>
        <BackgroundSVGPattern positionX='right' positionY='top' >
          <BackgroundPatternRight className={styles.backgroundRight} />
        </BackgroundSVGPattern>
        <BackgroundSVGPattern positionX='left' positionY='bottom'>
          <BackgroundPatternLeft className={styles.backgroundLeft} />
        </BackgroundSVGPattern>
      </>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Объекты в&nbsp;продаже
        </h2>

        <div className={styles.innerBlock}>
          {/* houses */}
          <>
            {
              <ObjectForSale objectItemsList={housesData} linkToCatalog={'houses-and-cottages'} containerTemplate={'picFirst'} />
            }
          </>

          {/* lands */}
          <>
            {
              <ObjectForSale objectItemsList={landsData} linkToCatalog={'lands'} containerTemplate={'textFirst'} />
            }
          </>

          {/* villages */}
          <>
            {
              <ObjectForSale objectItemsList={villagesData} linkToCatalog={'villages'} containerTemplate={'picFirst'} />
            }
          </>

          {/* flats */}
          <>
            {
              <ObjectForSale objectItemsList={flatsData} linkToCatalog={'flats'} containerTemplate={'textFirst'} />
            }
          </>
        </div>

      </div>
    </section>
  );
};

export { ObjectsForSaleBlock };
