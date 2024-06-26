
import React from 'react';
import styles from './InfoTypeDescriptionBlock.module.scss';
import { InfoTypeDescriptionBlockInterface } from './InfoTypeDescriptionBlock.interface.ts';
import { BackgroundSVGPattern } from '~shared/index.ts';
import BackgroundOurServicesRight from '~svg/background/backgroundOurServicesRight.svg';
import { InfoTypeDescriptionLayout } from './components/index.ts';

const InfoTypeDescriptionBlock: React.FC<InfoTypeDescriptionBlockInterface> = ({ typePage }) => {

  return (
    <>
    {typePage === 'flats' ? null :   ////!

    <section className={styles.wrapper}>
      <BackgroundSVGPattern positionX={"right"} >
        <BackgroundOurServicesRight/>
      </BackgroundSVGPattern>
      <div className={styles.container}>
        <InfoTypeDescriptionLayout typePage={typePage} />
      </div>
    </section>
    }
    </>
  );
};

export { InfoTypeDescriptionBlock };
