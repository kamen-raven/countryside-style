import React from 'react';
import Image from 'next/image';

import styles from './InfoHead.module.scss';

import { BackgroundSVGPattern } from '~shared/index';
import SecondImg from '~img/headBlock/second.jpg';

import BackgroundPatternLeft from '~svg/background/backgroundTitleHeadLeftSide.svg';
import BackgroundPatternRight from '~svg/background/backgroundTitleHeadRightSide.svg';
import { AwardInfoElement } from './AwardInfoElement/AwardInfoElement';
import { RequestPhoneInput } from '~features/Forms';



const InfoHead: React.FC = () => {
  const currentDate = new Date().getFullYear();
  const reportYear = currentDate - 1;



  return (
    <div className={`${styles.wrapper}`}  >
      <>
        <BackgroundSVGPattern positionX='right' positionY='top' >
          <BackgroundPatternRight className={styles.backgroundRight} />
        </BackgroundSVGPattern>
        <BackgroundSVGPattern positionX='left' positionY='bottom'>
          <BackgroundPatternLeft className={styles.backgroundLeft} />
        </BackgroundSVGPattern>
      </>
      <div className={`${styles.container} ${styles.container_first}`}>

        <div className={styles.countInfo}>
          <h3 className={styles.countInfo__title}>
            <span className={styles.countInfo__num}>
              256
            </span>
            Проданных объектов загородной недвижимости в&nbsp;{reportYear}&nbsp;году
          </h3>
          <p className={styles.countInfo__description}>
            Мы продаем только те&nbsp;объекты, которые видели своими глазами
          </p>
        </div>

        <div className={styles.imgContainer}>
          <Image
            className={styles.imgContainer__image}
            src={SecondImg}
            alt='Загородный дом' />
        </div>
      </div>


      <div className={`${styles.container} ${styles.container_second}`}>
        <AwardInfoElement />

        <div className={styles.requestForm}>
          <p className={styles.requestForm__description}>
            Оставьте заявку<br /> на&nbsp;БЕСПЛАТНУЮ консультацию
          </p>
          <RequestPhoneInput nameForm={'InfoHeadPhoneInput'} buttonText={'Оставить заявку'} className={styles.phoneInput} />
        </div>
      </div>

    </div>
  );
};

export { InfoHead };
