'use client';
import React, { useState } from 'react';
import styles from './AccordionElement.module.scss';
import { AccordionElementInterface } from './AccordionElement.interface.ts';

import ToggleIcon from '~svg/button/accordion.svg';
import useReactMarkdown from '~hooks/useReactMarkdown.tsx';

const AccordionElement: React.FC<AccordionElementInterface> = ({ faqItem }) => {
  const [isOpened, setIsOpened] = useState(false);


  const toggleAccordion = () => {
    setIsOpened(!isOpened);
  };

  const openedButtonStyle = isOpened ? styles.isOpened : '';
  const answerStyle = isOpened ? styles.answerVisible : '';

  const markdownStyle = {
    p: styles.p,
    strong: styles.strong,
    em: styles.em,
    h1: styles.title,
    h2: styles.h2,
    h3: styles.h3,
    blockquote: styles.blockquote,
    del: styles.del,
    ul: styles.li,
    ol: styles.ol,
    li: styles.listItem,
    a: styles.a,
  };



  return (
    <div className={styles.container}>
      <div className={styles.questionInner} onClick={toggleAccordion}>
        <p className={styles.question}>
          {faqItem.question}
        </p>

        <button className={`${styles.button} ${openedButtonStyle}`} >
          <ToggleIcon />
        </button>
      </div>

      <div className={`${styles.answer} ${answerStyle}`}>
        {useReactMarkdown(faqItem.answer, markdownStyle)}
      </div>

    </div>
  );
};

export { AccordionElement };
