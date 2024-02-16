
import React from 'react';
import styles from './InfoTypeDescriptionBlock.module.scss';
import { InfoTypeDescriptionBlockInterface } from './InfoTypeDescriptionBlock.interface.ts';
import { BackgroundSVGPattern } from '~shared/index.ts';
import { InfoTypeDescriptionLayout } from './components/index.ts';



const InfoTypeDescriptionBlock: React.FC<InfoTypeDescriptionBlockInterface> = ({ data }) => {






  return (
    <section className={styles.wrapper}>
      <BackgroundSVGPattern positionX={"right"} />
      <div className={styles.container}>
        <h2 className={styles.title}>
          {data.houses.title}
        </h2>
        <InfoTypeDescriptionLayout data={data} />

      </div>
    </section>
  );
};

export { InfoTypeDescriptionBlock };
