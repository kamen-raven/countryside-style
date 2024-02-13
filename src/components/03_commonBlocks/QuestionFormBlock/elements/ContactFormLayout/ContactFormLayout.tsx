import React from 'react';
import Image from 'next/image';

import styles from './ContactFormLayout.module.scss';
import { ContactFormLayoutInterface } from './ContactFormLayout.interface.ts';

import ContactImg from '~img/common-images/contactUsImg.jpg';


const ContactFormLayout: React.FC<ContactFormLayoutInterface> = ({
  direction = 'formSecond', // расположение формы справа или слева
  contentType = 'image', // рядом с формой - картинка или карта
  mapContent,
  imgContent = ContactImg, // контент карты
  children
}) => {
  /* определяем направление контента - что отображается сначала */
  const formDirection = {
    formFirst: styles.container_formFirst,
    formSecond: ''
  };
  const setDirection = (direction == 'formFirst') ? formDirection.formFirst : formDirection.formSecond;

  /* определяем НАПОЛНЕНИЕ контента - это будет картинка или карта */
  const content = {
    image: imgContent && <Image className = {styles.image} src={imgContent} alt={'Задать вопрос'} />,
    map: mapContent && <iframe className={styles.yandexMap} src={mapContent} ></iframe>
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
          {children}         {/* СЮДА ПАДАЕТ ФОРМА */}
        </div>

      </div>
    </div>
  );
};

export { ContactFormLayout };
