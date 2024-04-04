import React from 'react';
import styles from './TitleBlock.module.scss';
import { TitleBlockInterface } from './TitleBlock.interface.ts';
import { BackgroundSVGPattern } from '~shared/index.ts';


const TitleBlock: React.FC<TitleBlockInterface> = ({ typePage }) => {

  const titleText = {
    flats: 'Квартиры',
    lands: 'Земельные участки',
    'houses-and-cottages': 'Дома, дачи, коттеджи',
    villages: 'Коттеджные поселки'
  };




  return (
    <section className={styles.wrapper}>
      <BackgroundSVGPattern positionX={"right"} />
      <div className={styles.container}>
        <h1 className={styles.title}>
          {titleText[typePage]}
        </h1>
      </div>
    </section>
  );
};

export { TitleBlock };
