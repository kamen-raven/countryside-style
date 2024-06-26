import React from 'react';
import styles from './ReviewFormComponent.module.scss';
import { ReviewFormComponentInterface } from './ReviewFormComponent.interface';

/* import AddButtonIcon from '~svg/button/add.svg'; */
import { PersonalAgreementElement } from '../elements';

const ReviewFormComponent: React.FC<ReviewFormComponentInterface> = ({ className }) => {
  return (
    <form className={styles.form}
      action={''}
      name={'reviewForm'}
    >
      <h3 className={styles.title}>
        Оставить свой отзыв
      </h3>
      <p className={styles.description}>
        Напишите Ваше имя, телефон и&nbsp;свой отзыв. После модерации мы разместим его на&nbsp;нашем сайте.
      </p>
      <fieldset className={styles.fieldset}>
        <div className={`${styles.mainForm} ${className}`}>
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
        </div>

        <label className={styles.label}>
          <textarea className={styles.textarea}
            name={'review'}
            required
            placeholder={'Ваш отзыв'}></textarea>
        </label>
      </fieldset>
      <div className={styles.buttonContainer}>
{/*         <button className={styles.buttonImg}
          type={"submit"}>
          Прикрепить фото
          <span className={styles.icon}>
            <AddButtonIcon />
          </span>
        </button> */}
        <button className={styles.buttonSubmit}
          type={"submit"}>
          Отправить отзыв
        </button>
      </div>
      <PersonalAgreementElement />
    </form>
  );
};

export { ReviewFormComponent };
