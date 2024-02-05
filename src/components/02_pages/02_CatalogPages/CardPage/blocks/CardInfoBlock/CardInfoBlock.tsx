import React from 'react';
import styles from './CardInfoBlock.module.scss';
import { CardInfoBlockInterface } from './CardInfoBlock.interface.ts';
import { BackgroundSVGPattern } from '~shared/index.ts';

import { InfoContainer, PriceComponent, TitleComponent } from './elements/index.ts';
/* SVG Icons */


const CardInfoBlock: React.FC<CardInfoBlockInterface> = ({ data }) => {

  const currentObj = data.find((elem) => elem.status == 'current'); // потом поправить"!!!

  if (currentObj) {//потом поправить

    return (
      <section className={styles.wrapper}>

        
        <BackgroundSVGPattern positionX='right' />
        <div className={`${styles.mainContainer}`}>
          {/* ЗАГОЛОВОК TITLE */}
          <TitleComponent data={currentObj} />
          {/* ОСНОВНОЙ КОНТЕЙНЕР С ИНФОРМАЦИЕЙ / INFO */}
          <InfoContainer data={currentObj}/>

          {/* КОНТЕЙНЕР С ЦЕНОЙ / PRICE */}
          <PriceComponent data={currentObj} />
        </div>




      </section>
    );
  }

};

export { CardInfoBlock };
