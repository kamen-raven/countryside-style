import React from 'react';
import styles from './LabelNew.module.scss';
import { LabelNewInterface } from './LabelNew.interface.ts';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';

const LabelNew: React.FC<LabelNewInterface> = ({ createdAt }) => {
  const currentDate = new Date();
  const createDate = new Date(createdAt);
  const newStatus = differenceInCalendarDays(currentDate, createDate);

  if (newStatus <= 30) {
    return (
      <div className={`${styles.label} ${styles.label_new}`}>
        NEW
      </div>
    );
  } else {
    return null;
  }
};

export { LabelNew };
