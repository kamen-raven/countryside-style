import React from 'react';
import styles from './BlogPage.module.scss';
import { BlogPageInterface } from './BlogPage.interface.ts';
import { QuestionFormBlock } from '~common/index.ts';
import { BlogCardsLayoutBlock, BlogTitleBlock } from './blocks/index.ts';
import gettingUniqueTagName from '~helpers/gettingUniqueTagName.ts';


const BlogPage: React.FC<BlogPageInterface> = ({ blogPostsData }) => {

  const uniqueTags = gettingUniqueTagName(blogPostsData.results);  // создаем массив уникальных тэгов


  return (
    <main className={styles.mainContainer}>
      <BlogTitleBlock tagsList={uniqueTags}/>
      <BlogCardsLayoutBlock blogPostsData={blogPostsData}/>
      <QuestionFormBlock contentType={'image'}
          direction={'formFirst'} />
    </main>
  );
};

export { BlogPage };
