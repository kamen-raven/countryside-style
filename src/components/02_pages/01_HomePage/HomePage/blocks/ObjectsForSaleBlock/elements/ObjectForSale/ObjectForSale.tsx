'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';


import { ObjectForSaleInterface } from './ObjectForSale.interface';
import styles from './ObjectForSale.module.scss';
import { ArrowsButton } from '~shared/index';
import objectsForSalePhotoTemplate from '~data/constant/objectsForSaleMainPage/objectsForSaleItems';


const ObjectForSale: React.FC<ObjectForSaleInterface> = ({
  objectItemsList,
  linkToCatalog,
  containerTemplate,
}) => {

  // объект для формирования заголовков title
  const category = {
    'houses-and-cottages': 'Дома, дачи, коттеджи',
    lands: 'Земельные участки',
    villages: 'Коттеджные поселки',
    flats: 'Квартиры',
  };

  // Определяем тип расположения контента - текст располагается справа или слева
  const templateType = {
    container: {
      picFirst: styles.container_picFirst,
      textFirst: styles.container_textFirst,
    },
    innerBlock: {
      picFirst: styles.innerBlock_left,
      textFirst: styles.innerBlock_right,
    },
    infoContainer: {
      picFirst: styles.infoContainer_left,
      textFirst: styles.infoContainer_right,
    }
  };
  // Селектор выбранного контейнера для контента
  const setContainer = templateType.container[containerTemplate];
  const setInnerBlock = templateType.innerBlock[containerTemplate];
  const setInfoContainer = templateType.infoContainer[containerTemplate];




  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handleNextPhoto = () => { /* ArrowNext */
    if (currentPhotoIndex < objectItemsList.length - 1) {
      setCurrentPhotoIndex(currentPhotoIndex + 1);
    } else {
      setCurrentPhotoIndex(0);
    }
    console.log('click!');
  };

  const handlePrevPhoto = () => { /* ArrowPreviously */
    if (currentPhotoIndex > 0) {
      setCurrentPhotoIndex(currentPhotoIndex - 1);
    } else {
      setCurrentPhotoIndex(objectItemsList.length - 1);
    }
    console.log('click!');
  };

  const getCurrentPhoto = () => {
    if (objectItemsList.length > 0) {
      return objectItemsList[currentPhotoIndex].photo_images[0].image;
    } else {
      // Если массив пустой, используем данные из objectsForSalePhotoTemplate
      return objectsForSalePhotoTemplate[linkToCatalog].photoGeneral;
    }
  };

  const getCurrentSecondaryPhoto = () => {
    if (objectItemsList.length > 1) {
      return objectItemsList[currentPhotoIndex === 0 ? 1 :
        (currentPhotoIndex < objectItemsList.length - 1 ? currentPhotoIndex + 1 : 0)].photo_images[0].image;
    } else {
      // Если массив пустой или содержит только один элемент,
      // используем данные из objectsForSalePhotoTemplate
      return objectsForSalePhotoTemplate[linkToCatalog].photoSecondary;
    }
  };






  const photoGeneral =

    <Image
      className={styles.photoGeneral__image}
      src={getCurrentPhoto()}
      alt={'title'}
      /* fill={true} */
      width={300}
      height={300}
      sizes={`(max-width: 1920px) 830px`} />;


  const photoSecondary =
    <Image
      className={styles.photoSecondary__image}
      src={getCurrentSecondaryPhoto()}
      alt={'title'}
      /* fill={true} */
      width={300}
      height={300}
      sizes={`(max-width: 1920px) 410px`}
    />;



  return (
    <div className={`${styles.container} ${setContainer} `}>


      <div className={styles.photoSecondary}>
        {photoSecondary
        }
      </div>


      <div className={styles.photoGeneral}>
        {photoGeneral
        }
      </div>




      <div className={`${styles.innerBlock} ${setInnerBlock} `}>
        <div className={`${styles.infoContainer} ${setInfoContainer}`}>
          <h3 className={`${styles.title}`}>
            {category[linkToCatalog]} {/* title */}
          </h3>
          {objectItemsList.length > 1 &&
            <div className={styles.arrowsButtonContainer}>
              <ArrowsButton
                onClick={containerTemplate === 'picFirst' ? handlePrevPhoto : handleNextPhoto}
                className={styles.arrowsCardInfo}
                position={'left'} />
              <ArrowsButton
                onClick={containerTemplate === 'picFirst' ? handleNextPhoto : handlePrevPhoto}
                className={styles.arrowsCardInfo}
                position={'right'} />
            </div>
          }
        </div>

        <div className={`${styles.infoContainer} ${setInfoContainer}`}>
          <Link className={styles.link} href={`/${linkToCatalog}`}>
            Перейти
          </Link>
          <p className={styles.description}>
            Мы продаем только те объекты, которые видели своими глазами
          </p>
        </div>
      </div>

    </div>
  );
};

export { ObjectForSale };
