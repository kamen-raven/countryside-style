import React from 'react';
import Link from 'next/link';

import styles from './ReviewsButtonsElement.module.scss';

import reviewsLinksData from '~data/constant/reviewsLinksData/reviewsLinksData.ts';

import CianLogo from '~svg/reviews/buttonChian.svg';
import YandexLogo from '~svg/reviews/buttonYandex.svg';

const ReviewsButtonsElement: React.FC = () => {

  interface ButtonType {
    cian: string;
    yandex: string;
  }

  const buttonType = {
    logo: {
      cian: <CianLogo />,
      yandex: <YandexLogo />,
    },
    style: {
      cian: styles.contactItem__icon_cian,
      yandex: styles.contactItem__icon_yandex,
    },
  };

  const setButtonType = (i: string) => {
    if (i == 'yandex') {
      return buttonType.logo.yandex;
    } else {
      return buttonType.logo.cian;
    }
  };

  return (
    <div className={styles.buttonsContainer}>
      <ul className={styles.contactsList}>
        {reviewsLinksData.map((item, index) => {
          return (
            <li key={index} className={`${styles.contactItem} ${styles.contactItem__telegram}`}>
              <Link className={styles.contactItem__link}
                href={item.link}>
                {item.text}
                <span className={`${styles.contactItem__icon} ${buttonType.style[item.type as keyof ButtonType]}`}>
                  {setButtonType(item.type)}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { ReviewsButtonsElement };
