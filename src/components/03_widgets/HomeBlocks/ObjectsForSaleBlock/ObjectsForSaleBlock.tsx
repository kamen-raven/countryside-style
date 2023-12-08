import React from 'react';
import { ObjectsForSaleBlockProps } from './ObjectsForSaleBlock.props';
import styles from './ObjectsForSaleBlock.module.scss';
import BackgroundPattern from '~svg/background/backgroundObjectsForSale.svg';

import { ObjectForSale } from './components/ObjectForSale/ObjectForSale';
import { BackgroundSVG } from '~/components/06_shared';

const ObjectsForSaleBlock: React.FC<ObjectsForSaleBlockProps> = ({ objItems }) => {

  return (
    <section className={styles.wrapper}>
      <BackgroundSVG>
        <BackgroundPattern />
      </BackgroundSVG>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Объекты в продаже
        </h2>

        <div className={styles.innerBlock}>
          {objItems && objItems.map(m => {
            return (
              <ObjectForSale
                key={m.title}
                title={m.title}
                buttonText={m.buttonText}
                description={m.description}
                arrows={m.arrows}
                containerTemplate={m.containerTemplate}
                photoGeneral={m.photoGeneral}
                photoSecondary={m.photoSecondary} />
            );
          })}
        </div>

      </div>
    </section>
  );
};

export { ObjectsForSaleBlock };
