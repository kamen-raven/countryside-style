import React from 'react';
import styles from './StatisticInfoBlock.module.scss';
import { StatisticInfoBlockInterface } from './StatisticInfoBlock.interface.ts';
import { StatisticInfoItem } from './elements/index.ts';


const StatisticInfoBlock: React.FC<StatisticInfoBlockInterface> = ({ statIndicatorsList }) => {
  return (
    <section className={styles.container}>
      {statIndicatorsList && statIndicatorsList.map((statItem) => {
        return (
          <StatisticInfoItem statIndicatorItem={statItem} />
        );
      })}
    </section>
  );
};

export { StatisticInfoBlock };
