'use client';
import React from 'react';
import styles from './PlanTooltipElement.module.scss';
import { PlanTooltipElementInterface } from './PlanTooltipElement.interface.ts';

import PlanIcon from '~svg/catalogCard/plan.svg';

const PlanTooltipElement: React.FC<PlanTooltipElementInterface> = ({  onClick }) => {



  return (
    <button className={`${styles.imageInfoButton}`} onClick={onClick}>
        Планировка
        <span className={styles.icon}>
          <PlanIcon />
        </span>
    </button>
  );
};

export { PlanTooltipElement };
