'use client';
import React, { useRef, useState } from 'react';
import styles from './InfoTypeDescriptionLayout.module.scss';
import { InfoTypeDescriptionLayoutInterface } from './InfoTypeDescriptionLayout.interface.ts';

import ToggleIcon from '~svg/button/toggle.svg';
import useReactMarkdown from '~hooks/useReactMarkdown.tsx';
import TypeSEOText from '~data/constant/TypeSEOText/TypeSEOText.ts';

const InfoTypeDescriptionLayout: React.FC<InfoTypeDescriptionLayoutInterface> = ({ typePage }) => {
  const textArray = TypeSEOText[typePage]; // берем нужный текст из массива

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

    if (visibleText !== blockCondition.closed.textVisibleStyle) {
      scrollToTop();
    } else {
      return;
    }
  };

/* styles of common text */
  const markdownCommonStyle = {
    h2: styles.subtitle,
    p: styles.paragraph,
    a: styles.link,
    ul: styles.list,
    li: styles.listItem
  };
/* styles of banner text */
  const markdownBannerStyle = {
    h2: styles.subtitleBanner,
    p: styles.paragraphBanner,
    a: styles.linkBanner,
  };


  return (
    <div className={styles.layoutContainer} ref={parentRef}>
      <div className={styles.inner}>
        <div className={styles.inner__initial}> {/* видимые абзацы */}

          {textArray.common.slice(0, 2).map((item, key) => { /* берем только первые два абзаца из массива для видимой части */
            return (
              <div key={key} className={styles.textBlock}>
                <>
                  {useReactMarkdown(item, markdownCommonStyle)}
                </>
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
                  <>
                    {useReactMarkdown(item, markdownCommonStyle)}
                  </>
                </div>
              );
            })}
          </div>

          {/* баннер */}
          <div className={styles.banner}>
            <div className={`${styles.textBlock} ${styles.textBlock_banner}`}>
              <>
                {useReactMarkdown(textArray.banner, markdownBannerStyle)}
              </>
            </div>
          </div>
        </div>
      </div>

      <button className={`${styles.toggleButton} ${styleButton}`}
        onClick={handleClick}>
        {textButton}
        <ToggleIcon />
      </button>
    </div>
  );
};

export { InfoTypeDescriptionLayout };
