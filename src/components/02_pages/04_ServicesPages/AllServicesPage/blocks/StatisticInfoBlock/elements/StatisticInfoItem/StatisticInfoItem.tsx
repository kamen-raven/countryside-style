import React from 'react';
import styles from './StatisticInfoItem.module.scss';
import { StatisticInfoItemInterface } from './StatisticInfoItem.interface.ts';
//import { OdometerCounter } from '~shared/index.ts';

const StatisticInfoItem: React.FC<StatisticInfoItemInterface> = ({ statIndicatorItem }) => {

  const statIndicatorFontSize = (statIndicatorItem.statIndicator.length > 3) ? '' : styles.statIndicator_extraBig;

  return (
    <div className={styles.infoContainer}>
      <div className={styles.statContainer}>
{/*         <OdometerCounter className={`${styles.statIndicator} ${statIndicatorFontSize}`} tag={'p'}>
          {statIndicatorItem.statIndicator}
        </OdometerCounter> */}

        <p className={`${styles.statIndicator} ${statIndicatorFontSize}`}>
          {statIndicatorItem.statIndicator}
        </p>
        <p className={styles.statLabel}>
          {statIndicatorItem.statLabel}
        </p>
      </div>

      <div className={styles.descriptionContainer}>
        <p className={styles.title}>
          {statIndicatorItem.title}
        </p>
        {statIndicatorItem.description &&
          <p className={styles.description}>
            {statIndicatorItem.description}
          </p>
        }
      </div>
    </div>
  );
};

export { StatisticInfoItem };
