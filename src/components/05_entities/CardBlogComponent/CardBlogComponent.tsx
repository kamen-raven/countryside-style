import React from 'react';
import Image from 'next/image';

import { CardBlogComponentProps } from './CardBlogComponent.props';
import styles from './CardBlogComponent.module.scss';
import { ArrowsButton, OpenPopupButton } from '~shared/index';

//import CommentIcon from '~svg/blog/commentsIcon.svg';
import Link from 'next/link';

const CardBlogComponent: React.FC<CardBlogComponentProps> = ({ path, blogCardItem, blogPostsData }) => {

  const setPage = {
    home: {
      innerBlock: styles.innerBlock_homePage,
      blogInfo: styles.blogInfo_none,
      button: styles.button_homePage,
      askQuestion: '',
      tagsContainer: ''
    },
    blog: {
      innerBlock: styles.innerBlock_blogPage,
      blogInfo: styles.blogInfo,
      button: styles.button_blogPage,
      askQuestion: '',
      tagsContainer: ''
    },
    blogCard: {
      innerBlock: styles.innerBlock_blogCard,
      blogInfo: styles.blogInfo,
      button: styles.button_blogCard,
      askQuestion: styles.askYourQuestion_blogPage,
      tagsContainer: styles.tagsContainer_blogPage
    }
  };



  return (
    <div key={blogCardItem.uuid} className={`${styles.innerBlock} ${setPage[path].innerBlock}`}>

      {/* изображение статьи */}
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src={blogCardItem.photos[0].image}
          alt={''}
          width={850}
          height={480}
          sizes={'(max-width: 1920px) 100%'}
        />

        <>
          <ArrowsButton
            position={'left'}
            className={`${styles.arrow} ${styles.arrow_left}`}
          />
          <ArrowsButton
            position={'right'}
            className={`${styles.arrow} ${styles.arrow_right}`}
          />
        </>

      </div>

      {/* заголовок статьи */}
      <h3 className={`${styles.blogTitle}`}>
        {blogCardItem.name}
      </h3>

      {/* контейнер с разделом количества комментариев и тэгами статьи */}
      {path !== 'home' ?
        <div className={`${styles.blogInfo} ${setPage[path].blogInfo}`}>
          {/*  //! тут реализовано отображение комментариев */}
          {/*        <div className={styles.commentsContainer}>
          <CommentIcon className={styles.commentsIcon} />
          <p className={styles.commentsCount}>
            {blogCardItem.author}
          </p>
        </div> */}
          <div className={`${styles.tagsContainer} ${setPage[path].tagsContainer}`}>
            {blogCardItem.tags?.map((tag) => {
              return (
                <div key={tag.uuid} className={styles.tag}>
                  #{tag.tag.name}
                </div>
              );
            })}

          </div>
        </div>
        :
        null
      }

      {/* кнопка ПОДРОБНЕЕ для перехода на страницу Блога */}
      {path !== 'blogCard' ?
        <Link className={`${styles.button} ${setPage[path].button}`} href={`/blog/${blogCardItem.uuid}`} >
          Подробнее
        </Link>
        :
        null
      }

      {/* контейнер со стрелками для ГЛАВНОЙ СТРАНИЦЫ */}
      {path === 'home' ?
        <div className={`${styles.blogArrows}`}>
          <ArrowsButton className={`${styles.arrow}`} position={'left'} />
          <ArrowsButton className={`${styles.arrow}`} position={'right'} />
        </div>
        : null
      }

      {/* компонент с кнопкой "ЗАДАТЬ СВОЙ ВОПРОС" */}
      <OpenPopupButton className={`${styles.askYourQuestion} ${setPage[path].askQuestion}`} type={'contactForm'}>
        <p className={styles.askYourQuestion__text}>
          Задать свой вопрос
        </p>
        <span className={styles.askYourQuestion__span}>
          ?
        </span>
      </OpenPopupButton>

    </div>
  );
};

export { CardBlogComponent };
