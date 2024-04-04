
import React from 'react';
import styles from './InfoTypeDescriptionBlock.module.scss';
import { InfoTypeDescriptionBlockInterface } from './InfoTypeDescriptionBlock.interface.ts';
import { BackgroundSVGPattern } from '~shared/index.ts';
import BackgroundOurServicesRight from '~svg/background/backgroundOurServicesRight.svg';

import { InfoTypeDescriptionLayout } from './components/index.ts';

import housesSEOText from '~utils/constants/TypeSEOText/TypeSEOText.ts';

const InfoTypeDescriptionBlock: React.FC<InfoTypeDescriptionBlockInterface> = () => {
  const SEOTextData = housesSEOText;

  return (
    <section className={styles.wrapper}>
      <BackgroundSVGPattern positionX={"right"} >
        <BackgroundOurServicesRight/>
      </BackgroundSVGPattern>
      <div className={styles.container}>
        <InfoTypeDescriptionLayout data={SEOTextData} />
      </div>
    </section>
  );
};

export { InfoTypeDescriptionBlock };
