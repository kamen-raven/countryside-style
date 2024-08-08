'use client';
import React from 'react';
import styles from './ReviewFormComponent.module.scss';
import { ReviewFormComponentInterface } from './ReviewFormComponent.interface';

/* import AddButtonIcon from '~svg/button/add.svg'; */
import { InputErrorMessageElement, PersonalAgreementElement } from '../elements';
import useFormRequestStore from '~store/formsStore/useFormRequestStore';
import { useToggleMainPopupStore, useToggleSupportPopupStore } from '~store/popupsStore/useTogglePopupStore';
import useFormValidation from '~hooks/useFormValidation';
import { postApplicationFeedback } from '~api/ApplicationsFeedback/postApplicationFeedback';
import { nameValidationRules, phoneValidationRules, reviewValidationRules } from '~data/constant/formsValidationRules/formsValidationRules';

const ReviewFormComponent: React.FC<ReviewFormComponentInterface> = ({ className }) => {
  const validationRules = {
    phone: phoneValidationRules,
    name: nameValidationRules,
    review: reviewValidationRules,
  };


  // Состояния для значений полей формы
  const review = useFormRequestStore((state) => state.text);
  const setReview = useFormRequestStore((state) => state.actions.setText);

  const name = useFormRequestStore((state) => state.applicant);
  const setName = useFormRequestStore((state) => state.actions.setApplicant);

  const phone = useFormRequestStore((state) => state.contact);
  const setPhone = useFormRequestStore((state) => state.actions.setContact);

  const resetForm = useFormRequestStore((state) => state.actions.resetForm); // сброс формы

  // Состояния для попапов
  const openSuccessPopup = useToggleSupportPopupStore((state) => state.actions.openPopup);
  const closeContactFormPopup = useToggleMainPopupStore((state) => state.actions.closePopup);

  // Хук валидации
  const { errors, validateField, validateAllFields, clearFieldError } = useFormValidation(validationRules);


  // Обработчик отправки формы
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Предотвращаем действие по умолчанию

    // Проверка всех полей перед отправкой
    const isValid = validateAllFields({ phone, name, review });
    if (!isValid) {
      console.log('error of send');
      /*       openSuccessPopup('errorMessage'); */
      return;
    }
    console.log('success');

    try {
      // Вызываем функцию отправки данных, передавая значения полей формы
      const response = await postApplicationFeedback(
        `ОТЗЫВ КЛИЕНТА:
${review}`,
        `ОТЗЫВ КЛИЕНТА ${name}`,
        `${phone}`);

      //console.log('Response:', response); // Выводим ответ сервера в консоль

      resetForm();
      closeContactFormPopup();
      clearFieldError('name');
      clearFieldError('phone');
      clearFieldError('review');

      if (response) {
        openSuccessPopup('reviewSuccessMessage');
      } else {
        openSuccessPopup('errorMessage');
      }

    } catch (error) {
      console.error('Error:', error); // Выводим ошибку в консоль
      openSuccessPopup('errorMessage');
    }
  };






  return (
    <form className={styles.form}
      action={''}
      name={'reviewForm'}
      onSubmit={handleSubmit}>
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
              //required
              placeholder={'Ваше имя'}
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={(e) => validateField('name', e.target.value)}
              onFocus={() => clearFieldError('name')}
            />
            {errors.name &&
              <InputErrorMessageElement error={errors.name} />
            }
          </label>

          <label className={styles.label}>
            <input className={styles.input}
              name={'phone'}
              type={'tel'}
              //required
              placeholder={'Ваш телефон'}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onBlur={(e) => validateField('phone', e.target.value)}
              onFocus={() => clearFieldError('phone')}
            />
            {errors.phone &&
              <InputErrorMessageElement error={errors.phone} />
            }
          </label>
        </div>

        <label className={styles.label}>
          <textarea className={styles.textarea}
            name={'review'}
            placeholder={'Ваш отзыв'}
            value={review}
            onChange={(e) => setReview(e.target.value)}
            onBlur={(e) => validateField('review', e.target.value)}
            onFocus={() => clearFieldError('review')}
          >
          </textarea>
          {errors.review &&
            <InputErrorMessageElement error={errors.review} />
          }
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
