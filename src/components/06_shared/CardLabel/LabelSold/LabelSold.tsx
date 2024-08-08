import React from 'react';
import styles from './LabelSold.module.scss';
import { LabelSoldInterface } from './LabelSold.interface.ts';


const LabelSold: React.FC<LabelSoldInterface> = ({ isSold, isArchived }) => {

/*   return object.display_pages.some(
    (page) => page.display_pages.value === category
  ); */


  if (isSold) {
    return (
      <div className={`${styles.label} ${styles.label_sold}`}>
      ПРОДАНО
    </div>
    );
  } else if (isArchived) {
    return (
      <div className={`${styles.label} ${styles.label_sold}`}>
      СНЯТО С ПРОДАЖИ
    </div>
    );
  } else {
    return null;
  }
};

export { LabelSold };
