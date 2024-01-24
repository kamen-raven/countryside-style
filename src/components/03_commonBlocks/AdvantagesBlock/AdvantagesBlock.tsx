import React from 'react';
import styles from './AdvantagesBlock.module.scss';
import { AdvantagesBlockInterface } from './AdvantagesBlock.interface';

import { AdvantagesIconsComponent } from './blocks';
import { BackgroundSVGPattern } from '~shared/index';

const AdvantagesBlock: React.FC<AdvantagesBlockInterface> = ({
  title = 'Наши преимущества',
  background = true,
  advantagesList }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <>
          {background ?
            <BackgroundSVGPattern positionX='right' />
            : ''}

        </>
        <h2 className={styles.title}>
          {title}
        </h2>
        <div className={styles.iconsContainer}>
          <AdvantagesIconsComponent advantagesList={advantagesList} />
        </div>
      </div>
    </section>
  );
};

export { AdvantagesBlock };
