import React from 'react';
import Image from 'next/image';
import styles from './BackgroundImage.module.scss';
import BackgroundImg from '~img/headBlock/mainBackground.jpg';


const BackgroundImage: React.FC = () => {
  return (
    <Image
      className={styles.bgdImg}
      src={BackgroundImg}
      alt="Агентство загородной недвижимости"
      placeholder="blur"
      quality={100}
      sizes="100vw"
      fill
      priority
    />
  );
};

export { BackgroundImage };
