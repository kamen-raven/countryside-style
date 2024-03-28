import React from 'react';
import styles from './RequestActionBlock.module.scss';
import { RequestActionBlockInterface } from './RequestActionBlock.interface.ts';
import { RequestPhoneInput } from '~features/Forms';


const RequestActionBlock: React.FC<RequestActionBlockInterface> = ({ typePage, gridArea, nameForm }) => {
  const callToActionText = {
    sellers: 'и получите бесплатную оценку своего объекта недвижимости уже\u00A0сегодня',
    buyers: 'и получите бесплатную консультацию специалиста',
    villages: 'и получите бесплатную консультацию',
    developers: 'и получите бесплатную консультацию',
    legalSupport: 'и получите бесплатную консультацию специалиста',
  };

  const gridAreaClassName = gridArea == 'first' ? styles.wrapper_first : styles.wrapper_second;

  return (
    <section className={`${styles.wrapper} ${gridAreaClassName}`}>
      <div className={styles.container}>

          <h2 className={styles.title}>
            Оставьте заявку
          </h2>
          <p className={styles.description}>
            {callToActionText[typePage]}
          </p>

        <div className={styles.formContainer}>
          <RequestPhoneInput nameForm={nameForm} buttonText={'Отправить заявку'} />
        </div>
      </div>
    </section>
  );
};

export { RequestActionBlock };
