import React from 'react';
import styles from './CallToActionBlock.module.scss';

import BulletIcon from '~svg/button/toggle.svg';


const CallToActionBlock: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.callText}>
          Живите спокойно, мы&nbsp;сделаем всю работу за&nbsp;Вас!
        </h2>
        <div className={styles.innerContainer}>
          <p className={styles.subtitle}>
            Размер комиссии фиксируется в&nbsp;начале и&nbsp;не&nbsp;меняется в&nbsp;процессе работы
          </p>

          <div className={styles.info}>
            <div className={styles.info__bullet}>
              <BulletIcon />
            </div>
            <p className={styles.info__text}>
              Она определяется в&nbsp;момент первичного обращения, фиксируется и&nbsp;не&nbsp;растет в&nbsp;процессе работы.
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
