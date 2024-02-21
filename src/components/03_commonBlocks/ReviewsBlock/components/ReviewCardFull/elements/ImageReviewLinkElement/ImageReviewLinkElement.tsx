import React from 'react';
import styles from './ImageReviewLinkElement.module.scss';
import { ImageReviewLinkElementInterface } from './ImageReviewLinkElement.interface.ts';
import Image from 'next/image';
import { ReviewPopupButton } from '~shared/index.ts';

const ImageReviewLinkElement: React.FC<ImageReviewLinkElementInterface> = ({ data }) => {

  return (
    data.photos && data.photos.map(photo => {
      return (
        <ReviewPopupButton key={photo.uuid} className={styles.imageButton}
          type={'reviewImage'}
          data={data}
        >
          <Image className={styles.image}
            src={photo.image}
            alt={'Оригинал отзыва'}
            width={320}
            height={320} />
        </ReviewPopupButton>
      );
    })

  );
};

export { ImageReviewLinkElement };
