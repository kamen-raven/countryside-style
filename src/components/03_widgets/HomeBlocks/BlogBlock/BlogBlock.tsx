import React from 'react';


import { BlogBlockProps } from './BlogBlock.props';
import styles from './BlogBlock.module.scss';

import BackgroundPattern from '~svg/background/backgroundBlog.svg';

import { BackgroundSVG } from '~/components/06_shared';
import { CardBlogComponent } from '~/components/05_entities';


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
