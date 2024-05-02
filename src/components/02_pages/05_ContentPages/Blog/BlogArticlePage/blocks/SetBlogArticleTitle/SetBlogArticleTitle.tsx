'use client';

import React from 'react';
import { SetBlogArticleTitleInterface } from './SetBlogArticleTitle.interface.ts';
import useBlogArticleTitleStore from '~store/blogStore/useBlogArticleTitleStore.ts';


const SetBlogArticleTitle: React.FC<SetBlogArticleTitleInterface> = ({ title }) => {
  const getBlogArticleTitle = useBlogArticleTitleStore((state) => state.currentTitle.setBlogArticleTitle);

  getBlogArticleTitle(title);

  return null;
};

export { SetBlogArticleTitle };
