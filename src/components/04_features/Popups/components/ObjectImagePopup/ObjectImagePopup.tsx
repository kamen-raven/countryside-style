'use client';

import React, { useEffect, useRef } from 'react';
import styles from './ObjectImagePopup.module.scss';

import Image from 'next/image';
import useObjectPhotoStore from '~store/objectsCardStore/useObjectPhotoStore';

import useObjectImagePopupStore from '~store/popupsStore/useObjectImagePopupStore.ts';
import { ArrowsButton, PopupCloseButton } from '~shared/index';
import useSwipeUpdateActiveIndex from '~hooks/useSwipeUpdateActiveIndex';
import { useToggleMainPopupStore } from '~store/popupsStore/useTogglePopupStore';
import useArrowsKeysEvents from '~hooks/useArrowsKeysEvents';
import { decreaseIndex, increaseIndex, isLoaded, setNewImage } from '~helpers/swipeFunction/swipeFunction';
import { CounterElement } from './elements/CounterElement/CounterElement';


const ObjectImagePopup: React.FC = () => {

  //* переменные */
  // весь массив фотографий и планов объекта
  const picsData = useObjectImagePopupStore((state) => state.picturesArray);
  // стейт управления состоянием попапа
  const closePopup = useToggleMainPopupStore((state) => state.actions.closePopup); // функция закрытия попапа
  const isOpen = useToggleMainPopupStore((state) => state.isOpen); // стейт состояния открытия попапа

  // создаем реф для скролла большой текущей фотографии
  const currentActiveImageRef = useRef<HTMLDivElement>(null);

  // Получение текущего фото и действий из хранилища ZUSTAND
  const activePhoto = useObjectPhotoStore((state) => state.activePhoto);
  const setActivePhoto = useObjectPhotoStore((state) => state.actions.setActivePhoto);

  // кастомный хук для управления свайпа - в него передаем наши рефы и данные стейта
  const scrollActivePopupIndex = useSwipeUpdateActiveIndex(currentActiveImageRef, activePhoto, setActivePhoto, 10);



  //* функции */
  // кнопка "Вперед"
  const handleNext = () => {
    const nextPic = increaseIndex(activePhoto, picsData.length);  // переменная расчета листания вперед
    setNewImage(nextPic, currentActiveImageRef, setActivePhoto, 10);
  };

  // кнопка "Назад"
  const handlePrev = () => {
    const prevPic = decreaseIndex(activePhoto);  // переменная расчета листания назад
    setNewImage(prevPic, currentActiveImageRef, setActivePhoto, 10);
  };


  // для переключений слайдов по стрелкам
  useArrowsKeysEvents((key) => {
    if (isOpen) { // если попап открыт, срабатывают стрелки в ObjectImagePopup
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
    setActivePhoto(scrollActivePopupIndex);
  }, [scrollActivePopupIndex]);


  // для задания выбранной карточки при открытии попапа
  useEffect(() => {
    if (isOpen) {
      setNewImage(activePhoto, currentActiveImageRef, setActivePhoto, 10);
    }
  }, [isOpen]);


  // для задания первой фотографии при первичном рендере карточки объекта
  useEffect(() => {
    setActivePhoto(0);
  }, []);


  return (

    <>
      <div className={styles.outsideContainer}>
        <CounterElement activeIndex={activePhoto} totalLength={picsData.length} />
        <PopupCloseButton
          className={styles.closePopupButton}
          closePopupHandler={closePopup} />
      </div>

      <div className={styles.innerContainer}>
        {picsData &&
          <div className={styles.imageContainer} ref={currentActiveImageRef}>
            {picsData.map((pic, index) => {
              return (
                <Image
                  key={pic.uuid}
                  className={styles.image}
                  src={pic.image}
                  alt={`Photo ${pic.uuid}`}
                  width={880}
                  height={740}
                  loading={isLoaded(index, activePhoto) ? 'eager' : 'lazy'}
                // priority={true}
                />
              );
            })}
          </div>
        }
        <>
          {((picsData.length > 0) && isOpen) &&
            <>
              <ArrowsButton
                type='inImg'
                position={'left'}
                onClick={handlePrev}
                disabled={activePhoto === 0}
                className={`${styles.arrowNavigate} ${styles.arrowNavigate_left}`}
              />
              <ArrowsButton
                type='inImg'
                position={'right'}
                onClick={handleNext}
                disabled={activePhoto === picsData.length - 1}
                className={`${styles.arrowNavigate} ${styles.arrowNavigate_right}`}
              />
            </>
          }
        </>
      </div>
    </>
  );
};

export { ObjectImagePopup };
