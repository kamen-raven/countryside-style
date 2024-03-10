import React from 'react';
import Image from 'next/image';
import styles from './PhotosInner.module.scss';
import { InfoContainerInterface } from '../../InfoContainer.interface';


import { LabelNew } from '~shared/index';
import { TooltipElement } from './elements';
import { differenceInCalendarDays } from 'date-fns';


const PhotosInner = ({ data }: InfoContainerInterface): JSX.Element => {

  const currentDate = new Date();
  const createDate = new Date(data.created_at);
  const newStatus = differenceInCalendarDays(currentDate, createDate);

  const newLabel = <LabelNew />;
  const renderNewLabel = newStatus <= 30 ? newLabel : '';


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

        {renderNewLabel}

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
