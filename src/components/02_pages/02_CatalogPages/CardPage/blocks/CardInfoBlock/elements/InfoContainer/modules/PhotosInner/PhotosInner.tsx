import React from 'react';
import Image from 'next/image';
import styles from './PhotosInner.module.scss';
import { InfoContainerInterface } from '../../InfoContainer.interface';


import { LabelNew } from '~shared/index';
import { TooltipElement } from './elements';


const PhotosInner = ({ data }: InfoContainerInterface): JSX.Element => {



  return (
    <>
      <div className={styles.imageContainer}>

        <Image
          className={styles.image}
          src={data.photo_images[0].image}
          alt={data.name}
          width={800}
          height={640}
        />

        <LabelNew />

        <div className={styles.infoButtonContainer}>

          {(data.plans_images.length > 0) &&
            <TooltipElement data={data} type={'plan'} />
          }

          {data.you_tube_link &&
            <TooltipElement data={data} type={'youtube'} />
          }

        </div>
      </div>
    </>
  );
};

export { PhotosInner };
