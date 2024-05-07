import React from 'react';
import styles from './YearInfoElement.module.scss';
import differenceInYears from 'date-fns/differenceInYears';


const YearInfoElement: React.FC = () => {
  const currentDate = new Date();
  const startData = new Date(2011, 0, 0);
  const years = differenceInYears(currentDate, startData);


    return (
      <div className={styles.info}>
      <p className={styles.info__text}>
        <span className={styles.info__years}>
          {years}
        </span>
        лет на рынке
      </p>
    </div>
    );
};

export { YearInfoElement };
