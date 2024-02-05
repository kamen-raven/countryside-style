import React from 'react';
import styles from './CardPage.module.scss';
import { CardPageInterface } from './CardPage.interface.ts';

import { CardSearchBarBlock, CardInfoBlock, MoreObjectsBlock } from './blocks/index.ts';


const CardPage: React.FC<CardPageInterface> = ({ objectsData }) => {


    return (
        <main className = {styles.mainContainer}>
          <CardSearchBarBlock  />
          <CardInfoBlock data={objectsData} />
          <MoreObjectsBlock commonObjectsData={objectsData} />
        </main>
    );
};

export { CardPage };
