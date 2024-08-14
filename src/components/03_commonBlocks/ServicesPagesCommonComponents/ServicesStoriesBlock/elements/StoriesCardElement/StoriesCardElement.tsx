'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import styles from './StoriesCardElement.module.scss';
import { StoriesCardElementInterface } from './StoriesCardElement.interface.ts';
import { ArrowsButton } from '~shared/index.ts';
import LogoIcon from '~svg/logo/logo.svg';

const StoriesCardElement: React.FC<StoriesCardElementInterface> = ({ servicesCard }) => {

  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [prevIsActive, setPrevIsActive] = useState(false);
  const [nextIsActive, setNextIsActive] = useState(true);


  const handleNext = () => { /* ArrowNext */
    if (currentImgIndex < servicesCard.images.length - 1) {
      setCurrentImgIndex(currentImgIndex + 1);
    } else {
      setCurrentImgIndex(0);
    }
  };

  const handlePrev = () => { /* ArrowPreviously */
    if (currentImgIndex > 0) {
      setCurrentImgIndex(currentImgIndex - 1);
    } else {
      setCurrentImgIndex(servicesCard.images.length - 1);
    }
  };

  // для отрисовки стрелок в начале и в конце карусели
  useEffect(() => {
    if (currentImgIndex > 0) {
      setPrevIsActive(true);
    } else {
      setPrevIsActive(false);
    }

    if (currentImgIndex == (servicesCard.images.length - 1)) {
      setNextIsActive(false);
    } else {
      setNextIsActive(true);
    }


  }, [currentImgIndex]);






  return (
    <div className={styles.storyContainer}>



      <Image
        className={styles.image}
        src={servicesCard.images[currentImgIndex].img}
        alt={servicesCard.title}
        width={480}
        height={580}
        placeholder={'blur'}
      />

      {/* прогрессбар */}
      <div className={styles.progressContainer}>
        {servicesCard.images.map((item, index) => {
          return (
            <div key={item._id} className={`${styles.progressBar}
                                            ${currentImgIndex >= (index) ? styles.progressBar_isActive : ''}`}>
            </div>
          );
        })}
      </div>

      <div className={styles.labelContainer}>
        <div className={styles.label}>
          <LogoIcon className = {styles.labelLogo} />
        </div>
        <p className = {styles.labelDescription}>
          {servicesCard.title}
        </p>
      </div>


      {/* стрелки */}
      <>
        {prevIsActive &&
          <ArrowsButton
            type='inImg'
            position={'left'}
            onClick={handlePrev}
            className={`${styles.arrowNavigate} ${styles.arrowNavigate_left}`}
          />
        }
      </>
      <>
        {nextIsActive &&
          <ArrowsButton
            type='inImg'
            position={'right'}
            onClick={handleNext}
            className={`${styles.arrowNavigate} ${styles.arrowNavigate_right}`}
          />
        }
      </>
    </div>
  );
};

export { StoriesCardElement };
