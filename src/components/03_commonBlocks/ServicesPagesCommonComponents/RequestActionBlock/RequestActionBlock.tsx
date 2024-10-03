import React from 'react';
import styles from './RequestActionBlock.module.scss';
import { RequestActionBlockInterface } from './RequestActionBlock.interface.ts';
import { RequestPhoneInput } from '~features/Forms';


const RequestActionBlock: React.FC<RequestActionBlockInterface> = ({ typePage, gridArea, color = 'dark', nameForm }) => {
  const callToActionText = {
    sellers: 'и получите бесплатную оценку своего объекта недвижимости уже\u00A0сегодня',
    buyers: 'и получите бесплатную консультацию специалиста',
    villages: 'и получите бесплатную консультацию',
    developers: 'и получите бесплатную консультацию',
    legalSupport: 'и получите бесплатную консультацию специалиста',
  };

  const setGridAreaClassName = gridArea == 'first' ? styles.wrapper_first : gridArea == 'second' ? styles.wrapper_second : styles.wrapper_third;
  const setWrapperColorClassName = color == 'dark' ? styles.wrapper__color_dark : styles.wrapper__color_green;


  return (
    <section className={`${styles.wrapper} ${setGridAreaClassName} ${setWrapperColorClassName}`}>
      <div className={styles.container}>

        <h2 className={styles.title}>
          {color == 'dark' ?
            'Оставьте заявку'
            :
            'Фиксированная комиссия 4%'
          }
        </h2>
        {color == 'dark' ?
          <p className={styles.description}>
            {callToActionText[typePage]}
          </p>
          :
          <p className={styles.smallDescription}>
            Агентская комиссия оплачивается только в&nbsp;случае продажи объекта.
            Для объектов до&nbsp;3&nbsp;млн. рублей комиссия составляет 120&nbsp;000 рублей.
          </p>
        }

        <div className={styles.formContainer}>
          <RequestPhoneInput nameForm={nameForm} buttonText={'Отправить заявку'} color={color == 'dark' ? 'common' : 'accent'} />
        </div>
      </div>
    </section>
  );
};

export { RequestActionBlock };
