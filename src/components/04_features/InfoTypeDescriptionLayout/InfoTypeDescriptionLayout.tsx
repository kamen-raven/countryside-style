import React from 'react';
import styles from './InfoTypeDescriptionLayout.module.scss';
import { InfoTypeDescriptionLayoutInterface } from './InfoTypeDescriptionLayout.interface.ts';

import ToggleIcon from '~svg/button/toggle.svg';


const InfoTypeDescriptionLayout: React.FC<InfoTypeDescriptionLayoutInterface> = ({ data }) => {
  const textArray = data.houses.SEOText;


  const buttonCondition = {
    closed: {
      text: 'Читать весь текст',
      activeStyle: '',
    },
    opened: {
      text: 'Свернуть текст',
      activeStyle: styles.active,
    },
    text: {
      closed: 'Читать весь текст',
      opened: 'Свернуть текст',
    },
    activationClass: {
      closed: '',
      opened: styles.active,
    }
  };






  return (
    <div className={styles.layoutContainer}>
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
                        {index !== (array.length - 1) ? <><br /><br /></> : ''}
                      </React.Fragment>);
                  })}
                </p>
              </div>
            );
          })}
        </div>

          {/* скрываемая часть */}
        <div className={`${styles.inner__toggle} ${styles.inner__toggle_visible} `}>
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
                          {index !== (array.length - 1) ? <br /> : ''}
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
                      {index !== (array.length - 1) ? <><br /><br /></> : ''} {/* добавляем разрыв строки */}
                    </React.Fragment>);
                })}
              </p>
            </div>
          </div>

        </div>
      </div>


      <button className={`${styles.toggleButton} ${buttonCondition.opened.activeStyle}`}>
        {buttonCondition.opened.text}
        <ToggleIcon />
      </button>
    </div>
  );
};

export { InfoTypeDescriptionLayout };
