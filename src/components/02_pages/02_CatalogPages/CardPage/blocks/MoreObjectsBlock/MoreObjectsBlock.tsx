import React from 'react';

import styles from './MoreObjectsBlock.module.scss';
import { MoreObjectsBlockInterface } from './MoreObjectsBlock.interface.ts';

import { CatalogCardComponent } from '~entities/index.ts';


const MoreObjectsBlock: React.FC<MoreObjectsBlockInterface> = async ({ commonObjects, typePage }) => {




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
                <CatalogCardComponent key={obj.uuid} item={obj} typePage={typePage}  />
              );
            })
          }

          {(commonObjects && typePage === 'villages') &&
            commonObjects.map((obj) => {
              return (
                <CatalogCardComponent key={obj.uuid} item={obj} typePage={'villages'}  />
               /*  <VillageCardComponent key={obj.uuid} item={obj} typePage={typePage} /> */
              );
            })
          }

        </div>
      </div>
    </section>
  );
};

export { MoreObjectsBlock };
