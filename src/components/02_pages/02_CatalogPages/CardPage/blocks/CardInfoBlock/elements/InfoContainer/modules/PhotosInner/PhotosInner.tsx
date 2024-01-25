import React from 'react';
import Image from 'next/image';
import styles from './PhotosInner.module.scss';
import { InfoContainerInterface } from '../../InfoContainer.interface';

import PlanIcon from '~svg/catalogCard/plan.svg';
import YouTubeIcon from '~svg/catalogCard/youtubeIcon.svg';


import TemplateImage from '~img/template/House_3.jpg';
import { LabelNew } from '~shared/index';


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
            <a className={styles.imageInfoButton__link} href={'/'}>
              Планировка
              <span className={styles.imageInfoButton__icon}>
                <PlanIcon />
              </span>
            </a>
          </div>

          <div className={`${styles.imageInfoButton} ${styles.imageInfoButton__youtube}`}>
            <a className={styles.imageInfoButton__link} href={'/'}>
              Видео
              <span className={styles.imageInfoButton__icon}>
                <YouTubeIcon />
              </span>
            </a>
          </div>
        </div>


      </div>
    </>
  );
};

export { PhotosInner };
