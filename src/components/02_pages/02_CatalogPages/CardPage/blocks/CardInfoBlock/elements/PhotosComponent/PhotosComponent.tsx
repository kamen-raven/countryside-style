'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import styles from './PhotosComponent.module.scss';
import { PhotosComponentInterface } from './PhotosComponent.interface.ts';

import { ArrowsButton, ObjectImagePopupButton, LabelNew, LabelReserved, LabelSold } from '~shared/index.ts';
import { PlanTooltipElement, YoutubeTooltipElement } from './elements/index.ts';
import { RealEstateObjectInterface } from '~interfaces/objects.interface.ts';
import { VillageObjectInterface } from '~interfaces/villages.interface.ts';
import formatPhotosArray from '~helpers/formatters/formatPhotosArray.ts';
import useObjectPhotoStore from '~store/objectsCardStore/useObjectPhotoStore.ts';
import useSwipeUpdateActiveIndex from '~hooks/useSwipeUpdateActiveIndex.ts';
import useArrowsKeysEvents from '~hooks/useArrowsKeysEvents.ts';
import { useToggleMainPopupStore } from '~store/popupsStore/useTogglePopupStore.ts';
import { decreaseIndex, increaseIndex, moveToImage, setNewImage } from '~helpers/swipeFunction/swipeFunction.ts';


const PhotosComponent: React.FC<PhotosComponentInterface> = ({ data }) => {
  function isRealEstateObject(obj: RealEstateObjectInterface | VillageObjectInterface): obj is RealEstateObjectInterface {
    return (
      'created_at' in obj &&
      'isbook' in obj
      //'blurredDataUrl' in obj.photo_images
    );
  }

  //* переменные */
  // весь массив фотографий и планов объекта
  const picturesArray = formatPhotosArray(data);

  // стейт открытия попапа
  const isOpen = useToggleMainPopupStore((state) => state.isOpen);


  // создаем реф для скролла большой текущей фотографии
  const currentActiveImageRef = useRef<HTMLDivElement>(null);
  // объявляем реф для прокрутки миниатюр фото
  const smallPhotosContainerRef = useRef<HTMLDivElement>(null);

  // Получение текущего фото и действий из хранилища ZUSTAND
  const activePhoto = useObjectPhotoStore((state) => state.activePhoto);
  const setActivePhoto = useObjectPhotoStore((state) => state.actions.setActivePhoto);


  // стейт для отображения активной выбранной фотографии в карусели миниатюр
  const [isActive, setIsActive] = useState(0);

  // кастомный хук для управления свайпа - в него передаем наши рефы и данные стейта
  const scrollActiveIndex = useSwipeUpdateActiveIndex(currentActiveImageRef, activePhoto, setActivePhoto, 10);


  //* функции */
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

  // Поддерживаем синхронизацию между двумя контейнерами
  const syncScroll = (index: number) => {
    setNewImage(index, currentActiveImageRef, setActivePhoto, 10);   // Скроллим до большого фото
    scrollToThumbnail(index);  // Скроллим до миниатюры
  };

  //* Кнопки */
  // клик на превью картинки
  const handleThumbnailClick = (index: number) => {
    if (activePhoto !== index) {
      syncScroll(index);
    }
  };

  // кнопка "Вперед"
  const handleNext = () => {
    const nextPic = increaseIndex(activePhoto, picturesArray.length); // переменная расчета листания вперед
    syncScroll(nextPic);  // Синхронизируем скролл
  };

  // кнопка "Назад"
  const handlePrev = () => {
    const prevPic = decreaseIndex(activePhoto);    // переменная расчета листания назад
    syncScroll(prevPic);  // Синхронизируем скролл
  };

  // Кнопка "Планировка"
  const handlePlanButton = () => {
    const planPicIndex = data.photo_images.length;
    syncScroll(planPicIndex);
  };

  //* Эффекты */

  // для переключений слайдов по стрелкам
  useArrowsKeysEvents((key) => {
    if (!isOpen) { // если попап закрыт, срабатывают стрелки в PhotosComponent
      if (key === 'ArrowLeft') {
        handlePrev();
      }
      if (key === 'ArrowRight') {
        handleNext();
      }
    }
  });




  // обновляем текущий индекс на основе данных хука по контролю индекса
  useEffect(() => {
    setActivePhoto(scrollActiveIndex);
    scrollToThumbnail(scrollActiveIndex);

    const timeoutThumbnail = setTimeout(() => {
      setIsActive(scrollActiveIndex); // Отложенное обновление activeIndex
    }, 70);
    return () => clearTimeout(timeoutThumbnail); // Очистка таймера при изменении
  }, [scrollActiveIndex]);



  // Обновляем основную галерею после закрытия попапа
  useEffect(() => {
    if (!isOpen) {
      moveToImage(activePhoto, currentActiveImageRef, 10);   // Скроллим до большого фото
    }
  }, [isOpen]);


  // для задания первой фотографии при первичном рендере карточки объекта
  useEffect(() => {
    setActivePhoto(0);
    setIsActive(0);
    scrollToThumbnail(0);
    moveToImage(0, currentActiveImageRef, 10);   // Скроллим до большого фото
  }, []);


  //* Верстка компонентов */
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
            {picturesArray.map((pic, index) => (
              <Image
                key={pic.uuid}
                className={`${styles.image} `}
                src={pic.image}
                alt={data.name}
                width={980}
                height={740}
                loading={index < 5 ? 'eager' : 'lazy'}
                priority={index < 5 ? true : false}
              />
            ))}
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

            {/* Контейнер с кнопками на изображении */}
            {(picturesArray.length > 0) &&
              <>
                {/* Кнопка НАЗАД */}
                <ArrowsButton
                  type='inImg'
                  position={'left'}
                  onClick={handlePrev}
                  disabled={activePhoto === 0}
                  className={`${styles.arrowNavigate} ${styles.arrowNavigate_left}`}
                />
                {/* Кнопка ВПЕРЕД */}
                <ArrowsButton
                  type='inImg'
                  position={'right'}
                  onClick={handleNext}
                  disabled={activePhoto === picturesArray.length - 1}
                  className={`${styles.arrowNavigate} ${styles.arrowNavigate_right}`}
                />
              </>
            }

            <div className={styles.infoButtonContainer}> {/* //! */}
              {/* Кнопка ПЛАН */}
              {(data.plans_images.length > 0) &&
                <PlanTooltipElement onClick={handlePlanButton} />
              }

              {/* Кнопка ВИДЕО */}
              {data.you_tube_link &&
                <YoutubeTooltipElement data={data} />
              }
            </div>
          </>
        </div>
      }

      {/* Маленькие фото миниатюры */}
      {(picturesArray.length > 0) &&
        <div className={`${styles.smallPhotosContainer} ${styles.smallPhotosContainer_isScroll}`}>
          <div ref={smallPhotosContainerRef} className={styles.smallPhotosInner}>
            {picturesArray.map((photo, index) => {

              const activeIndex = isActive === index;

              return (
                <Image
                  onClick={() => handleThumbnailClick(index)}
                  key={index}
                  className={`${styles.smallPhoto}  ${activeIndex ? styles.smallPhoto_isActive : ''}`}
                  src={photo.image}
                  alt={photo.uuid}
                  width={110}
                  height={110}
                  loading={index < 5 ? 'eager' : 'lazy'}
                  priority={index < 5 ? true : false}
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
