'use client';
import React from 'react';

import styles from './RequestPhoneInput.module.scss';
import { RequestPhoneInputInterface } from './RequestPhoneInput.interface.ts';
import { postApplicationFeedback } from '~api/ApplicationsFeedback/postApplicationFeedback.tsx';
import useFormRequestStore from '~store/formsStore/useFormRequestStore.ts';
import { useToggleSupportPopupStore } from '~store/popupsStore/useTogglePopupStore.ts';
import { InputErrorMessageElement, PersonalAgreementElement } from '../elements/index.ts';
import { phoneValidationRules } from '~data/constant/formsValidationRules/formsValidationRules.ts';
import useFormValidation from '~hooks/useFormValidation.ts';


const RequestPhoneInput: React.FC<RequestPhoneInputInterface> = ({ buttonText, nameForm, color = 'common', className }) => {
  const validationRules = {
    phone: phoneValidationRules,
  };

  const setColorBtn = color == 'common' ? styles.requestForm__button_common :  styles.requestForm__button_accent;
  const setColorInput = color == 'common' ? null :  styles.requestForm__input_accent;


  // Состояния для значений полей формы
  const phone = useFormRequestStore((state) => state.contact);
  const setPhone = useFormRequestStore((state) => state.actions.setContact);

  const resetForm = useFormRequestStore((state) => state.actions.resetForm); // сброс формы

  // Состояния для попапов
  const openSuccessPopup = useToggleSupportPopupStore((state) => state.actions.openPopup);

  // Хук валидации
  const { errors, validateField, validateAllFields, clearFieldError } = useFormValidation(validationRules);

  // Обработчик отправки формы
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Предотвращаем действие по умолчанию


    // Проверка всех полей перед отправкой
    const isValid = validateAllFields({ phone });
    if (!isValid) {
      return;
    }


    try {
      // Вызываем функцию отправки данных, передавая значения полей формы
      const response = await postApplicationFeedback('-', 'форма без имени', phone);

      //console.log('Response:', response); // Выводим ответ сервера в консоль
      // Здесь можно добавить логику для обработки успешной отправки сообщения
      resetForm();
      clearFieldError('phone');

      if (response) {
        openSuccessPopup('successMessage');
      } else {
        openSuccessPopup('errorMessage');
      }

    } catch (error) {
      //console.error('Error:', error); // Выводим ошибку в консоль
      openSuccessPopup('errorMessage');
      // Здесь можно добавить логику для обработки ошибки при отправке сообщения
    }
  };




  return (
    <form name={nameForm}
      className={`${styles.requestForm} ${className}`}
      onSubmit={handleSubmit}>
      <label className={styles.requestForm__label}>

        <input className={`${styles.requestForm__input} ${setColorInput}`}
          placeholder='Ваш телефон'
          name={'phone'}
          type={'tel'}
          value={phone}
          //required
          onChange={(e) => setPhone(e.target.value)}
          onBlur={(e) => validateField('phone', e.target.value)}
          onFocus={() => clearFieldError('phone')}
        />
        {errors.phone &&
          <InputErrorMessageElement error={errors.phone} />
        }
      </label>
      <button className={`${styles.requestForm__button} ${setColorBtn}`} type={"submit"}>
        {buttonText}
      </button>
      <PersonalAgreementElement className={styles.requestForm__agreement} />
    </form>
  );
};

export { RequestPhoneInput };

