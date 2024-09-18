'use client';
import React from 'react';
import styles from './TagsListElement.module.scss';
import { TagsListElementInterface } from './TagsListElement.interface.ts';
import getUniqueTagName from '~helpers/blog/getUniqueTagName.ts';
import { useSearchBlogStore } from '~store/searchBlogStore/useSearchBlogStore.ts';
import { usePathname, useRouter } from 'next/navigation';


const TagsListElement: React.FC<TagsListElementInterface> = ({ blogPostsData }) => {
  const router = useRouter();
  const pathname = usePathname().split('/');
  const uniqueTagsList = getUniqueTagName(blogPostsData);  // создаем массив уникальных тэгов

  const {
    searchBlogTags,
    actions: {
      addSearchBlogTag,
      removeSearchBlogTag
    },
  } = useSearchBlogStore();


  const handleTagClick = (tag: string) => {
    if (searchBlogTags.includes(tag)) {
      removeSearchBlogTag(tag);
    } else {
      addSearchBlogTag(tag);
    }

    if (pathname.length > 2) {
      router.push('/blog');
      //console.log('push!');
    }
  };


  return (
    <div className={styles.container}>

      {uniqueTagsList.map((tag, index) => {
        return (
          <div
            key={index}
            className={`${styles.tagContainer} ${searchBlogTags.includes(tag) ? styles.selected : ''}`}
            onClick={() => handleTagClick(tag)}

          >
            {`#` + tag}
          </div>
        );
      })}

    </div>
  );
};

export { TagsListElement };
