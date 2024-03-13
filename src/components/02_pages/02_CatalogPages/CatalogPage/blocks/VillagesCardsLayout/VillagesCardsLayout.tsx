import React from 'react';
import styles from './VillagesCardsLayout.module.scss';
import { VillagesCardsLayoutInterface } from './VillagesCardsLayout.interface.ts';
import { VillageCardComponent } from '~entities/index.ts';


const VillagesCardsLayout: React.FC<VillagesCardsLayoutInterface> = ({ villagesData, typePage }) => {



  return (
      <div className={styles.cardsLayout}>
        {villagesData.map((item) => (
          <VillageCardComponent item={item} typePage={typePage}/>
        ))}
      </div>
  );
};

export { VillagesCardsLayout };
