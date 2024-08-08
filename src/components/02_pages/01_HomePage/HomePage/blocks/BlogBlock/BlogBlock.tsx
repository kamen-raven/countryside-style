'use client';

import React, { useState } from 'react';


import { BlogBlockProps } from './BlogBlock.props';
import styles from './BlogBlock.module.scss';

import BackgroundPattern from '~svg/background/backgroundBlog.svg';

import { BackgroundSVGPattern } from '~shared/index';
import { CardBlogComponent } from '~entities/index';
import getPostsForMainPage from '~helpers/blog/getPostsForMainPage';


const BlogBlock: React.FC<BlogBlockProps> = ({ path, blogPostsData }) => {
  // фильтруем посты для главной страницы
  const blogPosts = getPostsForMainPage(blogPostsData.results);
  console.log(blogPosts.length);


  const [currentPost, setCurrentPost] = useState(0);


  const handleNextPost = () => { /* ArrowNext */
        if (currentPost < blogPosts.length - 1) {
          setCurrentPost(currentPost + 1);
        } else {
          setCurrentPost(0);
        }
    console.log('click Next!');
  };

  const handlePrevPost = () => { /* ArrowPreviously */
        if (currentPost > 0) {
          setCurrentPost(currentPost - 1);
        } else {
          setCurrentPost(blogPosts.length - 1);
        }
    console.log('click Prev!');
  };



  return (
    <section className={styles.wrapper}>
      <BackgroundSVGPattern positionX='right'>
        <BackgroundPattern />
      </BackgroundSVGPattern>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Блог
        </h2>

        <CardBlogComponent path={path} blogCardItem={blogPosts[currentPost]} nextBtn={handleNextPost} prevBtn={handlePrevPost} />

        {/*         {blogPosts.map((item) => {
          return (
            <CardBlogComponent key={item.uuid} path={path} blogCardItem={item} nextBtn={handleNextPost} prevBtn={handlePrevPost}/>
          );
        })} */}

      </div>
    </section>
  );
};

export { BlogBlock };
