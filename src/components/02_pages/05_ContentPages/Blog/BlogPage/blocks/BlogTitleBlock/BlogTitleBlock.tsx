import React from 'react';
import styles from './BlogTitleBlock.module.scss';
import { BlogTitleBlockInterface } from './BlogTitleBlock.interface.ts';
import { BackgroundSVGPattern } from '~shared/index.ts';
import { BlogSearchInputElement, TagsListElement } from './elements/index.ts';


const BlogTitleBlock: React.FC<BlogTitleBlockInterface> = ({ tagsList }) => {
  return (
    <section className={styles.wrapper}>
      <BackgroundSVGPattern positionX='right' />
      <div className={styles.container}>
        <h1 className={styles.title}>
          Блог
        </h1>

        <TagsListElement tagsList={tagsList} />
        <BlogSearchInputElement />
      </div>
    </section>
  );
};

export { BlogTitleBlock };
