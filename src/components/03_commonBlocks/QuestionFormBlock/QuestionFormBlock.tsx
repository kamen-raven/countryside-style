import React from 'react';
import styles from './QuestionFormBlock.module.scss';
import { QuestionFormBlockInterface } from './QuestionFormBlock.interface';
import { ContactFormLayout } from './elements';
import { RequestFormComponent } from '~features/Forms';


const QuestionFormBlock: React.FC<QuestionFormBlockInterface> = ({ direction, contentType, mapContent, imgContent }) => {
  return (
    <section className={styles.wrapper}>
      <ContactFormLayout contentType={contentType}
        direction={direction}
        imgContent={imgContent}
        mapContent={mapContent}>
        <RequestFormComponent />
      </ContactFormLayout>
    </section>
  );
};

export { QuestionFormBlock };
