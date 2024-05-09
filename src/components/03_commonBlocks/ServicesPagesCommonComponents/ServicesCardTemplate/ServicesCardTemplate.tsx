import React from 'react';
import styles from './ServicesCardTemplate.module.scss';
import { ServicesCardTemplateInterface } from './ServicesCardTemplate.interface.ts';
import Image from 'next/image';
import Link from 'next/link';

const ServicesCardTemplate: React.FC<ServicesCardTemplateInterface> = ({
  serviceItem,
  buttonText,
  page = "other"
}) => {

  // Для главной страницы для селекторов больших карточек
  let bigContainer, bigPicture, bigInfoContainer, textFirst, bigText;
  if (page === 'home') {
    bigContainer = (serviceItem._id > 2) ? styles.itemContainer_bigSize : null;
    bigInfoContainer = (serviceItem._id > 2) ? styles.infoContainer_bigSize : null;
    bigPicture = (serviceItem._id > 2) ? styles.image_bigSize : null;
    textFirst = (serviceItem._id == 4) ? styles.itemContainer_textFirst : null;
    bigText = styles.title_bigText;
  }


  return (
    <div className={`${styles.itemContainer} ${bigContainer} ${textFirst}`}>
      <div className={styles.imageContainer}>
        {serviceItem.image &&
          <Image
            className={`${styles.image} ${bigPicture}`}
            src={serviceItem.image}
            alt={serviceItem.title}
          />
        }
      </div>

      <div className={`${styles.infoContainer} ${bigInfoContainer}`}>
        <h3 className={`${styles.title} ${bigText}`}>{/* ${setFontSize} */}
          {serviceItem.title}
        </h3>

        {/*
        <div className={styles.innerContainer}> */}
        {buttonText &&
          <Link href={serviceItem.link} className={styles.linkButton} >
            {buttonText}
          </Link>
        }
        <p className={styles.description}>
          {serviceItem.description}
        </p>
        {/*         </div> */}
      </div>
    </div>
  );
};

export { ServicesCardTemplate };
