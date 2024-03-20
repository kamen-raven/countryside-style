'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';

import styles from './PhotosComponent.module.scss';
import { PhotosComponentInterface } from './PhotosComponent.interface.ts';

import { ArrowsButton, LabelNew } from '~shared/index.ts';
import { TooltipElement, YoutubeTooltipElement } from './elements/index.ts';
import { RealEstateObjectInterface } from '~interfaces/objects.interface.ts';
import { VillageObjectInterface } from '~interfaces/villages.interface.ts';

const PhotosComponent: React.FC<PhotosComponentInterface> = ({ data }) => {
  function isRealEstateObject(obj: RealEstateObjectInterface | VillageObjectInterface): obj is RealEstateObjectInterface {
    return 'created_at' in obj;
  }

/*   const createPhotosArray = (data: RealEstateObjectInterface | VillageObjectInterface) => {
    const photoArr = data.photo_images;
    const plansArr = data.plans_images;

    const allPhotos = photoArr.concat(plansArr);
    return allPhotos;
  };
 */

  console.log(data.photo_images);





  const [activePhoto, setActivePhoto] = useState(0);
  const smallPhotosContainerRef = useRef<HTMLDivElement>(null);

  // клик на превью картинки
  const handleThumbnailClick = (index: number) => {
    setActivePhoto(index);
    scrollToThumbnail(index);
  };

  // кнопка "Вперед"
  const handleNext = () => {
    const nextIndex = activePhoto === data.photo_images.length - 1 ? 0 : activePhoto + 1;
    setActivePhoto(nextIndex);
    scrollToThumbnail(nextIndex);
  };

  // кнопка "Назад"
  const handlePrev = () => {
    const prevIndex = activePhoto === 0 ? data.photo_images.length - 1 : activePhoto - 1;
    setActivePhoto(prevIndex);
    scrollToThumbnail(prevIndex);
  };

  // скролл
  const scrollToThumbnail = (index: number) => {
    const container = smallPhotosContainerRef.current;
    if (container) {
      const thumbnail = container.children[index];
      thumbnail.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };








  return (
    <div className={styles.photosContainer}>

      <div className={styles.mainPhotoContainer}>
        <Image
          className={styles.image}
          src={data.photo_images[activePhoto].image}
          alt={data.name}
          width={800}
          height={640}
        />


        <>
          {isRealEstateObject(data) ?
            <LabelNew createdAt={data.created_at} />
            : null
          }

          {(data.photo_images.length > 0) &&
            <>
              <ArrowsButton
                position={'left'}
                onClick={handlePrev}
                className={`${styles.arrowNavigate} ${styles.arrowNavigate_left}`}
              />
              <ArrowsButton
                position={'right'}
                onClick={handleNext}
                className={`${styles.arrowNavigate} ${styles.arrowNavigate_right}`}
              />
            </>
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
        <div ref={smallPhotosContainerRef} className={styles.smallPhotosInner}>

          {data.photo_images && data.photo_images.map((photo, index) => {
            return (
              <Image
                onClick={() => handleThumbnailClick(index)}
                key={photo.uuid}
                className={`${styles.smallPhoto} ${activePhoto === index ? styles.smallPhoto_isActive : ''}`}
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
