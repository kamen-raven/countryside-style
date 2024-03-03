'use client';
import React from 'react';
import styles from './TagsListElement.module.scss';
import { TagsListElementInterface } from './TagsListElement.interface.ts';


const TagsListElement: React.FC<TagsListElementInterface> = ({ tagsList }) => {


  return (
    <div className={styles.container}>

        {tagsList.map((tag, index) => {
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
