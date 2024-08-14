import React from 'react';
import styles from './ServicesCardTemplate.module.scss';
import { ServicesCardTemplateInterface } from './ServicesCardTemplate.interface.ts';
import Image from 'next/image';
import Link from 'next/link';

const ServicesCardTemplate: React.FC<ServicesCardTemplateInterface> = ({
  serviceItem,
  index,
  buttonText,
  page = "other"
}) => {

  // Для главной страницы для селекторов больших карточек
  let bigContainer = '';
  let bigPicture = '';
  let bigPictureContainer = '';
  let bigInfoContainer = '';
  let textFirst = '';
  let bigText = '';
  let homeDescription = '';
  if (page === 'home') {
    bigContainer = (serviceItem._id > 2) ? styles.itemContainer_bigSize : '';
    bigInfoContainer = (serviceItem._id > 2) ? styles.infoContainer_bigSize : '';
    bigPictureContainer = (serviceItem._id > 2) ? styles.imageContainer_bigSize : '';
    bigPicture = (serviceItem._id > 2) ? styles.image_bigSize : '';
    textFirst = (serviceItem._id == 4) ? styles.itemContainer_textFirst : '';
    bigText = styles.title_bigText;
    homeDescription = styles.description_homePage;
  }


  // функция установки приоритетности загрузки фото
  const setPriority = () => {
    if(page === 'services') {
      return (index < 2 ? true : false);
    } else {
      return (false);
    }
  };
  // функция установки приоритетности загрузки фото
  const setLoading = () => {
    if(page === 'services') {
      return (index < 2 ? 'eager' : 'lazy');
    } else {
      return ('lazy');
    }
  };



  return (
    <div className={`${styles.itemContainer} ${bigContainer} ${textFirst}`}>
      <div className={`${styles.imageContainer} ${bigPictureContainer}`}>
        {serviceItem.image &&
          <Image
            className={`${styles.image} ${bigPicture}`}
            src={serviceItem.image}
            alt={serviceItem.title}
            placeholder={'blur'}
            priority={setPriority()}
            loading={setLoading()}
          />
        }
      </div>

      <div className={`${styles.infoContainer} ${bigInfoContainer}`}>
        <h3 className={`${styles.title} ${bigText}`}>{/* ${setFontSize} */}
          {serviceItem.link ?
          <Link className = {styles.title_link} href={serviceItem.link}>
            {serviceItem.title}
          </Link>
          :
            serviceItem.title
          }
        </h3>

        {(buttonText && serviceItem.link) &&
          <Link href={serviceItem.link} className={styles.linkButton} >
            {buttonText}
          </Link>
        }
        <p className={`${styles.description} ${homeDescription}`}>
          {serviceItem.description}
        </p>

      </div>
    </div>
  );
};

export { ServicesCardTemplate };
