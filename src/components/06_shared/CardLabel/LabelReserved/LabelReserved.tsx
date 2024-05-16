import React from 'react';
import styles from './LabelReserved.module.scss';
import { LabelReservedInterface } from './LabelReserved.interface.ts';


const LabelReserved: React.FC<LabelReservedInterface> = ({ isBook }) => {


  if (isBook) {
    return (
      <div className={`${styles.label} ${styles.label_new}`}>
      Внесен аванс
    </div>
    );
  } else {
    return null;
  }
};

export { LabelReserved };
