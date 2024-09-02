'use client';

import React, { useEffect, useRef } from 'react';
import styles from './ObjectImagePopup.module.scss';

import Image from 'next/image';
import useObjectPhotoStore from '~store/objectsCardStore/useObjectPhotoStore';

import useObjectImagePopupStore from '~store/popupsStore/useObjectImagePopupStore.ts';
import { ArrowsButton } from '~shared/index';
import useUpdateActiveIndex from '~hooks/useUpdateActiveIndex';
import { useToggleMainPopupStore } from '~store/popupsStore/useTogglePopupStore';


const ObjectImagePopup: React.FC = () => {

  const picsData = useObjectImagePopupStore((state) => state.picturesArray);



  const { activePhoto,
    actions: {
      setActivePhoto,
      nextPhoto,
      prevPhoto,
    }
  } = useObjectPhotoStore();

  const { isOpen } = useToggleMainPopupStore();  // стейт открытия попапа



  // создаем реф для скролла большой текущей фотографии
  const currentActiveImageRef = useRef<HTMLDivElement>(null);
  // кастомный хук для управления свайпа - в него передаем наши рефы и данные стейта
  const scrollActiveIndex = useUpdateActiveIndex(currentActiveImageRef, activePhoto, setActivePhoto);

  // обновляем текущий индекс на основе данных хука по контролю индекса
  useEffect(() => {
    setActivePhoto(scrollActiveIndex);
  }, [scrollActiveIndex]);


  // кнопка "Вперед"
  const handleNext = () => {
    const nextIndex = scrollActiveIndex === picsData.length - 1 ? 0 : scrollActiveIndex + 1;
    nextPhoto(nextIndex);
    scrollToImage(nextIndex);

  };

  // кнопка "Назад"
  const handlePrev = () => {
    const prevIndex = scrollActiveIndex === 0 ? picsData.length - 1 : scrollActiveIndex - 1;
    prevPhoto(prevIndex);
    scrollToImage(prevIndex);
  };



  // скролл до изображения
  const scrollToImage = (index: number) => {
    const currentNode = currentActiveImageRef.current;

    if (!currentNode) {
      return;
    }
    setActivePhoto(index);

    const dataContainer = currentNode.getBoundingClientRect();
    currentNode.scrollTo({
      left: index * dataContainer.width,
      behavior: 'smooth'

    });

  };

/*   useArrowsKeysEvents((key) => {
    if (key === 'ArrowLeft') {
      handlePrev();
    }

    if (key === 'ArrowRight') {
      handleNext();
    }
  }); */


  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      handlePrev();
    } else if (event.key === 'ArrowRight') {
      handleNext();
    }
  };
  // Активируем обработчик клавиш только когда попап открыт
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleNext, handlePrev, isOpen]);

  // для задания первой фотографии при первичном рендере карточки объекта
  useEffect(() => {
    setActivePhoto(0);
  }, []);



    // для задания выбранной карточки при открытии попапа
    useEffect(() => {
      if (isOpen) {
        scrollToImage(activePhoto);
      }
    }, [isOpen]);



  return (
    <div className={styles.innerContainer}>
      {picsData &&
        <div className={styles.imageContainer} ref={currentActiveImageRef}>
          {picsData.map((pic) => {
            return (
              <Image
                key={pic.uuid}
                className={styles.image}
                src={pic.image}
                alt={`Photo ${pic.uuid}`}
                width={880}
                height={740}
               // priority={true}
              />
            );
          })}
        </div>
      }
      <>
        {(picsData.length > 0) &&
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
      </>

      <div className={styles.countPic}>
        <p className={styles.counter}>{activePhoto + 1} / {picsData.length}</p>
      </div>

    </div>
  );
};

export { ObjectImagePopup };
