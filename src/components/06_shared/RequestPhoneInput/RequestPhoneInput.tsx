import React from 'react';
import Link from 'next/link';

import styles from './RequestPhoneInput.module.scss';
import { RequestPhoneInputInterface } from './RequestPhoneInput.interface.ts';


const RequestPhoneInput: React.FC<RequestPhoneInputInterface> = ({ buttonText, nameForm }) => {
  return (
    <form name={nameForm} className={styles.requestForm}>
      <input className={styles.requestForm__input}
        placeholder='Ваш телефон' type='tel' />
      <button className={styles.requestForm__button}>
        {buttonText}
      </button>
      <p className={styles.requestForm__agreement}>
        Нажимая на кнопку, вы даете свое согласие на&nbsp;
        <Link className={styles.requestForm__agreement} href={`/personal`}>
          обработку персональных данных
        </Link>
      </p>
    </form>
  );
};

export { RequestPhoneInput };
