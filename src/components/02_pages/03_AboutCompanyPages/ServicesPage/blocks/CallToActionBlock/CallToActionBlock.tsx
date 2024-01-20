import React from 'react';
import styles from './CallToActionBlock.module.scss';

import BulletIcon from '~svg/button/toggle.svg';


const CallToActionBlock: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.callText}>
          Живите спокойно, мы сделаем всю работу за Вас!
        </h2>
        <div className={styles.innerContainer}>
          <p className={styles.subtitle}>
            Размер комиссии фиксируется в начале и&nbsp;не&nbsp;меняется в процессе работы
          </p>

          <div className={styles.info}>
            <div className={styles.info__bullet}>
              <BulletIcon />
            </div>
            <p className={styles.info__text}>
              Она определяется в момент первичного обращения, фиксируется и не растет в процессе работы.
            </p>
          </div>

          <div className={styles.info}>
            <div className={styles.info__bullet}>
              <BulletIcon />
            </div>
            <p className={styles.info__text}>
              Чтобы узнать более точную информацию агентской комиссии оставьте заявку, мы вам перезвоним.
            </p>
          </div>

          <button className={styles.button}>
            Оставить заявку
          </button>
        </div>
      </div>
    </section>
  );
};

export { CallToActionBlock };
