import React from 'react';
import styles from './ServicesCardTemplate.module.scss';
import { ServicesCardTemplateInterface } from './ServicesCardTemplate.interface.ts';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowsButton } from '~shared/index.ts';


const ServicesCardTemplate: React.FC<ServicesCardTemplateInterface> = ({ serviceItem, arrows = false, buttonText }) => {

  const setFontSize = (serviceItem.title.length <= 7) ? styles.title_big : '';
  return (
    <div className={styles.itemContainer}>
      <div className={styles.imageContainer}>
        {serviceItem.image &&
          <Image
            className={styles.image}
            src={serviceItem.image}
            alt={serviceItem.title} />
        }
      </div>


      <div className={styles.infoContainer}>
        <h3 className={`${styles.title} ${setFontSize}`}>
          {serviceItem.title}
        </h3>

        {!arrows ? '' :
          <div className={styles.arrowsButtonContainer}>
            <ArrowsButton className={styles.arrowsCardInfo} position={'left'} />
            <ArrowsButton className={styles.arrowsCardInfo} position={'right'} />
          </div>
        }

        <div className={styles.innerContainer}>
          {buttonText &&
            <Link href={serviceItem.link} className={styles.linkButton} >
              {buttonText}
            </Link>
          }
          <p className={styles.description}>
            {serviceItem.description}
          </p>
        </div>
      </div>

    </div>
  );
};

export { ServicesCardTemplate };
