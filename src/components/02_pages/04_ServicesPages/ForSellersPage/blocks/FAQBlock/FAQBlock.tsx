import React from 'react';
import styles from './FAQBlock.module.scss';
import { FAQBlockInterface } from './FAQBlock.interface.ts';
import { AccordionElement } from './elements/index.ts';


const FAQBlock: React.FC<FAQBlockInterface> = ({ faqData }) => {


  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>
            Ответы на частые вопросы
          </h2>
          <button className={styles.buttonAsk}>
            Задать свой вопрос
          </button>
        </div>
        {faqData.map((item) => {
          return (
            <AccordionElement key={item._id} faqItem={item} />
          );
        })}
      </div>

    </section>
  );
};

export { FAQBlock };
