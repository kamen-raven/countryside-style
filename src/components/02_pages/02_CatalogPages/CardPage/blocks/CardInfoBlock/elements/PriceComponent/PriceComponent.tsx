import React from 'react';
import styles from './PriceComponent.module.scss';
import { PriceComponentInterface } from './PriceComponent.interface.ts';
import { PriceElement, SellerElement } from './modules/index.ts';


const PriceComponent: React.FC<PriceComponentInterface> = ({ data }) => {
  return (
    <div className={styles.priceWrapper}>
      <div className={styles.priceContainer}>
        <PriceElement data={data} />
        <SellerElement data={data} />
      </div>
    </div>
  );
};

export { PriceComponent };
