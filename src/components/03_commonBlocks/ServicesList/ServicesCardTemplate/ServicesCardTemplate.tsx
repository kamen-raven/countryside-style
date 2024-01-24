import React from 'react';
import styles from './ServicesCardTemplate.module.scss';
import { ServicesCardTemplateInterface } from './ServicesCardTemplate.interface.ts';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowsButton } from '~shared/index.ts';


const ServicesCardTemplate: React.FC<ServicesCardTemplateInterface> = ({ serviceItem, arrows = false, buttonText = 'Подробнее' }) => {


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
        <h3 className={styles.title}>
          {serviceItem.title}
        </h3>

        {!arrows ? '' :
          <ArrowsButton className = {styles.arrowsCardInfo}/>
        }

        <div className = {styles.innerContainer}>
          <Link href={serviceItem.link} className = {styles.linkButton} >
          {buttonText}
          </Link>
          <p className = {styles.description}>
            {serviceItem.description}
          </p>
        </div>
      </div>

    </div>
  );
};

export { ServicesCardTemplate };
