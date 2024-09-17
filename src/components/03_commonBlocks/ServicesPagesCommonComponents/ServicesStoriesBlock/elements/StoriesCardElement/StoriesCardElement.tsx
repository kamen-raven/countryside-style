'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import styles from './StoriesCardElement.module.scss';
import { StoriesCardElementInterface } from './StoriesCardElement.interface.ts';
import { ArrowsButton } from '~shared/index.ts';
import LogoIcon from '~svg/logo/logo.svg';
import useSwipeUpdateActiveIndex from '~hooks/useSwipeUpdateActiveIndex.ts';
import { increaseIndex, setNewImage, decreaseIndex } from '~helpers/swipeFunction/swipeFunction.ts';

const StoriesCardElement: React.FC<StoriesCardElementInterface> = ({ servicesCard }) => {

  const [currentImgIndex, setCurrentImgIndex] = useState(0); // стейт текущего активного фото
  const [counterIndex, setCounterIndex] = useState(0);
  const [prevIsActive, setPrevIsActive] = useState(false);
  const [nextIsActive, setNextIsActive] = useState(true);
  const [isHovered, setIsHovered] = useState(false); // состояние для отслеживания ховера

  // создаем реф для скролла большой текущей фотографии
  const currentActiveStoryRef = useRef<HTMLDivElement>(null);

  // кастомный хук для управления свайпа - в него передаем наши рефы и данные стейта
  const scrollActiveIndex = useSwipeUpdateActiveIndex(currentActiveStoryRef, currentImgIndex, setCurrentImgIndex, 2);

  //* функции */
  // кнопка "Вперед"
  const handleNext = () => {
    const nextPic = increaseIndex(currentImgIndex, servicesCard.images.length);  // переменная расчета листания вперед
    setNewImage(nextPic, currentActiveStoryRef, setCurrentImgIndex, 2);
  };

  // кнопка "Назад"
  const handlePrev = () => {
    const prevPic = decreaseIndex(currentImgIndex);  // переменная расчета листания назад
    setNewImage(prevPic, currentActiveStoryRef, setCurrentImgIndex, 2);
  };


  /* ArrowNext */
  /*   const handleNext = () => {
      if (currentImgIndex < servicesCard.images.length - 1) {
        setCurrentImgIndex(currentImgIndex + 1);
      } else {
        setCurrentImgIndex(0);
      }
    }; */

  /* ArrowPreviously */
  /*   const handlePrev = () => {
      if (currentImgIndex > 0) {
        setCurrentImgIndex(currentImgIndex - 1);
      } else {
        setCurrentImgIndex(servicesCard.images.length - 1);
      }
    }; */

  // обновляем текущий индекс на основе данных хука по контролю индекса
  useEffect(() => {
    setCurrentImgIndex(scrollActiveIndex);
    const timeoutThumbnail = setTimeout(() => {
      setCounterIndex(scrollActiveIndex); // Отложенное обновление activeIndex
    }, 20);
    return () => clearTimeout(timeoutThumbnail); // Очистка таймера при изменении
  }, [scrollActiveIndex]);


  // для отрисовки стрелок в начале и в конце карусели
  useEffect(() => {
    if (currentImgIndex > 0) {
      setPrevIsActive(true);
    } else {
      setPrevIsActive(false);
    }

    if (currentImgIndex == (servicesCard.images.length - 1)) {
      setNextIsActive(false);
    } else {
      setNextIsActive(true);
    }
  }, [currentImgIndex]);

  // Обработчик нажатий клавиш стрелок
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isHovered) { // Проверяем, наведена ли мышь на карточку
        if (event.key === 'ArrowRight') {
          handleNext();
        } else if (event.key === 'ArrowLeft') {
          handlePrev();
        }
      }
    };

    // Добавляем слушатель событий нажатия клавиш
    window.addEventListener('keydown', handleKeyDown);
    // Очищаем слушатель при размонтировании компонента
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isHovered, currentImgIndex]);


  // для задания первой фотографии при первичном рендере карточки объекта
  useEffect(() => {
    setCurrentImgIndex(0);
  }, []);



  return (
    <div className={styles.storyContainer}
      onMouseEnter={() => setIsHovered(true)}  // устанавливаем фокус при наведении
      onMouseLeave={() => setIsHovered(false)} // снимаем фокус при уходе мыши
    >
      <div className={styles.imageContainer}
        ref={currentActiveStoryRef}>

        {servicesCard.images.map((pic, index) =>

          <Image
            key={pic._id}
            className={styles.image}
            src={pic.img}//{servicesCard.images[currentImgIndex].img}
            alt={pic.alt}
            width={480}
            height={580}
            placeholder={'blur'}
            loading={index < 2 ? 'eager' : 'lazy'}
          />
        )}
      </div>

      {/* прогрессбар */}
      <div className={styles.progressContainer}>
        {servicesCard.images.map((item, index) => {
          const activeIndex = counterIndex >= index;

          return (
            <div key={item._id} className={`${styles.progressBar}
                                            ${activeIndex ? styles.progressBar_isActive : ''}`}>
            </div>
          );
        })}
      </div>

      <div className={styles.labelContainer}>
        <div className={styles.label}>
          <LogoIcon className={styles.labelLogo} />
        </div>
        <p className={styles.labelDescription}>
          {servicesCard.title}
        </p>
      </div>


      {/* стрелки */}
      <>
        {prevIsActive &&
          <ArrowsButton
            type='inImg'
            position={'left'}
            onClick={handlePrev}
            className={`${styles.arrowNavigate} ${styles.arrowNavigate_left}`}
          />
        }
      </>
      <>
        {nextIsActive &&
          <ArrowsButton
            type='inImg'
            position={'right'}
            onClick={handleNext}
            className={`${styles.arrowNavigate} ${styles.arrowNavigate_right}`}
          />
        }
      </>
    </div>
  );
};

export { StoriesCardElement };
