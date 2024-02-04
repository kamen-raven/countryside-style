import React from 'react';
import Image from 'next/image';

import styles from './ContactFormBlock.module.scss';
import { ContactFormBlockInterface } from './ContactFormBlock.interface.ts';
import { RequestFormComponent } from '~entities/index.ts';

import ContactImg from '~img/common-images/contactUsImg.jpg';

const ContactFormBlock: React.FC<ContactFormBlockInterface> = ({ direction = 'formSecond', contentType = 'image', srcContent }) => {
  /* определяем направление контента - что отображается сначала */
  const formDirection = {
    formFirst: styles.containerForm_formFirst,
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

export { ContactFormBlock };
