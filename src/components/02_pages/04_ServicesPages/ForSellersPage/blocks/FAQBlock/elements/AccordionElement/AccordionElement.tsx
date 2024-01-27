'use client';
import React, { useState } from 'react';
import styles from './AccordionElement.module.scss';
import { AccordionElementInterface } from './AccordionElement.interface.ts';

import ToggleIcon from '~svg/button/accordion.svg';

const AccordionElement: React.FC<AccordionElementInterface> = ({ faqItem }) => {
  const [isOpened, setIsOpened] = useState(false);


  const toggleAccordion = () => {
    setIsOpened(!isOpened);
  };

const openedButtonStyle = isOpened ? styles.isOpened : '';
const answerStyle = isOpened ? styles.answerVisible : '';

  return (
    <div className={styles.container}>
      <div className={styles.questionInner} onClick={toggleAccordion}>
        <p className={styles.question}>
          {faqItem.question}
        </p>

        <button className={`${styles.button} ${openedButtonStyle}`}
            >
          <ToggleIcon />
        </button>
      </div>


      <p className={`${styles.answer} ${answerStyle}`}>
        {faqItem.answer}
      </p>


    </div>
  );
};

export { AccordionElement };
