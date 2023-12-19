import React from 'react';


import { BlogBlockProps } from './BlogBlock.props';
import styles from './BlogBlock.module.scss';

import BackgroundPattern from '~svg/background/backgroundBlog.svg';

import { BackgroundSVG } from '~shared/index';
import { CardBlogComponent } from '~entities/index';


const BlogBlock: React.FC<BlogBlockProps> = ({ path }) => {


  return (
    <section className={styles.wrapper}>
      <BackgroundSVG positionX='right'>
        <BackgroundPattern />
      </BackgroundSVG>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Блог
        </h2>
        <CardBlogComponent path={path}/>

      </div>
    </section>
  );
};

export { BlogBlock };
