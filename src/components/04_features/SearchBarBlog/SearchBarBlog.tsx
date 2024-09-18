'use client';

import React, { useEffect } from 'react';
import { SearchBarBlogInterface } from './SearchBarBlog.interface';
import { useSearchBlogStore } from '~store/searchBlogStore/useSearchBlogStore';

import { TagsListElement, SimpleSearchInput } from './elements';


const SearchBarBlog: React.FC<SearchBarBlogInterface> = ({ blogPostsData }) => {
  // Инициализация сторов Зустанда с помощью деструктуризации
  const {
    searchBlogKey,
    initialBlogData,
    actions: {
      setSearchBlogKey,
      setDataForBlogSearch,
      setInitialBlogData
    },
  } = useSearchBlogStore();

  // если это у нас первая загрузка, то мы загружаем данные БЛОГА в первоначальный стейт
  useEffect(() => {
    //searchActions.setDataForBlogSearch(blogPostsData);
    if (initialBlogData.length === 0) {
      //searchActions.fetchDataForBlogSearch();
      setInitialBlogData(blogPostsData);
      setDataForBlogSearch(blogPostsData);
      //console.log('set initial');
    }
    //? Добавьте зависимости, чтобы эффект выполнялся при изменении данных
  }, [blogPostsData, initialBlogData.length]);


  if (!initialBlogData.length) {
    return null;
  } else {
    return (
      <>

        <TagsListElement blogPostsData={initialBlogData} />

        <SimpleSearchInput
          searchBlogKey={searchBlogKey}
          setSearchBlogKey={setSearchBlogKey}
        />
      </>
    );
  }
};

export { SearchBarBlog };
