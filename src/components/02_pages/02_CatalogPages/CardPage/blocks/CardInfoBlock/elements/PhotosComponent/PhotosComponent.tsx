import React from 'react';
import styles from './PhotosComponent.module.scss';
import { PhotosComponentInterface } from './PhotosComponent.interface.ts';
import Image from 'next/image';
import { LabelNew } from '~shared/index.ts';
import { TooltipElement, YoutubeTooltipElement } from './elements/index.ts';
import { RealEstateObjectInterface } from '~interfaces/objects.interface.ts';
import { VillageObjectInterface } from '~interfaces/villages.interface.ts';

const PhotosComponent: React.FC<PhotosComponentInterface> = ({ data }) => {
  function isRealEstateObject(obj: RealEstateObjectInterface | VillageObjectInterface): obj is RealEstateObjectInterface {
    return 'created_at' in obj;
  }


  return (
    <div className={styles.photosContainer}>

      <div className={styles.mainPhotoContainer}>
        <Image
          className={styles.image}
          src={data.photo_images[0].image}
          alt={data.name}
          width={800}
          height={640}
        />


        <>
          {isRealEstateObject(data) ?
            <LabelNew createdAt={data.created_at} />
            : null
          }

          <div className={styles.infoButtonContainer}> {/* //! */}
            {(data.plans_images.length > 0) &&
              <TooltipElement data={data} type={'plan'} />
            }

            {data.you_tube_link &&
              <YoutubeTooltipElement data={data} />
            }
          </div>
        </>
      </div>

      <div className={`${styles.smallPhotosContainer} ${styles.smallPhotosContainer_isScroll}`}>
        <div className={styles.smallPhotosInner}>

          {data.photo_images && data.photo_images.map((photo) => {
            return (
              <Image
                key={photo.uuid}
                className={`${styles.smallPhoto}`}
                src={photo.image}
                alt={photo.uuid}
                width={110}
                height={110}
              />
            );
          })}
        </div>


      </div>
    </div>
  );
};

export { PhotosComponent };
