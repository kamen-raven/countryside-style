import React from 'react';
import Image from 'next/image';

import { InfoHeadProps } from './InfoHead.props';
import styles from './InfoHead.module.scss';

import { BackgroundSVGPattern, Button, Input } from '~shared/index';
import SecondImg from '~img/headBlock/second.jpg';

import BackgroundPattern from '~svg/background/backgroundTitleHead.svg';
import Link from 'next/link';
import { AwardInfoElement } from './AwardInfoElement/AwardInfoElement';

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

        <AwardInfoElement />

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
