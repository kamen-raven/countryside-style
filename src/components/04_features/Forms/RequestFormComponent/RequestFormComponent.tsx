'use client';
import React from 'react';
import Link from 'next/link';

import styles from './RequestFormComponent.module.scss';
import { RequestFormComponentInterface } from './RequestFormComponent.interface';
import useFormRequestStore from '~store/formsStore/useFormRequestStore';
import { postApplicationFeedback } from '~api/ApplicationsFeedback/postApplicationFeedback';

/*
const RequestFormComponent = ({ ...props }: RequestFormComponentProps): JSX.Element => { */

const RequestFormComponent: React.FC<RequestFormComponentInterface> = () => {
  // Состояния для значений полей формы
  const question = useFormRequestStore((state) => state.text);
  const setQuestion= useFormRequestStore((state) => state.actions.setText);

  const name = useFormRequestStore((state) => state.applicant);
  const setName = useFormRequestStore((state) => state.actions.setApplicant);

  const phone = useFormRequestStore((state) => state.contact);
  const setPhone = useFormRequestStore((state) => state.actions.setContact);

  const resetForm = useFormRequestStore((state) => state.actions.resetForm);


  // Обработчик отправки формы
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Предотвращаем действие по умолчанию

    try {
      // Вызываем функцию отправки данных, передавая значения полей формы
      const response = await postApplicationFeedback(question, name, phone);
      console.log('Response:', response); // Выводим ответ сервера в консоль
      // Здесь можно добавить логику для обработки успешной отправки сообщения

      resetForm();
    } catch (error) {
      console.error('Error:', error); // Выводим ошибку в консоль
      // Здесь можно добавить логику для обработки ошибки при отправке сообщения
    }
  };


  return (
    <form className={styles.form}
      action={''}
      name={'question'}
      onSubmit={handleSubmit}>
      <h3 className={styles.title}>
        Задать вопрос
      </h3>
      <p className={styles.description}>
        Напишите Ваше имя, телефон и&nbsp;свой вопрос. Наш&nbsp;менеджер ответит Вам в&nbsp;ближайшее время.
      </p>
      <fieldset className={styles.fieldset}>
        <label className={styles.label}>
          <input className={styles.input}
            name={'name'}
            type={'text'}
            required
            placeholder={'Ваше имя'}
            value={name}
            onChange={(e) => setName(e.target.value)} />
        </label>

        <label className={styles.label}>
          <input className={styles.input}
            name={'phone'}
            type={'tel'}
            required
            placeholder={'Ваш телефон'}
            value={phone}
            onChange={(e) => setPhone(e.target.value)} />
        </label>

        <label className={styles.label}>
          <textarea className={styles.textarea}
            name={'question'}
            required
            placeholder={'Вопрос'}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}>
          </textarea>
        </label>
      </fieldset>
      <button className={styles.button}
        type={"submit"}>
        Отправить вопрос
      </button>
      <span className={styles.agreement}>
        Нажимая на кнопку, вы даете свое согласие&nbsp;
        <Link className={styles.agreement} href={`/personal`}>на&nbsp;обработку персональных данных
        </Link>
      </span>
    </form>
  );
};

export { RequestFormComponent };
