import React from 'react';
import { RequestFormComponentProps } from './RequestFormComponent.props';
import styles from './RequestFormComponent.module.scss';
import { Button } from '~/components/06_shared';
import Link from 'next/link';


const RequestFormComponent = ({...props }: RequestFormComponentProps): JSX.Element => {
  return (
    <form className={styles.form} {...props }
      action={''}
      name={'question'}>
      <h3 className={styles.title}>
        Задать вопрос
      </h3>
      <p className={styles.description}>
        Напишите Ваше имя, телефон и свой вопрос. Наш менеджер ответит Вам в ближайшее время.
      </p>
      <fieldset className={styles.fieldset}>
        <label className={styles.label} htmlFor='name' ></label>
        <input className={styles.input}
          name={'name'}
          type={'text'}
          required
          placeholder={'Ваше имя'} />
        <label className={styles.label} htmlFor='phone'></label>
        <input className={styles.input}
          name={'phone'}
          type={'tel'}
          required
          placeholder={'Ваш телефон'} />
        <label className={styles.label} htmlFor='question'></label>
        <textarea className={styles.textarea}
          name={'question'}
          required
          placeholder={'Вопрос'}></textarea>
      </fieldset>
      <Button appearance="colored"
        className={styles.button}
        type={"submit"}>
        Отправить вопрос
      </Button>
      <span className={styles.agreement}>
        Нажимая на кнопку, вы даете свое согласие на&nbsp;
        <Link className={styles.agreement} href={`/personal`}>обработку персональных данных
        </Link>
      </span>
    </form>
  );
};

export { RequestFormComponent };
