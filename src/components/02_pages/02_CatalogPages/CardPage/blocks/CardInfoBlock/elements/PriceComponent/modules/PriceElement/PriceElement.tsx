'use client';
import React, { useState } from 'react';
import styles from './PriceElement.module.scss';
import { PriceElementInterface } from './PriceElement.interface.ts';
import formatPhoneNumber from '~helpers/formatPhoneNumber.ts';
import Link from 'next/link';
import { OpenPopupButton } from '~shared/index.ts';


const PriceElement: React.FC<PriceElementInterface> = ({ objectData, agentData }) => {
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
          {agentData.phone_number &&
          <Link className={styles.telNumber}
          href={`tel: ${agentData.phone_number}`}>    
            {formatPhoneNumber(agentData.phone_number)}
          </Link>
        }
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
        {`${(objectData.price / 1000000).toLocaleString('ru-RU')}`}&nbsp;млн.&nbsp;руб.
      </h3>
      <p className={styles.idNum}>
        ID {objectData.id}
      </p>
      <div className={styles.buttonContainer}>

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
