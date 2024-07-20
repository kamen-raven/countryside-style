'use client';

import React, { useRef } from 'react';
import styles from './BlogPage.module.scss';

import { CardBlogComponent, CardItemPagination } from '~entities/index.ts';
import usePaginationCounter from '~hooks/usePaginationCounter.ts';
import { BlogPageInterface } from './BlogPage.interface.ts';
import { useSearchBlogStore } from '~store/searchBlogStore/useSearchBlogStore.ts';
import Loading from '../../../../../app/loading.tsx';
import searchBlogByKey from '~helpers/searchBlog/searchBlogByKey.ts';
import { BlogInterface } from '~interfaces/blog.interface.ts';

const BlogPage: React.FC<BlogPageInterface> = ({ /* blogPostsData */ }) => {
  // Инициализация сторов Зустанда с помощью деструктуризации
  const {
    searchBlogKey,
    searchBlogTag,
    dataForBlogSearch,
    initialBlogData,
  } = useSearchBlogStore();


  // функция поиска
  const filterData = (
    data: BlogInterface[],
    term: string,
  ) => {
    let filteredData = data;

    if (term) {
      filteredData = searchBlogByKey(filteredData, term);
    }

    return filteredData;
  };

  const blogData = filterData(dataForBlogSearch, searchBlogKey);






  // данные для пагинации
  const itemsPerPage: number = 12; //?
  const {
    totalPages,
    currentItems,
    currentPage,
    setCurrentPage
  } = usePaginationCounter(blogData, itemsPerPage); // функция пагинации
  // реф для скролла вверх при пагинации
  const parentRef = useRef<HTMLDivElement>(null);



  // RETURN -->
  if (!initialBlogData.length) {
    return <Loading />;
  } else {
    return (
      <section className={styles.wrapper}>
        <div ref={parentRef} className={styles.container}>
          <>
            {blogData.length > 0 ?
              <>
                {currentItems.map((blogCard, index) => {
                  return (
                    <div key={index} className={styles.cardContainer}>
                      <CardBlogComponent
                        key={blogCard.uuid}
                        path={'blog'}
                        blogCardItem={blogCard} />
                    </div>
                  );
                })}
              </>
              :
              <p className={styles.errorMessage}>
                По вашему запросу ничего не&nbsp;найдено
              </p>
            }
          </>

          {blogData.length > itemsPerPage ?
            <CardItemPagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
              parentRef={parentRef}
            />
            :
            null
          }

        </div>
      </section>
    );
  }
};

export { BlogPage };
