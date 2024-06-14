'use client';

import React from 'react';
import styles from './BlogPathElement.module.scss';

import { PathLinkComponent } from '~shared/index.ts';
import { usePathname } from 'next/navigation';
import useBlogArticleTitleStore from '~store/blogStore/useBlogArticleTitleStore.ts';


const BlogPathElement: React.FC = () => {
  const pathname = usePathname().split('/');

  const blogArticleTitle = useBlogArticleTitleStore((state) => state.blogArticleTitle);



  return (
    <>
      {pathname.length < 3 ?
        null
        :
        <div className={styles.pathContainer}>
          <PathLinkComponent dataInfo={blogArticleTitle} />
        </div>
      }
    </>
  );
};

export { BlogPathElement };
