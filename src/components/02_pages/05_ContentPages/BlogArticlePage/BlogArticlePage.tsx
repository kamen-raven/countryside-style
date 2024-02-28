import React from 'react';
import styles from './BlogArticlePage.module.scss';
import { BlogArticlePageInterface } from './BlogArticlePage.interface.ts';
import { BlogTitleBlock } from '../BlogPage/blocks/index.ts';


const BlogArticlePage: React.FC<BlogArticlePageInterface> = ({ blogArticleItem }) => {
  return (
    <main className={styles.mainContainer}>

    </main>
  );
};

export { BlogArticlePage };
