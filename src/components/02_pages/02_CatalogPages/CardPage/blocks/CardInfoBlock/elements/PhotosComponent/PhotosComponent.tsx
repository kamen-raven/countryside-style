'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

import styles from './PhotosComponent.module.scss';
import { PhotosComponentInterface } from './PhotosComponent.interface.ts';

import { ArrowsButton, ObjectImagePopupButton, LabelNew, LabelReserved } from '~shared/index.ts';
import { PlanTooltipElement, YoutubeTooltipElement } from './elements/index.ts';
import { RealEstateObjectInterface } from '~interfaces/objects.interface.ts';
import { VillageObjectInterface } from '~interfaces/villages.interface.ts';
import formatPhotosArray from '~helpers/formatters/formatPhotosArray.ts';
import useObjectPhotoStore from '~store/objectsCardStore/useObjectPhotoStore.ts';


const PhotosComponent: React.FC<PhotosComponentInterface> = ({ data }) => {
  function isRealEstateObject(obj: RealEstateObjectInterface | VillageObjectInterface): obj is RealEstateObjectInterface {
    return (
      'created_at' in obj &&
      'isbook' in obj
    );
  }


  // весь массив фотографий и планов объекта
  const picturesArray = formatPhotosArray(data);
  // объявляем реф для прокрутки миниатюр фото
  const smallPhotosContainerRef = useRef<HTMLDivElement>(null);

  // Получение текущего фото и действий из хранилища ZUSTAND
  const { activePhoto,
    actions: {
      setActivePhoto,
      nextPhoto,
      prevPhoto,
      setPlanPhoto
    }
  } = useObjectPhotoStore();


  // клик на превью картинки
  const handleThumbnailClick = (index: number) => {
    setActivePhoto(index);
    scrollToThumbnail(index);
  };

  // кнопка "Вперед"
  const handleNext = () => {
    nextPhoto(picturesArray.length);
    scrollToThumbnail(activePhoto === picturesArray.length - 1 ? 0 : activePhoto + 1);
  };

  // кнопка "Назад"
  const handlePrev = () => {
    prevPhoto(picturesArray.length);
    scrollToThumbnail(activePhoto === 0 ? picturesArray.length - 1 : activePhoto - 1);
  };

  // Кнопка "Планировка"
  const handlePlanButton = () => {
    const planPicIndex = data.photo_images.length;
    setPlanPhoto(planPicIndex);
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



  // для задания первой фотографии при первичном рендере карточки объекта
  useEffect(() => {
    setActivePhoto(0);
  }, []);




  return (
    <div className={styles.photosContainer}>

      {picturesArray.length &&
        <div className={styles.mainPhotoContainer}>

          <ObjectImagePopupButton className={styles.image__popupButton}
                                  picData={picturesArray}>
            <Image
              className={styles.image}
              src={picturesArray[activePhoto].image}
              alt={data.name}
              width={878}
              height={640}
              priority={true}
            /*               onClick={() => console.log('click photo!!')} */
            />
          </ObjectImagePopupButton>


          <>
            {isRealEstateObject(data) ?
              <LabelReserved isBook={data.isbook} />
              : null
            }

            {isRealEstateObject(data) ?
              <LabelNew createdAt={data.created_at} />
              : null
            }

            {(picturesArray.length > 0) &&
              <>
                <ArrowsButton
                  type='inImg'
                  position={'left'}
                  onClick={handlePrev}
                  className={`${styles.arrowNavigate} ${styles.arrowNavigate_left}`}
                />
                <ArrowsButton
                  type='inImg'
                  position={'right'}
                  onClick={handleNext}
                  className={`${styles.arrowNavigate} ${styles.arrowNavigate_right}`}
                />
              </>
            }

            <div className={styles.infoButtonContainer}> {/* //! */}
              {(data.plans_images.length > 0) &&
                <PlanTooltipElement onClick={handlePlanButton} />
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
                key={index}
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
