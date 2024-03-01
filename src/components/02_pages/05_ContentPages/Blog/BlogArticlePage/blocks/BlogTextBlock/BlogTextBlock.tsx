import React from 'react';
import styles from './BlogTextBlock.module.scss';
import { BlogTextBlockInterface } from './BlogTextBlock.interface.ts';
import useReactMarkdown from '~hooks/useReactMarkdown.tsx';
import Image from 'next/image';


const BlogTextBlock: React.FC<BlogTextBlockInterface> = ({ blogArticleItem }) => {

  const textStyles = {
    p: styles.p,
    strong: styles.strong,
    em: styles.em,
    h2: styles.h2,
    h3: styles.h3,
    blockquote: styles.blockquote,
    del: styles.del,
    ul: styles.ul,
    ol: styles.ol,
    li: styles.li,
    a: styles.a,
  };




  return (
    <div className={styles.blogTextContainer}>
      <div className={styles.authorContainer}>
        <Image
          className={styles.authorImage}
          src={''}
          alt={''}
          width={100}
          height={100} />
        <p className={styles.authorName}>
          {blogArticleItem.author}
        </p>
      </div>

      <div className={styles.textContainer}>
        {useReactMarkdown(blogArticleItem.body, textStyles)}
      </div>

    </div>
  );
};

export { BlogTextBlock };
