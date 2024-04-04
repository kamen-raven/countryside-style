import React from 'react';
import styles from './RatingLabelElement.module.scss';
import { RatingLabelElementInterface } from './RatingLabelElement.interface.ts';

import CianLogo from '~svg/reviews/chianLogo.svg';
import YandexLogo from '~svg/reviews/yandexLogo.svg';
import RatingStar from '~svg/reviews/ratingStar.svg';
import Link from 'next/link';


const RatingLabelElement: React.FC<RatingLabelElementInterface> = ({ service }) => {

  const setService = {
    cian: {
      link: 'https://spb.cian.ru/agents/3097318/',
      icon: <CianLogo />,
      rating: '5,0'
    },
    yandex: {
      link: 'https://yandex.ru/maps/org/zagorodny_stil/87180195474/reviews/',
      icon: <YandexLogo />,
      rating: '5,0'
    }
  };

  return (
    <Link href={setService[service].link}
      className={styles.container}
      target='_blank'
      rel='noopener noreferrer'>
      {setService[service].icon}
      <div className={styles.innerContainer}>
        <span className={styles.rating}>
          {setService[service].rating}
        </span>
        <div className={styles.rateIcon}>
          {[...Array(5)].map((_, index) => {
            return (
              <RatingStar key={index} />
            );
          })}
        </div>
      </div>
    </Link>
  );
};

export { RatingLabelElement };
