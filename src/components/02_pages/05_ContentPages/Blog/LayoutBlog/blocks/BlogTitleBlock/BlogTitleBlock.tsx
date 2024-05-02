import React from 'react';
import styles from './BlogTitleBlock.module.scss';
import { BlogTitleBlockInterface } from './BlogTitleBlock.interface.ts';
import { BackgroundSVGPattern } from '~shared/index.ts';
import { BlogPathElement, TagsListElement } from './elements/index.ts';
import { SimpleSearchInput } from '~features/Forms/index.ts';


const BlogTitleBlock: React.FC<BlogTitleBlockInterface> = ({ tagsList }) => {
  return (
    <section className={styles.wrapper}>
      <BackgroundSVGPattern positionX='right' />
      <BlogPathElement/>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Блог
        </h1>

        <TagsListElement tagsList={tagsList} />
        <SimpleSearchInput innerText={'Поиск по ключевому слову'} place={'blog'} />
      </div>
    </section>
  );
};

export { BlogTitleBlock };
