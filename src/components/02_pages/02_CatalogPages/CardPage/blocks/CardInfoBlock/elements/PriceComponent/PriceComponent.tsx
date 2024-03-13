import React from 'react';
import styles from './PriceComponent.module.scss';
import { PriceComponentInterface } from './PriceComponent.interface.ts';
import { PriceElement, SellerElement } from './modules/index.ts';
import { getUserByID } from '~api/Users/getUserByID.tsx';


const  PriceComponent: React.FC<PriceComponentInterface> = async ({ data, typePage }) => {
  const agentData = await getUserByID(data.display_agents[0].employee);

  return (
    <div className={styles.priceWrapper}>
      <div className={styles.priceContainer}>
        <PriceElement objectData={data} agentData={agentData} typePage={typePage}  />
        <SellerElement agentData={agentData}  />
      </div>
    </div>
  );
};

export { PriceComponent };
