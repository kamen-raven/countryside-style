import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './MoreObjectsBlock.module.scss';
import { MoreObjectsBlockInterface } from './MoreObjectsBlock.interface.ts';

import ArrowIcon from '~svg/button/arrow.svg';
import Tepmlate from '~img/template/House_3.jpg';

const MoreObjectsBlock: React.FC<MoreObjectsBlockInterface> = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Похожие объекты
        </h2>




        <div className={styles.cardsLayout}>

          <div className={styles.cardWrapper}>
            <div className={styles.imageBlock}>
              <Link className={`${styles.link} ${styles.link_image}`} href={'/houses/card'}>
                <Image
                  className={styles.image}
                  src={Tepmlate}
                  alt={'item.name'}
                  width={300}
                  height={300}
                />
              </Link>
            </div>
            <div className={styles.infoBlock}>
              <div className={styles.infoContainer}>
                <Link className={`${styles.link} ${styles.link_title}`} href={'/houses/card'}>
                  <h2 className={styles.title_card} >
                    Агалатово
                  </h2>
                </Link>
                <div className={styles.statusContainer}>
                  <p className={styles.status}>
                    status&nbsp;
                    <span className={styles.status_bold}>
                      item
                    </span>
                  </p>
                  <span>&nbsp;|&nbsp;</span>
                  <p className={styles.status}>
                    item&nbsp;
                    <span className={styles.status_bold}>
                      item
                    </span>
                  </p>
                </div>
                <p className={styles.address}>
                  item.location.name
                </p>
              </div>



              <div className={styles.priceContainer}>
                <p className={styles.price}>
                  2 222 222 млн. руб.
                </p>
                <button className={`${styles.arrow} ${styles.arrow_right}`}>
                  <ArrowIcon />
                </button>
              </div>
            </div>
          </div>

          <div className={styles.cardWrapper}>
            <div className={styles.imageBlock}>
              <Link className={`${styles.link} ${styles.link_image}`} href={'/houses/card'}>
                <Image
                  className={styles.image}
                  src={Tepmlate}
                  alt={'item.name'}
                  width={300}
                  height={300}
                />
              </Link>
            </div>
            <div className={styles.infoBlock}>
              <div className={styles.infoContainer}>
                <Link className={`${styles.link} ${styles.link_title}`} href={'/houses/card'}>
                  <h2 className={styles.title_card} >
                    Агалатово
                  </h2>
                </Link>
                <div className={styles.statusContainer}>
                  <p className={styles.status}>
                    status&nbsp;
                    <span className={styles.status_bold}>
                      item
                    </span>
                  </p>
                  <span>&nbsp;|&nbsp;</span>
                  <p className={styles.status}>
                    item&nbsp;
                    <span className={styles.status_bold}>
                      item
                    </span>
                  </p>
                </div>
                <p className={styles.address}>
                  item.location.name
                </p>
              </div>



              <div className={styles.priceContainer}>
                <p className={styles.price}>
                  2 222 222 млн. руб.
                </p>
                <button className={`${styles.arrow} ${styles.arrow_right}`}>
                  <ArrowIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { MoreObjectsBlock };
