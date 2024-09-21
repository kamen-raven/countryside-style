import React from 'react';
import Image from 'next/image';
import styles from './BackgroundImage.module.scss';

import { BackgroundImageInterface } from './BackgroundImage.interface';


const BackgroundImage: React.FC<BackgroundImageInterface> = ({ image, alt, className, sizes='100vw'}) => {


  return (
    <Image
      className={`${styles.bgdImg} ${className}`}
      src={image}
      alt={alt}
      placeholder="blur"
      quality={100}
      sizes={sizes}
      fill
      /* priority */
    />
  );
};

export { BackgroundImage };
