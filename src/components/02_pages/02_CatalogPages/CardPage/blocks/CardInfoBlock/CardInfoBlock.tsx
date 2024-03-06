import React from 'react';
import styles from './CardInfoBlock.module.scss';
import { CardInfoBlockInterface } from './CardInfoBlock.interface.ts';
import { BackgroundSVGPattern } from '~shared/index.ts';

import { InfoContainer, PriceComponent, TitleComponent } from './elements/index.ts';

const CardInfoBlock: React.FC<CardInfoBlockInterface> = ({ objectData }) => {

  return (
    <section className={styles.wrapper}>

      <BackgroundSVGPattern positionX='right' />
      <div className={`${styles.mainContainer}`}>
        {/* ЗАГОЛОВОК TITLE */}
        <TitleComponent data={objectData} />
        {/* ОСНОВНОЙ КОНТЕЙНЕР С ИНФОРМАЦИЕЙ / INFO */}
        <InfoContainer data={objectData} />
        {/* КОНТЕЙНЕР С ЦЕНОЙ / PRICE */}
        <PriceComponent data={objectData} />
      </div>

    </section>
  );
};

export { CardInfoBlock };
