
import React from 'react';
import styles from './CatalogBlock.module.scss';
import { CatalogBlockInterface } from './CatalogBlock.interface.ts';

import { BackgroundSVGPattern } from '~shared/index.ts';
import BackgroundPatternLeft from '~svg/background/backgroundObjectsForSaleLeft.svg';
import BackgroundPatternRight from '~svg/background/backgroundObjectsForSaleRight.svg';
import { CatalogCardsLayout, VillagesCardsLayout } from '../index.ts';


const CatalogBlock: React.FC<CatalogBlockInterface> = ({ objectsData, villagesData, typePage, /* itemsPerPage */ }) => {


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
        {(objectsData && typePage !== 'villages') &&
          <CatalogCardsLayout /* typePage={typePage} */ objectsData={objectsData} /* itemsPerPage={itemsPerPage} */ />
        }

        {(villagesData && typePage === 'villages') &&  ///сделать отображение страниц пагинации по аналогии с карточками объектов
          <VillagesCardsLayout typePage={typePage} villagesData={villagesData} />
        }
      </div>


    </section>
  );
};

export { CatalogBlock };
