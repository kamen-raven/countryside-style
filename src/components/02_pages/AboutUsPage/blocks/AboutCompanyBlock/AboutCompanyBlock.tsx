import React from 'react';
import styles from './AboutCompanyBlock.module.scss';

import { BackgroundSVGPattern } from '~shared/index';
import aboutUsPageFacts from '~data/constant/advantagesList/aboutUsPage/aboutUsPageFacts';
import { AboutUsInfoElement } from './elements';
import useReactMarkdown from '~hooks/useReactMarkdown';

const AboutCompanyBlock: React.FC = () => {
  const markdownStyles = {
    p: styles.text,
    strong: styles.text_spanAccent,
  };


  return (
    <section className={styles.wrapper}>
      <BackgroundSVGPattern positionX='right' />
      <div className={styles.container}>
        <>
          <h1 className={styles.title}>
            О компании
          </h1>
          <p className={styles.subtitle}>
            Загородный стиль – это специализированное агентство по&nbsp;загородной недвижимости.
          </p>
        </>

        <div className={styles.iconsContainer}>
          {aboutUsPageFacts.map((item) => {
            return (
              <div key={item._id} className={styles.advantageIconComponent}>
                <div className={styles.iconContainer}>
                  {item.icon && <item.icon />}
                </div>
                <div className={styles.textContainer}>
                  {useReactMarkdown(item.title, markdownStyles)}

{/*                   <ReactMarkdown remarkPlugins={[remarkGfm]}
                    components={{
                      p: ({ children }) =>
                        <p className={styles.text}>
                          {children}
                        </p>,
                      strong: ({ children }) =>
                        <span className={styles.text_spanAccent}>
                          {children}
                        </span>,
                    }}
                    children={item.title} /> */}



                </div>
              </div>
            );
          })}
        </div>

        <AboutUsInfoElement />

      </div>
    </section>
  );
};

export { AboutCompanyBlock };
