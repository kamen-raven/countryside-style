import React from 'react';
import styles from './ServicesListBlock.module.scss';
import { ServicesListBlockInterface } from './ServicesListBlock.interface';
import { BackgroundSVGPattern } from '~shared/index.ts';
import { ServicesCardTemplate } from '~common/index.ts';

/* УСЛУГИ НА СТРАНИЦЕ УСЛУГ*/
const ServicesListBlock: React.FC<ServicesListBlockInterface> = ({ servicesListData }) => {
  return (
    <section className={styles.wrapper}>
      <BackgroundSVGPattern positionX='right' />
      <div className={styles.container}>
        <h1 className={styles.title}>
          Услуги
        </h1>
        <div className = {styles.cardsLayout}>

          {servicesListData && servicesListData.map((item, index) => {
            return(
              <ServicesCardTemplate key={item._id} serviceItem={item} buttonText={'Подробнее'} index={index} page={'services'} />
            );
          })}

        </div>
      </div>

    </section>
  );
};

export { ServicesListBlock };
