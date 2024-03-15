import React from 'react';
import Image from 'next/image';
import styles from './PhotosInner.module.scss';
import { PhotosInnerInterface } from './PhotosInner.interface.ts';


import { LabelNew } from '~shared/index';
import { TooltipElement } from './elements';
import { RealEstateObjectInterface } from '~interfaces/objects.interface.ts';
import { VillageObjectInterface } from '~interfaces/villages.interface.ts';


const PhotosInner = ({ data }: PhotosInnerInterface): JSX.Element => {
  function isRealEstateObject(obj: RealEstateObjectInterface | VillageObjectInterface): obj is RealEstateObjectInterface {
    return 'created_at' in obj;
  }


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

        {isRealEstateObject(data) ?
          <LabelNew createdAt={data.created_at} />
          : null
        }

        <div className={styles.infoButtonContainer}> {/* //! */}

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
