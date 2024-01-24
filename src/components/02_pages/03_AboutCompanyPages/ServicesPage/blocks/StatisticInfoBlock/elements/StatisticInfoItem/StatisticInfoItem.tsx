import React from 'react';
import styles from './StatisticInfoItem.module.scss';
import { StatisticInfoItemInterface } from './StatisticInfoItem.interface.ts';

const StatisticInfoItem: React.FC<StatisticInfoItemInterface> = ({ statIndicatorItem }) => {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.statContainer}>
        <p className={styles.statIndicator}>
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
