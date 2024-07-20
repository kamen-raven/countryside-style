'use client';
import React from 'react';
import styles from './TagsListElement.module.scss';
import { TagsListElementInterface } from './TagsListElement.interface.ts';
import getUniqueTagName from '~helpers/blog/getUniqueTagName.ts';


const TagsListElement: React.FC<TagsListElementInterface> = ({ blogPostsData }) => {

  const uniqueTagsList = getUniqueTagName(blogPostsData);  // создаем массив уникальных тэгов







  return (
    <div className={styles.container}>

        {uniqueTagsList.map((tag, index) => {
          return (
            <div key={index} className={styles.tagContainer}>
              {`#` + tag}
            </div>
          );
        })}

    </div>
  );
};

export { TagsListElement };
