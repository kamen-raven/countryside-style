import React from 'react';
import styles from './AdvantagesBlock.module.scss';
import { AdvantagesIconsComponent } from '~features/index.ts';
import aboutUsPageAdvantages from '~data/AdvantagesLists/AboutUsPage/aboutUsPageAdvantages';



const AdvantagesBlock: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Наши преимущества
        </h2>
        <div className={styles.iconsContainer}>
          <AdvantagesIconsComponent advantagesList={aboutUsPageAdvantages } />
        </div>
      </div>
    </section>
  );
};

export { AdvantagesBlock };
