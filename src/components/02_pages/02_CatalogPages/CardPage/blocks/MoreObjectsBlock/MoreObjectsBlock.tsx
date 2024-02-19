import React from 'react';

import styles from './MoreObjectsBlock.module.scss';
import { MoreObjectsBlockInterface } from './MoreObjectsBlock.interface.ts';

import { CatalogCardComponent } from '~entities/index.ts';

const MoreObjectsBlock: React.FC<MoreObjectsBlockInterface> = ({ commonObjectsData }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Похожие объекты
        </h2>

        <div className={styles.cardsLayout}>
          {commonObjectsData.map((item) => {
            if (item.status == 'available') {
              return (
                <CatalogCardComponent key={item.id} item={item} />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export { MoreObjectsBlock };
