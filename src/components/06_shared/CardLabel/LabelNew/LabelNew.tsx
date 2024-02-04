import React from 'react';
import styles from './LabelNew.module.scss';

const LabelNew = (): JSX.Element => {
  return (
    <div className={`${styles.label} ${styles.label_new}`}>
      NEW
    </div>
  );
};

export { LabelNew };
