import React from 'react';
import styles from './PersonalAgreementPage.module.scss';

import BackgroundPatternLeft from '~svg/background/backgroundObjectsForSaleLeft.svg';
import BackgroundPatternRight from '~svg/background/backgroundObjectsForSaleRight.svg';
import { BackgroundSVGPattern } from '~shared/index';
import Link from 'next/link';
import personalAgreement from '~data/constant/personalAgreement/personalAgreement';


const PersonalAgreementPage: React.FC = () => {



  return (
    <main className={styles.mainContainer}>
      <section className={styles.wrapper}>
        <>
          <BackgroundSVGPattern positionX='right' positionY='top' >
            <BackgroundPatternRight className={styles.backgroundRight} />
          </BackgroundSVGPattern>
          <BackgroundSVGPattern positionX='left' positionY='bottom'>
            <BackgroundPatternLeft className={styles.backgroundLeft} />
          </BackgroundSVGPattern>
        </>
        <div className={styles.container}>
          <div className={styles.labelContainer}>
            <Link className={styles.label_link}
              href={'/'}>
              Главная
            </Link>
            <p className={styles.label}>
              <span className={styles.label_span}>|</span>
              Политика в отношении обработки персональных данных
            </p>
          </div>

          <h1 className={styles.title}>
            Политика в отношении обработки персональных данных
          </h1>
          <ol className={styles.mainList} type="1">
            {personalAgreement.map((item, index) => {
              return (
                <li key={index} className={styles.mainList__item}>
                  <h2 className={styles.subtitle}>
                    {item.subtitle}
                  </h2>
                  <ol className={styles.subList} type="a">
                    {item.paragraph.map((p, index) => {
                      return (
                        <li key={index} className={styles.subList__item}>
                          {p}
                        </li>
                      );
                    })}
                  </ol>
                </li>
              );
            })}
          </ol>

          <Link href={'/'} className = {styles.returnLink}>
            Вернуться на главную
          </Link>
        </div>
      </section>
    </main>
  );
};

export { PersonalAgreementPage };
