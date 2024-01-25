import React from 'react';
import styles from './RecentlySoldObjectsBlock.module.scss';
import { RecentlySoldObjectsBlockInterface } from './RecentlySoldObjectsBlock.interface.ts';

import { CatalogCardItem } from '~common/index.ts';


const RecentlySoldObjectsBlock: React.FC<RecentlySoldObjectsBlockInterface> = ({ recentObjectsData }) => {

  /*  const setLimit = recentObjectsData.slice(-5); ///// */


  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Недавно проданные объекты
        </h2>
        <div className={styles.innerBlock}>
          {recentObjectsData.map((item) => {
            if (item.status == 'sold') {
              return (
                <CatalogCardItem item={item} />
              );
            }
          })}

        </div>
      </div>
    </section>
  );
};

export { RecentlySoldObjectsBlock };
