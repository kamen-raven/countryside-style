import React from 'react';
import styles from './TitleBlockTemplate.module.scss';
import { TitleBlockTemplateInterface } from './TitleBlockTemplate.interface.ts';
import Link from 'next/link';


const TitleBlockTemplate: React.FC<TitleBlockTemplateInterface> = ({ pageData }) => {


  return (
    <section className={`${styles.wrapper} ${styles[pageData.className]}`}>
      <div className={styles.container}>
        <div className={styles.labelContainer}>
          <Link className={styles.label_link}
            href={'/services'}>
            Услуги
          </Link>
          <p className={styles.label}>
            <span className={styles.label_span}>|</span>
            {pageData.label}
          </p>
        </div>

        <div className={styles.titleContainer}>
          <h1 className={styles.h1}>
            {pageData.title}
          </h1>
          {pageData.subtitle &&
            <p className={styles.subtitle}>
              {pageData.subtitle}
            </p>
          }
        </div>
      </div>
    </section>
  );
};

export { TitleBlockTemplate };
