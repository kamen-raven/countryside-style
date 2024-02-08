import React from 'react';
import Image from 'next/image';

import styles from './ContactForm.module.scss';
import { ContactFormInterface } from './ContactForm.interface.ts';
import { RequestFormComponent } from '~entities/index.ts';

import ContactImg from '~img/common-images/contactUsImg.jpg';

const ContactForm: React.FC<ContactFormInterface> = ({ direction = 'formSecond', contentType = 'image', srcContent }) => {
  /* определяем направление контента - что отображается сначала */
  const formDirection = {
    formFirst: styles.container_formFirst,
    formSecond: ''
  };
  const setDirection = (direction == 'formFirst') ? formDirection.formFirst : formDirection.formSecond;

  /* определяем НАПОЛНЕНИЕ контента - это будет картинка или карта */
  const content = {
    image: <Image className = {styles.image} src={ContactImg} alt={'Задать вопрос'} />,
    map: <iframe className={styles.yandexMap} src={srcContent} ></iframe>
  };
  const setContent = (contentType == 'image') ? content.image : content.map;



  return (
    <div className={styles.wrapper}>
      <div className={`${styles.container} ${setDirection}`}>
        {/* MAP || IMAGE */}
        <div className={styles.wrapperInner}>
          {setContent}
        </div>
        {/* FORM */}
        <div className={styles.wrapperForm}>
          <RequestFormComponent />
        </div>

      </div>
    </div>
  );
};

export { ContactForm };
