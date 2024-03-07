import React from 'react';
import styles from './CardPage.module.scss';
import { CardPageInterface } from './CardPage.interface.ts';

import { CardSearchBarBlock, CardInfoBlock, /* MoreObjectsBlock */ } from './blocks/index.ts';


const CardPage: React.FC<CardPageInterface> = ({ objectData, typePage }) => {


    return (
        <main className = {styles.mainContainer}>
          <CardSearchBarBlock  />
          <CardInfoBlock objectData={objectData} typePage={typePage} />
          {/* <MoreObjectsBlock commonObjectsData={objectsData} /> */}
        </main>
    );
};

export { CardPage };
