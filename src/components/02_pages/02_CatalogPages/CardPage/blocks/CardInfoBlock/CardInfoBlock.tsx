import React from 'react';
import styles from './CardInfoBlock.module.scss';
import { CardInfoBlockInterface } from './CardInfoBlock.interface.ts';
import { BackgroundSVGPattern } from '~shared/index.ts';

import { InfoContainer, PhotosComponent, PriceComponent, TitleComponent } from './elements/index.ts';

const CardInfoBlock: React.FC<CardInfoBlockInterface> = ({ objectData, typePage }) => {

  return (
    <section className={styles.wrapper}>

      <BackgroundSVGPattern positionX='right' />
      <div className={`${styles.mainContainer}`}>
        {/* ЗАГОЛОВОК TITLE */}
        <TitleComponent data={objectData} />
        {/* ОСНОВНОЙ КОНТЕЙНЕР С ИНФОРМАЦИЕЙ / INFO */}
{/*         <PhotosComponent data={objectData} /> */}

{/*         <InfoContainer data={objectData} typePage={typePage} /> */}
        {/* КОНТЕЙНЕР С ЦЕНОЙ / PRICE */}
{/*         <PriceComponent data={objectData} typePage={typePage} /> */}
      </div>

    </section>
  );
};

export { CardInfoBlock };
