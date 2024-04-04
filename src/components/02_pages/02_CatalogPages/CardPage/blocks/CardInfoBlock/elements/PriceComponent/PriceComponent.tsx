import React from 'react';
import styles from './PriceComponent.module.scss';
import { PriceComponentInterface } from './PriceComponent.interface.ts';
import { PriceElement, SellerElement } from './modules/index.ts';


const  PriceComponent: React.FC<PriceComponentInterface> = ({ data, typePage }) => {

  return (
    <div className={styles.priceWrapper}>
      <div className={styles.priceContainer}>
        <>
        <PriceElement objectData={data} typePage={typePage}  />
        <SellerElement objectData={data}  />
        </>
      </div>
    </div>
  );
};

export { PriceComponent };
