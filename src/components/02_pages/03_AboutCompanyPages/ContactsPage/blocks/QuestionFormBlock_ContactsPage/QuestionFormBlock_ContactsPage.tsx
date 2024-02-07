import React from 'react';
import styles from './QuestionFormBlock_ContactsPage.module.scss';


import { ContactFormBlock } from '~common/index';

const QuestionFormBlock_ContactsPage: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <ContactFormBlock contentType={'image'}
        direction={'formFirst'}/>
    </section>
  );
};

export { QuestionFormBlock_ContactsPage };
