'use client';
import React from 'react';
import Link from 'next/link';

import styles from './RequestPhoneInput.module.scss';
import { RequestPhoneInputInterface } from './RequestPhoneInput.interface.ts';
import { postApplicationFeedback } from '~api/ApplicationsFeedback/postApplicationFeedback.tsx';
import useFormRequestStore from '~store/formsStore/useFormRequestStore.ts';
import { useToggleSupportPopupStore } from '~store/popupsStore/useTogglePopupStore.ts';


const RequestPhoneInput: React.FC<RequestPhoneInputInterface> = ({ buttonText, nameForm }) => {
  // Состояния для значений полей формы
  const phone = useFormRequestStore((state) => state.contact);
  const setPhone = useFormRequestStore((state) => state.actions.setContact);

  const resetForm = useFormRequestStore((state) => state.actions.resetForm); // сброс формы

  // Состояния для попапов
  const openSuccessPopup = useToggleSupportPopupStore((state) => state.actions.openPopup);



  // Обработчик отправки формы
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Предотвращаем действие по умолчанию

    try {
      // Вызываем функцию отправки данных, передавая значения полей формы
      const response = await postApplicationFeedback('', '-', phone);

      console.log('Response:', response); // Выводим ответ сервера в консоль
      // Здесь можно добавить логику для обработки успешной отправки сообщения
      resetForm();

      if (response) {
        openSuccessPopup('successMessage');
      } else {
        openSuccessPopup('errorMessage');
      }

    } catch (error) {
      console.error('Error:', error); // Выводим ошибку в консоль
      openSuccessPopup('errorMessage');
      // Здесь можно добавить логику для обработки ошибки при отправке сообщения
    }
  };




  return (
    <form name={nameForm}
      className={styles.requestForm}
      onSubmit={handleSubmit}>
      <input className={styles.requestForm__input}
        placeholder='Ваш телефон'
        type='tel'
        value={phone}
        required
        onChange={(e) => setPhone(e.target.value)} />
      <button className={styles.requestForm__button} type={"submit"}>
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