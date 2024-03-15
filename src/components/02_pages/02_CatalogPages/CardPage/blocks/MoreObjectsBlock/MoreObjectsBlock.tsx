import React from 'react';

import styles from './MoreObjectsBlock.module.scss';
import { MoreObjectsBlockInterface } from './MoreObjectsBlock.interface.ts';

import { CatalogCardComponent, VillageCardComponent } from '~entities/index.ts';


const MoreObjectsBlock: React.FC<MoreObjectsBlockInterface> = async ({ commonObjects, villageObjects, typePage }) => {




  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          {typePage !== 'villages' ? 'Похожие объекты' : 'Объекты в поселке'}
        </h2>
        <div className={styles.cardsLayout}>

          {(commonObjects && typePage !== 'villages') &&
            commonObjects.map((obj) => {
              return (
                <CatalogCardComponent key={obj.uuid} item={obj}  />
              );
            })
          }

          {(villageObjects && typePage === 'villages') &&
            villageObjects.map((obj) => {
              return (
                <VillageCardComponent key={obj.uuid} item={obj} typePage={typePage} />
              );
            })
          }

        </div>
      </div>
    </section>
  );
};

export { MoreObjectsBlock };
