import React from 'react';
import styles from './BlogTitleBlock.module.scss';
import { BlogTitleBlockInterface } from './BlogTitleBlock.interface.ts';
import { BackgroundSVGPattern } from '~shared/index.ts';
import { BlogPathElement } from './elements/index.ts';
import { SearchBarBlog } from '~features/index.ts';


const BlogTitleBlock: React.FC<BlogTitleBlockInterface> = ({ blogPostsData }) => {
  return (
    <section className={styles.wrapper}>
      <BackgroundSVGPattern positionX='right' />
      <BlogPathElement />
      <div className={styles.container}>
        <h1 className={styles.title}>
          Блог
        </h1>

        <SearchBarBlog blogPostsData={blogPostsData}  />

      </div>
    </section>
  );
};

export { BlogTitleBlock };
