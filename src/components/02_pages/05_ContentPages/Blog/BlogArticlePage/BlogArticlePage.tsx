import React from 'react';
import styles from './BlogArticlePage.module.scss';
import { BlogArticlePageInterface } from './BlogArticlePage.interface.ts';
import { CardBlogComponent } from '~entities/index.ts';
import { BlogTextBlock } from './blocks/index.ts';
import { ResetSearchBlogStore, SetBlogArticleTitle } from './useClientHooks/index.ts';


const BlogArticlePage: React.FC<BlogArticlePageInterface> = ({ blogArticleItem }) => {





  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>

          <CardBlogComponent
            path={'blogCard'}
            blogCardItem={blogArticleItem} />

          <BlogTextBlock blogArticleItem={blogArticleItem} />
      </div>
      <SetBlogArticleTitle title={blogArticleItem.name} />
      <ResetSearchBlogStore/>
    </section>
  );
};

export { BlogArticlePage };
