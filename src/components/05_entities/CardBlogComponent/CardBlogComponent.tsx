import React from 'react';
import Image from 'next/image';

import { CardBlogComponentProps } from './CardBlogComponent.props';
import styles from './CardBlogComponent.module.scss';
import { ArrowsButton, Button } from '~shared/index';

import CommentIcon from '~svg/blog/commentsIcon.svg';
import TemplatePic from '~img/blog/Template.jpg';
import Link from 'next/link';

const CardBlogComponent: React.FC<CardBlogComponentProps> = ({ path }) => {

  const page = {
    home: {
      innerBlock: styles.innerBlock_homePage,
      arrows: '',
      blogInfo: styles.blogInfo_none
    },
    blog: {
      innerBlock: styles.innerBlock_blogPage,
      arrows: styles.blogArrows_none,
      blogInfo: styles.blogInfo
    }
  };



  return (
    <div className={`${styles.innerBlock} ${page[path].innerBlock}`}>

      {/* изображение статьи */}
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src={TemplatePic}
          alt={''}
          width={100}
          height={100}
          /* fill={true} */
          sizes={'(max-width: 1920px) 100%'}
        />
      </div>

    {/* заголовок статьи */}
      <h3 className={`${styles.blogTitle}`}>
        Топ-3 варианта загородный домов, которые невозможно выгодно продать
      </h3>

    {/* контейнер с разделом количества комментариев и тэгами статьи */}
      <div className={`${styles.blogInfo} ${page[path].blogInfo}`}>
        <div className = {styles.commentsContainer}>
          <CommentIcon className = {styles.commentsIcon}/>
          <p className = {styles.commentsCount}>
            17 комментариев
          </p>
        </div>
        <div className = {styles.tagsContainer}>
          <div className = {styles.tag}>
            #Рынок
          </div>
          <div className = {styles.tag}>
            #Кейсы
          </div>
        </div>
      </div>

    {/* кнопка ПОДРОБНЕЕ для перехода на страницу Блога */}
      <Link className={styles.button} href={'/'} >
        Подробнее
      </Link>

    {/* контейнер со стрелками для ГЛАВНОЙ СТРАНИЦЫ */}
      <ArrowsButton className={`${styles.blogArrows} ${page[path].arrows}`} />

    {/* компонент с кнопкой "ЗАДАТЬ СВОЙ ВОПРОС" */}
      <Button className={styles.askYourQuestion} type={'contactForm'}>
        <p className={styles.askYourQuestion__text}>
          Задать свой вопрос
        </p>
        <span className={styles.askYourQuestion__span}>
          ?
        </span>
      </Button>

    </div>
  );
};

export { CardBlogComponent };
