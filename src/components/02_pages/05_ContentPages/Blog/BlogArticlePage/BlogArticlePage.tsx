import React from 'react';
import styles from './BlogArticlePage.module.scss';
import { BlogArticlePageInterface } from './BlogArticlePage.interface.ts';
import { CardBlogComponent } from '~entities/index.ts';
import useReactMarkdown from '~hooks/useReactMarkdown.tsx';


const BlogArticlePage: React.FC<BlogArticlePageInterface> = ({ blogArticleItem }) => {

  const textStyles = {

  };




  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <CardBlogComponent
          path={'blogCard'}
          blogCardItem={blogArticleItem} />

        <div className={styles.blogTextContainer}>
          <div className={styles.authorContainer}>
            <p className = {styles.author}>
              {blogArticleItem.author}
            </p>
          </div>
          <div className={styles.textContainer}>
            {useReactMarkdown(blogArticleItem.body, textStyles)}




          </div>

        </div>
      </div>
    </section>
  );
};

export { BlogArticlePage };
