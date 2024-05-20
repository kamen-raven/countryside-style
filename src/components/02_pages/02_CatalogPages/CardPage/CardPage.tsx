import React from 'react';
import styles from './CardPage.module.scss';
import { CardPageInterface } from './CardPage.interface.ts';

import { CardSearchBarBlock, CardInfoBlock, MoreObjectsBlock } from './blocks/index.ts';


const CardPage: React.FC<CardPageInterface> = ({ typePage, objectData, commonObjects, agentData }) => {


  return (
    <main className={styles.mainContainer}>
      <CardSearchBarBlock />
      <CardInfoBlock objectData={objectData} typePage={typePage} agentData={agentData} />
        {commonObjects && commonObjects.length > 0 ?
        <MoreObjectsBlock commonObjects={commonObjects} typePage={typePage} />
        : null}
    </main>
  );
};

export { CardPage };
