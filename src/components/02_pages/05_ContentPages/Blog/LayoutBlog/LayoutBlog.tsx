import React from 'react';
import styles from './LayoutBlog.module.scss';
import { LayoutBlogInterface } from './LayoutBlog.interface.ts';
import { QuestionFormBlock } from '~common/index.ts';
import { BlogTitleBlock } from './blocks/index.ts';

const LayoutBlog: React.FC<LayoutBlogInterface> = ({ blogPostsData, children }) => {


  return (
    <main className={styles.mainContainer}>
      <BlogTitleBlock blogPostsData={blogPostsData} />
      {children}
      <QuestionFormBlock contentType={'image'}
        direction={'formFirst'} />
    </main>
  );
};

export { LayoutBlog };
