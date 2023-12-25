import React from 'react';
import Image from 'next/image';

import { InfoHeadProps } from './InfoHead.props';
import styles from './InfoHead.module.scss';

import { BackgroundSVGPattern, Button, Input } from '~shared/index';
import SecondImg from '~img/headBlock/second.jpg';
import Kaissa from '~img/headBlock/kaissa.png';
import BackgroundPattern from '~svg/background/backgroundTitleHead.svg';
import Link from 'next/link';

const InfoHead = ({ ...props }: InfoHeadProps): JSX.Element => {

  return (
    <div className={`${styles.wrapper}`}  {...props} >
      <BackgroundSVGPattern>
        <BackgroundPattern />
      </BackgroundSVGPattern>

      <div className={styles.container}>

        <div className={styles.countInfo}>
          <h3 className={styles.countInfo__title}>
            <span className={styles.countInfo__num}>
              256
            </span>
            Проданных объектов загородной недвижимости в&nbsp;2022 году
          </h3>
          <p className={styles.countInfo__description}>
            Мы продаем только те&nbsp;объекты, которые видели своими глазами
          </p>
        </div>

        <div className={styles.img}>
          <Image
            className={styles.img__image}
            src={SecondImg}
            alt='Загородный дом' />
        </div>

        <div className={styles.kaissa}>
          <div className={styles.kaissa__imgBlock}>
            <Image
              className={styles.kaissa__image}
              src={Kaissa}
              alt='Каисса - 2018' />
          </div>
          <div className={styles.kaissa__infoBlock}>
            <p className={styles.kaissa__info}>
              Лучшая риэлтерская компания на&nbsp;рынке загородной недвижимости 2018&nbsp;года
            </p>
          </div>
        </div>

        <div className={styles.requestForm}>
          <p className={styles.requestForm__title}>
            Оставьте заявку<br /> на&nbsp;БЕСПЛАТНУЮ консультацию
          </p>
          <form name='requestForm' className={styles.requestForm__form}>
            <Input className={styles.requestForm__input}
              placeholder='Ваш телефон' />
            <Button className={styles.requestForm__button} appearance={'colored'}>
              Узнать цену
            </Button>
            <span className={styles.requestForm__agreement}>
              Нажимая на кнопку, вы даете свое согласие на&nbsp;
              <Link className={styles.requestForm__agreement} href={`/personal`}>обработку персональных данных
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export { InfoHead };
