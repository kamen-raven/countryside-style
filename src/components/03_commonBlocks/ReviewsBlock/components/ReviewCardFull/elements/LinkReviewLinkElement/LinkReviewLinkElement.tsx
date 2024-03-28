import React from 'react';
import Link from 'next/link';

import styles from './LinkReviewLinkElement.module.scss';
import { LinkReviewLinkElementInterface } from './LinkReviewLinkElement.interface.ts';

import CianLogo from '~svg/reviews/buttonChian.svg';
import YandexLogo from '~svg/reviews/buttonYandex.svg';

const LinkReviewLinkElement: React.FC<LinkReviewLinkElementInterface> = ({ data }) => {
  interface ButtonType {
    cian: string;
    yandex: string;
  }

  let styleKey: string = '';
  const setButtonType = (i: string) => {
    if (i.includes('yandex')) {
      return styleKey = 'yandex';//buttonType.logo.yandex;
    } else if (i.includes('cian')) {
      return styleKey = 'cian'; //buttonType.logo.cian;
    } else {
      return styleKey = '';
    }
  };

  const buttonType = {
    logo: {
      cian: <CianLogo />,
      yandex: <YandexLogo />,
    },
    style: {
      cian: styles.icon_cian,
      yandex: styles.icon_yandex,
    },
  };


  return (
    data.link_to_src &&

    <Link className={`${styles.link}`}
      href={data.link_to_src}
      target='_blank'
      rel='noopener noreferrer'>
      <span className = {styles.buttonText}>
        Оригинал отзыва
      </span>

      {setButtonType(data.link_to_src) &&

        <span className={`${styles.icon} ${buttonType.style[styleKey as keyof ButtonType]}`}>
          {buttonType.logo[styleKey as keyof ButtonType]}
        </span>
      }
    </Link>
  );
};

export { LinkReviewLinkElement };
