'use client';

import React from 'react';
import styles from './BlogPathElement.module.scss';
import { BlogPathElementInterface } from './BlogPathElement.interface.ts';
import { PathLinkComponent } from '~shared/index.ts';
import { usePathname } from 'next/navigation';
import useBlogArticleTitleStore from '~store/blogStore/useBlogArticleTitleStore.ts';


const BlogPathElement: React.FC<BlogPathElementInterface> = ({ }) => {
  const pathname = usePathname().split('/');

  const useBlogArticleTitle = useBlogArticleTitleStore((state) => state.blogArticleTitle);



  return (
    <>
      {pathname.length < 3 ?
        null
        :
        <div className={styles.pathContainer}>
          <PathLinkComponent dataInfo={useBlogArticleTitle} />
        </div>
      }
    </>
  );
};

export { BlogPathElement };
