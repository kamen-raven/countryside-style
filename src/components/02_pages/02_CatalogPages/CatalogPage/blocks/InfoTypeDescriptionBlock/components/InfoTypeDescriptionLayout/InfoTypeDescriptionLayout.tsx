'use client';
import React, { useRef, useState } from 'react';
import styles from './InfoTypeDescriptionLayout.module.scss';
import { InfoTypeDescriptionLayoutInterface } from './InfoTypeDescriptionLayout.interface.ts';

import ToggleIcon from '~svg/button/toggle.svg';


const InfoTypeDescriptionLayout: React.FC<InfoTypeDescriptionLayoutInterface> = ({ data }) => {
  const textArray = data.houses.SEOText;

  const blockCondition = {
    closed: {
      buttonText: 'Читать весь текст',
      buttonStyle: '',
      textVisibleStyle: styles.inner__toggle_hidden,
    },
    opened: {
      buttonText: 'Свернуть текст',
      buttonStyle: styles.active,
      textVisibleStyle: styles.inner__toggle_visible,
    },
/*     text: {
      closed: 'Читать весь текст',
      opened: 'Свернуть текст',
    },
    activationClass: {
      closed: '',
      opened: styles.active,
    } */
  };


  const [textButton, setTextButton] = useState(blockCondition.closed.buttonText);
  const [styleButton, setStyleButton] = useState(blockCondition.closed.buttonStyle);
  const [visibleText, setVisibleText] = useState(blockCondition.closed.textVisibleStyle);

  const parentRef = useRef<HTMLDivElement>(null); // реф для скролла вверх при пагинации


  const scrollToTop = async () => {
    try {
      if (parentRef.current) {
        parentRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
        await new Promise<void>((resolve) => {
          parentRef.current?.addEventListener('scroll', () => {
            if (parentRef.current?.scrollTop === 0) {
              resolve();
            }
          });
        });
      }
    } catch (error) {
      console.error('Error scrolling to top:', error);
    }
  };


  const handleClick = async () => {
    // Инвертируем состояние для открытия/закрытия текста
    setVisibleText((prevVisibleText) =>
      prevVisibleText === blockCondition.closed.textVisibleStyle
        ? blockCondition.opened.textVisibleStyle
        : blockCondition.closed.textVisibleStyle
    );

    // Инвертируем состояние кнопки
    setTextButton((prevTextButton) =>
      prevTextButton === blockCondition.closed.buttonText
        ? blockCondition.opened.buttonText
        : blockCondition.closed.buttonText
    );

    // Инвертируем стиль кнопки
    setStyleButton((prevStyleButton) =>
      prevStyleButton === blockCondition.closed.buttonStyle
        ? blockCondition.opened.buttonStyle
        : blockCondition.closed.buttonStyle
    );

    if(visibleText !== blockCondition.closed.textVisibleStyle) {
      scrollToTop();
    } else {
      return;
    }
  };




  return (
    <div className={styles.layoutContainer} ref={parentRef}>
      <div className={styles.inner}>
        <div className={styles.inner__initial}> {/* видимые абзацы */}

          {textArray.common.slice(0, 2).map((item, key) => { /* берем только первые два абзаца из массива для видимой части */
            return (
              <div key={key} className={styles.textBlock}>
                <h2 className={styles.subtitle}>
                  {item.span}
                </h2>
                <p className={styles.paragraph}>
                  {item.text.split('\n\n').map((item, index, array) => {
                    return (
                      <React.Fragment key={index}>
                        {item}
                        {index !== (array.length - 1) ? <><br /><br /></> : null}
                      </React.Fragment>);
                  })}
                </p>
              </div>
            );
          })}
        </div>

          {/* скрываемая часть */}
        <div className={`${styles.inner__toggle} ${visibleText} `}>
          <div className={styles.toggleWrapper}>
            {textArray.common.slice(2).map((item, key) => { /* берем оставшиеся абзацы из массива для скрываемой части */
              return (
                <div key={key} className={styles.textBlock}>
                  <h2 className={styles.subtitle}>
                    {item.span}
                  </h2>
                  <p className={styles.paragraph}>
                    {item.text.split('\n\n').map((item, index, array) => {
                      return (
                        <React.Fragment key={index}>
                          {item}
                          {index !== (array.length - 1) ? <br /> : null}
                        </React.Fragment>);
                    })}
                  </p>
                </div>
              );
            })}
          </div>

          {/* баннер */}
          <div className={styles.banner}>
            <div className={`${styles.textBlock} ${styles.textBlock_banner}`}>
              <h2 className={`${styles.subtitle} ${styles.subtitle_banner}`}>
                {textArray.banner.span}
              </h2>
              <p className={`${styles.paragraph} ${styles.paragraph_banner}`}>
                {textArray.banner.text.split('\n\n').map((item, index, array) => {
                  return (
                    <React.Fragment key={index}>
                      {item}
                      {index !== (array.length - 1) ? <><br /><br /></> : null} {/* добавляем разрыв строки */}
                    </React.Fragment>);
                })}
              </p>
            </div>
          </div>

        </div>
      </div>


      <button className={`${styles.toggleButton} ${styleButton}`}
              onClick={handleClick}>
        {textButton}
        <ToggleIcon/>
      </button>
    </div>
  );
};

export { InfoTypeDescriptionLayout };
