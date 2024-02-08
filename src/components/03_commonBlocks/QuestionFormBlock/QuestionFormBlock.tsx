import React from 'react';
import styles from './QuestionFormBlock.module.scss';
import { QuestionFormBlockInterface } from './QuestionFormBlock.interface';
import { ContactForm } from './elements';



const QuestionFormBlock: React.FC<QuestionFormBlockInterface> = ({ direction, contentType, srcContent }) => {
  return (
    <section className={styles.wrapper}>
      <ContactForm contentType={contentType}
        direction={direction}
        srcContent={srcContent}/>
    </section>
  );
};

export { QuestionFormBlock };
