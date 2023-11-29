import React from 'react';
import Image from 'next/image';

import { InfoHeadBlockProps } from './InfoHeadBlock.props';
import styles from './InfoHeadBlock.module.scss';

import { Button, Input } from '~/components/06_shared';
import SecondImg from '~img/headBlock/second.jpg';
import Kaissa from '~img/headBlock/kaissa.png';
import BackgroundPattern from './backgroundTitleHead1.svg';
import Link from 'next/link';

const InfoHeadBlock = ({ ...props }: InfoHeadBlockProps): JSX.Element => {

  return (
    <div className={`${styles.wrapper}`}  {...props} >
      <div className={styles.background}>
        <BackgroundPattern />
      </div>
      <div className={styles.container}>

        <div className={styles.countInfo}>
          <h3 className={styles.countInfo__title}>
            <span className={styles.countInfo__num}>
              256
            </span>
            Проданных объектов загородной недвижимости в 2022 году
          </h3>
          <p className={styles.countInfo__description}>
            Мы продаем только те объекты, которые видели своими глазами
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
              Лучшая риэлтерская компания на рынке загородной недвижимости 2018 года
            </p>
          </div>
        </div>

        <div className={styles.requestForm}>
          <p className={styles.requestForm__title}>
            Оставьте заявку<br /> на БЕСПЛАТНУЮ консультацию
          </p>
          <form name='requestForm' className={styles.requestForm__form}>
            <Input className={styles.requestForm__input}
              placeholder='Ваш телефон' />
            <Button className={styles.requestForm__button} appearance={'colored'}>
              Узнать цену
            </Button>
            <span className={styles.requestForm__agreement}>
              Нажимая на кнопку, вы даете свое согласие на 
              <Link className={styles.requestForm__agreement} href={`/personal`}>обработку персональных данных
              </Link>

            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export { InfoHeadBlock };
