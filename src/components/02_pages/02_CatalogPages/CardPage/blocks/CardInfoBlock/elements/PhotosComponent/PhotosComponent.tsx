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
import useUpdateActiveIndex from '~hooks/useUpdateActiveIndex.ts';
import useArrowsKeysEvents from '~hooks/useArrowsKeysEvents.ts';
import { useToggleMainPopupStore } from '~store/popupsStore/useTogglePopupStore.ts';


const PhotosComponent: React.FC<PhotosComponentInterface> = ({ data }) => {
  function isRealEstateObject(obj: RealEstateObjectInterface | VillageObjectInterface): obj is RealEstateObjectInterface {
    return (
      'created_at' in obj &&
      'isbook' in obj
      //'blurredDataUrl' in obj.photo_images
    );
  }

  // весь массив фотографий и планов объекта
  const picturesArray = formatPhotosArray(data);


  // стейт открытия попапа
  const { isOpen } = useToggleMainPopupStore();
  // Локальное состояние
  const [localActivePhoto, setLocalActivePhoto] = useState(0);

  // создаем реф для скролла большой текущей фотографии
  const currentActiveImageRef = useRef<HTMLDivElement>(null);
  // объявляем реф для прокрутки миниатюр фото
  const smallPhotosContainerRef = useRef<HTMLDivElement>(null);

  // Получение текущего фото и действий из хранилища ZUSTAND
  const {
    activePhoto,
    actions: { setActivePhoto, }
  } = useObjectPhotoStore();

  // кастомный хук для управления свайпа - в него передаем наши рефы и данные стейта
  const scrollActiveIndex = useUpdateActiveIndex(currentActiveImageRef, localActivePhoto, setLocalActivePhoto);





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
      left: index * (dataContainer.width + 10),
      behavior: 'smooth'
    });
  };

  // Поддерживаем синхронизацию между двумя контейнерами
  const syncScroll = (index: number) => {
    scrollToThumbnail(index);  // Скроллим до миниатюры
    scrollToImage(index);   // Скроллим до большого фото
  };


  // клик на превью картинки
  const handleThumbnailClick = (index: number) => {
    setLocalActivePhoto(index);  // Меняем локальное состояние
    syncScroll(index);  // Синхронизируем скролл
  };


  // кнопка "Вперед"
  const handleNext = () => {
    const nextIndex = localActivePhoto === picturesArray.length - 1 ? 0 : localActivePhoto + 1;
    setLocalActivePhoto(nextIndex);  // Меняем локальное состояние
    syncScroll(nextIndex);  // Синхронизируем скролл
  };

  // кнопка "Назад"
  const handlePrev = () => {
    const prevIndex = localActivePhoto === 0 ? picturesArray.length - 1 : localActivePhoto - 1;
    setLocalActivePhoto(prevIndex);  // Меняем локальное состояние
    syncScroll(prevIndex);  // Синхронизируем скролл
  };

  // Кнопка "Планировка"
  const handlePlanButton = () => {
    const planPicIndex = data.photo_images.length;
    setLocalActivePhoto(planPicIndex);
    syncScroll(planPicIndex);
  };


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

  const [isActive, setIsActive] = useState(0);

  // для задания первой фотографии при первичном рендере карточки объекта
  useEffect(() => {
    setActivePhoto(0);
  }, []);
  // обновляем текущий индекс на основе данных хука по контролю индекса
  useEffect(() => {
    scrollToThumbnail(localActivePhoto);
    setLocalActivePhoto(scrollActiveIndex);

    const timeout = setTimeout(() => {
      setIsActive(localActivePhoto); // Отложенное обновление activeIndex
    }, 70);
    return () => clearTimeout(timeout); // Очистка таймера при изменении
  }, [localActivePhoto, scrollActiveIndex]);


  // Прокручивать миниатюры при изменении активного фото
  /*   useEffect(() => {
      scrollToThumbnail(localActivePhoto);
    }, [localActivePhoto]);
   */

  // Устанавливаем начальное значение в Zustand после первого рендера
  // Обновляем глобальное состояние только когда нужно
  useEffect(() => {
    setActivePhoto(localActivePhoto);
  }, [localActivePhoto]);

  // для задания выбранной карточки при открытии попапа
  useEffect(() => {
    setLocalActivePhoto(activePhoto);
  }, [isOpen]);


/*   useEffect(() => {
    if (localActivePhoto !== null) {
      const timeout = setTimeout(() => {
        setIsActive(localActivePhoto); // Отложенное обновление activeIndex
      }, 100);

      return () => clearTimeout(timeout); // Очистка таймера при изменении
    }
  }, [localActivePhoto]);
 */

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
                loading={index < 10 ? 'eager' : 'lazy'}
                priority={index < 10 ? true : false}
              /* placeholder={'blur'}
              blurDataURL={pic.blurredDataUrl} */
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
                  className={`${styles.arrowNavigate} ${styles.arrowNavigate_left}`}
                />
                {/* Кнопка ВПЕРЕД */}
                <ArrowsButton
                  type='inImg'
                  position={'right'}
                  onClick={handleNext}
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
                  loading={index < 4 ? 'eager' : 'lazy'}
                  priority={index < 4 ? true : false}
                /// placeholder={'blur'}
                //blurDataURL={photo.blurredDataUrl}
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
