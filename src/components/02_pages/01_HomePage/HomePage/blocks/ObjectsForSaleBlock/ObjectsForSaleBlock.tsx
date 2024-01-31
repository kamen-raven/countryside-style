import React from 'react';
import { ObjectsForSaleBlockProps } from './ObjectsForSaleBlock.props';
import styles from './ObjectsForSaleBlock.module.scss';
import BackgroundPatternLeft from '~svg/background/backgroundObjectsForSaleLeft.svg';
import BackgroundPatternRight from '~svg/background/backgroundObjectsForSaleRight.svg';

import { ObjectForSale } from './elements/ObjectForSale/ObjectForSale';
import { BackgroundSVGPattern } from '~shared/index';

const ObjectsForSaleBlock: React.FC<ObjectsForSaleBlockProps> = ({ objItems }) => {

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
