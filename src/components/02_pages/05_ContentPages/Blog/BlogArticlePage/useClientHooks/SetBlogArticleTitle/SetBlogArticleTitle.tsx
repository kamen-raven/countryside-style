'use client';

import React, { useEffect } from 'react';
import { SetBlogArticleTitleInterface } from './SetBlogArticleTitle.interface.ts';
import useBlogArticleTitleStore from '~store/blogStore/useBlogArticleTitleStore.ts';


const SetBlogArticleTitle: React.FC<SetBlogArticleTitleInterface> = ({ title }) => {
  const setBlogArticleTitle = useBlogArticleTitleStore((state) => state.currentTitle.setBlogArticleTitle);

  useEffect(() => {
    setBlogArticleTitle(title);
  }, [title, setBlogArticleTitle]);

  return null;
};

export { SetBlogArticleTitle };
