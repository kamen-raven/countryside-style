import React from 'react';
import styles from './ServicesListBlock.module.scss';
import { ServicesListBlockInterface } from './ServicesListBlock.interface';
import { BackgroundSVGPattern } from '~shared/index.ts';
import { ServicesCardTemplate } from '~common/index.ts';


const ServicesListBlock: React.FC<ServicesListBlockInterface> = ({ servicesListData }) => {
  return (
    <section className={styles.wrapper}>
      <BackgroundSVGPattern positionX='right' />
      <div className={styles.container}>
        <h1 className={styles.title}>
          Услуги
        </h1>
        <div className = {styles.cardsLayout}>

          {servicesListData && servicesListData.map((item) => {
            return(
              <ServicesCardTemplate key={item._id} serviceItem={item} />
            );
          })}

        </div>
      </div>

    </section>
  );
};

export { ServicesListBlock };
