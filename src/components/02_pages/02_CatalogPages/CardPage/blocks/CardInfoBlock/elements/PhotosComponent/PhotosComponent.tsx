'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

import styles from './PhotosComponent.module.scss';
import { PhotosComponentInterface } from './PhotosComponent.interface.ts';

import { ArrowsButton, ObjectImagePopupButton, LabelNew, LabelReserved, LabelSold } from '~shared/index.ts';
import { PlanTooltipElement, YoutubeTooltipElement } from './elements/index.ts';
import { RealEstateObjectInterface } from '~interfaces/objects.interface.ts';
import { VillageObjectInterface } from '~interfaces/villages.interface.ts';
import formatPhotosArray from '~helpers/formatters/formatPhotosArray.ts';
import useObjectPhotoStore from '~store/objectsCardStore/useObjectPhotoStore.ts';
import useUpdateActiveIndex from '~hooks/useUpdateActiveIndex.ts';
import useArrowsKeysEvents from '~hooks/useArrowsKeysEvents.ts';


const PhotosComponent: React.FC<PhotosComponentInterface> = ({ data }) => {
  function isRealEstateObject(obj: RealEstateObjectInterface | VillageObjectInterface): obj is RealEstateObjectInterface {
    return (
      'created_at' in obj &&
      'isbook' in obj
    );
  }

  // Получение текущего фото и действий из хранилища ZUSTAND
  const { activePhoto,
    actions: {
      setActivePhoto,
      nextPhoto,
      prevPhoto,
      setPlanPhoto
    }
  } = useObjectPhotoStore();


  // весь массив фотографий и планов объекта
  const picturesArray = formatPhotosArray(data);

  // создаем реф для скролла большой текущей фотографии
  const currentActiveImageRef = useRef<HTMLDivElement>(null);
  // объявляем реф для прокрутки миниатюр фото
  const smallPhotosContainerRef = useRef<HTMLDivElement>(null);


  // кастомный хук для управления свайпа - в него передаем наши рефы и данные стейта
  const scrollActiveIndex = useUpdateActiveIndex(currentActiveImageRef, activePhoto, setActivePhoto);

  // обновляем текущий индекс на основе данных хука по контролю индекса
  useEffect(() => {
    setActivePhoto(scrollActiveIndex);
  }, [scrollActiveIndex]);


  // клик на превью картинки
  const handleThumbnailClick = (index: number) => {
    setActivePhoto(index);
    scrollToImage(index);
    scrollToThumbnail(index);
  };

  // кнопка "Вперед"
  const handleNext = () => {
    nextPhoto(picturesArray.length);
    const nextIndex = activePhoto === picturesArray.length - 1 ? 0 : activePhoto + 1;
    scrollToImage(nextIndex);
    scrollToThumbnail(nextIndex);
  };

  // кнопка "Назад"
  const handlePrev = () => {
    prevPhoto(picturesArray.length);
    const prevIndex = activePhoto === 0 ? picturesArray.length - 1 : activePhoto - 1;
    scrollToImage(prevIndex);
    scrollToThumbnail(prevIndex);
  };

  // Кнопка "Планировка"
  const handlePlanButton = () => {
    const planPicIndex = data.photo_images.length;
    setPlanPhoto(planPicIndex);
    scrollToThumbnail(planPicIndex);
    scrollToImage(planPicIndex);
  };

  // скролл до миниатюры
  const scrollToThumbnail = (index: number) => {
    const container = smallPhotosContainerRef.current;
    if (container) {
      const thumbnail = container.children[index];
      if (thumbnail) {
        thumbnail.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
      }
    }
  };


  // скролл до изображения
  const scrollToImage = (index: number) => {
    const currentNode = currentActiveImageRef.current;

    if (!currentNode) {
      return;
    }
    // setActivePhoto(index);

    const dataContainer = currentNode.getBoundingClientRect();
    currentNode.scrollTo({
      left: index * dataContainer.width,
      behavior: 'smooth'

    });
  };
  /*     if (container) {
        const image = container.children[index] as HTMLDivElement;
        container.scrollTo({
          left: image.offsetLeft,
          behavior: 'smooth',
        });
      } */
  /*
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

   */

  // для переключений слайдов по стрелкам
  useArrowsKeysEvents((key) => {
    if (key === 'ArrowLeft') {
      handlePrev();
    }
    if (key === 'ArrowRight') {
      handleNext();
    }
  });


  // для задания первой фотографии при первичном рендере карточки объекта
  useEffect(() => {
    setActivePhoto(0);
  }, []);

  // Прокручивать миниатюры при изменении активного фото
  useEffect(() => {
    scrollToThumbnail(activePhoto);
  }, [activePhoto]);


  // функция установления шильдика проданного объекта
  const setLabelSold = (data: RealEstateObjectInterface) => {
    const isArchive = data.display_pages.some(page => page.display_pages.value === 'Архив');
    const isSold = data.date_sale;
    const isBooked = data.isbook;

    if (isArchive || isSold) {
      return (
        /* Значок ПРОДАНО */
        <LabelSold isSold={isSold} isArchived={isArchive} />
      );
    } else if (isBooked) {
      return (
        /* Значок ЗАБРОНИРОВАНО */
        <LabelReserved isBook={isBooked} />
      );
    } else {
      return null;
    }
  };


  return (
    <div className={styles.photosContainer}>

      {(picturesArray.length > 0) &&
        <div className={styles.mainPhotoContainer}>
          <ObjectImagePopupButton className={styles.imageContainer}
            picData={picturesArray}
            ref={currentActiveImageRef}
          >
            {picturesArray.map((pic) => (

              <Image
                key={pic.uuid}
                className={styles.image}
                src={pic.image}
                alt={data.name}
                width={980}
                height={740}
                priority={true}
              />

            ))}


            {/*             <Image
              className={styles.image}
              src={picturesArray[activePhoto].image}
              alt={data.name}
              width={980}
              height={740}
              priority={true}
            /> */}
          </ObjectImagePopupButton>


          <>
            {/* шильдик NEW */}
            {isRealEstateObject(data) ?
              <LabelNew createdAt={data.created_at} />
              : null
            }

            {/* шильдик БРОНИ И ПРОДАЖИ */}
            {isRealEstateObject(data) ?
              setLabelSold(data)
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


      {(picturesArray.length > 0) &&
        <div className={`${styles.smallPhotosContainer} ${styles.smallPhotosContainer_isScroll}`}>
          <div ref={smallPhotosContainerRef} className={styles.smallPhotosInner}>

            {picturesArray && picturesArray.map((photo, index) => {
              return (
                <Image
                  onClick={() => handleThumbnailClick(index)}
                  key={index}
                  className={`${styles.smallPhoto}  ${activePhoto === index ? styles.smallPhoto_isActive : ''}`}
                  src={photo.image}
                  alt={photo.uuid}
                  width={110}
                  height={110}
                />
              );
            })}

          </div>
        </div>
      }


    </div>
  );
};

export { PhotosComponent };
