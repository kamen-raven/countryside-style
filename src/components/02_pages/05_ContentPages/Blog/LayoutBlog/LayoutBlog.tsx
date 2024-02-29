import React from 'react';
import styles from './LayoutBlog.module.scss';
import { LayoutBlogInterface } from './LayoutBlog.interface.ts';
import { QuestionFormBlock } from '~common/index.ts';
import { BlogTitleBlock } from '../BlogPage/blocks/index.ts';
import gettingUniqueTagName from '~helpers/gettingUniqueTagName.ts';


const LayoutBlog: React.FC<LayoutBlogInterface> = ({ blogPostsData, children }) => {

  const uniqueTags = gettingUniqueTagName(blogPostsData.results);  // создаем массив уникальных тэгов

  return (
    <main className={styles.mainContainer}>
      <BlogTitleBlock tagsList={uniqueTags} />
      {children}
      <QuestionFormBlock contentType={'image'}
        direction={'formFirst'} />
    </main>
  );
};

export { LayoutBlog };
