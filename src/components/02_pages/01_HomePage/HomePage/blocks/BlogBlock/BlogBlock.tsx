import React from 'react';


import { BlogBlockProps } from './BlogBlock.props';
import styles from './BlogBlock.module.scss';

import BackgroundPattern from '~svg/background/backgroundBlog.svg';

import { BackgroundSVGPattern } from '~shared/index';
import { CardBlogComponent } from '~entities/index';


const BlogBlock: React.FC<BlogBlockProps> = ({ path, blogPostsData}) => {




  return (
    <section className={styles.wrapper}>
      <BackgroundSVGPattern positionX='right'>
        <BackgroundPattern />
      </BackgroundSVGPattern>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Блог
        </h2>
        {blogPostsData.results.map((item) => {
          return (
            <CardBlogComponent key={item.uuid} path={path} blogCardItem={item}/>
          );
        })}

      </div>
    </section>
  );
};

export { BlogBlock };
