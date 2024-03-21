'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import styles from './PhotosComponent.module.scss';
import { PhotosComponentInterface } from './PhotosComponent.interface.ts';

import { ArrowsButton, LabelNew } from '~shared/index.ts';
import { PlanTooltipElement, YoutubeTooltipElement } from './elements/index.ts';
import { RealEstateObjectInterface } from '~interfaces/objects.interface.ts';
import { VillageObjectInterface } from '~interfaces/villages.interface.ts';
import formatPhotosArray from '~helpers/formatters/formatPhotosArray.ts';

const PhotosComponent: React.FC<PhotosComponentInterface> = ({ data }) => {
  function isRealEstateObject(obj: RealEstateObjectInterface | VillageObjectInterface): obj is RealEstateObjectInterface {
    return 'created_at' in obj;
  }

  const picturesArray = formatPhotosArray(data);

  const [activePhoto, setActivePhoto] = useState(0);
  const smallPhotosContainerRef = useRef<HTMLDivElement>(null);

  // клик на превью картинки
  const handleThumbnailClick = (index: number) => {
    setActivePhoto(index);
    scrollToThumbnail(index);
  };

  // кнопка "Вперед"
  const handleNext = () => {
    const nextIndex = activePhoto === picturesArray.length - 1 ? 0 : activePhoto + 1;
    setActivePhoto(nextIndex);
    scrollToThumbnail(nextIndex);
  };

  // кнопка "Назад"
  const handlePrev = () => {
    const prevIndex = activePhoto === 0 ? picturesArray.length - 1 : activePhoto - 1;
    setActivePhoto(prevIndex);
    scrollToThumbnail(prevIndex);
  };

  // Кнопка "Планировка"
  const handlePlanButton = () => {
    const planPicIndex = data.photo_images.length;
    setActivePhoto(planPicIndex);
    scrollToThumbnail(planPicIndex);
  };

  // скролл
  const scrollToThumbnail = (index: number) => {
    const container = smallPhotosContainerRef.current;
    if (container) {
      const thumbnail = container.children[index];
      thumbnail.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };


  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      handlePrev();
    } else if (event.key === 'ArrowRight') {
      handleNext();
    }
  };
  // для переключений слайдов по стрелкам
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleNext, handlePrev]);






  return (
    <div className={styles.photosContainer}>

      {picturesArray.length &&
        <div className={styles.mainPhotoContainer}>
          <Image
            className={styles.image}
            src={picturesArray[activePhoto].image}
            alt={data.name}
            width={800}
            height={640}
            priority={true}
          />


          <>
            {isRealEstateObject(data) ?
              <LabelNew createdAt={data.created_at} />
              : null
            }

            {(picturesArray.length > 0) &&
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
                <PlanTooltipElement  onClick={handlePlanButton} />
              }

              {data.you_tube_link &&
                <YoutubeTooltipElement data={data} />
              }
            </div>
          </>
        </div>
      }



      <div className={`${styles.smallPhotosContainer} ${styles.smallPhotosContainer_isScroll}`}>
        <div ref={smallPhotosContainerRef} className={styles.smallPhotosInner}>

          {picturesArray && picturesArray.map((photo, index) => {
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
