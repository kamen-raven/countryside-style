
import React from 'react';
import styles from './CatalogBlock.module.scss';
import { CatalogBlockInterface } from './CatalogBlock.interface.ts';
import { CatalogCardsLayout } from '~features/index.ts';
import { BackgroundSVGPattern } from '~shared/index.ts';
import BackgroundPatternLeft from '~svg/background/backgroundObjectsForSaleLeft.svg';
import BackgroundPatternRight from '~svg/background/backgroundObjectsForSaleRight.svg';



const CatalogBlock: React.FC<CatalogBlockInterface> = ({ objectsData }) => {
  const ITEMS_PER_PAGE = 6;

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
        <CatalogCardsLayout objectsData={objectsData} itemsPerPage={ITEMS_PER_PAGE} />
      </div>
    </section>
  );
};

export { CatalogBlock };
