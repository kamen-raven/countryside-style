import React from 'react';
import Link from 'next/link';
import styles from './PlanTooltipElement.module.scss';
import { PlanTooltipElementInterface } from './PlanTooltipElement.interface.ts';

import PlanIcon from '~svg/catalogCard/plan.svg';

const PlanTooltipElement: React.FC<PlanTooltipElementInterface> = ({ data }) => {



  return (
    <div className={`${styles.imageInfoButton} ${styles.imageInfoButton__plan}`}>
      <Link className={styles.link} href={data.plans_images[0].image}>
        Планировка
        <span className={styles.icon}>
          <PlanIcon />
        </span>
      </Link>
    </div>
  );
};

export { PlanTooltipElement };
