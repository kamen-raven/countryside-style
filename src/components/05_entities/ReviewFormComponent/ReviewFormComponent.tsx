import React from 'react';
import styles from './ReviewFormComponent.module.scss';
import Link from 'next/link';


const ReviewFormComponent: React.FC = () => {
    return (
      <form className={styles.form}
      action={''}
      name={'question'}>
      <h3 className={styles.title}>
        Оставить отзыв
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
            placeholder={'Ваше имя'} />
        </label>

        <label className={styles.label}>
          <input className={styles.input}
            name={'phone'}
            type={'tel'}
            required
            placeholder={'Ваш телефон'} />
        </label>

        <label className={styles.label}>
          <textarea className={styles.textarea}
            name={'question'}
            required
            placeholder={'Вопрос'}></textarea>
        </label>
      </fieldset>
      <button className={styles.button}
        type={"submit"}>
        Отправить вопрос
      </button>
      <span className={styles.agreement}>
        Нажимая на кнопку, вы даете свое согласие&nbsp;
        <Link className={styles.agreement} href={`/personal`}>
          на&nbsp;обработку персональных данных
        </Link>
      </span>
    </form>
    );
};

export { ReviewFormComponent };
