import React from 'react';
import styles from './ServicesCardTemplate.module.scss';
import { ServicesCardTemplateInterface } from './ServicesCardTemplate.interface.ts';
/* import Image from 'next/image'; */
import Link from 'next/link';

const ServicesCardTemplate: React.FC<ServicesCardTemplateInterface> = ({
  serviceItem,
  buttonText,
  page = "other"
}) => {

  // Для главной страницы для селекторов больших карточек
/*   let bigContainer = '';
  let bigPicture = ''; */
  let bigInfoContainer = '';
/*   let textFirst = ''; */
  let bigText = '';
  if (page === 'home') {
/*     bigContainer = (serviceItem._id > 2) ? styles.itemContainer_bigSize : ''; */
    bigInfoContainer = (serviceItem._id > 2) ? styles.infoContainer_bigSize : '';
/*     bigPicture = (serviceItem._id > 2) ? styles.image_bigSize : '';
    textFirst = (serviceItem._id == 4) ? styles.itemContainer_textFirst : ''; */
    bigText = styles.title_bigText;
  }


  return (
/*     <div className={`${styles.itemContainer} ${bigContainer} ${textFirst}`}>
      <div className={styles.imageContainer}>
        {serviceItem.image &&
          <Image
            className={`${styles.image} ${bigPicture}`}
            src={serviceItem.image}
            alt={serviceItem.title}
          />
        }
      </div> */

      <div className={`${styles.infoContainer} ${bigInfoContainer}`}>
        <h3 className={`${styles.title} ${bigText}`}>{/* ${setFontSize} */}
          {serviceItem.title}
        </h3>

        {buttonText &&
          <Link href={serviceItem.link} className={styles.linkButton} >
            {buttonText}
          </Link>
        }
        <p className={styles.description}>
          {serviceItem.description}
        </p>

      </div>
/*     </div> */
  );
};

export { ServicesCardTemplate };
