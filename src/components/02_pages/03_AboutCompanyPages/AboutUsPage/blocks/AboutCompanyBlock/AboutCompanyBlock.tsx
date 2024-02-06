import React from 'react';
import styles from './AboutCompanyBlock.module.scss';
import { AboutCompanyBlockInterface } from './AboutCompanyBlock.interface';

import { BackgroundSVGPattern } from '~shared/index';
import { AboutUsInfoElement, FactsIconsListElement } from './elements';

const AboutCompanyBlock: React.FC<AboutCompanyBlockInterface> = ({ aboutUsPageFacts }) => {


  return (
    <section className={styles.wrapper}>
      <BackgroundSVGPattern positionX='right' />
      <div className={styles.container}>
        <>
          <h1 className={styles.title}>
            О&nbsp;компании
          </h1>
          <h2 className={styles.subtitle}>
            Загородный стиль – это специализированное агентство по&nbsp;загородной недвижимости.
          </h2>
        </>

        <FactsIconsListElement aboutUsPageFacts={aboutUsPageFacts} />

        <AboutUsInfoElement />

      </div>
    </section>
  );
};

export { AboutCompanyBlock };
