'use client';

import React, { useEffect } from 'react';
import { useSearchBlogStore } from '~store/searchBlogStore/useSearchBlogStore';


const ResetSearchBlogStore: React.FC = () => {
  const { actions: { resetSearchBlogStore } } = useSearchBlogStore();

  useEffect(() => {
    resetSearchBlogStore();

    //console.log('reset');

  }, [resetSearchBlogStore]);

  return null;
};

export { ResetSearchBlogStore };
