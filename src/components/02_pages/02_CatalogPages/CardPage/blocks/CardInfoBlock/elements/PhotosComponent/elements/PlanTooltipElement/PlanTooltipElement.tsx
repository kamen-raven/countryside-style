import React from 'react';
import styles from './PlanTooltipElement.module.scss';
import { PlanTooltipElementInterface } from './PlanTooltipElement.interface.ts';

import PlanIcon from '~svg/catalogCard/plan.svg';

const PlanTooltipElement: React.FC<PlanTooltipElementInterface> = ({ data }) => {



  return (
    <button className={`${styles.imageInfoButton}`}>
        Планировка
        <span className={styles.icon}>
          <PlanIcon />
        </span>
    </button>
  );
};

export { PlanTooltipElement };
