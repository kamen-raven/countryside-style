
import React from 'react';
import styles from './InfoTypeDescriptionBlock.module.scss';
import { InfoTypeDescriptionBlockInterface } from './InfoTypeDescriptionBlock.interface.ts';
import { BackgroundSVGPattern } from '~shared/index.ts';
import { InfoTypeDescriptionLayout } from './components/index.ts';



const InfoTypeDescriptionBlock: React.FC<InfoTypeDescriptionBlockInterface> = ({ data, typePage }) => {


  const titleText = {
    flats: 'Квартиры',
    lands: 'Земельные участки',
    'houses-and-cottages': 'Дома, дачи, коттеджи'
  };




  return (
    <section className={styles.wrapper}>
      <BackgroundSVGPattern positionX={"right"} />
      <div className={styles.container}>
        <h2 className={styles.title}>
          {titleText[typePage]}
        </h2>
        <InfoTypeDescriptionLayout data={data} />

      </div>
    </section>
  );
};

export { InfoTypeDescriptionBlock };
