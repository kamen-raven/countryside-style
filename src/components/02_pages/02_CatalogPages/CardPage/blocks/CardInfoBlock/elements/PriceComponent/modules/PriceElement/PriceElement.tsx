'use client';
import React, { useState } from 'react';
import styles from './PriceElement.module.scss';
import { PriceComponentInterface } from '../../PriceComponent.interface.ts';
import formatPhoneNumber from '~helpers/formatPhoneNumber.ts';
import Link from 'next/link';
import { OpenPopupButton } from '~shared/index.ts';


const PriceElement: React.FC<PriceComponentInterface> = ({ data }) => {
  const [showNum, setShowNum] = useState(false);




  const showNumber = () => {
    if (!showNum) {
      return (
        <button className={`${styles.button} ${styles.button__call}`}
          onClick={showNumberHandler}>
          Показать номер
        </button>
      );
    } else {
      return (
        <div className={styles.numberContainer}>
          <Link className={styles.telNumber}
              href={`tel: ${data.seller.contact}`}>
            {formatPhoneNumber(data.seller.contact)}
          </Link>
          <p className={styles.telInfo}>
            Номер только для звонков, сообщения не дойдут.
            Если захотите оставить жалобу, напишите нам.
          </p>
        </div>
      );
    }
  };

  const showNumberHandler = () => {
    setShowNum(!showNum);
  };


  return (
    <div className={styles.priceElement}>
      <h3 className={styles.cost}>
        {data.cost} млн. руб.
      </h3>
      <p className={styles.idNum}>
        ID {data.id}
      </p>
    <div className = {styles.buttonContainer}>

      {showNumber()}

      <OpenPopupButton className={`${styles.button} ${styles.button_write}`}
      type={'contactForm'}>
        Написать
      </OpenPopupButton>
    </div>

    </div>
  );
};

export { PriceElement };
