import React from 'react';
import styles from './CardPage.module.scss';
import { CardPageInterface } from './CardPage.interface.ts';

import dataTemplate from '~utils/temp/objectForCard/template.ts';
import { CardSearchBarBlock, CardInfoBlock, MoreObjectsBlock } from './blocks/index.ts';


const CardPage: React.FC<CardPageInterface> = () => {
  const data = dataTemplate;


    return (
        <main className = {styles.mainContainer}>
          <CardSearchBarBlock />
          <CardInfoBlock data={data} />
          <MoreObjectsBlock data={data} />
        </main>
    );
};

export { CardPage };
