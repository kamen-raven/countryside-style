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
/*   const windowWidth = useWindowWidthSize();
 */

  // объект для формирования заголовков title
  const category = {
    'houses-and-cottages': 'Дома, дачи, коттеджи',
    lands: 'Земельные участки',
    villages: 'Коттеджные поселки',
    flats: 'Квартиры',
  };

  const descriptionText = {
    'houses-and-cottages': 'Подберите лучший вариант: от\u00A0дачных домиков до\u00A0современных коттеджей',
    lands: 'Земельные участки: от\u00A0нескольких соток до\u00A0десятков гектар',
    villages: 'В\u00A0этом разделе представлены коттеджные поселки, которые реализует наша компания',
    flats: 'Мы продаем только те\u00A0объекты, которые видели своими глазами',
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







  return (
    <div className={`${styles.container} ${setContainer} `}>

      <div className={styles.photoSecondary}>
        <Image
          className={styles.photoSecondary__image}
          src={getCurrentSecondaryPhoto()}
          alt={category[linkToCatalog]}
          width={300}
          height={300}
          onClick={containerTemplate === 'picFirst' ? handlePrevPhoto : handleNextPhoto}
        />
      </div>

      <div className={styles.photoGeneral}>
        <Image
          className={styles.photoGeneral__image}
          src={getCurrentPhoto()}
          alt={category[linkToCatalog]}
          width={680}
          height={490}
          onClick={containerTemplate === 'picFirst' ? handlePrevPhoto : handleNextPhoto}
          />

        {objectItemsList.length > 1 &&
          <>
            <ArrowsButton
              type={'inImg'}
              onClick={handlePrevPhoto}
              className={`${styles.arrowNavigate} ${styles.arrowNavigate_left}`}
              position={'left'} />
            <ArrowsButton
              type={'inImg'}
              onClick={handleNextPhoto}
              className={`${styles.arrowNavigate} ${styles.arrowNavigate_right}`}
              position={'right'} />
          </>
        }
      </div>

      <div className={`${styles.innerBlock} ${setInnerBlock} `}>
        <div className={`${styles.infoContainer} ${setInfoContainer}`}>
          <h3 className={`${styles.title}`}>
            <Link className = {styles.title_link} href={`/${linkToCatalog}`}>
              {category[linkToCatalog]} {/* title */}
            </Link>
          </h3>
          {objectItemsList.length > 1 &&
            <div className={`${styles.arrowsButtonContainer} ${styles.arrowsButtonContainer_desktop}`}>
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
          <Link className={`${styles.link} ${styles.link_mobile}`} href={`/${linkToCatalog}`}>
            Перейти
          </Link>
        </div>

        <div className={`${styles.infoContainer} ${setInfoContainer}`}>
          <Link className={`${styles.link} ${styles.link_desktop}`} href={`/${linkToCatalog}`}>
            Перейти
          </Link>
          <p className={styles.description}>
            {descriptionText[linkToCatalog]} {/* description */}
          </p>
        </div>
      </div>

    </div>
  );
};

export { ObjectForSale };
