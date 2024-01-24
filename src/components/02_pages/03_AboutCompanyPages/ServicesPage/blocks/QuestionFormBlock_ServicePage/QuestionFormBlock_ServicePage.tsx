import React from 'react';
import styles from './QuestionFormBlock_ServicePage.module.scss';

import ContactUsImg from "~img/common-images/contactUsImg.jpg";
import { RequestFormComponent } from '~entities/index';
import Image from 'next/image';

const QuestionFormBlock_ServicePage: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <RequestFormComponent />
        </div>
        <div className = {styles.imageContainer}>
          <Image
            className={styles.image}
            src={ContactUsImg}
            alt={'Задать вопрос'} />
        </div>
      </div>
    </section>
  );
};

export { QuestionFormBlock_ServicePage };
