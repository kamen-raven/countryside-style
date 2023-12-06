import React from 'react';
import { PressBlockProps } from './PressBlock.props';
import styles from './PressBlock.module.scss';

import { pressLogos } from '~img/PressBlock/index';
import Image from 'next/image';

const PressBlock: React.FC<PressBlockProps> = ({ pressItems }) => {





  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.inner__text}>
          <h2 className={styles.title}>
            Пресса
          </h2>
          <p className={styles.description}>
            Наши комментарии о рынке недвижимости в СМИ
          </p>
        </div>
        <div className={styles.inner__articles}>

          {pressItems && pressItems.map(m => (
            <a key={m._id}
              className={styles.link}
              href={m.link}>
              <Image
                className={styles.logo}
                src={m.logo}
                alt={m.journal}
              />
            </a>
          ))}

        </div>
      </div>
    </section>
  );
};

export { PressBlock };



{/*
          {pressItems && pressItems.map(m => {
            const matchingLogo = pressLogos.find(logo => logo.name === m.journal);

            if (matchingLogo) {
              return (
                <a key={m._id}
                  className = {styles.link}
                  href={m.link}>
                <Image
                  className = {styles.logo}
                  src={matchingLogo.logo}
                  alt={m.journal}
                />
              </a>
              );
            }
          })}





<a className = {styles.link} href={'/'}>
            <Image
              className = {styles.logo}
              src={Commersant}
              alt={'m.journal'}
            />
          </a>
          <a className = {styles.link} href={'/'}>
            <Image
              className = {styles.logo}
              src={CudNews}
              alt={'m.journal'}
            />
          </a>
          <a className = {styles.link} href={'/'}>
            <Image
              className = {styles.logo}
              src={Promdevelop}
              alt={'m.journal'}
            />
          </a> */}


