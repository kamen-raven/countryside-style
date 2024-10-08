import React from 'react';
import styles from './ServicesOffers.module.scss';
import { ServicesOffersInterface } from './ServicesOffers.interface.ts';
import { BackgroundSVGPattern } from '~shared/index.ts';
import { ServicesCardTemplate } from '~common/index.ts';

/* УСЛУГИ НА СТРАНИЦЕ внутри услуг*/
const ServicesOffers: React.FC<ServicesOffersInterface> = ({ offersListData, page, children }) => {



  return (
    <section className={styles.wrapper}>
      <BackgroundSVGPattern positionX='right' />
      <div className={styles.container}>
        <h2 className={styles.title}>
          {page === 'invest' ?
            `Варианты инвестиций`
            :
            `Что мы предлагаем`
          }
        </h2>
        <div className={styles.cardsLayout}>

          {offersListData && offersListData.map((item, index) => {
            return (
              <ServicesCardTemplate key={item._id} serviceItem={item} index={index} />
            );
          })}

        </div>

        {children}

      </div>

    </section>
  );
};

export { ServicesOffers };
