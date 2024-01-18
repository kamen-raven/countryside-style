import React from 'react';
import styles from './CardInfoBlock.module.scss';
import { CardInfoBlockInterface } from './CardInfoBlock.interface.ts';
import { BackgroundSVGPattern } from '~shared/index.ts';

import { InfoContainer, PriceComponent, TitleComponent } from './elements/index.ts';
/* SVG Icons */


const CardInfoBlock: React.FC<CardInfoBlockInterface> = ({ data }) => {




  return (
    <section className={styles.wrapper}>
      <BackgroundSVGPattern positionX='right' />
      <div className={`${styles.mainContainer}`}>
        {/* ЗАГОЛОВОК TITLE */}
        <TitleComponent data={data} />
        {/* ОСНОВНОЙ КОНТЕЙНЕР С ИНФОРМАЦИЕЙ / INFO */}
        <InfoContainer data={data}/>

        {/* КОНТЕЙНЕР С ЦЕНОЙ / PRICE */}
        <PriceComponent data={data} />
      </div>




    </section>
  );
};

export { CardInfoBlock };
