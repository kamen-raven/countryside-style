import React from 'react';
import styles from './CardPage.module.scss';
import { CardPageInterface } from './CardPage.interface.ts';
import { CardInfoBlock, CardSearchBarBlock, MoreObjectsBlock } from '~widgets/index.ts';
import dataTemplate from '~utils/temp/objectForCard/template.ts';


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
