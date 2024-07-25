
import React from 'react';
import styles from './MarginPrintComponent.module.scss';

import LogoIcon from '~svg/logo/logo.svg';
import { PhoneNumber } from '~entities/index';

const MarginPrintComponent: React.FC = () => {
  return (
    <tr className={styles.marginContainer}>
      <td>
        <div className={styles.logoContainer}>
          <div className={styles.logo} >
            <LogoIcon />
            <p className={styles.logo__name} >
              ЗАГОРОДНЫЙ СТИЛЬ
              <br />
              <span className={styles.logo__name_span}>агентство недвижимости</span>
            </p>
          </div>
        </div>
      </td>

      <td>
        <PhoneNumber
          className={styles.phoneNumber}
          colorText={'black'} />
      </td>

      <td>
        <div className={styles.labelContainer}>
          www.zagorodst.ru
        </div>
      </td>
    </tr>
  );
};

export { MarginPrintComponent };

/*     <div className={styles.marginContainer}>

    <div className={styles.phoneContainer}>
      <PhoneNumber
        className={styles.phoneNumber}
        colorText={'black'} />
    </div>
    <div className={styles.labelContainer}>
      www.zagorodst.ru
    </div>


    <div className={styles.logoContainer}>
      <div className={styles.logo} >
        <LogoIcon />
        <p className={styles.name} >
          ЗАГОРОДНЫЙ СТИЛЬ
          <br />
          <span className={styles.span}>агентство недвижимости</span>
        </p>
      </div>
    </div>

  </div>
 */
