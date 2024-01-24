import React from 'react';
import styles from './QuestionFormBlock_ContactsPage.module.scss';
import { HalfScreenTemplate, RequestFormComponent } from '~entities/index.ts';
import Image from 'next/image';

import ContactUsImg from "~img/common-images/contactUsImg.jpg";

const QuestionFormBlock_ContactsPage: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.containerForm}>
          <HalfScreenTemplate conditionColor={"dark"} conditionTemplate={'textFirst'}>
            <div className={styles.wrapperInner}>
              <Image
              className = {styles.image}
              src={ContactUsImg}
              alt={'Задать вопрос'}/>
            </div>
            <div className={styles.wrapperForm}>
              <RequestFormComponent />
            </div>
          </HalfScreenTemplate>
        </div>
      </div>

    </section>
  );
};

export { QuestionFormBlock_ContactsPage };
