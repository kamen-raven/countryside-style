import React from 'react';
import Image from 'next/image';
import styles from './PhotosInner.module.scss';
import { InfoContainerInterface } from '../../InfoContainer.interface';

import PlanIcon from '~svg/catalogCard/plan.svg';
import YouTubeIcon from '~svg/catalogCard/youtubeIcon.svg';



import { LabelNew } from '~shared/index';
import Link from 'next/link';


const PhotosInner = ({ data }: InfoContainerInterface): JSX.Element => {



  return (
    <>
      <div className={styles.imageContainer}>

        <Image
          className={styles.image}
          src={data.mainImage}
          alt={data.title} />

        <LabelNew />

        <div className = {styles.infoButtonContainer}>
          <div className={`${styles.imageInfoButton} ${styles.imageInfoButton__plan}`}>
            <Link className={styles.imageInfoButton__link} href={'/'}>
              Планировка
              <span className={styles.imageInfoButton__icon}>
                <PlanIcon />
              </span>
            </Link>
          </div>

          <div className={`${styles.imageInfoButton} ${styles.imageInfoButton__youtube}`}>
            <Link className={styles.imageInfoButton__link} href={'/'}>
              Видео
              <span className={styles.imageInfoButton__icon}>
                <YouTubeIcon />
              </span>
            </Link>
          </div>
        </div>


      </div>
    </>
  );
};

export { PhotosInner };
