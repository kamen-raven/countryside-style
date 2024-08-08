import React from 'react';
import styles from './RecentlySoldObjectsBlock.module.scss';
import { RecentlySoldObjectsBlockInterface } from './RecentlySoldObjectsBlock.interface.ts';

import { RecentlySoldObjectCard } from './elements/index.ts';



const RecentlySoldObjectsBlock: React.FC<RecentlySoldObjectsBlockInterface> = ({ archiveObjectsData }) => {

  /*  const setLimit = recentObjectsData.slice(-5); ///// */


  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Недавно проданные объекты
        </h2>

        <div className={styles.contentContainer}>
          <div className={styles.innerBlock}>
            {/*        {recentObjectsData.map((item) => {
              if (item.status == 'sold') {
                return (
                  <CatalogCardComponent key={item.id} item={item} />
                );
              }
            })} */}

            {archiveObjectsData.map((item) => {

                return (
                  <RecentlySoldObjectCard key={item.id} item={item} />
                );

            })}

          </div>
        </div>
      </div>
    </section>
  );
};

export { RecentlySoldObjectsBlock };
