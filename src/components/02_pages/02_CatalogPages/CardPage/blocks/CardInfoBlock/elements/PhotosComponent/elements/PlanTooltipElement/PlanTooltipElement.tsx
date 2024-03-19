import React from 'react';
import Link from 'next/link';
import styles from './TooltipElement.module.scss';
import { TooltipElementInterface } from './TooltipElement.interface.ts';

import PlanIcon from '~svg/catalogCard/plan.svg';
import YouTubeIcon from '~svg/catalogCard/youtubeIcon.svg';



const PlanTooltipElement: React.FC<TooltipElementInterface> = ({ data, type }) => {

  const setType = {
    plan: {
      href: data.plans_images[0].image,
      icon: <PlanIcon />,
      text: 'Планировка',
      styleContainer: styles.imageInfoButton__plan,
    },
    youtube: {
      href: data.you_tube_link,
      icon: <YouTubeIcon />,
      text: 'Видео',
      styleContainer: styles.imageInfoButton__youtube,
    }
  };




    return (
        <div className={`${styles.imageInfoButton} ${setType[type].styleContainer}`}>
          <Link className={styles.link} href={setType[type].href}>
            {setType[type].text}
            <span className={styles.icon}>
              {setType[type].icon}
            </span>
          </Link>
        </div>
    );
};

export { PlanTooltipElement };
