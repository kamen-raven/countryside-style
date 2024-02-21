'use client';

import React from 'react';
import styles from './ReviewImagePopup.module.scss';
import useReviewPopupStore from '~store/useReviewPopupStore';
import Image from 'next/image';

const ReviewImagePopup: React.FC = () => {
  const photosData = useReviewPopupStore((state) => state.popupData.photos);



  return (
    <div className={styles.innerContainer}>
      {photosData && photosData.map((photo, index) => {
        return (
          <Image
          key={index}
          className = {styles.image}
          src={photo.image}
          alt={photo.review}
          width={350}
          height={350} />
        );
      })
      }
    </div>
  );
};

export { ReviewImagePopup };
