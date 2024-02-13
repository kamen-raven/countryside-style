import React from 'react';
import styles from './ImageReviewLinkElement.module.scss';
import { ImageReviewLinkElementInterface } from './ImageReviewLinkElement.interface.ts';
import Image from 'next/image';

const ImageReviewLinkElement: React.FC<ImageReviewLinkElementInterface> = ({ data }) => {

  return (
    data.photos && data.photos.map(photo => {
      return (
        <button key={photo.uuid} className={styles.imageButton}>
          <Image className={styles.image}
            src={photo.image}
            alt={'Оригинал отзыва'}
            width={320}
            height={320} />
        </button>
      );
    })

  );
};

export { ImageReviewLinkElement };
